import styled from 'styled-components'
import { Checkbox } from 'antd'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { FILTER_WEATHER } from '../../reducers/post'

const FilterBar = () => {
  const dispatch = useDispatch()
  const [checkedWeather, setCheckedWeather] = useState([])

  const onChangeWeather = useCallback((checkedValues) => {
    setCheckedWeather(checkedValues)
  }, [])

  useEffect(() => {
    dispatch({
      type: FILTER_WEATHER,
      payload: checkedWeather
    })
  }, [checkedWeather])

  return (
    <Wrapper>
      <div>보고싶은 날씨를 선택해보세요</div>
      <Checkbox.Group onChange={onChangeWeather}>
        <Checkbox value='sun'><i className='fas fa-sun' style={{ color: '#FF6A89' }} /></Checkbox>
        <Checkbox value='cloud'><i className='fas fa-cloud' style={{ color: '#a0a0a0' }} /></Checkbox>
        <Checkbox value='rain'><i className='fas fa-cloud-showers-heavy' style={{ color: '#1E96FF' }} /></Checkbox>
        <Checkbox value='moon'><i className='fas fa-moon' style={{ color: '#C71F8F' }} /></Checkbox>
      </Checkbox.Group>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    border: 1px solid gray;
    border-radius: 3.125em;
    display : flex;
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
