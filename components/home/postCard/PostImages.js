import styled from 'styled-components'
import { useCallback, useState } from 'react'
import PropTypes from 'prop-types'

import ImagesZoom from './ImagesZoom'

const PostImages = ({ images }) => {
  const [showImagesZoom, setShowImagesZoom] = useState(false)

  const onZoom = useCallback(() => {
    setShowImagesZoom(true)
  }, [])

  const onClose = useCallback(() => {
    console.log('AAA')
    setShowImagesZoom(false)
  }, [])

  if (images.length === 1) {
    return (
      <Wrapper>
        <img
          style={{ width: '100%', height: '100%' }}
          src={images[0].src}
          alt={images[0].src}
          onClick={onZoom}
        />
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </Wrapper>
    )
  }
  if (images.length === 2) {
    return (
      <Wrapper>
        <img
          style={{ width: '50%', height: '100%' }}
          src={images[0].src}
          alt={images[0].src}
          onClick={onZoom}
        />
        <img
          style={{ width: '50%', height: '100%' }}
          src={images[1].src}
          alt={images[1].src}
          onClick={onZoom}
        />
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </Wrapper>
    )
  }
  if (images.length === 3) {
    return (
      <Wrapper>
        <img
          style={{ width: '50%', height: '100%' }}
          src={images[0].src}
          alt={images[0].src}
          onClick={onZoom}
        />
        <div style={{ display: 'inline-block', width: '50%' }}>
          <img
            style={{ display: 'block', width: '100%', height: '50%' }}
            src={images[1].src}
            alt={images[1].src}
            onClick={onZoom}
          />
          <img
            style={{ display: 'block', width: '100%', height: '50%' }}
            src={images[2].src}
            alt={images[2].src}
            onClick={onZoom}
          />
        </div>
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <img
        style={{ width: '50%', height: '100%' }}
        src={images[0].src}
        alt={images[0].src}
        onClick={onZoom}
      />
      <div style={{ display: 'inline-block', width: '50%' }}>
        <img
          style={{ display: 'block', width: '100%', height: '50%' }}
          src={images[1].src}
          alt={images[1].src}
          onClick={onZoom}
        />
        <div
          style={{ display: 'inline-block', width: '100%', height: '50%', textAlign: 'center', verticalAlign: 'middle' }}
          onClick={onZoom}
        >
          +
          <br />
          {images.length - 2}
          개의 사진 더보기
        </div>
      </div>
      {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 15rem;
  display : flex;
  img {
    padding : 3px;
  }
`

PostImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string
  })).isRequired
}

export default PostImages
