import styled from 'styled-components'
import Link from 'next/link'
import Router from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { signinAction } from '../../../reducers/user'
import { useEffect, useState, useCallback } from 'react'
import useInput from '../../../hooks/useInput'

const SigninProcess = () => {
  const dispatch = useDispatch()
  const { loginError, isLoggedIn } = useSelector((state) => state.user)
  const [email, onChangeEmail] = useInput('')
  const [password, onChangePassword] = useInput('')
  const [loginErrorMsg, setLoginErrorMsg] = useState('')

  useEffect(() => {
    if (loginError) {
      setLoginErrorMsg(loginError)
    }
  }, [loginError])

  const handleLogin = useCallback((e) => {
    e.preventDefault()
    dispatch(signinAction({ email, password }))
  }, [email, password])

  return (
    <>
      {isLoggedIn
        ? Router.push('../')
        : (
          <InputContainer>
            <GreetingMessage>로그인</GreetingMessage>
            <form onSubmit={handleLogin}>
              <Input
                name='email'
                type='email'
                placeholder='이메일'
                value={email}
                onChange={onChangeEmail} required
              />
              <Input
                name='password'
                type='password'
                placeholder='비밀번호'
                value={password}
                onChange={onChangePassword} required
              />
              {loginErrorMsg
                ? <LoginErrorMessage>{loginErrorMsg}</LoginErrorMessage>
                : ''}
              <SigninButton type='submit' value='로그인' />
            </form>

            <Link href='../user/signup'><MoveToSigninPage>계정이 없으신가요?</MoveToSigninPage></Link>
          </InputContainer>
          )}
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
  margin: 0 auto;
`
const Input = styled.input`
  border-style: none;
  border-bottom: 1px solid #BCBCBC;
  height: 3.6rem;
  width: 23rem;
  font-size: .9rem;
`
const LoginErrorMessage = styled.div`
  padding-top: 0.2rem;
  color: #755BDB;
  font-size: 0.9rem;
`
const SigninButton = styled.input`
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
const MoveToSigninPage = styled.a`
  margin-top: 1rem;
  color: #767676;
  text-decoration: underline;
  cursor: pointer;
  height: 4rem;
  align-self: center;
`

export default SigninProcess
