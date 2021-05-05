import { GET_ACCESS_TOKEN, GET_USER, GOOGLE_AUTH_URL_REQUEST, SIGN_IN_REQUEST, SIGN_OUT, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, UPDATE_USER_PROFILE, WITHDRAWAL } from '../actions/user'

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
          accessToken: null,
          me: null
        }
      } else {
        return {
          ...state,
          signoutError: action.payload.message
        }
      }
    case UPDATE_USER_PROFILE:
      console.log('UPDATE USER', action.payload)
      if (action.payload.statusText === 'OK') {
        return {
          ...state,
          me: action.payload.data,
          updateError: null
        }
      } else {
        return {
          ...state
        }
      }
    case WITHDRAWAL:
      if (action.payload.statusText === 'OK') {
        return {
          ...state,
          me: null,
          isLoggedIn: false,
          accessToken: null
        }
      } else {
        return {
          ...state
        }
      }
    default:
      return state
  }
}

export default reducer
