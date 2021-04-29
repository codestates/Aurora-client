import styled from 'styled-components'
import Link from 'next/link'

const SigninProcess = () => {
  return (
    <InputContainer>
      <GreetingMessage>로그인</GreetingMessage>
      <Input id='email' name='email' type='text' placeholder='이메일' required />
      <Input id='password' name='password' type='password' placeholder='비밀번호' required />
      <Link href='../'>
        <SigninButton>로그인</SigninButton>
      </Link>
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
  margin: 0 auto;
`
const Input = styled.input`
  border-style: none;
  border-bottom: 1px solid #BCBCBC;
  height: 3.6rem;
  width: 23rem;
  font-size: .9rem;
`

const SigninButton = styled.button`
  margin-left: 0.4rem;
    margin-top: 2.6rem;
  border-style: none;
  border-radius: 1.5rem;
  height: 2.4rem;
  width: 23rem;
  background-color: #A18AFC;
  opacity: 0.43;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #B29EFF;
    opacity: 1;
  }
`

export default SigninProcess
