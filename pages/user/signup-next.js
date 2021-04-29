import styled from 'styled-components'
import UsernameDuplicationCheck from '../../src/components/user/UsernameDuplicationCheck'
import SetPassword from '../../src/components/user/SetPassword'
import Link from 'next/link'

const SignupNext = () => {
  return (
    <SignupContainer>
      <SignupBox>
        <Logo src='/images/logo.png' />
        <UsernameDuplicationCheck />
        <SetPassword />
        <Link href='signin'>
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
export default SignupNext
