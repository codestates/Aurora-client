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
        <Link href='/profile'><Avatar src='' alt='avatar' /></Link>
        <Signout />
      </UserInfo>
    </TopWrapper>
  )
}

const TopWrapper = styled.div`
    flex : 1 1 0;
    border-bottom: 2px solid rgba(128,128,128,0.4);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

const Logo = styled.img`
    width: 10rem;
    padding : 2%;
`

const Filter = styled.div`
    width: 35rem;
    
`
const UserInfo = styled.div`
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

export default Top
