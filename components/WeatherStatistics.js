import { Progress } from 'antd'
import Theme from './Theme'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const WeatherStatistics = () => {
  const { Statistics } = useSelector(state => state.post)

  const statistic = {
    sun: Statistics ? Math.round(Statistics.moods.sun / Statistics.total * 100) : 0,
    cloud: Statistics ? Math.round(Statistics.moods.cloud / Statistics.total * 100) : 0,
    rain: Statistics ? Math.round(Statistics.moods.rain / Statistics.total * 100) : 0,
    moon: Statistics ? Math.round(Statistics.moods.moon / Statistics.total * 100) : 0
  }
  return (
    <Wrapper>
      {/* TODO: 날씨 통계 제목 */}
      <div>날씨 현황</div>
      <Progress type='circle' width={60} percent={statistic.sun} format={() => (Theme.sun.icon)} />{statistic.sun}%
      <Progress type='circle' width={60} percent={statistic.cloud} format={() => (Theme.cloud.icon)} />{statistic.cloud}%
      <Progress type='circle' width={60} percent={statistic.rain} format={() => (Theme.rain.icon)} />{statistic.rain}%
      <Progress type='circle' width={60} percent={statistic.moon} format={() => (Theme.moon.icon)} />{statistic.moon}%
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

export default WeatherStatistics
