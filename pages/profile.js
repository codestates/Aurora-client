import Head from 'next/head'
import { useSelector } from 'react-redux'
import AppLayout from '../components/AppLayout'
import Signin from './user/signin'

const Profile = () => {
  const { isLoggedIn } = useSelector((state) => state.user)

  return (
    <>
      {!isLoggedIn
        ? <Signin />
        : (
          <>
            <Head>
              <title>프로필 | Aurora</title>
            </Head>
            <AppLayout>
              <div>Profile</div>
            </AppLayout>
          </>
          )}
    </>
  )
}

export default Profile
