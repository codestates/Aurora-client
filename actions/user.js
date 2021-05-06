import axios from 'axios'
axios.defaults.withCredentials = true

/* ------- action 상수 ------ */
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'

export const GOOGLE_AUTH_URL_REQUEST = 'GOOGLE_AUTH_URL_REQUEST'

export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST'
export const GET_ACCESS_TOKEN = 'GET_ACCESS_TOKEN'
export const GET_USER = 'GET_USER'

export const SIGN_OUT = 'LOG_OUT'

export const UPDATE_USER_PROFILE = 'UPDATE_USER_PROFILE'

export const WITHDRAWAL = 'WITHDRAWAL'

/* ------- dispatch 함수 ------ */
// signup request
export const signupRequestAction = (data) => async (dispatch) => {
  try {
    const response = await axios.post('ec2-13-125-227-72.ap-northeast-2.compute.amazonaws.com/api/signup', data)
    dispatch({ type: SIGN_UP_REQUEST, payload: response })
  } catch (err) {
    dispatch({ type: SIGN_UP_REQUEST, payload: err.response.data })
  }
}

// signup success
export const signupSuccessAction = (token) => async (dispatch) => {
  // body에 activationToken 정보 담아서 post 요청
  try {
    const response = await axios.post('ec2-13-125-227-72.ap-northeast-2.compute.amazonaws.com/api/activation', { activationToken: `${token}` })
    dispatch({ type: SIGN_UP_SUCCESS, payload: response })
  } catch (err) {
    dispatch({ type: SIGN_UP_SUCCESS, payload: err.response.data })
  }
}

// google OAuth
export const getGoogleAuthURLAction = () => async (dispatch) => {
  const response = await axios.get('ec2-13-125-227-72.ap-northeast-2.compute.amazonaws.com/api/auth/google/url')
  dispatch({ type: GOOGLE_AUTH_URL_REQUEST, payload: response.data })
}

// login request
export const signinRequestAction = (data) => async (dispatch) => {
  try {
    const response = await axios.post('ec2-13-125-227-72.ap-northeast-2.compute.amazonaws.com/api/signin', data)
    dispatch({ type: SIGN_IN_REQUEST, payload: response })
  } catch (err) {
    dispatch({ type: SIGN_IN_REQUEST, payload: err.response.data })
  }
}

// get access token
export const getAccessTokenAction = () => async (dispatch) => {
  try {
    const response = await axios.get('ec2-13-125-227-72.ap-northeast-2.compute.amazonaws.com/api/access-token')
    dispatch({ type: GET_ACCESS_TOKEN, payload: response })
  } catch (err) {
    dispatch({ type: GET_ACCESS_TOKEN, payload: err.response.data })
  }
}

// signin success (get user info)
export const signinSuccessAction = (token) => async (dispatch) => {
  try {
    const response = await axios.get('ec2-13-125-227-72.ap-northeast-2.compute.amazonaws.com/api/user', {
      headers: {
        Authorization: `${token}`
      }
    })
    dispatch({ type: GET_USER, payload: response })
  } catch (err) {
    dispatch({ type: GET_USER, payload: err.response.data })
  }
}

// logout
export const signoutAction = (token) => async (dispatch) => {
  try {
    const response = await axios.get('ec2-13-125-227-72.ap-northeast-2.compute.amazonaws.com/api/signout')
    dispatch({ type: SIGN_OUT, payload: response })
  } catch (err) {
    dispatch({ type: SIGN_OUT, payload: err.response.data })
  }
}

// update user profile
export const updateUerProfileAction = (data, token) => async (dispatch) => {
  const response = await axios.patch('ec2-13-125-227-72.ap-northeast-2.compute.amazonaws.com/api/user', data, {
    headers: {
      Authorization: `${token}`
    }
  })
  dispatch({ type: UPDATE_USER_PROFILE, payload: response })
}

// withdrawal
export const withdrawal = (accessToken) => async (dispatch) => {
  try {
    const headers = {
      Authorization: accessToken
    }
    const response = await axios.delete('ec2-13-125-227-72.ap-northeast-2.compute.amazonaws.com/api/user', { headers })
    dispatch({ type: WITHDRAWAL, payload: response })
  } catch (err) {
    dispatch({ type: WITHDRAWAL, payload: err.response.data })
  }
}
