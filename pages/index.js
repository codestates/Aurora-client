import AppLayout from '../src/components/AppLayout'
import PostList from '../src/components/post/PostList'
import PostBar from '../src/components/PostBar'

import { useSelector } from 'react-redux'
import Signin from './user/signin'

const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.user)
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
