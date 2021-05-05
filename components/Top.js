import Link from 'next/link'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import FilterBar from './home/FilterBar'
import Signout from './Signout'

const Top = ({ filter }) => {
  const { me } = useSelector(state => state.user)

  return (
    <TopWrapper>
      <Link href='/'>
        <a>
          <Logo src='/images/logo.png' />
        </a>
      </Link>
      <Filter>
        {filter && <FilterBar />}
      </Filter>
      <UserInfo>
        <Link href='/profile'>
          <a>
            {me.avatar[0]
              ? <Avatar src={`data:image/png;base64,${Buffer.from(me.avatar[0].data.data).toString('base64')}`} alt='avatar' />
              : <Avatar src='/images/profile-thumbnail.jpg' alt='avatar' />}
          </a>
        </Link>
        <Signout />
      </UserInfo>
    </TopWrapper>
  )
}

const TopWrapper = styled.div`
  width: 100%;
  flex : 0.6 1 0;
  box-shadow: 0px 4px 2px rgba(119, 119, 119, .25);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

const Logo = styled.img`
  width: 8rem;
  padding : 2%;
`

const Filter = styled.div`
  width: 38rem;
  margin: 0.5rem 0 0.5rem 2rem;
`
const UserInfo = styled.div`
  display: flex;
  width: 12rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  span {
    text-align: center;
  }
`

const Avatar = styled.img`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #D2D2D2;
`

export default Top
