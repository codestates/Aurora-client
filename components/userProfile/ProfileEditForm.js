import styled from 'styled-components'
import { Button } from 'antd'
import { useCallback, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import useInput from '../../hooks/useInput'
import { updateUerProfileAction, withdrawal } from '../../actions/user'

const ProfileEditForm = ({ onClose }) => {
  const dispatch = useDispatch()
  const { updateError, accessToken } = useSelector(state => state.user)

  const [username, onChangeUsername] = useInput('')
  const [bio, onChangeBio] = useInput('')
  const [image, setImage] = useState('')

  const imageInput = useRef()
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click()
  }, [imageInput.current])

  const onChangeImage = useCallback((e) => {
    setImage(...e.target.files)
  }, [image])

  const removeImage = useCallback((name) => {
    setImage('')
  }, [image])

  const onClickWithdrawal = useCallback(() => {
    if (confirm('정말 탈퇴하시겠습니까??') === true) {
      dispatch(withdrawal(accessToken))
    }
  })

  const onSubmit = (e) => {
    e.preventDefault()

    const bodyFormData = new FormData()
    bodyFormData.append('username', username)
    bodyFormData.append('image', image)
    bodyFormData.append('bio', bio)

    dispatch(updateUerProfileAction(bodyFormData, accessToken))
    onClose()
  }

  return (
    <>
      {updateError
        ? <p>{updateError}</p>
        : ''}
      <EditForm onSubmit={onSubmit} encType='multipart/form-data'>
        <Input value={username} onChange={onChangeUsername} placeholder='새 유저네임' />
        <Input value={bio} onChange={onChangeBio} placeholder='새 소개글' />
        <UploadImage>
          <Text>프로필 이미지 업로드</Text>
          <input type='file' accept='image/*' hidden ref={imageInput} onChange={onChangeImage} />
          <ChooseButton onClick={onClickImageUpload}>파일 선택</ChooseButton>
          <div> {image
            ? (
              <ImageWrapper>
                <Image src={URL.createObjectURL(image)} />
                <CloseButton type='button' onClick={() => removeImage(image)}>지우기</CloseButton>
              </ImageWrapper>
              )
            : ''}
          </div>
        </UploadImage>
        <EditButton disabled={!username && !bio && !image} type='submit'>수정</EditButton>
        <WithdrawlButton type='button' onClick={onClickWithdrawal}>회원탈퇴</WithdrawlButton>
      </EditForm>
    </>
  )
}

const EditForm = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
`
const Input = styled.input`
  font-size: 1rem;
  padding : 1rem;
  width: 90%;
  border: none;
  margin-left: 1rem;
  resize: none;
  &:focus{
    outline:none;
  }
`
const Text = styled.div`
  margin: 0 0 1rem 1rem;
  font-size: 1.1rem;
`
const ImageWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: flex-end;

`
const ChooseButton = styled(Button)`
  margin-left: 1rem;
  width: 9rem;
`
const CloseButton = styled.button`
  border-style: none;
  border-radius: 0.2rem;
  background-color: #AAA;
  opacity: 0.6;
  color: #fff;
  font-size: 0.8rem;
  margin: 2rem 0 0 1rem;
  height: 2rem;
  cursor: pointer;
  `

const UploadImage = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 0.1rem solid #ddd;
  font-size: 1.2rem;
  color: #424242;
`

const Image = styled.img`
  max-width: 22rem;
  max-height: 14rem;
`

const EditButton = styled.button`
  margin: auto auto 0.5rem auto;
  border: none;
  height: 2.4rem;
  width: 90%;
  align-self: center;
  color: #fff;
  font-size: 1rem;
  background-color: #A18AFC;
  opacity: 0.7;
  border-radius: 0.3rem;
  cursor: pointer;
  &:hover{
    background-color: #A18AFC;
    opacity: 1;
    color: #fff;
  }
  &[disabled]{
  background-color: rgba(128,128,128,0.3);
  cursor: unset;
  }
`
const WithdrawlButton = styled.button`
  border: none;
  height: 2.4rem;
  width: 90%;
  align-self: center;
  background-color: rgba(128,128,128,0.3);
  color: #fff;
  font-size: 1rem;
  opacity: 0.7;
  border-radius: 0.3rem;
  cursor: pointer;
  &:hover{
    background-color: #EB8686;
    color: #fff;
  }
`

export default ProfileEditForm
