import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled, { keyframes } from 'styled-components'

import AppLayout from '../components/AppLayout'
import PostRegisterBar from '../components/home/postRegister/PostRegisterBar'
import PostCard from '../components/home/postCard/PostCard'
import Signin from './user/signin'
import { loadPost } from '../reducers/post'
import { signinSuccessAction, getAccessTokenAction } from '../reducers/user'

const Home = () => {
  const dispatch = useDispatch()

  const { googleLoading, loginLoading, isLoggedIn, accessToken } = useSelector((state) => state.user)
  const { Posts, loadPostsDone, filterWeather } = useSelector(state => state.post)

  console.log('logged in? ', isLoggedIn)

  useEffect(async () => {
    await dispatch(getAccessTokenAction())
    if (accessToken) {
      dispatch(signinSuccessAction(accessToken))
    }
  }, [googleLoading, loginLoading, accessToken])

  let filterPosts = []

  if (filterWeather.length > 0) {
    filterPosts = Posts.filter((ele) => (filterWeather.includes(ele.mood)))
  }
  console.log('HOME Posts : ', Posts)
  useEffect(() => {
    // dispatch(loadPost())
  }, [])

  return (
    <>
      {!isLoggedIn
        ? (
          <>
            {accessToken
              ? <Wrapper><Loading /></Wrapper>
              : <Signin />}
          </>
          )
        : (
          <AppLayout filter>
            <PostRegisterBar />
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
          )}
    </>
  )
}

const Wrapper = styled.div`
  height: 50rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Loading = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`

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
