import styled from 'styled-components'
import Weather from './weather'
import WeatherStatistics from './WeatherStatistics'

const RightSideBar = () => {
  return (
    <Wrapper>
      <WeatherStatistics />
      <Weather />
    </Wrapper>
  )
}

const Wrapper = styled.div`
    flex : 1 1 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export default RightSideBar
