import styled from 'styled-components'
import ProfileEditForm from './ProfileEditForm'

const ProfileEditModal = ({ User, onClose }) => {
  return (
    <StyledModalOverlay>
      <StyledModal>
        <StyledModalHeader>
          <div>Profile Update</div>
          <span onClick={onClose}><i className='fas fa-times' style={{ color: '#777', marginRight: '1rem' }} /></span>
        </StyledModalHeader>
        <StyledModalBody>
          <ProfileEditForm onClose={onClose} />
        </StyledModalBody>
      </StyledModal>
    </StyledModalOverlay>
  )
}

const StyledModalOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 50;
`

const StyledModal = styled.div`
    background: white;
    width: 500px;
    height: 600px;
    border-radius: 0.5rem;
    padding: 15px;
    z-index: 500;
`

const StyledModalHeader = styled.div`
  padding-bottom: 1rem;
  border-bottom: 1.5px solid #ccc;
  display: flex;
  position: relative; 
  justify-content: space-between;
  font-size: 1.4rem;
  color: #888;
  text-align: center;
  div{
    font-weight: 500;
    width: 100%;
  }
  span{
    cursor: pointer;
  }
`

const StyledModalBody = styled.div`
    padding-top: 10px;
    height: 90%;
    input {
      border : none;
      padding : 0 1rem;
      height : 3rem;
      &:focus{
        outline:none;
      }
    }
`

export default ProfileEditModal
