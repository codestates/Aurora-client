import styled from 'styled-components'
// import axios from 'axios'
// import { useState } from 'react'

const EmailVerification = () => {
  // const [email, setEmail] = useState('')

  const sendEmail = async event => {
    event.preventDefault()

    // const res = await axios.post('url',
    //   {
    //     email: event.target.email.value
    //   },
    //   {
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   }
    // )
    // const result = await res.json()
    // result.user => 'Ada Lovelace'
  }

  return (
    <InputContainer>
      <GreetingMessage>만나서 반가워요!</GreetingMessage>
      <form onSubmit={sendEmail}>
        <div>
          <Input id='email' name='email' type='text' placeholder='이메일' autoComplete='email' required />
        </div>
        <div>
          <span><Input id='verifyCode' name='verifyCode' type='text' placeholder='인증번호' required /></span>
          <span><SendVerifyCodeButton type='submit'>전송</SendVerifyCodeButton></span>
        </div>
      </form>
    </InputContainer>
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
  height: 3.6rem;
  width: 23rem;
  font-size: .9rem;
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

export default EmailVerification
