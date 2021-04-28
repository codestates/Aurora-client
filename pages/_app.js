import LeftSideBar from '../src/components/LeftSideBar'
import RightSideBar from '../src/components/RightSideBar'
import Top from '../src/components/Top'
import '../styles/globals.css'
import styled from 'styled-components'

const Aurora = ({ Component, pageProps }) => {
  return (
    <Wrapper>
      <Top />
      <Main>
        <LeftSideBar />
        <MainComponent>
          <Component {...pageProps} />
        </MainComponent>
        <RightSideBar />
      </Main>
    </Wrapper>
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
  display : flex;
  flex : 4 1 0;
`

export default Aurora
