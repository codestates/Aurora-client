// **이메일 인증버튼 클릭 후 activation token 비교하는 프로세스**

// import { useDispatch, useSelector } from 'react-redux'
// import { signupSuccessAction } from '../../../reducers/user'

// const EmailVerifyProcess = () => {
// token 인증
// const dispatch = useDispatch()
// const { activationToken } = useSelector((state) => state.user)

// 올바른 activation token을 가지고 있으면 성공, 없으면 실패
// const handleVerifyEmail = () => {
//   dispatch(signupSuccessAction(activationToken))
//   console.log(activationToken)
//   console.log(dispatch(signupSuccessAction(activationToken)))
// }
// }
// return (
//  {activationToken ? '' : ''}
// )
// export default EmailVerifyProcess

import { useSelector } from 'react-redux'
import Link from 'next/link'
import styled from 'styled-components'

const EmailVerified = () => {
  const { singedUp } = useSelector((state) => state.user)

  return (
    <>
      {singedUp
        ? (
          <>
            <Message>회원가입에 성공했습니다!<br />이제 Aurora에서 마음껏 기분을 표현해보세요 :)</Message>
            <Link href='signin'><SigninButton>로그인하러 가기</SigninButton></Link>
          </>
          )
        : (
          <>
            <Message>회원가입에 실패했습니다 :(<br />인증을 다시 시도해주세요.</Message>
            <Link href='signup'><MoveToSignupPage>재시도</MoveToSignupPage></Link>
          </>
          )}
    </>

  )
}

const Message = styled.div`
  margin-top: 5rem;
  line-height: 3rem;
  text-align: center;
  color: #555;
  font-weight: 500;
`
const SigninButton = styled.button`
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
const MoveToSignupPage = styled.a`
  margin-bottom: 1.4rem;
  font-size: 0.9rem;
  color: #767676;
  text-decoration: underline;
  cursor: pointer;
`

export default EmailVerified
