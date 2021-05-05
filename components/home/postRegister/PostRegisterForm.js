import { useCallback, useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import useInput from '../../../hooks/useInput'
import PropTypes from 'prop-types'

import { Radio } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import { addPost } from '../../../reducers/post'

const PostRegisterForm = ({ onClose }) => {
  const dispatch = useDispatch()
  const { accessToken } = useSelector(state => state.user)
  const { addPostLoading, addPostDone } = useSelector((state) => state.post)

  const [content, onChangeContent] = useInput('')
  const [images, setImages] = useState([])
  const [mood, setMood] = useState('')

  useEffect(() => {
    if (content.length > 0 && addPostDone) {
      // onClose()
      window.location.replace('/')
    }
  }, [addPostDone])

  const onChangeMood = (e) => {
    setMood(e.target.value)
  }

  const imageInput = useRef()
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click()
  }, [imageInput.current])

  const onChangeImage = useCallback((e) => {
    setImages((prev) => [...prev, ...e.target.files])
  })

  const removeImage = useCallback((name) => {
    const newImages = images.filter((v) => v.name !== name)
    setImages(newImages)
  })

  const onSubmit = useCallback((e) => {
    e.preventDefault()

    const bodyFormData = new FormData()
    bodyFormData.append('content', content)
    images.forEach((v) => {
      bodyFormData.append('images[]', v)
    })
    bodyFormData.append('mood', mood)

    dispatch(addPost(bodyFormData, accessToken))
  }, [content, images, mood])

  return (
    <PostForm onSubmit={onSubmit} encType='multipart/form-data'>
      <textarea value={content} onChange={onChangeContent} maxLength={140} placeholder='어떤 신기한 일이 있었나요?' />
      <div>
        <input type='file' accept='image/*' multiple hidden ref={imageInput} onChange={onChangeImage} />
        <ImageButton onClick={onClickImageUpload}>이미지 업로드</ImageButton>
        <div style={{ fontSize: '15px', height: '150px', padding: '10px' }}>
          {images.map((ele) => (
            <div key={ele.name}>{ele.name}
              <button type='button' style={{ marginLeft: '5px', cursor: 'pointer' }} onClick={() => removeImage(ele.name)}>X</button>
            </div>
          ))}
        </div>
      </div>
      <RadioWrapper onChange={onChangeMood}>
        <Radio value='sun'><i className='fas fa-sun' style={{ color: '#ffbebe' }} /></Radio>
        <Radio value='cloud'><i className='fas fa-cloud' style={{ color: '#D4D4D4' }} /></Radio>
        <Radio value='rain'><i className='fas fa-cloud-showers-heavy' style={{ color: '#b6d8f8' }} /></Radio>
        <Radio value='moon'><i className='fas fa-moon' style={{ color: '#a18afc' }} /></Radio>
      </RadioWrapper>
      <Button type='submit' loading={addPostLoading} disabled={content.length === 0 || mood.length === 0 || images.length === 0}>등록</Button>
    </PostForm>
  )
}

const RadioWrapper = styled(Radio.Group)`
  margin: 50px auto 50px auto;
`

const PostForm = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  textarea{
    padding : 1rem;
    width: 100%;
    height: 10rem;
    border: none;
    resize: none;
    &:focus{
      outline:none;
    }
  }
  I{
    font-size: 2rem;
    margin: 0 2rem 0 0;
  }
`

const Button = styled.button`
  width: 90%;
  align-self: center;
  text-align: center;
  border: none;
  border-radius: 0.3rem;
  padding: 0.5rem 0;
  background-color: #A18AFC;
  opacity: 0.9;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  &[disabled]{
    background-color: rgba(128,128,128,0.3);
    cursor: unset;
  },
`
const ImageButton = styled.button`
  width: 10rem;
  border: none;
  cursor: pointer;
  color: #222;
  font-weight: 300;
  font-size: 1.1rem;
  border: 1px solid #ccc;
  border-radius: 0.2rem;
  background-color: #fff;
  &:hover {
    border: 1px solid #A18AFC;
    color: #A18AFC;
  }
`

PostRegisterForm.propTypes = {
  onClose: PropTypes.func.isRequired
}

export default PostRegisterForm
