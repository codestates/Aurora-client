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
    setShowImagesZoom(false)
  }, [])

  if (images.length === 1) {
    return (
      <Wrapper>
        <img
          style={{ width: '100%', height: '100%' }}
          src={`data:image/png;base64,${images[0].data}`}
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
          src={`data:image/png;base64,${images[0].data}`}
          onClick={onZoom}
        />
        <img
          style={{ width: '50%', height: '100%' }}
          src={`data:image/png;base64,${images[1].data}`}
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
          src={`data:image/png;base64,${images[0].data}`}
          onClick={onZoom}
        />
        <div style={{ display: 'inline-block', width: '50%' }}>
          <img
            style={{ display: 'block', width: '100%', height: '50%' }}
            src={`data:image/png;base64,${images[1].data}`}
            onClick={onZoom}
          />
          <img
            style={{ display: 'block', width: '100%', height: '50%' }}
            src={`data:image/png;base64,${images[2].data}`}
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
        src={`data:image/png;base64,${images[0].data}`}
        onClick={onZoom}
      />
      <div style={{ display: 'inline-block', width: '50%' }}>
        <img
          style={{ display: 'block', width: '100%', height: '50%' }}
          src={`data:image/png;base64,${images[1].data}`}
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
  images: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default PostImages
