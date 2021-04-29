import UsernameDuplicationCheck from './UsernameDuplicationCheck'
import EmailVerification from './EmailVerification'
import SetPassword from './SetPassword'
import { useState } from 'react'
// import axios from 'axios'
import SignupSuccess from '../../../pages/user/signup-success'

const SignupProcess = () => {
  // TODO: userinfo를 각 컴포넌트들에서 가져와서 여기서 한번에 취합한 것으로 post 요청 날리기
  const [userinfo, setUserinfo] = useState({
    email: '',
    username: '',
    password: ''
  })

  const [signup, setSignup] = useState(false)

  const setEmailValue = (email) => {
    setUserinfo({ email })
  }
  const setUsernameValue = (username) => {
    setUserinfo({ username })
  }
  const setPasswordValue = (password) => {
    setUserinfo({ password })
  }

  const signupSuccess = async () => {
    try {
      // const result = await axios
      //   .post('https://localhost:4000/user/signup', {userinfo})
      // console.log(result)
      const result = true
      setSignup(result)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      {signup
        ? <SignupSuccess />
        : (
          <>
            <EmailVerification setEmailValue={setEmailValue} />
            <UsernameDuplicationCheck setUsernameValue={setUsernameValue} />
            <SetPassword setPasswordValue={setPasswordValue} signupSuccess={signupSuccess} />
          </>
          )}
    </>
  )
}

export default SignupProcess
