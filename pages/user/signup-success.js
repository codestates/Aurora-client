import styled from 'styled-components'
import Link from 'next/link'

const SignupSuccess = () => {
  return (
    <>
      <SuccessMessage>회원가입에 성공했습니다!<br />이제 Aurora에서 마음껏 기분을 표현해보세요 :)</SuccessMessage>
      <Link href='signin'>
        <MoveToSigninPage>로그인하러 가기</MoveToSigninPage>
      </Link>
    </>
  )
}

const SuccessMessage = styled.div`
  margin-top: 3rem;
  line-height: 3rem;
  text-align: center;
  color: #555;
  font-weight: 500;
`
const MoveToSigninPage = styled.button`
  margin-left: 0.4rem;
  margin-top: 5rem;
  border-style: none;
  border-radius: 1.5rem;
  height: 3rem;
  width: 23rem;
  font-size: 0.9rem;
  background-color: #B29EFF;
  color: #fff;
  cursor: pointer;
  &:hover {
    font-size: 1rem;
  }
`
export default SignupSuccess
