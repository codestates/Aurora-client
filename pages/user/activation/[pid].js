import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { signupSuccessAction } from '../../../reducers/user'
import AppUserLayout from '../../../src/components/user/AppUserLayout'
import EmailVerification from '../../../src/components/user/EmailVerification'

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