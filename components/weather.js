import { useEffect, useState } from 'react'
import styled from 'styled-components'

const weather = () => {
  const API_KEY = process.env.openweatherKey

  const [weatherInfo, setWeatherInfo] = useState(null)
  const [isData, setIsData] = useState(false)

  useEffect(() => {
    loadCoords()
  }, [])

  const COORDS = 'coords'

  const loadCoords = () => {
    const loadedCords = localStorage.getItem(COORDS)
    if (loadedCords === null) {
      renderWeatherData()
    } else {
      const parsedCoords = JSON.parse(loadedCords)
      getWeather(parsedCoords.latitude, parsedCoords.longitude)
    }
  }

  const handleGeoSucces = (position) => {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    const coordsObj = {
      latitude,
      longitude
    }
    localStorage.setItem(COORDS, JSON.stringify(coordsObj))
    getWeather(latitude, longitude)
  }

  const handleGeoError = () => {
    console.log('Cant access geo location')
  }

  const renderWeatherData = () => {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
  }

  const getWeather = (lat, lon) => {
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    const headers = {
      'Access-Control-Allow-Origin': '*'
    }
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setWeatherInfo(data)
        setIsData(true)
      })
  }

  return (
    <Wrapper>
      {isData && (
        <>
          <Header>
            <span>현재 날씨</span>
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
