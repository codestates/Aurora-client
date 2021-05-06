import Link from 'next/link'
import styled from 'styled-components'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'

import AppUserLayout from '../../../components/user/AppUserLayout'
import EmailVerification from '../../../components/user/EmailVerification'
import { signupSuccessAction } from '../../../actions/user'

const EmailActivation = () => {
  const router = useRouter()
  
  const { pid } = router.query

  return (
    <AppUserLayout>
      <EmailVerification token={pid} />
    </AppUserLayout>
  )
}

export default EmailActivation