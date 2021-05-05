import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
// axios.defaults.withCredentials = true

const weather = () => {
  const API_KEY = process.env.openweatherKey

  const [weatherInfo, setWeatherInfo] = useState(null)
  const [isData, setIsData] = useState(false)

  const COORDS = 'coords'

  const loadCoords = () => {
    let loadedCords = localStorage.getItem(COORDS)
    // 이 부분에 동기로직 필요
    if (loadedCords === null) {
      askForCoords()
    }
    loadedCords = localStorage.getItem(COORDS)
    const parseCoords = JSON.parse(loadedCords)
    console.log('loadedCords : ', loadedCords)
    console.log('parseCoords : ', parseCoords)
    return [parseCoords.latitude, parseCoords.longitude]
  }

  const handleGeoSucces = (position) => {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    const coordsObj = {
      latitude,
      longitude
    }
    console.log('coordsObj : ', coordsObj)
    localStorage.setItem(COORDS, JSON.stringify(coordsObj))
  }

  const handleGeoError = () => {
    console.log('Cant access geo location')
  }

  const askForCoords = () => {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
  }

  const getWeather = async () => {
    const coords = loadCoords()
    const lat = coords[0]
    const lng = coords[1]
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    const headers = {
      'Access-Control-Allow-Origin': '*'
    }
    console.log('API_URL : ', API_URL)
    // const res = await axios.get(API_URL, { headers }, { withCredentials: true })
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setWeatherInfo(data)
        setIsData(true)
      })
  }

  console.log('IsData : ', isData)
  console.log('weatherInfo : ', weatherInfo)

  useEffect(() => {
    getWeather()
  }, [])

  return (
    <Wrapper>
      {isData && (
        <>
          <Header>
            <span>A real weather</span>
          </Header>
          <Body>
            <img
              src={`http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`}
            />
            <div>
              최저{weatherInfo.main.temp_min}&#8451;
              <br />
              최고 {weatherInfo.main.temp_max}&#8451;
            </div>
          </Body>
        </>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const Header = styled.div`
    text-align: center;
`

const Body = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    height: 70%;
    font-size: 0.75rem;;
    padding : 0.5rem
    
`

export default weather
