import styled from 'styled-components'
import faker from 'faker'
import Link from 'next/link'
import { useSelector } from 'react-redux'

const userInfo = () => {
  const { me } = useSelector(state => state.user)

  return (
    <>
      <Link href='/profile'>
        <Wrapper>
          <Avatar src='' alt='avatar' />
          <span>{me.username}</span>
        </Wrapper>
      </Link>
    </>
  )
}

const Wrapper = styled.div`
    display: flex;
    width: 10rem;
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

export default userInfo
