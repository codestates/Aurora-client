import styled from 'styled-components'
import Link from 'next/link'
// import axios from 'axios'
import { useState } from 'react'
// import faker from 'faker'

const EmailVerification = ({ SetEmailValue }) => {
  // const email = faker.random.word

  const [email, setEmail] = useState({
    email: '',
    emailSent: false,
    message: ''
  })

  const handleEmailValue = (e) => {
    // SetEmailValue(e.target.value)
  }

  const sendEmail = async event => {
    event.preventDefault()

    // try {
    // const result = await axios.post('https://localhost:5000/sendEmail',
    //   {
    //     email: event.target.email.value
    //   },
    //   {
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   }
    // )
    // } catch (err) {
    //   alert('인증번호 전송에 실패했습니다. 올바른 이메일을 입력해주세요.')
    // }
    const result = {
      status: 200
    }
    if (result.status === 200) {
      setEmail({
        emailSent: true
      })
      alert('해당 이메일로 인증번호가 전송되었습니다.')
    }
  }

  const verifyEmail = async () => {
    // try {
    //   const result = await axios.get('https://localhost:5000/verifyEmail')
    //   if (result.sataus === 200) {
    //     setEmail({
    //       message: '이메일 인증에 성공했습니다.'
    //     })
    //   }
    // } catch (err) {
    //   console.log(err)
    //   SetEmail({
    //     message: '이메일 인증에 실패했습니다.'
    //   })
    // }
    const result = {
      status: 200
    }
    if (result.status === 200) {
      setEmail({
        message: '이메일 인증에 성공했습니다.'
      })
    }
  }

  return (
    <>
      <Link href='signin'><MoveToSigninPage>이미 회원이신가요?</MoveToSigninPage></Link>
      <InputContainer>
        <GreetingMessage>만나서 반가워요!</GreetingMessage>
        <div>
          <Input id='email' name='email' type='text' placeholder='이메일' autoComplete='email' onChange={handleEmailValue} required />
        </div>
        <div>
          <span><Input id='verifyCode' name='verifyCode' type='text' placeholder='인증번호' required /></span>
          {email.emailSent
            ? <span><SendVerifyCodeButton onClick={verifyEmail}>확인</SendVerifyCodeButton></span>
            : <span><SendVerifyCodeButton onClick={sendEmail}>전송</SendVerifyCodeButton></span>}
          {email.message
            ? <EmailVerifyMessage>{email.message}</EmailVerifyMessage>
            : ''}
        </div>
      </InputContainer>
    </>

  )
}

const GreetingMessage = styled.div`
  margin-bottom: 1rem;
  color: #464646;
  font-weight: 500;
`

const InputContainer = styled.div`
  display : flex;
  flex-direction: column;
  width: 24rem;
  margin: 0 auto 1rem auto;
`
const Input = styled.input`
  border-style: none;
  border-bottom: 1px solid #BCBCBC;
  height: 3.2rem;
  width: 23rem;
  font-size: .9rem;
`
const EmailVerifyMessage = styled.div`
  padding-top: 0.2rem;
  color: #755BDB;
  font-size: 0.9rem;
`

const SendVerifyCodeButton = styled.button`
  border-style: none;
  border-radius: 1.5rem;
  margin-left: -4rem;
  height: 2rem;
  width: 3.6rem;
  cursor: pointer;
  background-color: #B29EFF;
  color: #fff;
`
const MoveToSigninPage = styled.a`
  margin-bottom: 1.4rem;
  font-size: 0.9rem;
  color: #767676;
  text-decoration: underline;
  cursor: pointer;
`

export default EmailVerification
