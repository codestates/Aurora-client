import styled from 'styled-components'

const FilterBar = () => {
  return (
    <Wrapper>
      <span>보고싶은 날씨를 선택해보세요</span>
      <Icons>
        <Icon color='#FF6A89'>
          <i className='fas fa-sun' />
        </Icon>
        <Icon>
          <i className='fas fa-cloud' />
        </Icon>
        <Icon color='#1E96FF'>
          <i className='fas fa-cloud-showers-heavy' />
        </Icon>
        <Icon color='#C71F8F'>
          <i className='fas fa-moon' />
        </Icon>
      </Icons>
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
`

const Icons = styled.div`
    display : flex;
    width: 15rem;
    justify-content: space-evenly;
`

const Icon = styled.div`
    cursor: pointer;
    font-size: 1.5rem;
    I{
        opacity: ${props => (props.selected ? 0.8 : 0.2)};
        &:hover{
          opacity: 0.8;
          color : ${props => props.color}
        }
    }
`

export default FilterBar
