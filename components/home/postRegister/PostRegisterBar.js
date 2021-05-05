import styled from 'styled-components'
import PostRegisterModal from './PostRegisterModal'
import { useState, useCallback } from 'react'
import { useSelector } from 'react-redux'

const PostBar = () => {
  const { me } = useSelector(state => state.user)
  const [showModal, setShowModal] = useState(false)

  const onClickModal = useCallback(() => {
    setShowModal(true)
  }, [])
  const onCloseModal = useCallback(() => {
    setShowModal(false)
  }, [])

  console.log(showModal)

  return (
    <>
      <Wrapper onClick={() => {
        setShowModal(true)
      }}
      >
        <>
          {me.avatar[0]
            ? <Avatar src={`data:image/png;base64,${Buffer.from(me.avatar[0].data.data).toString('base64')}`} alt='avatar' />
            : <Avatar src='/images/profile-thumbnail.jpg' alt='avatar' />}
        </>
        <span>{me.username}님, 오늘 당신의 날씨는 어떤가요?</span>
      </Wrapper>
      {showModal && (
        <PostRegisterModal
          onClose={onCloseModal}
          User={me}
        />
      )}
    </>
  )
}

const Wrapper = styled.div`
  width : 80%;
  height: 10%;
  box-shadow: 0 .2rem .3rem .1rem rgba(85, 85, 85, .25);
  border-radius: 0.3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  margin: 2rem 0 1rem;
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
