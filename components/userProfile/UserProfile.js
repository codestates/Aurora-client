import styled from 'styled-components'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import ProfileEditModal from './ProfileEditModal'

const UserProfile = () => {
  const { me } = useSelector((state) => state.user)
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <Wrapper>
        <>
          {/* 맨 처음 가입 & 로그인 했을 때 디폴트 프로필 사진 설정 */}
          {me.avatar[0]
            ? <Avatar src={`data:image/png;base64,${Buffer.from(me.avatar[0].data.data).toString('base64')}`} alt='avatar' />
            : <Avatar src='/images/profile-thumbnail.jpg' alt='avatar' />}
        </>
        <ProfileInfo>
          <Username>{me.username}</Username>
          <ProfileEditButton onClick={() => { setShowModal(true) }}>수정</ProfileEditButton>
        </ProfileInfo>
        <>
          {me.bio
            ? <Bio>{me.bio}</Bio>
            : <Bio>만나서 반가워요!</Bio>}
        </>
      </Wrapper>
      {showModal && (
        <ProfileEditModal
          onClose={() => setShowModal(false)}
          User={me}
        />
      )}
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 18rem;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 2px rgba(119, 119, 119, .25);
`

const Avatar = styled.img`
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #D2D2D2;
`

const ProfileInfo = styled.div`
  padding-top: 1.6rem;
  display: flex;
  align-items: center;
`

const Username = styled.div`
  margin: 0 1rem;
  color: #424242;
  font-size: 1.8rem;
  font-weight: 600;
`

const Bio = styled.div`
  margin-top: 1rem;
  font-size: 1rem;
  color: #444;
`

const ProfileEditButton = styled.button`
  font-size: 0.9rem;
  border-style: none;
  border-radius: 0.4rem;
  height: 2rem;
  width: 3rem;
  background-color: #A18AFC;
  opacity: 0.7;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #A18AFC;
    opacity: 1;
  }
`

export default UserProfile
