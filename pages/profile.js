import Head from 'next/head'
import AppLayout from '../src/components/AppLayout'

const Profile = () => {
  return (
    <>
      <Head>
        <title>프로필 | Aurora</title>
      </Head>
      <AppLayout>
        <div>Profile</div>
      </AppLayout>
    </>
  )
}

export default Profile
