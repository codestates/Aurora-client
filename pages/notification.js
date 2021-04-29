import Head from 'next/head'
import AppLayout from '../src/components/AppLayout'

const Notification = () => {
  return (
    <>
      <Head>
        <title>알림 | Aurora</title>
      </Head>
      <AppLayout>
        <div>notification</div>
      </AppLayout>
    </>
  )
}

export default Notification
