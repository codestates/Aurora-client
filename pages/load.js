import styled, { createGlobalStyle } from 'styled-components'

import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'

import Loading from '../components/Loading'
import { getAccessTokenAction, signinSuccessAction } from '../actions/user'

const Load = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const { accessToken, isLoggedIn } = useSelector((state) => state.user)

  useEffect(() => {
    dispatch(getAccessTokenAction())
  }, [])

  useEffect(() => {
    if (accessToken) {
      dispatch(signinSuccessAction(accessToken))
    }
  }, [accessToken])

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/')
    }
  }, [isLoggedIn])

  return (
    <>
      <Global />
      <Wrapper>
        <Logo src='/images/logo.png' />
        <div>로딩중 . . .</div>
        <LoadIcon />
      </Wrapper>
    </>
  )
}

const Global = createGlobalStyle`
  #__next {
  height: 100%;
}
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .Loading__Wrapper-sc-1awki37-0{
    height: 5rem;
  }
  font-size: 1.1rem;
  color: #888;
`

const Logo = styled.img`
  width: 10rem;
  margin-top: -10%;
  margin-bottom: 2rem;
`

const LoadIcon = styled(Loading)`
  margin-top: -50%;
`

export default Load
