import styled from 'styled-components'
import PostImages from './PostImages'

const Post = ({ data }) => {
  const moodIcon = (mood) => {
    if (mood === 'sun') {
      return <i className='fas fa-sun' />
    }
  }

  return (
    <Wrapper>
      <Header>
        <Auth>
          <img src={data.User.avatar} />
          <div>
            <span>{data.User.username}</span>
            <span>22 minutes ago</span>
          </div>
        </Auth>
        {moodIcon(data.mood)}
      </Header>
      <Body>
        <span>{data.content}</span>
        <PostImages images={data.Images} />
      </Body>
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 80%;
  border-radius: 0.5rem;
  border : 1px solid gray;
  font-size: 0.9rem;
  margin-bottom : 1rem;
`

const Header = styled.div`
  height: 4rem;
  display : flex;
  align-items: center;
  padding : 1rem 1.5rem;
  box-sizing: border-box;
  justify-content: space-between;
  i{
    font-size: 1.5rem
  }
`

const Body = styled.div`
  padding : 1rem 1.5rem;
  box-sizing: border-box;
  span{
    display : block;
    margin-bottom: 1rem;
  }
  img {
    width: 20rem;
    height: 20rem;
  }
`

const Footer = styled.div`
  height: 3rem;
`

const Auth = styled.div`
  display : flex;
  color : gray;
  img{
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
  }
  div{
    margin-left : 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  span:first-child{
    color : black;
    font-weight: bold;
  }
`

export default Post
