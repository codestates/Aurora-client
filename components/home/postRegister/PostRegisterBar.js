import styled from 'styled-components'
import PostRegisterModal from './PostRegisterModal'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const PostBar = () => {
  const { me } = useSelector(state => state.post)
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Wrapper onClick={() => {
        setShowModal(true)
      }}
      >
        <Avatar src={me.avatar} alt='avatar' />
        <span>{me.username}님, 오늘 당신의 날씨는 어떤가요?</span>
      </Wrapper>
      {showModal && (
        <PostRegisterModal
          onClose={() => setShowModal(false)}
          User={me}
        />
      )}
    </>
  )
}

const Wrapper = styled.div`
  width : 80%;
  height: 10%;
  box-shadow: 0 0 10px rgba(128, 128, 128, 0.8);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  margin: 1rem 0;
  &:hover{
    background-color: rgba(128, 128, 128, 0.2);
  }
`

const Avatar = styled.img`
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    object-fit: cover;
    margin-right : 1.5rem;
`

export default PostBar
