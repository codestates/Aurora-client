import SigninProcess from '../../src/components/user/SigninProcess'
import GoogleOAuthSignin from '../../src/components/user/GoogleOAuthSignin'
import FacebookOAuthSignin from '../../src/components/user/FacebookOAuthSignin'
import AppUserLayout from '../../src/components/user/AppUserLayout'

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
