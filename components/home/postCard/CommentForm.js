import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Form, Input, Button } from 'antd'
import { useEffect, useCallback, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import useInput from '../../../hooks/useInput'
import { addComment } from '../../../actions/post'

const CommentForm = ({ post }) => {
  const dispatch = useDispatch()
  const { addCommentDone, addCommentLoading } = useSelector((state) => state.post)
  const { accessToken } = useSelector(state => state.user)

  const [commentText, onChangeCommentText, setCommentText] = useInput('')

  useEffect(() => {
    if (addCommentDone) {
      setCommentText('')
    }
  }, [addCommentDone])

  const onSubmitComment = useCallback(() => {
    const data = {
      content: commentText
    }
    dispatch(addComment(post._id, data, accessToken))
  }, [commentText, post])

  return (
    <Form onFinish={onSubmitComment}>
      <FormItem>
        <Input.TextArea rows={4} value={commentText} onChange={onChangeCommentText} />
        <SubmitBtn
          type='primary'
          htmlType='submit'
          loading={addCommentLoading}
          disabled={commentText.length === 0}
        >댓글 작성
        </SubmitBtn>
      </FormItem>
    </Form>
  )
}

const FormItem = styled(Form.Item)`
  position: relative;
  margin: 0
`

const SubmitBtn = styled(Button)`
  position: absolute;
  right: 0;
  bottom: -40;
  z-index: 1;
`

CommentForm.propTypes = {
  post: PropTypes.object.isRequired
}

export default CommentForm
