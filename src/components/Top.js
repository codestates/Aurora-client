import styled from 'styled-components'

const Top = ({ filter }) => {
  return (
    <TopWrapper>
      <Logo src='/images/logo.png' />
      <FilterBar />
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

const FilterBar = styled.div`
    width: 30rem;
    border : 1px solid gray;
    height : 80%;
`

const UserInfo = styled.div`
  width: 10rem;
  border : 1px solid gray;
  height : 80%;
`

export default Top
