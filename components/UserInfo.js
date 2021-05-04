import styled from 'styled-components'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { signoutAction } from '../reducers/user'

const userInfo = () => {
  const dispatch = useDispatch()
  const { me } = useSelector(state => state.user)

  const handleLogout = (e) => {
    e.preventDefault()
    dispatch(signoutAction())
  }

  return (
    <>
      <Link href='/profile'>
        <Wrapper>
          <Avatar src='' alt='avatar' />
          <SignoutButton onClick={handleLogout}>로그아웃</SignoutButton>
        </Wrapper>
      </Link>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  width: 12rem;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  span {
    text-align: center;
  }
`

const Avatar = styled.img`
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid gray;
`

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

export default userInfo
