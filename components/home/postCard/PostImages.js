import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useCallback, useMemo, useState } from 'react'

import ImagesZoom from './ImagesZoom'

const PostImages = ({ images }) => {
  const [showImagesZoom, setShowImagesZoom] = useState(false)

  const onZoom = useCallback(() => {
    setShowImagesZoom(true)
  }, [])

  const onClose = useCallback(() => {
    setShowImagesZoom(false)
  }, [])

  const singleImg = useMemo(() => ({ width: '100%', height: '100%', objectFit: 'contain' }), [])
  const twoImgBox = useMemo(() => ({ width: '100%', height: '100%' }), [])
  const halfImg = useMemo(() => ({ width: '50%', height: '100%', objectFit: 'contain' }), [])
  const ImgBox = useMemo(() => ({ display: 'inline-block', width: '50%' }), [])
  const quarterImg = useMemo(() => ({ display: 'block', width: '100%', height: '50%', objectFit: 'contain' }), [])

  if (images.length === 1) {
    return (
      <Wrapper>
        <img
          style={singleImg}
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
        <div style={twoImgBox}>
          <img
            style={halfImg}
            src={`data:image/png;base64,${images[0].data}`}
            onClick={onZoom}
          />
          <img
            style={halfImg}
            src={`data:image/png;base64,${images[1].data}`}
            onClick={onZoom}
          />
        </div>
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </Wrapper>
    )
  }
  if (images.length === 3) {
    return (
      <Wrapper>
        <img
          style={halfImg}
          src={`data:image/png;base64,${images[0].data}`}
          onClick={onZoom}
        />
        <div style={ImgBox}>
          <img
            style={quarterImg}
            src={`data:image/png;base64,${images[1].data}`}
            onClick={onZoom}
          />
          <img
            style={quarterImg}
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
        style={singleImg}
        src={`data:image/png;base64,${images[0].data}`}
        onClick={onZoom}
      />
      <div style={ImgBox}>
        <img
          style={quarterImg}
          src={`data:image/png;base64,${images[1].data}`}
          onClick={onZoom}
        />
        <More
          onClick={onZoom}
        >
          +
          <br />
          {images.length - 2}
          개의 사진 더보기
        </More>
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

const More = styled.div`
  display: inline-block;
  width: 100%;
  height: 50%;
  text-align: center;
  vertical-align: middle;
`

PostImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default PostImages
