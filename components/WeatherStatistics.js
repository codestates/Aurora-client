import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Progress } from 'antd'
import { useSelector } from 'react-redux'

import { Icon } from './Theme'

const WeatherStatistics = ({ isMain }) => {
  const { Statistics } = useSelector(state => state.post)

  const statistic = {
    sun: Statistics?.total > 0 ? Math.round(Statistics.moods.sun / Statistics.total * 100) : 0,
    cloud: Statistics?.total > 0 ? Math.round(Statistics.moods.cloud / Statistics.total * 100) : 0,
    rain: Statistics?.total > 0 ? Math.round(Statistics.moods.rain / Statistics.total * 100) : 0,
    moon: Statistics?.total > 0 ? Math.round(Statistics.moods.moon / Statistics.total * 100) : 0
  }

  return (
    <Wrapper>
      {isMain ? <div>전체 날씨 현황</div> : <div>나의 날씨 현황</div>}
      <Progress type='circle' width={60} percent={statistic.sun} format={() => (Icon.sun)} />{statistic.sun}%
      <Progress type='circle' width={60} percent={statistic.cloud} format={() => (Icon.cloud)} />{statistic.cloud}%
      <Progress type='circle' width={60} percent={statistic.rain} format={() => (Icon.rain)} />{statistic.rain}%
      <Progress type='circle' width={60} percent={statistic.moon} format={() => (Icon.moon)} />{statistic.moon}%
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 2rem;
  I{
    font-size: 1.5rem;
  }
  div{
    margin: 10px;
  }
`

WeatherStatistics.prototype = {
  isMain: PropTypes.bool
}

export default WeatherStatistics
