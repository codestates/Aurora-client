import faker from 'faker'
import shortId from 'shortid'
import axios from 'axios'

// 배열 무작위 추출
function randomItem (a) {
  return a[Math.floor(Math.random() * a.length)]
}

// 샘플 이미지 생성
const generateImage = () => {
  const res = []
  const cnt = Math.floor(Math.random() * 4 + 1)
  for (let i = 0; i < cnt; i++) {
    res.push({
      src: faker.image.image()
    })
  }
  return res
}

// 샘플 포스트 데이터 생성
const generateDummyPost = (number) => {
  const res = []
  for (let i = 0; i < number; i++) {
    res.push(dummyPost())
  }
  return res
}

const dummyPost = () => {
  return {
    id: shortId.generate(),
    User: {
      id: shortId.generate(),
      username: faker.name.findName(),
      avatar: faker.image.avatar()
    },
    mood: randomItem(['sun', 'cloud', 'rain', 'moon']),
    content: faker.lorem.paragraph(),
    Images: generateImage(),
    Comments: [{
      User: {
        id: shortId.generate(),
        nickname: faker.name.findName()
      },
      content: faker.lorem.sentence()
    }]
  }
}

// 초기 데이터 구조
export const initialState = {
  me: {
    id: 1,
    username: '라이언',
    avatar: 'https://cdn.fakercloud.com/avatars/nateschulte_128.jpg'
  },
  Posts: [],
  loadPostsDone: false,
  loadPostsError: null,
  addPostDone: false,
  addPostDoneError: null,
  filterWeather: []
}

// 액션 상수
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS'
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE'
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS'
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE'
export const FILTER_WEATHER = 'FILTER_WEATHER'

// 액션 크리에이터
export const loadPost = () => {
  try {
    const data = generateDummyPost(5)
    return {
      type: LOAD_POST_SUCCESS,
      payload: data
    }
  } catch (err) {
    return {
      type: LOAD_POST_FAILURE,
      payload: err
    }
  }
}

// export const loadPost = () => async (dispatch) => {
//   try {
//     const response = await axios.get('url')
//     dispatch({
//       type: LOAD_POST_SUCCESS,
//       payload: response
//     })
//   } catch (err) {
//     dispatch({
//       type: LOAD_POST_FAILURE,
//       payload: err.response.data
//     })
//   }
// }

export const addPost = (data) => {
  try {
    const newPost = {
      id: shortId.generate(),
      User: data.me,
      mood: data.weather,
      content: data.text,
      Images: data.images,
      Comments: []
    }
    return {
      type: ADD_POST_SUCCESS,
      payload: newPost
    }
  } catch (err) {
    return {
      type: ADD_POST_FAILURE,
      payload: err
    }
  }
}

// export const addPost = (data) => async (dispatch) => {
//   try {
//     const response = await axios.post('url',data)
//     dispatch({
//       type: ADD_POST_SUCCESS,
//       payload: response
//     })
//   } catch (err) {
//     dispatch({
//       type: ADD_POST_FAILURE,
//       payload: err.response.data
//     })
//   }
// }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POST_SUCCESS:
      return {
        ...state,
        loadPostsDone: true,
        Posts: [...state.Posts, ...action.payload]
      }
    case LOAD_POST_FAILURE:
      return {
        ...state,
        loadPostsDone: false,
        loadPostsError: action.payload.message
      }
    case ADD_POST_SUCCESS:
      return {
        ...state,
        addPostDone: true,
        Posts: [action.payload, ...state.Posts]
      }
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostDone: false,
        addPostDoneError: action.payload.message
      }
    case FILTER_WEATHER:
      return {
        ...state,
        filterWeather: action.payload
      }
    default:
      return state
  }
}

export default reducer
