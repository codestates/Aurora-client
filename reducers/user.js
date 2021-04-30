// 초기 데이터 구조
export const initialState = {
  isLoggedIn: false,
  user: null
}

// 액션 상수
const LOG_IN = 'LOG_IN'
const LOG_OUT = 'LOG_OUT'

// dispatch 함수
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
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLoggedIn: true,
        user: action.data
      }
    case LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null
      }
    default:
      return state
  }
}

export default reducer
