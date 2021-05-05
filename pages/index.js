import { useCallback, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import Loading from '../components/Loading'
import AppLayout from '../components/AppLayout'
import PostRegisterBar from '../components/home/postRegister/PostRegisterBar'
import PostCard from '../components/home/postCard/PostCard'
import Signin from './user/signin'
import { firstLoadAllPost, moreLoadAllPost, CHANGE_TIME, loadAllStatistics } from '../reducers/post'
import { signinSuccessAction, getAccessTokenAction } from '../reducers/user'

const Home = () => {
  const dispatch = useDispatch()
  const { Time, Posts, firstLoadAllPostDone, filterWeather, totalPosts } = useSelector(state => state.post)
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
    }
  }, [isLoggedIn])

  const [page, setPage] = useState(2)

  const onClickMore = useCallback(() => {
    dispatch(moreLoadAllPost(page, Time, accessToken))
    setPage((prev) => prev + 1)
  })

  useEffect(() => {
    console.log('HOME : loadAllStatistics')
    dispatch(loadAllStatistics())
  }, [])

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
              {totalPosts > Posts.length && <button onClick={onClickMore}>더보기</button>}
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

export default Home
