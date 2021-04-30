import styled from 'styled-components'
import Signup from '../../src/components/user/Signup'

const SignupEmailVerification = () => {
  return (
    <SignupContainer>
      <SignupBox>
        <Logo src='/images/logo.png' />
        <Signup />
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
  margin-top: 3rem;
  width: 10rem;
`

export default SignupEmailVerification
