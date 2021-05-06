import styled, { createGlobalStyle } from 'styled-components'
import { CloseOutlined } from '@ant-design/icons'

export const Global = createGlobalStyle`
  .slick-slide {
    display: inline-block;
  }
  .ant-card-cover {
    transform: none !important;
  }
`

export const Overlay = styled.div`
  position: fixed;
  z-index: 5000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const Header = styled.header`
  height: 2.75rem;
  background: white;
  position: relative;
  padding: 0;
  text-align: center;
  
  & h1 {
    margin: 0;
    font-size: 1.063rem;
    color: #333;
    line-height: 2.75rem;
  }
`

export const SlickWrapper = styled.div`
  height: calc(100% - 2.75rem);
  background: #090909;
`

export const CloseBtn = styled(CloseOutlined)`
  position: absolute;
  right: 0;
  top: 0;
  padding: 0.938rem;
  line-height: 0.875rem;
  cursor: pointer;
`

export const Indicator = styled.div`
  text-align: center;
  
  & > div {
    width: 4.688rem;
    height: 1.875rem;
    line-height: 1.875rem;
    border-radius: 0.938rem;
    background: #313131;
    display: inline-block;
    text-align: center;
    color: white;
    font-size: 0.938rem;
  }
`

export const ImgWrapper = styled.div`
  padding: 2rem;
  text-align: center;
  
  & img {
    margin: 0 auto;
    max-height: 46.875rem;
  }
`
