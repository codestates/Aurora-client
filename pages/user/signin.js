import SigninProcess from '../../components/user/SigninProcess'
import GoogleOAuthSignin from '../../components/user/GoogleOAuthSignin'
import FacebookOAuthSignin from '../../components/user/FacebookOAuthSignin'
import AppUserLayout from '../../components/user/AppUserLayout'
import Home from '../'
import { useSelector } from 'react-redux'

const Signin = () => {
  const { isLoggedIn, userInfo } = useSelector((state) => state.user)
  console.log(userInfo)
  return (
    <>
      {!isLoggedIn
        ? (
          <AppUserLayout>
            <SigninProcess />
            <GoogleOAuthSignin />
            <FacebookOAuthSignin />
          </AppUserLayout>
        )
        : <Home />}
    </>
  )
}

export default Signin
