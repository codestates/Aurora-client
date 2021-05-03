import { useCallback, useState, useRef } from 'react'
import styled from 'styled-components'
import useInput from '../../../hooks/useInput'

import { Button, Radio } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import axios from 'axios'
import { addPost } from '../../../reducers/post'

const PostRegisterForm = ({ onClose }) => {
  const dispatch = useDispatch()
  const { me } = useSelector(state => state.post)

  const [content, onChangeContent] = useInput('')
  const [images, setImages] = useState([])
  const [mood, setMood] = useState('')

  const onChangeMood = (e) => {
    setMood(e.target.value)
  }

  const imageInput = useRef()
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click()
  }, [imageInput.current])

  const onChangeImage = useCallback((e) => {
    console.log('upload img', e.target.files)
    setImages((prev) => [...prev, ...e.target.files])
  })

  const removeImage = (idx) => {
    console.log(images, idx)
    const newImages = images.splice(idx, 1)
    console.log('aft', newImages)
    // setImages(newImages)
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    const bodyFormData = new FormData()
    bodyFormData.append('content', content)
    images.forEach((v) => {
      bodyFormData.append('images[]', v)
    })
    bodyFormData.append('mood', mood)

    dispatch(addPost(bodyFormData))
    onClose()
  }

  return (
    <PostForm onSubmit={onSubmit} encType='multipart/form-data'>
      <textarea value={content} onChange={onChangeContent} maxLength={140} placeholder='어떤 신기한 일이 있었나요?' />
      <div>
        <input type='file' accept='image/png' multiple hidden ref={imageInput} onChange={onChangeImage} />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <div style={{ fontSize: '15px', height: '150px', padding: '10px' }}>
          {images.map((ele, idx) => (
            <div key={idx}>{ele.name}
              <button style={{ marginLeft: '5px', cursor: 'pointer' }} onClick={() => (removeImage(idx))}>X</button>
            </div>
          ))}
        </div>
      </div>
      <RadioWrapper onChange={onChangeMood}>
        <Radio value='sun'><i className='fas fa-sun' style={{ color: '#FF6A89' }} /></Radio>
        <Radio value='cloud'><i className='fas fa-cloud' style={{ color: '#a0a0a0' }} /></Radio>
        <Radio value='rain'><i className='fas fa-cloud-showers-heavy' style={{ color: '#1E96FF' }} /></Radio>
        <Radio value='moon'><i className='fas fa-moon' style={{ color: '#C71F8F' }} /></Radio>
      </RadioWrapper>
      <PostBtn disabled={content.length === 0 || mood.length === 0 || images.length === 0} type='submit' value='등록' />
    </PostForm>
  )
}

const RadioWrapper = styled(Radio.Group)`
  margin: 50px auto 0 auto;
`

const PostForm = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 2rem;
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

const PostBtn = styled.input`
    text-align: center;
    border-radius: 15px;
    width: 50%;
    padding: 5px 0;
    margin: auto auto 0 auto;
    background-color: #E065CB;
    font-size: 1rem;
    cursor: pointer;
    &[disabled]{
      background-color: rgba(128,128,128,0.3);
      cursor: unset;
    },
`

export default PostRegisterForm
