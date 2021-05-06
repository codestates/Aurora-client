import Head from 'next/head'
import styled from 'styled-components'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

import AppLayout from '../components/AppLayout'

const Notification = () => {
  const router = useRouter()

  const { isLoggedIn } = useSelector((state) => state.user)

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/user/signin')
    }
  }, [isLoggedIn])

  return (
    <>
      {isLoggedIn &&
      (
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
