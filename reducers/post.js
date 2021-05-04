import axios from 'axios'
import shortId from 'shortid'

import Produce from '../util/produce'

// 초기 데이터 구조
export const initialState = {
  Posts: [],
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  updatePostLoading: false,
  updatePostDone: false,
  updatePostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: true,
  addCommentDone: false,
  addCommentError: null,
  updateCommentLoading: false,
  updateCommentDone: false,
  updateCommentError: null,
  removeCommentLoading: true,
  removeCommentDone: false,
  removeCommentError: null,
  filterWeather: []
}

// 액션 상수
export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST'
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS'
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE'

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST'
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS'
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE'

export const UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST'
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS'
export const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE'

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST'
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS'
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE'

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST'
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS'
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE'

export const UPDATE_COMMENT_REQUEST = 'UPDATE_COMMENT_REQUEST'
export const UPDATE_COMMENT_SUCCESS = 'UPDATE_COMMENT_SUCCESS'
export const UPDATE_COMMENT_FAILURE = 'UPDATE_COMMENT_FAILURE'

export const REMOVE_COMMENT_REQUEST = 'REMOVE_COMMENT_REQUEST'
export const REMOVE_COMMENT_SUCCESS = 'REMOVE_COMMENT_SUCCESS'
export const REMOVE_COMMENT_FAILURE = 'REMOVE_COMMENT_FAILURE'

export const FILTER_WEATHER = 'FILTER_WEATHER'

// 액션 크리에이터
export const loadPost = (accessToken) => async (dispatch) => {
  try {
    dispatch({
      type: LOAD_POST_REQUEST
    })
    const headers = {
      Authorization: accessToken
    }
    const response = await axios.get(`http://localhost:5000/api/posts?page=${1}`, { headers })
    dispatch({
      type: LOAD_POST_SUCCESS,
      payload: response.data
    })
  } catch (err) {
    dispatch({
      type: LOAD_POST_FAILURE,
      payload: err.response.data
    })
  }
}

export const addPost = (data, accessToken) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_POST_REQUEST
    })
    const headers = {
      Authorization: accessToken
    }
    const response = await axios.post('http://localhost:5000/api/post/', data, { headers })
    dispatch({
      type: ADD_POST_SUCCESS,
      payload: response.data
    })
  } catch (err) {
    dispatch({
      type: ADD_POST_FAILURE,
      payload: err.response.data
    })
  }
}

export const updatePost = (id, data, accessToken) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_POST_REQUEST
    })
    const headers = {
      Authorization: accessToken
    }
    const response = await axios.patch(`http://localhost:5000/api/post/${id}`, data, { headers })
    dispatch({
      type: UPDATE_POST_SUCCESS,
      payload: response.data
    })
  } catch (err) {
    dispatch({
      type: UPDATE_POST_FAILURE,
      payload: err.response.data
    })
  }
}

export const removePost = (id, accessToken) => async (dispatch) => {
  try {
    dispatch({
      type: REMOVE_POST_REQUEST
    })
    const headers = {
      Authorization: accessToken
    }
    await axios.delete(`http://localhost:5000/api/post/${id}`, { headers })
    dispatch({
      type: REMOVE_POST_SUCCESS,
      payload: id
    })
  } catch (err) {
    dispatch({
      type: REMOVE_POST_FAILURE,
      payload: err.response.data
    })
  }
}

export const addComment = (data) => {
  try {
    const newComment = {
      _id: shortId.generate(),
      commentedBy: data.commentedBy,
      content: data.content
    }
    return {
      type: ADD_COMMENT_SUCCESS,
      payload: {
        postId: data.postId,
        data: newComment
      }
    }
  } catch (err) {
    return {
      type: ADD_COMMENT_FAILURE,
      payload: err
    }
  }
}

// export const addComment = (data) => async (dispatch) => {
//   try {
//     const response = await axios.post('url', data)
//     dispatch({
//       type: ADD_COMMENT_SUCCESS,
//       payload: response.data
//     })
//   } catch (err) {
//     dispatch({
//       type: ADD_COMMENT_FAILURE,
//       payload: err.response.data
//     })
//   }
// }

export const removeComment = (postId, commentId, accessToken) => {
  try {
    return {
      type: REMOVE_COMMENT_SUCCESS,
      payload: {
        postId,
        commentId
      }
    }
  } catch (err) {
    return {
      type: REMOVE_COMMENT_FAILURE,
      payload: err
    }
  }
}

const reducer = (state = initialState, action) => Produce(state, (draft) => {
  switch (action.type) {
    case LOAD_POST_REQUEST:
      draft.loadPostLoading = true
      draft.loadPostDone = false
      draft.loadPostError = null
      break
    case LOAD_POST_SUCCESS:
      draft.loadPostLoading = false
      draft.loadPostsDone = true
      draft.Posts = action.payload.posts
      break
    case LOAD_POST_FAILURE:
      draft.loadPostLoading = false
      draft.loadPostsError = action.payload.message
      break
    case ADD_POST_REQUEST:
      draft.addPostLoading = true
      draft.addPostDone = false
      draft.addPostError = null
      break
    case ADD_POST_SUCCESS:
      draft.addPostLoading = false
      draft.addPostDone = true
      draft.Posts.unshift(action.payload)
      break
    case ADD_POST_FAILURE:
      draft.addPostLoading = false
      draft.addPostsError = action.payload.message
      break
    case UPDATE_POST_REQUEST:
      draft.updatePostLoading = true
      draft.updatePostDone = false
      draft.updatePostError = null
      break
    case UPDATE_POST_SUCCESS:
      draft.updatePostLoading = false
      draft.updatePostDone = true
      draft.Posts.find((v) => v.id === action.payload.PostId).content = action.payload.content
      break
    case UPDATE_POST_FAILURE:
      draft.updatePostLoading = false
      draft.updatePostsError = action.payload.message
      break
    case REMOVE_POST_REQUEST:
      draft.removePostLoading = true
      draft.removePostDone = false
      draft.removePostError = null
      break
    case REMOVE_POST_SUCCESS:
      draft.removePostLoading = false
      draft.removePostDone = true
      draft.Posts = draft.Posts.filter((v) => v._id !== action.payload)
      break
    case REMOVE_POST_FAILURE:
      draft.removePostLoading = false
      draft.removePostError = action.payload.message
      break
    case ADD_COMMENT_REQUEST:
      draft.addCommentLoading = true
      draft.addCommentDone = false
      draft.addCommentError = null
      break
    case ADD_COMMENT_SUCCESS:
      draft.addCommentLoading = false
      draft.addCommentDone = true
      const addPost_ = draft.Posts.find((v) => v._id === action.payload.postId)
      addPost_.comments.unshift(action.payload.data)
      break
    case ADD_COMMENT_FAILURE:
      draft.addCommentLoading = false
      draft.addCommentError = action.payload.message
      break
    case REMOVE_COMMENT_REQUEST:
      draft.removeCommentLoading = true
      draft.removeCommentDone = false
      draft.removeCommentError = null
      break
    case REMOVE_COMMENT_SUCCESS:
      draft.removeCommentLoading = false
      draft.removeCommentDone = true
      const removePost_ = draft.Posts.find((v) => v._id === action.payload.postId)
      removePost_.comments = removePost_.comments.filter((v) => v._id !== action.payload.commentId)
      break
    case REMOVE_COMMENT_FAILURE:
      draft.removeCommentLoading = false
      draft.removeCommentError = action.payload.message
      break
    case FILTER_WEATHER:
      draft.filterWeather = action.payload
      break
    default:
      break
  }
})

export default reducer
