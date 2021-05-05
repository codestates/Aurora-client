import styled from 'styled-components'
import Link from 'next/link'

const LeftSideBar = () => {
  return (
    <Wrapper>
      <Link href='/'><a><Icon className='fas fa-home fa-2x btn-selected' /></a></Link>
      <Link href='/notification'><a><Icon className='far fa-bell fa-2x' /></a></Link>
      <Link href='/profile'><a><Icon className='fas fa-user fa-2x' /></a></Link>
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
  color: #848484;
  font-size: 1.5rem;
  margin: 1.5rem 0;
  &:hover{
    color: #A18AFC;
  }
`

export default LeftSideBar
