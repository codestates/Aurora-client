import styled from 'styled-components'
import Link from 'next/link'

const LeftSideBar = () => {
  return (
    <Wrapper>
      <Link href='/'><Menu><Icon className='fas fa-home fa-2x btn-selected' />홈</Menu></Link>
      <Link href='/notification'><Menu><Icon className='far fa-bell fa-2x' />알림</Menu></Link>
      <Link href='/profile'><Menu><Icon className='fas fa-user fa-2x' />프로필</Menu></Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  flex : 1 1 0;
  display : flex;
  flex-direction : column;
  align-items : center;
  margin-top : 2rem;
  box-sizing: border-box;
`

const Icon = styled.i`
  font-size: 1.5rem;
  margin: 1.5rem 1rem 1.5rem 0;

`

const Menu = styled.i`
  width: 5rem;
  color: #848484;
  font-size: 1rem;
  font-style: normal;
  margin: 1.5rem 0;
  cursor: pointer;
  &:hover{
    color: #A18AFC;
  }
`

export default LeftSideBar
