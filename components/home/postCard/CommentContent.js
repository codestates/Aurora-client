import { Button, Popover } from 'antd'
import { EllipsisOutlined } from '@ant-design/icons'
import { useState, useCallback } from 'react'
import TextArea from 'antd/lib/input/TextArea'
import { useDispatch, useSelector } from 'react-redux'

import { removeComment } from '../../../reducers/post'

const CommentContent = ({ item, postId }) => {
  const dispatch = useDispatch()
  const { accessToken } = useSelector(state => state.user)
  // 댓글 수정
  const [editMode, setEditMode] = useState(false)
  const onClickUpdate = useCallback(() => {
    setEditMode(true)
  }, [])
  const onCancelUpdate = useCallback(() => {
    setEditMode(false)
  }, [])
  const onChangeComment = useCallback((editText) => {
    console.log('onChangeComment')
  }, [item])

  const [editText, setEditText] = useState(item.content)
  const onChangeText = useCallback((e) => {
    setEditText(e.target.value)
  })

  // 댓글 삭제
  const onRemoveComment = () => {
    dispatch(removeComment(postId, item._id, accessToken))
  }

  return (
    <div>
      {editMode
        ? (
          <>
            <TextArea value={editText} onChange={onChangeText} />
            <Button.Group>
              <Button onClick={() => onChangeComment(editText)}>수정</Button>
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
                  <Button type='danger' onClick={onRemoveComment}>삭제</Button>
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

export default CommentContent
