import styled, { keyframes } from 'styled-components'

const Loading = () => {
  return <Wrapper><LoadingAnimation /></Wrapper>
}

const Wrapper = styled.div`
  height: 50rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const LoadingAnimation = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`

export default Loading
