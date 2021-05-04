import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

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

  useEffect(() => {
    dispatch(getAccessTokenAction())
  }, [googleLoading, loginLoading])

  console.log('logged in? ', isLoggedIn)

  useEffect(() => {
    if (accessToken) {
      dispatch(signinSuccessAction(accessToken))
    }
  }, [accessToken])

  let filterPosts = []

  if (filterWeather.length > 0) {
    filterPosts = Posts.filter((ele) => (filterWeather.includes(ele.mood)))
  }

  console.log('HOME Posts :', Posts)

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(loadPost(accessToken))
    }
  }, [isLoggedIn])

  return (
    <>
      {!isLoggedIn
        ? <Signin />
        : (
          <AppLayout filter>
            <PostRegisterBar />
            <PostCardList>
              {loadPostsDone &&
                (
                  filterWeather.length > 0
                    ? (
                        filterPosts.map(post => <PostCard key={post.id} post={post} />)
                      )
                    : (
                        Posts.map(post => <PostCard key={post.id} post={post} />)
                      )
                )}
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
