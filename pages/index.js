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

  useEffect(() => {
    if (accessToken) {
      dispatch(signinSuccessAction(accessToken))
    }
  }, [accessToken])

  let filterPosts = []

  if (filterWeather.length > 0) {
    filterPosts = Posts.filter((ele) => (filterWeather.includes(ele.mood)))
  }
  console.log('HOME Posts : ', Posts)
  useEffect(() => {
    // postlaod()
    // dispatch(loadPost())
  }, [])

  return (
<<<<<<< HEAD
    <AppLayout filter>
      <PostRegisterBar />
      <PostCardList>
        {
          (
            filterWeather.length > 0 ? (
              filterPosts.map((post, idx) => <PostCard key={idx} post={post} />)
            ) : (
                Posts.map((post, idx) => <PostCard key={idx} post={post} />)
              )
          )
        }
      </PostCardList>
    </AppLayout>
=======
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
>>>>>>> 4fbf58ca43ba491049142cdb2e976be1184ee8c5
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
