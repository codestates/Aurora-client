import PropTypes from 'prop-types'
import { Form, Input, Button } from 'antd'
import { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useInput from '../../../hooks/useInput'
import { addComment } from '../../../reducers/post'

const CommentForm = ({ post }) => {
  const dispatch = useDispatch()
  const { addCommentDone } = useSelector((state) => state.post)
  const { id, username } = useSelector((state) => state.user)
  const [commentText, onChangeCommentText, setCommentText] = useInput('')

  useEffect(() => {
    if (addCommentDone) {
      setCommentText('')
    }
  }, [addCommentDone])

  const onSubmitComment = useCallback(() => {
    const data = {
      content: commentText,
      user: {
        id,
        username
      },
      postId: post.id
    }
    dispatch(addComment(data))
  }, [commentText, id])

  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item style={{ position: 'relative', margin: 0 }}>
        <Input.TextArea rows={4} value={commentText} onChange={onChangeCommentText} />
        <Button
          style={{ position: 'absolute', right: 0, bottom: -40, zIndex: 1 }}
          type='primary'
          htmlType='submit'
        >댓글 작성
        </Button>
      </Form.Item>
    </Form>
  )
}

CommentForm.propTypes = {
  post: PropTypes.object.isRequired
}

export default CommentForm
