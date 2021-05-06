import PropTypes from 'prop-types'
import TextArea from 'antd/lib/input/TextArea'
import { Button, Popover } from 'antd'
import { EllipsisOutlined } from '@ant-design/icons'
import { useState, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import useInput from '../../../hooks/useInput'
import { updateComment, removeComment } from '../../../actions/post'

const CommentContent = ({ item, postId }) => {
  const dispatch = useDispatch()
  const { accessToken } = useSelector(state => state.user)
  const { updateCommentLoading, removeCommentLoading, updateCommentDone } = useSelector((state) => state.post)

  const [editMode, setEditMode] = useState(false)
  const [editText, changeEditText, setEditText] = useInput(item.content)

  useEffect(() => {
    if (editMode && updateCommentDone) {
      onCancelUpdate()
    }
  }, [updateCommentDone])

  // 수정 모드 설정
  const onClickUpdate = useCallback(() => {
    setEditMode(true)
  }, [])
  const onCancelUpdate = useCallback(() => {
    setEditText(item.content)
    setEditMode(false)
  }, [updateCommentDone])

  // 댓글 수정
  const onChangeComment = useCallback(() => {
    const data = {
      content: editText
    }
    dispatch(updateComment(postId, item._id, data, accessToken))
  }, [postId, item, editText])

  // 댓글 삭제
  const onRemoveComment = useCallback(() => {
    dispatch(removeComment(postId, item._id, accessToken))
  }, [postId, item])

  return (
    <div>
      {editMode
        ? (
          <>
            <TextArea placeholder={editText} value={editText} onChange={changeEditText} />
            <Button.Group>
              <Button loading={updateCommentLoading} disabled={editText.length === 0} onClick={() => onChangeComment(editText)}>수정</Button>
              <Button type='danger' onClick={onCancelUpdate}>취소</Button>
            </Button.Group>
          </>
        )
        : (
          <>
            <span> {item.content}</span>
            <Popover
              key='more' content={(
                <Button.Group>
                  <Button onClick={onClickUpdate}>수정</Button>
                  <Button loading={removeCommentLoading} type='danger' onClick={onRemoveComment}>삭제</Button>
                </Button.Group>
              )}
            >
              <EllipsisOutlined />
            </Popover>
          </>
        )}
    </div>
  )
}

CommentContent.prototype = {
  item: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired
}

export default CommentContent
