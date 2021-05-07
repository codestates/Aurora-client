import axios from 'axios'

// 액션 상수
export const FIRST_LOAD_ALL_POST_REQUEST = 'FIRST_LOAD_ALL_POST_REQUEST'
export const FIRST_LOAD_ALL_POST_SUCCESS = 'FIRST_LOAD_ALL_POST_SUCCESS'
export const FIRST_LOAD_ALL_POST_FAILURE = 'FIRST_LOAD_ALL_POST_FAILURE'

export const MORE_LOAD_ALL_POST_REQUEST = 'MORE_LOAD_ALL_POST_REQUEST'
export const MORE_LOAD_ALL_POST_SUCCESS = 'MORE_LOAD_ALL_POST_SUCCESS'
export const MORE_LOAD_ALL_POST_FAILURE = 'MORE_LOAD_ALL_POST_FAILURE'

export const FIRST_LOAD_POST_REQUEST = 'FIRST_LOAD_POST_REQUEST'
export const FIRST_LOAD_POST_SUCCESS = 'FIRST_LOAD_POST_SUCCESS'
export const FIRST_LOAD_POST_FAILURE = 'FIRST_LOAD_POST_FAILURE'

export const MORE_LOAD_POST_REQUEST = 'MORE_LOAD_POST_REQUEST'
export const MORE_LOAD_POST_SUCCESS = 'MORE_LOAD_POST_SUCCESS'
export const MORE_LOAD_POST_FAILURE = 'MORE_LOAD_POST_FAILURE'

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
export const CHANGE_TIME = 'CHANGE_TIME'

export const LOAD_ALL_STATISTICS_REQUEST = 'LOAD_ALL_STATISTICS_REQUEST'
export const LOAD_ALL_STATISTICS_SUCCESS = 'LOAD_ALL_STATISTICS_SUCCESS'
export const LOAD_ALL_STATISTICS_FAILURE = 'LOAD_ALL_STATISTICS_FAILURE'

export const LOAD_STATISTICS_REQUEST = 'LOAD_STATISTICS_REQUEST'
export const LOAD_STATISTICS_SUCCESS = 'LOAD_STATISTICS_SUCCESS'
export const LOAD_STATISTICS_FAILURE = 'LOAD_STATISTICS_FAILURE'

export const LOAD_LIKE_POST_REQUEST = 'LOAD_LIKE_POST_REQUEST'
export const LOAD_LIKE_POST_SUCCESS = 'LOAD_LIKE_POST_SUCCESS'
export const LOAD_LIKE_POST_FAILURE = 'LOAD_LIKE_POST_FAILURE'

export const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST'
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS'
export const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE'

export const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST'
export const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS'
export const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE'

// 액션 크리에이터
export const firstLoadAllPost = (time, accessToken) => async (dispatch) => {
  try {
    dispatch({
      type: FIRST_LOAD_ALL_POST_REQUEST
    })
    const headers = {
      Authorization: accessToken
    }
    const response = await axios.get(`http://ec2-52-78-155-108.ap-northeast-2.compute.amazonaws.com:5000/api/posts/all?page=${1}&createdAt=${time}`, { headers })
    dispatch({
      type: FIRST_LOAD_ALL_POST_SUCCESS,
      payload: response.data
    })
  } catch (err) {
    dispatch({
      type: FIRST_LOAD_ALL_POST_FAILURE,
      payload: err.response.data
    })
  }
}

export const moreLoadAllPost = (page, time, accessToken) => async (dispatch) => {
  try {
    dispatch({
      type: MORE_LOAD_ALL_POST_REQUEST
    })
    const headers = {
      Authorization: accessToken
    }
    const response = await axios.get(`http://ec2-52-78-155-108.ap-northeast-2.compute.amazonaws.com:5000/api/posts/all?page=${page}&createdAt=${time}`, { headers })
    dispatch({
      type: MORE_LOAD_ALL_POST_SUCCESS,
      payload: response.data
    })
  } catch (err) {
    dispatch({
      type: MORE_LOAD_ALL_POST_FAILURE,
      payload: err.response.data
    })
  }
}

export const firstLoadPost = (accessToken) => async (dispatch) => {
  try {
    dispatch({
      type: FIRST_LOAD_POST_REQUEST
    })
    const headers = {
      Authorization: accessToken
    }
    const response = await axios.get(`http://ec2-52-78-155-108.ap-northeast-2.compute.amazonaws.com:5000/api/posts?page=${1}`, { headers })
    dispatch({
      type: FIRST_LOAD_POST_SUCCESS,
      payload: response.data
    })
  } catch (err) {
    dispatch({
      type: FIRST_LOAD_POST_FAILURE,
      payload: err.response.data
    })
  }
}

export const moreLoadPost = (page, accessToken) => async (dispatch) => {
  try {
    dispatch({
      type: MORE_LOAD_POST_REQUEST
    })
    const headers = {
      Authorization: accessToken
    }
    const response = await axios.get(`http://ec2-52-78-155-108.ap-northeast-2.compute.amazonaws.com:5000/api/posts?page=${page}`, { headers })
    dispatch({
      type: MORE_LOAD_POST_SUCCESS,
      payload: response.data
    })
  } catch (err) {
    dispatch({
      type: MORE_LOAD_POST_FAILURE,
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
    const response = await axios.post('http://ec2-52-78-155-108.ap-northeast-2.compute.amazonaws.com:5000/api/post/', data, { headers })
    dispatch({
      type: ADD_POST_SUCCESS,
      payload: response.data.post
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
    const response = await axios.patch(`http://ec2-52-78-155-108.ap-northeast-2.compute.amazonaws.com:5000/api/post/${id}`, data, { headers })
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
    await axios.delete(`http://ec2-52-78-155-108.ap-northeast-2.compute.amazonaws.com:5000/api/post/${id}`, { headers })
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

export const addComment = (postId, data, accessToken) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_COMMENT_REQUEST
    })
    const headers = {
      Authorization: accessToken
    }
    const response = await axios.post(`http://ec2-52-78-155-108.ap-northeast-2.compute.amazonaws.com:5000/api/comment/${postId}`, data, { headers })
    dispatch({
      type: ADD_COMMENT_SUCCESS,
      payload: {
        postId,
        data: response.data
      }
    })
  } catch (err) {
    dispatch({
      type: ADD_COMMENT_FAILURE,
      payload: err.response.data
    })
  }
}

export const updateComment = (postId, commentId, data, accessToken) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_COMMENT_REQUEST
    })
    const headers = {
      Authorization: accessToken
    }
    await axios.patch(`http://ec2-52-78-155-108.ap-northeast-2.compute.amazonaws.com:5000/api/comment/${commentId}`, data, { headers })
    dispatch({
      type: UPDATE_COMMENT_SUCCESS,
      payload: {
        postId,
        commentId,
        content: data.content
      }
    })
  } catch (err) {
    dispatch({
      type: UPDATE_COMMENT_FAILURE,
      payload: err.response.data
    })
  }
}

export const removeComment = (postId, commentId, accessToken) => async (dispatch) => {
  try {
    dispatch({
      type: REMOVE_COMMENT_REQUEST
    })
    const headers = {
      Authorization: accessToken
    }
    await axios.delete(`http://ec2-52-78-155-108.ap-northeast-2.compute.amazonaws.com:5000/api/post/${postId}/comment/${commentId}`, { headers })
    dispatch({
      type: REMOVE_COMMENT_SUCCESS,
      payload: {
        postId,
        commentId
      }
    })
  } catch (err) {
    dispatch({
      type: REMOVE_COMMENT_FAILURE,
      payload: err.response.data
    })
  }
}

export const loadAllStatistics = () => async (dispatch) => {
  try {
    dispatch({
      type: LOAD_ALL_STATISTICS_REQUEST
    })
    const response = await axios.get('http://ec2-52-78-155-108.ap-northeast-2.compute.amazonaws.com:5000/api/all-moods')
    dispatch({
      type: LOAD_ALL_STATISTICS_SUCCESS,
      payload: response.data
    })
  } catch (err) {
    dispatch({
      type: LOAD_ALL_STATISTICS_FAILURE,
      payload: err.response.data
    })
  }
}

export const loadStatistics = (accessToken) => async (dispatch) => {
  try {
    dispatch({
      type: LOAD_STATISTICS_REQUEST
    })
    const headers = {
      Authorization: accessToken
    }
    const response = await axios.get('http://ec2-52-78-155-108.ap-northeast-2.compute.amazonaws.com:5000/api/moods', { headers })
    dispatch({
      type: LOAD_STATISTICS_SUCCESS,
      payload: response.data
    })
  } catch (err) {
    dispatch({
      type: LOAD_STATISTICS_FAILURE,
      payload: err.response.data
    })
  }
}

export const loadLikePost = (accessToken) => async (dispatch) => {
  try {
    dispatch({
      type: LOAD_LIKE_POST_REQUEST
    })
    const headers = {
      Authorization: accessToken
    }
    const response = await axios.get('http://ec2-52-78-155-108.ap-northeast-2.compute.amazonaws.com:5000/api/like', { headers })
    dispatch({
      type: LOAD_LIKE_POST_SUCCESS,
      payload: response.data.likes
    })
  } catch (err) {
    dispatch({
      type: LOAD_LIKE_POST_FAILURE,
      payload: err.response.data
    })
  }
}

export const likePost = (postId, accessToken) => async (dispatch) => {
  try {
    dispatch({
      type: LIKE_POST_REQUEST
    })
    const headers = {
      Authorization: accessToken
    }
    const data = {
      id: postId
    }
    const response = await axios.post('http://ec2-52-78-155-108.ap-northeast-2.compute.amazonaws.com:5000/api/like', data, { headers })
    dispatch({
      type: LIKE_POST_SUCCESS,
      payload: postId
    })
  } catch (err) {
    dispatch({
      type: LIKE_POST_FAILURE,
      payload: err.response.data
    })
  }
}

export const unlikePost = (postId, accessToken) => async (dispatch) => {
  try {
    dispatch({
      type: UNLIKE_POST_REQUEST
    })
    const headers = {
      Authorization: accessToken
    }
    const data = {
      id: postId
    }
    const response = await axios.delete('http://ec2-52-78-155-108.ap-northeast-2.compute.amazonaws.com:5000/api/like', { headers, data })
    dispatch({
      type: UNLIKE_POST_SUCCESS,
      payload: postId
    })
  } catch (err) {
    dispatch({
      type: UNLIKE_POST_FAILURE,
      payload: err.response.data
    })
  }
}
