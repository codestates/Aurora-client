import { useCallback, useState, useRef } from 'react'
import styled from 'styled-components'
import useInput from '../../../hooks/useInput'

import { Button, Radio } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import { addPost } from '../../../reducers/post'

const PostRegisterForm = ({ onClose }) => {
  const dispatch = useDispatch()
  const { me } = useSelector(state => state.post)

  const [text, onChangeText] = useInput('')
  const [images, setImages] = useState([])
  const [weather, setWeather] = useState('')
  const onChangeWeather = (e) => {
    setWeather(e.target.value)
  }

  const imageInput = useRef()
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click()
  }, [imageInput.current])

  const onChangeImage = useCallback((e) => {
    const imageFormData = new FormData()
    imageFormData.append('image[]', e.target.files)
    setImages((prev) => [...prev, imageFormData])
  })

  const onSubmit = useCallback((e) => {
    e.preventDefault()
    console.log(images)
    const data = {
      me, text, images, weather
    }
    dispatch(addPost(data))
    onClose()
  }, [me, text, images, weather])

  return (
    <PostForm onSubmit={onSubmit} encType='multipart/form-data'>
      <textarea value={text} onChange={onChangeText} maxLength={140} placeholder='어떤 신기한 일이 있었나요?' />
      <div>
        <input type='file' multiple hidden ref={imageInput} onChange={onChangeImage} />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
      </div>
      <RadioWrapper onChange={onChangeWeather}>
        <Radio value='sun'><i className='fas fa-sun' style={{ color: '#FF6A89' }} /></Radio>
        <Radio value='cloud'><i className='fas fa-cloud' style={{ color: '#a0a0a0' }} /></Radio>
        <Radio value='rain'><i className='fas fa-cloud-showers-heavy' style={{ color: '#1E96FF' }} /></Radio>
        <Radio value='moon'><i className='fas fa-moon' style={{ color: '#C71F8F' }} /></Radio>
      </RadioWrapper>
      <PostBtn disabled={text.length === 0 || weather.length === 0} type='submit' value='등록' />
    </PostForm>
  )
}

const RadioWrapper = styled(Radio.Group)`
  margin: 0 auto;
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
