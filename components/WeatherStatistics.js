import { Progress } from 'antd'
import Thema from './Thema'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const WeatherStatistics = () => {
  const { Posts, Statistics } = useSelector(state => state.post)

  // const statistic = {
  //   sun: loadPostsDone ? Math.round(Posts.filter((ele) => ele.mood === 'sun').length / Posts.length * 100) : 0,
  //   cloud: loadPostsDone ? Math.round(Posts.filter((ele) => ele.mood === 'cloud').length / Posts.length * 100) : 0,
  //   rain: loadPostsDone ? Math.round(Posts.filter((ele) => ele.mood === 'rain').length / Posts.length * 100) : 0,
  //   moon: loadPostsDone ? Math.round(Posts.filter((ele) => ele.mood === 'moon').length / Posts.length * 100) : 0
  // }
  console.log('WeatherStatistics')

  const statistic = {
    sun: Statistics ? Math.round(Statistics.moods.sun / Statistics.total * 100) : 0,
    cloud: Statistics ? Math.round(Statistics.moods.cloud / Statistics.total * 100) : 0,
    rain: Statistics ? Math.round(Statistics.moods.rain / Statistics.total * 100) : 0,
    moon: Statistics ? Math.round(Statistics.moods.moon / Statistics.total * 100) : 0
  }

  return (
    <Wrapper>
      <Progress type='circle' width={60} percent={statistic.sun} format={() => (Thema.sun.icon)} />{statistic.sun}%
      <Progress type='circle' width={60} percent={statistic.cloud} format={() => (Thema.cloud.icon)} />{statistic.cloud}%
      <Progress type='circle' width={60} percent={statistic.rain} format={() => (Thema.rain.icon)} />{statistic.rain}%
      <Progress type='circle' width={60} percent={statistic.moon} format={() => (Thema.moon.icon)} />{statistic.moon}%
    </Wrapper>
  )
}

const Wrapper = styled.div`
  I{
    font-size: 1.5rem;
  }
  div{
    margin: 10px;
  }
`

export default WeatherStatistics
