import PropTypes from 'prop-types'
import { useState, useCallback, useEffect } from 'react'
import { Button, Input } from 'antd'
import { useSelector } from 'react-redux'

const { TextArea } = Input
const PostCardContent = ({ postData, editMode, onChangePost, onCancelUpdate }) => {
  const { updatePostLoading, updatePostDone } = useSelector((state) => state.post)
  const [editText, setEditText] = useState(postData)

  useEffect(() => {
    if (editMode && updatePostDone) {
      onCancelUpdate()
    }
  }, [updatePostDone])

  const onChangeText = useCallback((e) => {
    setEditText(e.target.value)
  }, [])

  return (
    <div>
      {editMode
        ? (
          <>
            <TextArea placeholder={editText} value={editText} onChange={onChangeText} />
            <Button.Group>
              <Button loading={updatePostLoading} onClick={onChangePost(editText)}>수정</Button>
              <Button type='danger' onClick={onCancelUpdate}>취소</Button>
            </Button.Group>
          </>
        )
        : postData}
    </div>
  )
}

PostCardContent.propTypes = {
  postData: PropTypes.string.isRequired,
  editMode: PropTypes.bool,
  onChangePost: PropTypes.func,
  onCancelUpdate: PropTypes.func
}

PostCardContent.defaultProps = {
  editMode: false
}

export default PostCardContent
