import Head from 'next/head'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import AppLayout from '../components/AppLayout'
import Signin from './user/signin'
import Loading from '../components/Loading'
import UserProfile from '../components/userProfile/UserProfile'
import PostCard from '../components/home/postCard/PostCard'
import { signinSuccessAction, getAccessTokenAction, signoutAction } from '../reducers/user'

const Profile = () => {
  const dispatch = useDispatch()

  const { isLoggedIn, googleLoading, loginLoading, accessToken, me } = useSelector((state) => state.user)
  const { Posts, loadPostsDone, filterWeather } = useSelector(state => state.post)

  useEffect(async () => {
    await dispatch(getAccessTokenAction())
    if (accessToken) {
      dispatch(signinSuccessAction(accessToken))
    } else {
      dispatch(signoutAction(accessToken))
    }
  }, [googleLoading, loginLoading, accessToken])

  let filterPosts = []

  if (filterWeather.length > 0) {
    filterPosts = Posts.filter((ele) => (filterWeather.includes(ele.mood)))
  }

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
            <AppLayout>
              <UserProfile />
              <PostCardList>
                {/* {loadPostsDone && */}
                {
                (
                  filterWeather.length > 0
                    ? (
                        filterPosts.map(post => <PostCard key={post.id} post={post} />)
                      )
                    : (
                        Posts.map(post => <PostCard key={post.id} post={post} />)
                      )
                )
              }
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
