import moment from 'moment'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button, Card, Popover, List, Comment } from 'antd'
import { HeartTwoTone, HeartOutlined, MessageOutlined, EllipsisOutlined } from '@ant-design/icons'
import { useCallback, useState, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import CommentContent from './CommentContent'
import CommentForm from './CommentForm'
import PostCardContent from './PostCardContent'
import PostImages from './PostImages'
import { Theme, Icon } from '../../Theme'
import { removePost, updatePost, unlikePost, likePost } from '../../../actions/post'

const PostCard = ({ post }) => {
  const dispatch = useDispatch()
  const { likePosts, removePostLoading } = useSelector((state) => state.post)
  const { me, accessToken } = useSelector(state => state.user)

  const [editMode, setEditMode] = useState(false)

  // 포스트 수정
  const onClickUpdate = useCallback(() => {
    setEditMode(true)
  }, [])
  const onCancelUpdate = useCallback(() => {
    setEditMode(false)
  }, [])
  const onChangePost = useCallback((editText) => () => {
    const data = new FormData()
    data.append('content', editText)
    dispatch(updatePost(post._id, data, accessToken))
  }, [post])

  // 포스트 삭제
  const onRemovePost = useCallback(() => {
    dispatch(removePost(post._id, accessToken))
  }, [post])

  // 좋아요 기능
  const onLike = useCallback(() => {
    dispatch(likePost(post._id, accessToken))
  }, [])
  const onUnlike = useCallback(() => {
    dispatch(unlikePost(post._id, accessToken))
  }, [])

  // 댓글 기능
  const [commentFormOpened, setCommentFormOpened] = useState(false)
  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev)
  }, [])

  const minutesGap = Math.floor(moment.duration(moment().diff(post.updatedAt)).asMinutes())
  let timeMsg = ''
  switch (true) {
    // ~ 1 min
    case minutesGap < 1:
      timeMsg = 'Now'
      break
    // ~ 1 hour
    case minutesGap < 1 * 60:
      timeMsg = `${minutesGap} ${minutesGap === 1 ? 'min' : 'mins'} ago`
      break
    // ~ 1 day
    case minutesGap < 1 * 60 * 24: {
      const hour = Math.trunc(minutesGap / 60)
      timeMsg = `${hour} ${hour === 1 ? 'hour' : 'hours'} ago`
      break
    }

    // ~ 2 day (yesterday)
    case minutesGap < 1 * 60 * 24 * 2:
      timeMsg = '어제'
      break
    // ~ 7 days
    case minutesGap < 1 * 60 * 24 * 7:
      {
        const day = Math.trunc(minutesGap / 60 / 24)
        timeMsg = `${day} ${day === 1 ? 'day' : 'days'} ago`
        break
      }
    // ex) 2021/1/20
    default: {
      const createdDate = new Date(twitt.createdAt)
      const year = createdDate.getFullYear()
      const month = createdDate.getMonth()
      const days = createdDate.getDate()
      timeMsg = `${year} /${month + 1}/${days}`
      break
    }
  }

  const commentStyle = useMemo(() => ({ padding: '0 10px' }), [])
  const liked = likePosts.find((v) => v === post._id)
  return (
    <Wrapper ThemeColor={Theme[post.mood]}>
      <Header>
        <Auth>
          {post.postedBy.avatar[0]
            ? (
              <img
                src={`data:image/png;base64,${post.postedBy.avatar[0].data}`} alt='avatar'
              />
            )
            : (
              <img
                src='/images/profile-thumbnail.jpg' alt='avatar'
              />
            )}
          <div>
            <span>{post.postedBy.username}</span>
            <span>{timeMsg}</span>
          </div>
        </Auth>
        {Icon[post.mood]}
      </Header>
      <Card
        cover={<PostImages images={post.images} />}
        actions={[
          liked
            ? <HeartTwoTone twoToneColor='#eb2f96' key='heart' onClick={onUnlike} />
            : <HeartOutlined key='heart' onClick={onLike} />,
          <MessageOutlined key='comment' onClick={onToggleComment} />,
          post.postedBy._id === me._id && (
            <Popover
              key='more' content={(
                <Button.Group>
                  <Button onClick={onClickUpdate}>수정</Button>
                  <Button type='danger' loading={removePostLoading} onClick={onRemovePost}>삭제</Button>
                </Button.Group>
              )}
            >
              <EllipsisOutlined />
            </Popover>
          )
        ]}
      >
        {editMode
          ? (
            <Card.Meta
              description={<PostCardContent editMode={editMode} postData={post.content} onChangePost={onChangePost} onCancelUpdate={onCancelUpdate} />}
            />
          )
          : (
            <Card.Meta
              description={<PostCardContent postData={post.content} />}
            />
          )}
      </Card>
      {commentFormOpened && (
        <>
          <CommentForm post={post} />
          <List
            header={`${post.comments.length} 개의 댓글`}
            itemLayout='horizontal'
            dataSource={post.comments}
            renderItem={item => (
              <li>
                <Comment
                  style={commentStyle}
                  author={item.commentedBy.username}
                  content={<CommentContent item={item} postId={post._id} />}
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
  box-shadow: 0 0 3px ${props => props.ThemeColor};
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

PostCard.propTypes = {
  post: PropTypes.object.isRequired
}

export default PostCard
