import styled from 'styled-components'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { signupRequestAction } from '../../reducers/user'
import { useEffect, useState, useCallback } from 'react'
import useInput from '../../hooks/useInput'

const SignupProcess = () => {
  const dispatch = useDispatch()
  const { signupError, signupRequest } = useSelector((state) => state.user)
  const [email, onChangeEmail] = useInput('')
  const [username, onChangeUsername] = useInput('')
  const [password, onChangePassword] = useInput('')
  const [signupErrorMsg, setSignupErrorMsg] = useState('')

  const [passwordconfirm, setpasswordconfirm] = useState('')
  const [passwordconfirmMsg, setpasswordconfirmMsg] = useState('')

  useEffect(() => {
    if (signupError) {
      setSignupErrorMsg(signupError)
    }
  }, [signupError])

  const onChangepasswordconfirm = useCallback((e) => {
    setpasswordconfirm(e.target.value)
    setpasswordconfirmMsg(e.target.value !== password)
  }, [password])

  const handleSignup = useCallback((e) => {
    e.preventDefault()
    dispatch(signupRequestAction({ email, username, password, passwordconfirm }))
  }, [email, username, password, passwordconfirm])

  return (
    <>
      {signupRequest
        ? <SuccessMessage>이메일 인증을 위한 메일이 전송되었습니다!<br />전송된 이메일을 통해 인증을 마무리해주세요 :)</SuccessMessage>
        : (
          <>
            <Link href='signin'><MoveToSigninPage>이미 회원이신가요?</MoveToSigninPage></Link>
            <InputContainer>
              <GreetingMessage>만나서 반가워요!</GreetingMessage>
              <form onSubmit={handleSignup}>
                <Input
                  name='email'
                  type='email'
                  placeholder='이메일'
                  autoComplete='email'
                  onChange={onChangeEmail} required
                />
                <Input
                  name='username'
                  type='text'
                  placeholder='유저네임'
                  onChange={onChangeUsername} required
                />
                <Input
                  name='password'
                  type='password'
                  placeholder='비밀번호'
                  onChange={onChangePassword} required
                />
                <Input
                  name='passwordconfirm'
                  type='password'
                  placeholder='비밀번호 확인'
                  value={passwordconfirm}
                  onChange={onChangepasswordconfirm} required
                />
                {passwordconfirmMsg
                  ? <PasswordconfirmMessage>비밀번호가 일치하지 않아요!</PasswordconfirmMessage>
                  : ''}
                {signupErrorMsg
                  ? <ErrorMessage>{signupErrorMsg}</ErrorMessage>
                  : ''}
                <NextButton type='submit' value='가입하기' />
              </form>
            </InputContainer>

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
const NextButton = styled.input`
  position: absolute;
  display: flex;
  justify-content: center;
  bottom: 8rem;
  border-style: none;
  border-radius: 1.5rem;
  height: 2.4rem;
  width: 24rem;
  background-color: #B29EFF ;
  opacity: 1;
  color: #fff;
  cursor: pointer;
`
const PasswordconfirmMessage = styled.div`
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
