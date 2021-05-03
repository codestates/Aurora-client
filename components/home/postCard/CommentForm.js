import { Form, Input, Button } from 'antd'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import useInput from '../../../hooks/useInput'

const CommentForm = ({ post }) => {
  const id = useSelector(state => state.post.me?.id)
  const [commentText, onChangeCommentText] = useInput('')

  const onSubmitComment = useCallback(() => {
    console.log(post.id, commentText)
  }, [commentText])

  return (
    <Form onFinish={onSubmitComment}>
      <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4} />
      <Button type='primary' htmlType='submit'>댓글달기</Button>
    </Form>
  )
}

export default CommentForm
