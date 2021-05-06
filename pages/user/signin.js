import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

import AppUserLayout from '../../components/user/AppUserLayout'
import FacebookOAuthSignin from '../../components/user/FacebookOAuthSignin'
import GoogleOAuthSignin from '../../components/user/GoogleOAuthSignin'
import SigninProcess from '../../components/user/SigninProcess'

const Signin = () => {
  const router = useRouter()

  const { loginLoading } = useSelector((state) => state.user)

  useEffect(() => {
    if (loginLoading) {
      router.push('../')
    }
  }, [loginLoading])

  return (
    <AppUserLayout>
      <SigninProcess />
      <GoogleOAuthSignin />
      <FacebookOAuthSignin />
    </AppUserLayout>
  )
}

export default Signin
