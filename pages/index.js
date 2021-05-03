import AppLayout from '../src/components/AppLayout'
import PostList from '../src/components/post/PostList'
import PostBar from '../src/components/PostBar'
import { signinSuccessAction, getAccessTokenAction } from '../reducers/user'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Signin from './user/signin'

const Home = () => {
  const { googleLoading, loginLoading, isLoggedIn, accessToken } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAccessTokenAction())
  }, [googleLoading, loginLoading])

  useEffect(() => {
    if (accessToken) {
      dispatch(signinSuccessAction(accessToken))
    }
  }, [accessToken])

  return (
    <>
      {!isLoggedIn
        ? <Signin />
        : (
          <AppLayout filter>
            <PostBar />
            <PostList />
          </AppLayout>
          )}
    </>
  )
}

export default Home
