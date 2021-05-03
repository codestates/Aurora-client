import { Progress } from 'antd'
import Thema from './Thema'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const WeatherStatistics = () => {
  const { Posts, loadPostsDone } = useSelector(state => state.post)

  const statistic = {
    sun: Math.round(Posts.filter((ele) => ele.mood === 'sun').length / Posts.length * 100),
    cloud: Math.round(Posts.filter((ele) => ele.mood === 'cloud').length / Posts.length * 100),
    rain: Math.round(Posts.filter((ele) => ele.mood === 'rain').length / Posts.length * 100),
    moon: Math.round(Posts.filter((ele) => ele.mood === 'moon').length / Posts.length * 100)
  }

  console.log(Posts)
  console.log(statistic)

  return (
    <Wrapper>
      {loadPostsDone && (
        <>
          <Progress type='circle' width='60px' percent={statistic.sun} format={() => (Thema.sun.icon)} />{statistic.sun}%
          <Progress type='circle' width='60px' percent={statistic.cloud} format={() => (Thema.cloud.icon)} />{statistic.cloud}%
          <Progress type='circle' width='60px' percent={statistic.rain} format={() => (Thema.rain.icon)} />{statistic.rain}%
          <Progress type='circle' width='60px' percent={statistic.moon} format={() => (Thema.moon.icon)} />{statistic.moon}%
        </>
      )}
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
