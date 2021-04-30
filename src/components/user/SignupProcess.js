import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import axios from 'axios'

const SignupProcess = () => {
  const [userInfo, setuserInfo] = useState({
    email: '',
    username: '',
    password: '',
    passwordConfirm: '',
    errorMessage: ''
  })
  const [passwordConfirmMsg, setPasswordConfirmMsg] = useState('')
  // **** signup-success test용
  // const [signup, setSignup] = useState(true)
  const [signup, setSignup] = useState(false)

  const handleInputValue = (e) => {
    setuserInfo({ ...userInfo, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    console.log('비동기: ', userInfo.password, userInfo.passwordConfirm)
    if (!userInfo.password || !userInfo.passwordConfirm) {
      setPasswordConfirmMsg('')
    } else if (userInfo.password !== userInfo.passwordConfirm) {
      setPasswordConfirmMsg('비밀번호가 일치하지 않아요!')
    } else {
      setPasswordConfirmMsg('비밀번호가 일치합니다 :)')
    }
  }, [userInfo])

  const handleSignup = async () => {
    const { email, username, password } = userInfo
    console.log(email, username, password)
    console.log(userInfo)
    if (!email || !password || !username) {
      setuserInfo({
        errorMessage: '모든 항목을 채워주세요!'
      })
    } else {
      try {
        // const result =
        await axios.post('https://localhost:5000/signup', { email, username, password })
        setSignup(true)
      } catch (err) {
        console.log(err)
        setuserInfo({
          // *****error message test용
          errorMessage: '이미 가입된 아이디입니다'
          // errorMessage: result.message
        })
      }
    }
  }

  return (
    <>
      {signup
        ? <SuccessMessage>이메일 인증을 위한 메일이 전송되었습니다!<br />전송된 이메일을 통해 인증을 마무리해주세요 :)</SuccessMessage>
        : (
          <>
            <Link href='signin'><MoveToSigninPage>이미 회원이신가요?</MoveToSigninPage></Link>
            <InputContainer>
              <GreetingMessage>만나서 반가워요!</GreetingMessage>
              <Input
                name='email'
                type='text'
                placeholder='이메일'
                autoComplete='email'
                onChange={handleInputValue} required
              />
              <Input
                name='username'
                type='text'
                placeholder='유저네임'
                onChange={handleInputValue} required
              />
              <Input
                name='password'
                type='password'
                placeholder='비밀번호'
                onChange={handleInputValue} required
              />
              <Input
                name='passwordConfirm'
                type='password'
                placeholder='비밀번호 확인'
                onChange={handleInputValue} required
              />
              {passwordConfirmMsg
                ? <PasswordConfirmMessage>{passwordConfirmMsg}</PasswordConfirmMessage>
                : ''}
              {userInfo.errorMessage
                ? <ErrorMessage>{userInfo.errorMessage}</ErrorMessage>
                : ''}
            </InputContainer>
            <NextButton onClick={handleSignup}>가입하기</NextButton>
          </>
          )}
    </>

  )
}

const SuccessMessage = styled.div`
  margin-top: 5rem;
  line-height: 3rem;
  text-align: center;
  color: #555;
  font-weight: 500;
`
const MoveToSigninPage = styled.a`
  margin-bottom: 1.4rem;
  font-size: 0.9rem;
  color: #767676;
  text-decoration: underline;
  cursor: pointer;
`
const GreetingMessage = styled.div`
  margin-bottom: 1rem;
  color: #464646;
  font-weight: 500;
`
const InputContainer = styled.div`
  display : flex;
  flex-direction: column;
  width: 24rem;
  margin: 1rem auto;
`
const Input = styled.input`
  border-style: none;
  border-bottom: 1px solid #BCBCBC;
  height: 3.2rem;
  width: 23rem;
  font-size: .9rem;
`
const NextButton = styled.button`
  position: absolute;
  bottom: 8rem;
  border-style: none;
  border-radius: 1.5rem;
  height: 2.4rem;
  width: 25rem;
  background-color: #B29EFF ;
  opacity: 1;
  color: #fff;
  cursor: pointer;
`
const PasswordConfirmMessage = styled.div`
  padding-top: 0.2rem;
  color: #755BDB;
  font-size: 0.9rem;
`
const ErrorMessage = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #EB8686;
  border-radius: 0.1rem;
  height: 2rem;
  opacity: 0.8;
  color: #fff;
  font-size: 0.9rem;
`
export default SignupProcess
