import AppLayout from '../src/components/AppLayout'
import PostList from '../src/components/post/PostList'
import PostBar from '../src/components/PostBar'

const Home = () => {
  return (
    <AppLayout filter>
      <PostBar />
      <PostList />
    </AppLayout>
  )
}

export default Home
