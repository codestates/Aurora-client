import AppUserLayout from '../../components/user/AppUserLayout'
import FacebookOAuthSignin from '../../components/user/FacebookOAuthSignin'
import GoogleOAuthSignin from '../../components/user/GoogleOAuthSignin'
import SigninProcess from '../../components/user/SigninProcess'

const Signin = () => {
  return (
    <AppUserLayout>
      <SigninProcess />
      <GoogleOAuthSignin />
      <FacebookOAuthSignin />
    </AppUserLayout>
  )
}

export default Signin
