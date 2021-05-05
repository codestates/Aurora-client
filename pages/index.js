import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import Loading from '../components/Loading'
import AppLayout from '../components/AppLayout'
import PostRegisterBar from '../components/home/postRegister/PostRegisterBar'
import PostCard from '../components/home/postCard/PostCard'
import Signin from './user/signin'
import { loadPost } from '../reducers/post'
import { signinSuccessAction, getAccessTokenAction } from '../reducers/user'

const Home = () => {
  const dispatch = useDispatch()

  const { googleLoading, loginLoading, isLoggedIn, accessToken } = useSelector((state) => state.user)
  const { Posts, loadPostsDone, loadPostsLoading, filterWeather } = useSelector(state => state.post)

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

  console.log('HOME Posts :', Posts)

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(loadPost(1, accessToken))
    }
  }, [isLoggedIn])

  const onScroll = (e) => {
    if (e.target.scrollTop + 701 === e.target.scrollHeight) {
      dispatch(loadPost(2, accessToken))
    }
  }

  // useEffect(() => {
  //   function onScroll () {
  //     if (window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight) {
  //       if (!loadPostsLoading) {
  //         dispatch(loadPost(2, accessToken))
  //       }
  //     }
  //   }
  //   window.addEventListener('scroll', onScroll)
  //   return () => {
  //     window.removeEventListener('scroll', onScroll)
  //   }
  // }, [loadPostsLoading])

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
              {loadPostsDone &&
                (
                  filterWeather.length > 0
                    ? (
                      filterPosts.map(post => <PostCard key={post._id} post={post} />)
                    )
                    : (
                      Posts.map(post => <PostCard key={post._id} post={post} />)
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
  // &::-webkit-scrollbar{ 
  //   display:none;
  // }
`

export default Home
