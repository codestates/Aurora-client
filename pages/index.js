import AppLayout from '../src/components/AppLayout'
import Card from '../src/components/Card'
import PostBar from '../src/components/PostBar'

const Home = () => {
  return (
    <AppLayout filter>
      <PostBar />
      <Card />
    </AppLayout>
  )
}

export default Home
