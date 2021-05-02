import styled from 'styled-components'
import FilterBar from './home/FilterBar'
import UserInfo from './UserInfo'

const Top = ({ filter }) => {
  return (
    <TopWrapper>
      <Logo src='/images/logo.png' />
      <Filter>
        {filter && <FilterBar />}
      </Filter>
      <UserInfo />
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

export default Top
