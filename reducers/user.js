// import axios from 'axios'
import faker from 'faker'

/* ------- initial state ------ */
export const initialState = {
  signupLoading: false, // 회원가입 시도중
  signedUp: false,
  signupError: null,
  activationToken: null,
  // test용
  // isLoggedIn: true,
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
// export const signupRequestAction = (data) => async (dispatch) => {
//   const response = await axios.post('https://localhost:5000/user/signup/request', data)
//   dispatch({type: SIGN_UP_REQUEST, response})
// }

// signup request test용
export const signupRequestAction = (data) => {
  return {
    type: SIGN_UP_REQUEST,
    data
  }
}

// signup success
// export const signupSuccessAction = (token) => async (dispatch) => {
//   // headers에 activationToken 정보 담아서 get 요청
//   const response = await axios.get('https://localhost:5000/user/signup/activation/token', {
//     headers: {
//       'Authorization': `token ${token}`
//     }
//   })
//   dispatch({type: SIGN_UP_SUCCESS, response})
// }

// signup success test용
export const signupSuccessAction = (data) => {
  return {
    type: SIGN_UP_SUCCESS,
    // activation token 보여주기
    data
  }
}

// login
// export const loginAction = (data) => async (dispatch) => {
//   const response = await axios.post('https://localhost:5000/user/signin', data)
//   dispatch({ type: SIGN_IN, response })
// }

// login test용
export const signinAction = (data) => {
  return {
    type: SIGN_IN,
    data
  }
}

// logout
// export const logoutAction = (data) => async (dispatch) => {
//   const response = await axios.get('https://localhost:5000/user/signout', {
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
  console.log(state)
  switch (action.type) {
    case SIGN_UP_REQUEST:
      return {
        // error test
        // signupLoading: false,
        signupLoading: true,
        // error message test
        // signupError: '이미 가입된 이메일입니다',
        signupError: action.message,
        // activation token test
        activationToken: faker.random.uuid()
        // activationToken: action.activationToken
      }
    case SIGN_UP_SUCCESS:
      return {
        signupLoading: false,
        signedUp: true,
        // error message
        signupError: action.message
      }
    case SIGN_IN:
      return {
        isLoggedIn: true,
        // error message
        loginError: action.message,
        // user info
        userInfo: action.data,
        // access token
        accessToken: action.accessToken
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
