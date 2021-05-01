import axios from 'axios'

/* ------- initial state ------ */
export const initialState = {
  signupLoading: false, // 회원가입 시도중
  signedUp: false,
  signupError: null,
  activationToken: null,
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
    const response = await axios.post('http://localhost:5000/api/activation', {}, {
      headers: {
        Authorization: `${token}`
      }
    })
    dispatch({ type: SIGN_UP_SUCCESS, payload: response.data })
  } catch (err) {
    dispatch({ type: SIGN_UP_SUCCESS, payload: err.response.data })
  }
}

// signup success test용
// export const signupSuccessAction = (data) => {
//   return {
//     type: SIGN_UP_SUCCESS,
//     // activation token 보여주기
//     data
//   }
// }

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
  const { statusText, message, accessToken, data } = action.payload
  switch (action.type) {
    case SIGN_UP_REQUEST:
      if (statusText === 'OK') {
        return {
          ...state,
          signupLoading: true
        }
      } else {
        return {
          ...state,
          signupLoading: false,
          signupError: message
          // activation token test
          // activationToken: faker.random.uuid()
        }
      }
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        signupLoading: false,
        signedUp: true,
        // error message
        signupError: message
      }
    case SIGN_IN:
      if (action.status === 200) {
        return {
          ...state,
          isLoggedIn: true,
          // user info
          userInfo: data,
          // access token
          accessToken: accessToken
        }
      } else {
        return {
          ...state,
          isLoggedIn: false,
          // error message
          loginError: message
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
