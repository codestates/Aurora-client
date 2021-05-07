import PropTypes from 'prop-types'
import styled from 'styled-components'

import Weather from './weather'
import WeatherStatistics from './WeatherStatistics'

const RightSideBar = ({ isMain }) => {
  return (
    <Wrapper>
      <WeatherStatistics isMain={isMain} />
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

RightSideBar.prototype = {
  isMain: PropTypes.bool
}

export default RightSideBar
