import Head from 'next/head'
import styled from 'styled-components'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import AppLayout from '../components/AppLayout'
import Loading from '../components/Loading'
import Signin from './user/signin'

import { signinSuccessAction, getAccessTokenAction } from '../actions/user'

const Notification = () => {
  const dispatch = useDispatch()
  const { googleLoading, loginLoading, isLoggedIn, accessToken } = useSelector((state) => state.user)

  useEffect(() => {
    dispatch(getAccessTokenAction())
  }, [googleLoading, loginLoading])

  useEffect(() => {
    if (accessToken) {
      dispatch(signinSuccessAction(accessToken))
    }
  }, [accessToken])

  return (
    <>
      {!isLoggedIn
        ? (
          <>
            {accessToken ? <Loading /> : <Signin />}
          </>
        )
        : (
          <>
            <Head>
              <title>알림 | Aurora</title>
            </Head>
            <AppLayout>
              <NotificationMsg>알림이 없습니다 :(</NotificationMsg>
            </AppLayout>
          </>
        )}
    </>
  )
}

const NotificationMsg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width : 28rem;
  height: 4rem;
  border: 1px solid #F0F0F0;
  border-radius: 0.4rem;
  box-shadow: 0 .2rem .3rem .2rem rgba(85, 85, 85, .25);
  position: relative;
  bottom: 10rem;
  font-size: 1rem;
  color: #555;
`

export default Notification
