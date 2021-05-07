import styled from 'styled-components'
import { Checkbox } from 'antd'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { FILTER_WEATHER } from '../../actions/post'
import { Icon } from '../Theme'

const FilterBar = () => {
  const dispatch = useDispatch()
  const [checkedWeather, setCheckedWeather] = useState([])

  useEffect(() => {
    dispatch({
      type: FILTER_WEATHER,
      payload: checkedWeather
    })
  }, [checkedWeather])

  const onChangeWeather = useCallback((checkedValues) => {
    setCheckedWeather(checkedValues)
  }, [])

  return (
    <Wrapper>
      <div>보고싶은 날씨를 선택해보세요</div>
      <Checkbox.Group onChange={onChangeWeather}>
        <Checkbox value='sun'>{Icon.sun}</Checkbox>
        <Checkbox value='cloud'>{Icon.cloud}</Checkbox>
        <Checkbox value='rain'>{Icon.rain}</Checkbox>
        <Checkbox value='moon'>{Icon.moon}</Checkbox>
      </Checkbox.Group>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display : flex;
  border: double 0.08rem transparent;
  border-radius: 3.125em;
  background-image: linear-gradient(white, white), radial-gradient(circle at top left, #ffbebe, #b6d8f8, #a18afc);
  background-origin: border-box;
  background-clip: content-box, border-box;
  height: 3rem;
  align-items: center;
  justify-content: space-evenly;
  font-size: 0.85rem;
  I{
    font-size: 1.5rem;
    margin: 0 0.5rem;
  }
`
export default FilterBar
