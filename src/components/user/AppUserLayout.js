import PropTypes from 'prop-types'
import styled, { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
    html,
    body {
    height: 100%;
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    #__next {
    height: 100%;

    }

    a {
    color: inherit;
    text-decoration: none;
    }

    * {
    box-sizing: border-box;
    }
`

const AppLayout = ({ children, filter }) => {
  return (
    <>
      <Global />
      <Wrapper>
        <UserBox>
          <Logo src='/images/logo.png' />
          <MainComponent>
            {children}
          </MainComponent>
        </UserBox>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display : flex;
  align-items: center;
  height: 100%;
  max-width: 75rem;
`

const UserBox = styled.div`
  margin: 0 auto;
  display : flex;
  flex-direction: column;
  align-items: center;
  height: 40rem;
  width: 30rem;
  min-width: 25rem;
  border: 1px solid #F0F0F0;
  border-radius: 0.4rem;
  box-shadow: 0 .2rem .3rem .2rem rgba(85, 85, 85, .25);
`
const Logo = styled.img`
  margin: 3rem 0 2rem 0;
  width: 10rem;
`

const MainComponent = styled.div`
  display : flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

AppLayout.prototype = {
  children: PropTypes.node.isRequired
}

export default AppLayout
