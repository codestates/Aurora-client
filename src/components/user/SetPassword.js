import styled from 'styled-components'

const SetPassword = () => {
  return (
    <InputContainer>
      <Input id='password' name='password' type='password' placeholder='비밀번호 설정' required />
      <Input id='passwordConfirm' name='passwordConfirm' type='password' placeholder='비밀번호 확인' required />
    </InputContainer>
  )
}

const InputContainer = styled.div`
  display : flex;
  flex-direction: column;
  height: 16.8rem;
  width: 24rem;
  margin: 1.4rem auto;
`
const Input = styled.input`
  border-style: none;
  border-bottom: 1px solid #BCBCBC;
  height: 3.6rem;
  width: 23rem;
  font-size: .9rem;
`

export default SetPassword
