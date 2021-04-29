import styled from 'styled-components'

const RightSideBar = () => {
  return (
    <Wrapper>
      <Box>미정</Box>
      <Box>미정</Box>
      <Weather />
    </Wrapper>
  )
}

const Wrapper = styled.div`
    flex : 1 1 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border : 1px solid gray;
`

const Box = styled.div`
  border : 1px solid gray;
  height : 30%;
  width : 80%;
`

const Weather = styled.div`
  border : 1px solid gray;
  height : 30%;
  width : 80%;
`

export default RightSideBar
