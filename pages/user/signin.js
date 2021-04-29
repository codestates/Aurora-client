import styled from 'styled-components'
import SigninProcess from '../../src/components/user/SigninProcess'
import Link from 'next/link'
import GoogleOAuthSignin from '../../src/components/user/GoogleOAuthSignin'
import FacebookOAuthSignin from '../../src/components/user/FacebookOAuthSignin'

const Signin = () => {
  return (
    <SigninContainer>
      <SigninBox>
        <Logo src='/images/logo.png' />
        <SigninProcess />
        <Link href='signup-email'><MoveToSigninPage>계정이 없으신가요?</MoveToSigninPage></Link>
        <GoogleOAuthSignin />
        <FacebookOAuthSignin />
      </SigninBox>
    </SigninContainer>
  )
}

const SigninContainer = styled.div`
  display : flex;
  align-items: center;
  height: 100%;
  max-width: 75rem;
`

const SigninBox = styled.div`
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
  color: #767676;
  text-decoration: underline;
  cursor: pointer;
  height: 4rem;
`

export default Signin
