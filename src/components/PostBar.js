import styled from 'styled-components'
import faker from 'faker'
import Modal from './Modal'
import { useEffect, useState } from 'react'

const PostBar = () => {
  const [showModal, setShowModal] = useState(false)
  const [avatar, setAvatar] = useState('')

  useEffect(() => {
    setAvatar(faker.image.avatar())
  }, [])

  return (
    <>
      <Wrapper onClick={() => {
        setShowModal(true)
      }}
      >
        <Avatar src={avatar} alt='avatar' />
        <span>오늘 당신의 날씨는 어떤가요?</span>
      </Wrapper>
      <Modal
        onClose={() => setShowModal(false)}
        show={showModal}
      />
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
  margin: 2rem 0;
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
