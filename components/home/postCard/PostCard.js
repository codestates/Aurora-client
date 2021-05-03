import { Button, Card, Popover, List, Comment } from 'antd'
import { HeartTwoTone, HeartOutlined, MessageOutlined, EllipsisOutlined } from '@ant-design/icons'

import { useCallback, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import styled from 'styled-components'
import PostImages from './PostImages'
import Thema from '../../Thema'
import CommentForm from './CommentForm'
import { removePost } from '../../../reducers/post'

const PostCard = ({ post, onClick }) => {
  const dispatch = useDispatch()
  // 옵셔널체이닝 id or undefined
  const id = useSelector(state => state.post.me?.id)

  // 포스트 삭제
  const onRemovePost = useCallback(() => {
    dispatch(removePost(post.id))
  }, [])

  // 좋아요 기능
  const [liked, setLiked] = useState(false)
  const onToggleLike = useCallback(() => {
    setLiked((prev) => !prev)
  }, [])

  // 댓글 기능
  const [commentFormOpened, setCommentFormOpened] = useState(false)
  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev)
  }, [])

  return (
    <Wrapper ThemaColor={Thema[post.mood].color}>
      <Header>
        <Auth>
          <img src={post.User.avatar} />
          <div>
            <span>{post.User.username}</span>
            <span>22 minutes ago</span>
          </div>
        </Auth>
        {Thema[post.mood].icon}
      </Header>
      <Body>
        <span>{post.content}</span>
      </Body>
      <Footer>
        <Card
          cover={post.Images[0] && <PostImages images={post.Images} />}
          actions={[
            liked
              ? <HeartTwoTone twoToneColor='#eb2f96' key='heart' onClick={onToggleLike} />
              : <HeartOutlined key='heart' onClick={onToggleLike} />,
            <MessageOutlined key='comment' onClick={onToggleComment} />,

            post.User.id === id && (
              <Popover
                key='more' content={(
                  <Button.Group>
                    <Button>수정</Button>
                    <Button type='danger' onClick={onRemovePost}>삭제</Button>
                  </Button.Group>
                )}
              >
                <EllipsisOutlined />
              </Popover>
            )
          ]}
        />
      </Footer>
      {commentFormOpened && (
        <>
          <CommentForm post={post} />
          <List
            header={`${post.Comments.length} 개의 댓글`}
            itemLayout='horizontal'
            dataSource={post.Comments}
            renderItem={item => (
              <li>
                <Comment
                  author={item.User.username}
                  content={item.content}
                />
              </li>
            )}
          />
        </>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 80%;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  margin-bottom : 1rem;
  box-shadow: 0 0 3px ${props => props.ThemaColor};
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

export default PostCard
