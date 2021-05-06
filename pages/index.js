import { useCallback, useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import Loading from '../components/Loading'
import AppLayout from '../components/AppLayout'
import PostRegisterBar from '../components/home/postRegister/PostRegisterBar'
import PostCard from '../components/home/postCard/PostCard'
import Signin from './user/signin'
import { firstLoadAllPost, moreLoadAllPost, CHANGE_TIME, loadAllStatistics, loadLikePost } from '../actions/post'
import { signinSuccessAction, getAccessTokenAction } from '../actions/user'

const Home = () => {
  const dispatch = useDispatch()
  const { Time, Posts, firstLoadAllPostDone, filterWeather, totalPosts, moreLoadAllPostLoading } = useSelector(state => state.post)
  const { googleLoading, loginLoading, isLoggedIn, accessToken } = useSelector((state) => state.user)

  dispatch({
    type: CHANGE_TIME,
    payload: new Date().toISOString()
  })

  useEffect(() => {
    dispatch(getAccessTokenAction())
  }, [googleLoading, loginLoading])

  useEffect(() => {
    if (accessToken) {
      dispatch(signinSuccessAction(accessToken))
    }
  }, [accessToken])

  let filterPosts = []

  if (filterWeather.length > 0) {
    filterPosts = Posts.filter((ele) => (filterWeather.includes(ele.mood)))
  }

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(firstLoadAllPost(Time, accessToken))
      dispatch(loadLikePost(accessToken))
    }
  }, [isLoggedIn])

  const [page, setPage] = useState(2)

  const onClickMore = useCallback(() => {
    dispatch(moreLoadAllPost(page, Time, accessToken))
    setPage((prev) => prev + 1)
  })

  useEffect(() => {
    dispatch(loadAllStatistics())
  }, [])

  console.log(Posts.length)
  console.log(totalPosts)

  const moreBtn = useRef()
  const onScroll = useCallback((e) => {
    if ((e.target.scrollTop + e.target.clientHeight === e.target.scrollHeight) && (Posts.length < totalPosts)) {
      moreBtn.current.click()
    }
  }, [moreBtn.current])

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
            <PostCardList onScroll={onScroll}>
              {firstLoadAllPostDone &&
                (
                  filterWeather.length > 0
                    ? (
                      filterPosts.map(post => <PostCard key={post._id} post={post} />)
                    )
                    : (
                      Posts.map(post => <PostCard key={post._id} post={post} />)
                    )
                )}
              {moreLoadAllPostLoading && <LoadMoreMsg>더 많은 게시물 보기</LoadMoreMsg>}
              <button hidden onClick={onClickMore} ref={moreBtn} />
              {/* {totalPosts > Posts.length && <button onClick={onClickMore} ref={moreBtn}>더보기</button>} */}
              {/* {totalPosts > Posts.length && <LoadMoreBtn onClick={onClickMore}>더 많은 게시물 보기</LoadMoreBtn>} */}
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
  padding-top: 10px;
  overflow: auto;
  -ms-overflow-style:none;
  &::-webkit-scrollbar{ 
    display:none;
  }
`

const LoadMoreMsg = styled.div`
  border: none;
  background: none;
  margin: 1rem 0;
  font-size: 1rem;
  color: #424242;
`

export default Home
