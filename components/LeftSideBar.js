import styled from 'styled-components'
import Link from 'next/link'

const LeftSideBar = () => {
  return (
    <Wrapper>
      <Link href='/'><a><i className='fas fa-home fa-2x btn-selected' /></a></Link>
      <Link href='/notification'><a><i className='far fa-bell fa-2x' /></a></Link>
      <Link href='/profile'><a><i className='fas fa-user fa-2x' /></a></Link>
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

export default LeftSideBar
