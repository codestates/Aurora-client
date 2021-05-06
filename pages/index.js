import styled from 'styled-components'
import { useCallback, useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import AppLayout from '../components/AppLayout'
import Loading from '../components/Loading'
import PostCard from '../components/home/postCard/PostCard'
import PostRegisterBar from '../components/home/postRegister/PostRegisterBar'
import Signin from './user/signin'
import { firstLoadAllPost, moreLoadAllPost, CHANGE_TIME, loadAllStatistics, loadLikePost } from '../actions/post'
import { signinSuccessAction, getAccessTokenAction } from '../actions/user'

const Home = () => {
  const dispatch = useDispatch()
  const { Time, Posts, firstLoadAllPostDone, filterWeather, totalPosts, moreLoadAllPostLoading } = useSelector(state => state.post)
  const { googleLoading, loginLoading, isLoggedIn, accessToken } = useSelector((state) => state.user)

  const [page, setPage] = useState(2)

  let filterPosts = []
  if (filterWeather.length > 0) {
    filterPosts = Posts.filter((ele) => (filterWeather.includes(ele.mood)))
  }

  useEffect(() => {
    dispatch(getAccessTokenAction())
  }, [googleLoading, loginLoading])

  useEffect(() => {
    if (accessToken) {
      dispatch(signinSuccessAction(accessToken))
    }
  }, [accessToken])

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(firstLoadAllPost(Time, accessToken))
      dispatch(loadLikePost(accessToken))
    }
  }, [isLoggedIn])

  useEffect(() => {
    dispatch(loadAllStatistics())
    dispatch({
      type: CHANGE_TIME,
      payload: new Date().toISOString()
    })
  }, [])

  const onClickMore = useCallback(() => {
    dispatch(moreLoadAllPost(page, Time, accessToken))
    setPage((prev) => prev + 1)
  }, [page])

  // const moreBtn = useRef()
  // const onScroll = (e) => {
  //   console.log(e.target.scrollTop + e.target.clientHeight === e.target.scrollHeight)
  //   console.log(Posts.length, totalPosts)
  //   if ((e.target.scrollTop + e.target.clientHeight === e.target.scrollHeight) && (Posts.length < totalPosts)) {
  //     moreBtn.current.click()
  //   }
  // }

  return (
    <>
      {!isLoggedIn
        ? (
          <>
            {accessToken ? <Loading /> : <Signin />}
          </>
          )
        : (
          <AppLayout filter>
            <PostRegisterBar />
            <PostCardList>
              {firstLoadAllPostDone
                ? (
                    filterWeather.length > 0
                      ? (
                          filterPosts.map(post => <PostCard key={post._id} post={post} />)
                        )
                      : (
                          Posts.map(post => <PostCard key={post._id} post={post} />)
                        )
                  )
                : <Loading />}
              {/* {moreLoadAllPostLoading && <LoadMoreMsg>불러오는중...</LoadMoreMsg>} */}
              {/* <button hidden onClick={onClickMore} ref={moreBtn} /> */}
              {/* {totalPosts > Posts.length && <button onClick={onClickMore} ref={moreBtn}>더보기</button>} */}
              {totalPosts > Posts.length && <LoadMoreBtn onClick={onClickMore}>더 많은 게시물 보기</LoadMoreBtn>}
            </PostCardList>
          </AppLayout>
          )}
    </>
  )
}

const PostCardList = styled.div`
  width : 100%;
  height: 45rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0.625rem;
  overflow: auto;
  -ms-overflow-style:none;
  &::-webkit-scrollbar{ 
    display:none;
  }
`

const LoadMoreBtn = styled.button`
  border: none;
  background: none;
  margin: 1rem 0;
  font-size: 1rem;
  color: #424242;
  cursor: pointer;
  &:hover{
    color: #A18AFC;
    font-size: 1.1rem;
  }
  &:focus{
    outline: none;
  }
`

export default Home
