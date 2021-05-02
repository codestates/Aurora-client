import styled from 'styled-components'

const GoogleOAuthSignin = () => {
  return (
    <GoogleSigninContainer>
      <GoogleSigninButton>
        <GoogleIcon src='/images/google-icon.png' />
        <GoogleText>Google 계정으로 계속하기</GoogleText>
      </GoogleSigninButton>
    </GoogleSigninContainer>
  )
}

const GoogleSigninContainer = styled.div`
  margin: .5rem 0;
  display : flex;
  align-items: center;
  max-width: 75rem;
`

const GoogleSigninButton = styled.button`
  margin-left: -1rem;
  border-style: none;
  border: 1px solid #52A05A;
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

const GoogleIcon = styled.img`
  display: inline;
  margin-top: -0.4rem;
  margin-bottom: -0.5rem;
  margin-right: -0.5rem;
  width: 3rem;
`

const GoogleText = styled.p`
  display: inline;
`

export default GoogleOAuthSignin
