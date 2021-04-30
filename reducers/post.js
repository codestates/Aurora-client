import faker from 'faker'
// 임시 데이터
const dummyPost1 = {
  id: 2,
  User: {
    id: 2,
    username: '어피치',
    avatar: faker.image.avatar()
  },
  mood: 'sun',
  content: '두번째 게시물',
  Images: [{
    src: 'https://placeimg.com/300/500/people'
  },
  {
    src: 'https://placeimg.com/300/500/architecture'
  }],
  Comments: [{
    User: {
      id: 1,
      username: '라이언'
    },
    content: '첫번째 댓글'
  }]
}

const dummyPost2 = {
  id: 3,
  User: {
    id: 3,
    username: '무지',
    avatar: faker.image.avatar()
  },
  mood: 'rain',
  content: '세번째 게시물',
  Images: [{
    src: 'https://placeimg.com/300/500/nature'
  },
  {
    src: 'https://placeimg.com/300/500/animals'
  },
  {
    src: 'https://placeimg.com/300/500/tech'
  }
  ],
  Comments: [{
    User: {
      id: 1,
      username: '라이언'
    },
    content: '첫번째 댓글'
  }]
}

// 초기 데이터 구조
export const initialState = {
  Posts: [{
    id: 1,
    User: {
      id: 1,
      username: '라이언',
      avatar: faker.image.avatar()
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
  }, dummyPost1, dummyPost2]
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
        Posts: [action.data, ...state.Posts]
      }
    default:
      return state
  }
}

export default reducer
