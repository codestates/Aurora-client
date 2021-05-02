import axios from 'axios'

/* ------- initial state ------ */
export const initialState = {
  signupRequest: false, // 회원가입 시도중
  signedUp: false,
  signupError: null,
  isLoggedIn: false,
  loginError: null,
  userInfo: null,
  accessToken: null
}

/* ------- action 상수 ------ */
const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST'
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
const SIGN_IN = 'SIGN_IN'
const SIGN_OUT = 'LOG_OUT'

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
  // headers에 activationToken 정보 담아서 post 요청
  try {
    const response = await axios.post('http://localhost:5000/api/activation', { activationToken: `${token}` })
    dispatch({ type: SIGN_UP_SUCCESS, payload: response })
  } catch (err) {
    dispatch({ type: SIGN_UP_SUCCESS, payload: err.response.data })
  }
}

// login
export const signinAction = (data) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/api/signin', data)
    dispatch({ type: SIGN_IN, payload: response })
  } catch (err) {
    dispatch({ type: SIGN_IN, payload: err.response.data })
  }
}

// logout
// export const logoutAction = (data) => async (dispatch) => {
//   const response = await axios.get('http://localhost:5000/api/signout', {
//         headers: {
//           'Authorization': `token ${token}`
//         }
//       })
//   dispatch({ type: SIGN_OUT, response })
// }

// logout test용
export const logoutAction = (data) => {
  return {
    type: SIGN_OUT
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
          signupRequest: true
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
          signedUp: true
        }
      } else {
        return {
          ...state,
          signupRequest: false,
          // error message
          signupError: action.payload.message
        }
      }
    case SIGN_IN:
      console.log(action.payload)
      if (action.payload.statusText === 'OK') {
        return {
          ...state,
          isLoggedIn: true,
          // user info
          userInfo: action.payload.data.message,
          // access token
          accessToken: action.payload.data.accessToken
        }
      } else {
        return {
          ...state,
          isLoggedIn: false,
          // error message
          loginError: action.payload.message
        }
      }
    case SIGN_OUT:
      return {
        isLoggedIn: false,
        userInfo: null
      }
    default:
      return state
  }
}

export default reducer
