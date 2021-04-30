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

const AppLayout = ({ children, filter }) => {
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
          <RightSideBar />
        </Main>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display : flex;
  flex-direction: column;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
`

const Main = styled.div`
  display : flex;
  flex : 9 1 0;
`

const MainComponent = styled.div`
  flex : 4 1 0;
  display : flex;
  flex-direction: column;
  align-items: center;
`

AppLayout.prototype = {
  children: PropTypes.node.isRequired
}

export default AppLayout
