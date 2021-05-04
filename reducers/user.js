import axios from 'axios'
axios.defaults.withCredentials = true

/* ------- initial state ------ */
export const initialState = {
  signupRequest: false, // 회원가입 시도중
  signedUp: false,
  signupError: null,
  isLoggedIn: false,
  loginLoading: false,
  googleLoading: false,
  loginError: null,
  accessTokenError: null,
  signoutError: null,
  updateError: null,
  me: null,
  accessToken: null,
  googleAuthURL: ''
}

/* ------- action 상수 ------ */
const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST'
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
const GOOGLE_AUTH_URL_REQUEST = 'GOOGLE_AUTH_URL_REQUEST'
const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST'
const GET_ACCESS_TOKEN = 'GET_ACCESS_TOKEN'
const GET_USER = 'GET_USER'
const SIGN_OUT = 'LOG_OUT'
const UPDATE_USER_PROFILE = 'UPDATE_USER_PROFILE'

/* ------- dispatch 함수 ------ */
// signup request
export const signupRequestAction = (data) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/api/signup', data)
    dispatch({ type: SIGN_UP_REQUEST, payload: response })
  } catch (err) {
    dispatch({ type: SIGN_UP_REQUEST, payload: err.response.data })
  }
}

// signup success
export const signupSuccessAction = (token) => async (dispatch) => {
  // body에 activationToken 정보 담아서 post 요청
  try {
    const response = await axios.post('http://localhost:5000/api/activation', { activationToken: `${token}` })
    dispatch({ type: SIGN_UP_SUCCESS, payload: response })
  } catch (err) {
    dispatch({ type: SIGN_UP_SUCCESS, payload: err.response.data })
  }
}

// google OAuth
export const getGoogleAuthURLAction = () => async (dispatch) => {
  const response = await axios.get('http://localhost:5000/api/auth/google/url')
  dispatch({ type: GOOGLE_AUTH_URL_REQUEST, payload: response.data })
}

// login request
export const signinRequestAction = (data) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/api/signin', data)
    dispatch({ type: SIGN_IN_REQUEST, payload: response })
  } catch (err) {
    dispatch({ type: SIGN_IN_REQUEST, payload: err.response.data })
  }
}

// get access token
export const getAccessTokenAction = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:5000/api/access-token')
    dispatch({ type: GET_ACCESS_TOKEN, payload: response })
  } catch (err) {
    dispatch({ type: GET_ACCESS_TOKEN, payload: err.response.data })
  }
}

// signin success (get user info)
export const signinSuccessAction = (token) => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:5000/api/user', {
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
    const response = await axios.get('http://localhost:5000/api/signout')
    dispatch({ type: SIGN_OUT, payload: response })
  } catch (err) {
    dispatch({ type: SIGN_OUT, payload: err.response.data })
  }
}

// update user profile
export const updateUerProfileAction = (data) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/api/user/update', data)
    dispatch({ type: UPDATE_USER_PROFILE, payload: response })
  } catch (err) {
    dispatch({ type: UPDATE_USER_PROFILE, payload: err.response.data })
  }
}

/* ------- reducer ------ */
const reducer = (state = initialState, action) => {
  // const { statusText, message, accessToken, data } = action.payload
  switch (action.type) {
    case SIGN_UP_REQUEST:
      if (action.payload.statusText === 'OK') {
        return {
          ...state,
          signupRequest: true,
          signupError: null
        }
      } else {
        return {
          ...state,
          signupRequest: false,
          signupError: action.payload.message
        }
      }
    case SIGN_UP_SUCCESS:
      if (action.payload.statusText === 'OK') {
        return {
          ...state,
          signupRequest: false,
          signupLoading: false,
          signedUp: true,
          signupError: null
        }
      } else {
        return {
          ...state,
          signupRequest: false,
          // error message
          signupError: action.payload.message
        }
      }
    case GOOGLE_AUTH_URL_REQUEST:
      return {
        ...state,
        googleAuthURL: `${action.payload}`,
        googleLoading: true
      }
    case SIGN_IN_REQUEST:
      if (action.payload.statusText === 'OK') {
        return {
          ...state,
          loginLoading: true,
          loginError: null
        }
      } else {
        return {
          ...state,
          // error message
          loginError: action.payload.message
        }
      }
    case GET_ACCESS_TOKEN:
      if (action.payload.statusText === 'OK') {
        return {
          ...state,
          accessToken: action.payload.data.accessToken,
          accessTokenError: null
        }
      } else {
        return {
          ...state,
          // error message
          accessTokenError: action.payload.message,
          isLoggedIn: false
        }
      }
    case GET_USER:
      console.log(action.payload)
      if (action.payload.statusText === 'OK') {
        return {
          ...state,
          loginLoading: false,
          googleLoading: false,
          isLoggedIn: true,
          me: action.payload.data,
          loginError: null
        }
      } else {
        return {
          ...state,
          // error message
          loginError: action.payload,
          isLoggedIn: false
        }
      }
    case SIGN_OUT:
      if (action.payload.statusText === 'OK') {
        return {
          ...state,
          isLoggedIn: false,
          loginError: null,
          signoutError: null,
          me: null
        }
      } else {
        return {
          ...state,
          signoutError: action.payload.message
        }
      }
    case UPDATE_USER_PROFILE:
      if (action.payload.statusText === 'OK') {
        return {
          ...state,
          me: action.payload.data,
          updateError: null
        }
      } else {
        return {
          ...state,
          updateError: action.payload.message
        }
      }
    default:
      return state
  }
}

export default reducer
