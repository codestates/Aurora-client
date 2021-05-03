import AppLayout from '../components/AppLayout'
import PostRegisterBar from '../components/home/postRegister/PostRegisterBar'
import PostCard from '../components/home/postCard/PostCard'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import { loadPost } from '../reducers/post'
import { useEffect } from 'react'

const Home = () => {
  const dispatch = useDispatch()
  // const { userInfo } = useSelector((state) => state.user)
  const { Posts, loadPostsDone, filterWeather } = useSelector(state => state.post)

  let filterPosts = []

  if (filterWeather.length > 0) {
    filterPosts = Posts.filter((ele) => (filterWeather.includes(ele.mood)))
  }

  useEffect(() => {
    // postlaod()
    dispatch(loadPost())
  }, [])

  return (
    <AppLayout filter>
      <PostRegisterBar />
      <PostCardList>
        {loadPostsDone &&
          (
            filterWeather.length > 0 ? (
              filterPosts.map(post => <PostCard key={post.id} post={post} />)
            ) : (
              Posts.map(post => <PostCard key={post.id} post={post} />)
            )
          )}
      </PostCardList>
    </AppLayout>
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
