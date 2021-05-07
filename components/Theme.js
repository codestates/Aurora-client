import styled from 'styled-components'

const SunIcon = styled.i`
  color: #ffbebe;
`
const CloudIcon = styled.i`
  color: #D4D4D4;
`
const RainIcon = styled.i`
  color: #b6d8f8;
`
const MoonIcon = styled.i`
  color: #a18afc;
`

const TimesIcon = styled.i`
color: #777;
`

export const Icon = {
  sun: <SunIcon className='fas fa-sun' />,
  cloud: <CloudIcon className='fas fa-cloud' />,
  rain: <RainIcon className='fas fa-cloud-showers-heavy' />,
  moon: <MoonIcon className='fas fa-moon' />,
  times: <TimesIcon className='fas fa-times' />
}

export const Theme = {
  sun: '#ffbebe',
  cloud: '#D4D4D4',
  rain: '#b6d8f8',
  moon: '#a18afc'
}

export default Theme
