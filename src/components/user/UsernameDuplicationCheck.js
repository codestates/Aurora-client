import styled from 'styled-components'
import { useState } from 'react'
// import axios from 'axios'

const UsernameDuplicationCheck = ({ SetUsernameValue }) => {
  const [username, setUsername] = useState({
    username: '',
    message: ''
  })

  const handleInputValue = (key) => (e) => {
    setUsername({ [key]: e.target.value })
    // SetUsernameValue(e.target.value)
    console.log(username)
  }

  const handleDuplicationCheck = async () => {
    try {
      // const isDuplicated = await axios.post('https://localhost:4000/dupcheck', { username })
      const isDuplicated = false
      if (isDuplicated) {
        setUsername({
          message: '이미 등록된 유저네임입니다'
        })
      } else {
        setUsername({
          message: '사용가능한 유저네임입니다!'
        })
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <DupCheckContainer>
        <div>
          <span><Input id='username' name='username' type='text' placeholder='유저네임 설정' onChange={handleInputValue('username')} required /></span>
          <span><DuplicationCheckButton onClick={handleDuplicationCheck}>중복확인</DuplicationCheckButton></span>
        </div>

        <DupCheckMessage>
          {username.message}
        </DupCheckMessage>

      </DupCheckContainer>

    </>
  )
}

const DupCheckContainer = styled.div`
  display : flex;
  flex-direction: column;
  width: 24rem;
  margin-bottom: 1rem;
`
const Input = styled.input`
  border-style: none;
  border-bottom: 1px solid #BCBCBC;
  height: 3.2rem;
  width: 23rem;
  font-size: .9rem;
`

const DuplicationCheckButton = styled.button`
  border-style: none;
  border-radius: 1.5rem;
  margin-left: -4.8rem;
  height: 2rem;
  width: 4.4rem;
  cursor: pointer;
  background-color: #B29EFF;
  color: #fff;
`

const DupCheckMessage = styled.div`
  padding-top: 0.2rem;
  color: #755BDB;
  font-size: 0.9rem;
`

export default UsernameDuplicationCheck
