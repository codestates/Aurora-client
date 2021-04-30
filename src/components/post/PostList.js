import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Post from './Post'

const PostList = () => {
  const posts = useSelector(state => state.post.Posts)
  return (<Wrapper>{posts.map(item => <Post key={item.id} data={item} />)}</Wrapper>)
}

const Wrapper = styled.div`
  width : 100%;
  height: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  -ms-overflow-style:none;
  &::-webkit-scrollbar{ 
    display:none;
  }

`

export default PostList
