// 초기 데이터 구조
export const initialState = {
  Posts: [{
    id: 1,
    User: {
      id: 1,
      username: '라이언'
    },
    mood: 'sun',
    content: '첫번째 게시물',
    Images: [{
      src: 'https://placeimg.com/300/500/any'
    }],
    Comments: [{
      User: {
        id: 1,
        username: '어피치'
      },
      content: '첫번째 댓글'
    }]
  }]
}

// 임시 데이터
const dummyPost = {
  id: 2,
  User: {
    id: 2,
    username: '어피치'
  },
  mood: 'sun',
  content: '두번째 게시물',
  Images: [{
    src: 'https://placeimg.com/300/500/any'
  }],
  Comments: [{
    User: {
      id: 1,
      username: '라이언'
    },
    content: '첫번째 댓글'
  }]
}

// 액션 상수
const ADD_POST = 'ADD_POST'

// dispatch 함수
export const addPost = {
  type: ADD_POST
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        Posts: [dummyPost, ...state.Posts]
      }
    default:
      return state
  }
}

export default reducer
