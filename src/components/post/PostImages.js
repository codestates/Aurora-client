import styled from 'styled-components'

const PostImages = ({ images }) => {
  if (images.length == 1) {
    return (
      <Wrapper>
        <img role='presentation' style={{ width: '100%', height: '100%' }} src={images[0].src} alt={images[0].src} />
      </Wrapper>
    )
  }
  if (images.length == 2) {
    return (
      <Wrapper>
        <img role='presentation' style={{ width: '50%', height: '100%' }} src={images[0].src} alt={images[0].src} />
        <img role='presentation' style={{ width: '50%', height: '100%' }} src={images[1].src} alt={images[1].src} />
      </Wrapper>
    )
  }
  if (images.length > 2) {
    return (
      <Wrapper>
        <img role='presentation' style={{ width: '50%', height: '100%' }} src={images[0].src} alt={images[0].src} />
        <div style={{ display: 'inline-block', width: '50%' }}>
          <img role='presentation' style={{ display: 'block', width: '100%', height: '50%' }} src={images[1].src} alt={images[1].src} />
          <img role='presentation' style={{ display: 'block', width: '100%', height: '50%' }} src={images[2].src} alt={images[2].src} />
        </div>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  width: 100%;
  height: 15rem;
  display : flex;
`

export default PostImages
