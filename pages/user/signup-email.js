import styled from 'styled-components'
import EmailVerification from '../../src/components/user/EmailVerification'
import Link from 'next/link'

const SignupEmailVerification = () => {
  return (
    <SignupContainer>
      <SignupBox>
        <Logo src='/images/logo.png' />
        <EmailVerification />
        <Link href='signin'><MoveToSigninPage>이미 회원이신가요?</MoveToSigninPage></Link>
        <Link href='signup-next'>
          <NextButton>다음</NextButton>
        </Link>
      </SignupBox>
    </SignupContainer>
  )
}

const SignupContainer = styled.div`
  display : flex;
  align-items: center;
  height: 100%;
  max-width: 75rem;
`

const SignupBox = styled.div`
  margin: 0 auto;
  display : flex;
  flex-direction: column;
  align-items: center;
  height: 40rem;
  width: 30rem;
  min-width: 25rem;
  border: 1px solid #F0F0F0;
  border-radius: 0.4rem;
  box-shadow: 0 .2rem .3rem .2rem rgba(85, 85, 85, .25);
`
const Logo = styled.img`
  margin: 3rem 0;
  width: 10rem;
`
const MoveToSigninPage = styled.a`
  margin-top: 1rem;
  height: 15rem; 
  color: #767676;
  text-decoration: underline;
  cursor: pointer;
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

export default SignupEmailVerification
