import styled from 'styled-components'

const UsernameDuplicationCheck = () => {
  return (
    <DupCheckContainer>
      <GreetingMessage>거의 다 왔어요!</GreetingMessage>
      <div>
        <span><Input id='username' name='username' type='text' placeholder='유저네임 설정' required /></span>
        <span><DuplicationCheckButton type='submit'>중복확인</DuplicationCheckButton></span>
      </div>
    </DupCheckContainer>
  )
}

const GreetingMessage = styled.div`
  margin-bottom: 1rem;
  color: #464646;
  font-weight: 500;
`

const DupCheckContainer = styled.div`
  display : flex;
  flex-direction: column;
  width: 24rem;
  margin: 0 auto 1rem auto;
`
const Input = styled.input`
  border-style: none;
  border-bottom: 1px solid #BCBCBC;
  height: 3.6rem;
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

export default UsernameDuplicationCheck
