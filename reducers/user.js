// import axios from 'axios'

// 초기 데이터 구조
export const initialState = {
  // test용
  // isLoggedIn: true,
  isLoggedIn: false,
  loginError: null,
  userInfo: null,
  activationToken: '1234567'
}

// 액션 상수
const LOG_IN = 'LOG_IN'
const LOG_OUT = 'LOG_OUT'

// dispatch 함수
// export const loginAction = (data) => async (dispatch) => {
//   const response = await axios.post('https://localhost:5000/signin', data)
//   dispatch({ type: LOG_IN, response })
// }

// test용
export const loginAction = (data) => {
  return {
    type: LOG_IN,
    data
  }
}
export const logoutAction = (data) => {
  return {
    type: LOG_OUT
  }
}

// reducer
const reducer = (state = initialState, action) => {
  console.log(state)
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLoggedIn: true,
        // error message
        loginError: action.message,
        // user info
        userInfo: action.data,
        // access token
        accessToken: action.accessToken
      }
    case LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
        userInfo: null
      }
    default:
      return state
  }
}

export default reducer
