import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { signoutAction } from '../actions/user'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Signout = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { isLoggedIn } = useSelector(state => state.user)

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('../')
    }
  }, [isLoggedIn])

  const handleLogout = (e) => {
    e.preventDefault()
    dispatch(signoutAction())
  }

  return <SignoutButton onClick={handleLogout}>로그아웃</SignoutButton>
}

const SignoutButton = styled.button`
  display: inline;
  font-size: 0.9rem;
  border-style: none;
  border-radius: 1.5rem;
  height: 2.4rem;
  width: 4.8rem;
  background-color: #fff;
  color: #555;
  cursor: pointer;
  &:hover {
    background-color: #A18AFC;
    opacity: 0.8;
    color: #fff;
  }
`

export default Signout
