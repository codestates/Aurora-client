import Head from 'next/head'
import { useEffect, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import AppLayout from '../components/AppLayout'
import Signin from './user/signin'
import Loading from '../components/Loading'
import UserProfile from '../components/userProfile/UserProfile'
import PostCard from '../components/home/postCard/PostCard'
import { firstLoadPost, moreLoadPost, loadStatistics } from '../actions/post'
import { signinSuccessAction, getAccessTokenAction } from '../actions/user'

const Profile = () => {
  const dispatch = useDispatch()

  const { isLoggedIn, googleLoading, loginLoading, accessToken } = useSelector((state) => state.user)
  const { Posts, firstLoadPostDone, filterWeather, totalPosts } = useSelector(state => state.post)
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
      dispatch(firstLoadPost(accessToken))
    }
  }, [isLoggedIn])

  const [page, setPage] = useState(2)

  const onClickMore = useCallback(() => {
    // dispatch(moreLoadPost(page, accessToken))
    dispatch(moreLoadPost(page, accessToken))
    setPage((prev) => prev + 1)
  })

  let filterPosts = []

  if (filterWeather.length > 0) {
    filterPosts = Posts.filter((ele) => (filterWeather.includes(ele.mood)))
  }

  useEffect(() => {
    console.log('PROFILE : loadStatistics')
    dispatch(loadStatistics(accessToken))
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
          <>
            <Head>
              <title>프로필 | Aurora</title>
            </Head>
            <AppLayout filter>
              <UserProfile />
              <PostCardList>
                {firstLoadPostDone &&
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
          </>
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

export default Profile
