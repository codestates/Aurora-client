import styled from 'styled-components'

const FacebookOAuthSignin = () => {
  return (
    <FacebookSigninContainer>
      <FacebookSigninButton>
        <FacebookIcon src='/images/facebook-icon.png' />
        <FacebookText>Facebook 계정으로 계속하기</FacebookText>
      </FacebookSigninButton>
    </FacebookSigninContainer>
  )
}

const FacebookSigninContainer = styled.div`
  display : flex;
  align-items: center;
  max-width: 75rem;
`

const FacebookSigninButton = styled.button`
  border-style: none;
  border: 1px solid #3780DF;
  border-radius: 1.5rem;
  height: 2.4rem;
  width: 23rem;
  background-color: #fff;
  color: #474747;
  cursor: pointer;
  &:hover {
    font-size: 0.9rem;
  }
`

const FacebookIcon = styled.img`
  display: inline;
  margin-bottom: -0.2rem;
  margin-right: 0.4rem;
  margin-left: 1.2rem;
  width: 1rem;
`

const FacebookText = styled.p`
  display: inline;
`

export default FacebookOAuthSignin
