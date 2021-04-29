import { useEffect, useState } from 'react'
import styled from 'styled-components'

const SetPassword = ({ SetPasswordValue, signupSuccess }) => {
  const [passwordConfirm, setPasswordConfirm] = useState({
    password: '',
    passwordConfirm: ''
  })
  const [message, setMessage] = useState('')

  const handlePasswordConfirmValue = (key) => (e) => {
    setPasswordConfirm({ ...passwordConfirm, [key]: e.target.value })
    setTimeout(console.log('동기: ', passwordConfirm), 100)
  }

  useEffect(() => {
    console.log('비동기: ', passwordConfirm)
    if (!passwordConfirm.password || !passwordConfirm.passwordConfirm) {
      setMessage('비밀번호를 입력하세요')
    } else if (passwordConfirm.password !== passwordConfirm.passwordConfirm) {
      setMessage('비밀번호가 일치하지 않아요!')
    } else {
      setMessage('비밀번호가 일치합니다 :)')
    }
  }, [passwordConfirm])

  const handleClickSignup = () => {
    signupSuccess()
  }

  return (
    <>
      <InputContainer>
        <Input
          type='password'
          placeholder='비밀번호 설정'
          onChange={handlePasswordConfirmValue('password')} required
        />
        <div />
        <Input
          type='password'
          placeholder='비밀번호 확인'
          onChange={handlePasswordConfirmValue('passwordConfirm')} required
        />
        {message
          ? <PasswordConfirmMessage>{message}</PasswordConfirmMessage>
          : ''}
      </InputContainer>
      <NextButton onClick={handleClickSignup}>가입하기</NextButton>
    </>
  )
}

const InputContainer = styled.div`
  display : flex;
  flex-direction: column;
  height: 10rem;
  width: 24rem;
  /* margin-bottom: 1.4rem; */
`
const Input = styled.input`
  border-style: none;
  border-bottom: 1px solid #BCBCBC;
  height: 3.6rem;
  width: 23rem;
  font-size: .9rem;
`
const PasswordConfirmMessage = styled.div`
  padding-top: 0.2rem;
  color: #755BDB;
  font-size: 0.9rem;
`
const NextButton = styled.button`
  border-style: none;
  border-radius: 1.5rem;
  height: 2.4rem;
  width: 25rem;
  background-color: #A18AFC;
  opacity: 0.43;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #B29EFF;
    opacity: 1;
  }
`

export default SetPassword
