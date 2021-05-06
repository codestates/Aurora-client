import PropTypes from 'prop-types'
import styled, { createGlobalStyle } from 'styled-components'
import Top from './Top'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'

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

const AppLayout = ({ children, filter, isMain }) => {
  return (
    <>
      <Global />
      <Wrapper>
        <Top filter={filter} />
        <Main>
          <LeftSideBar />
          <MainComponent>
            {children}
          </MainComponent>
          <RightSideBar isMain={isMain} />
        </Main>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display : flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin: 0 auto;
`

const Main = styled.div`
  max-width: 1200px;
  display : flex;
  flex : 9 1 0;
`

const MainComponent = styled.div`
  flex : 4 1 0;
  display : flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

AppLayout.prototype = {
  children: PropTypes.node.isRequired,
  filter: PropTypes.bool,
  isMain: PropTypes.bool
}

export default AppLayout
