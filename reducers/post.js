import { ADD_COMMENT_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, CHANGE_TIME, FILTER_WEATHER, FIRST_LOAD_ALL_POST_FAILURE, FIRST_LOAD_ALL_POST_REQUEST, FIRST_LOAD_ALL_POST_SUCCESS, FIRST_LOAD_POST_FAILURE, FIRST_LOAD_POST_REQUEST, FIRST_LOAD_POST_SUCCESS, LIKE_POST_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LOAD_ALL_STATISTICS_FAILURE, LOAD_ALL_STATISTICS_REQUEST, LOAD_ALL_STATISTICS_SUCCESS, LOAD_LIKE_POST_FAILURE, LOAD_LIKE_POST_REQUEST, LOAD_LIKE_POST_SUCCESS, LOAD_STATISTICS_FAILURE, LOAD_STATISTICS_REQUEST, LOAD_STATISTICS_SUCCESS, MORE_LOAD_ALL_POST_FAILURE, MORE_LOAD_ALL_POST_REQUEST, MORE_LOAD_ALL_POST_SUCCESS, MORE_LOAD_POST_FAILURE, MORE_LOAD_POST_REQUEST, MORE_LOAD_POST_SUCCESS, REMOVE_COMMENT_FAILURE, REMOVE_COMMENT_REQUEST, REMOVE_COMMENT_SUCCESS, REMOVE_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, UNLIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UPDATE_COMMENT_FAILURE, UPDATE_COMMENT_REQUEST, UPDATE_COMMENT_SUCCESS, UPDATE_POST_FAILURE, UPDATE_POST_REQUEST, UPDATE_POST_SUCCESS } from '../actions/post'
import Produce from '../util/produce'

// 초기 데이터 구조
export const initialState = {
  Posts: [],
  loadAllStatisticsLoading: false,
  loadAllStatisticsDone: false,
  loadAllStatisticsError: null,
  loadStatisticsLoading: false,
  loadStatisticsDone: false,
  loadStatisticsError: null,
  firstLoadAllPostLoading: false,
  firstLoadAllPostDone: false,
  firstLoadAllPostError: null,
  moreLoadAllPostLoading: false,
  moreLoadAllPostDone: false,
  moreLoadAllPostError: null,
  firstLoadPostLoading: false,
  firstLoadPostDone: false,
  firstLoadPostError: null,
  moreLoadPostLoading: false,
  moreLoadPostDone: false,
  moreLoadPostError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  updatePostLoading: false,
  updatePostDone: false,
  updatePostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  updateCommentLoading: false,
  updateCommentDone: false,
  updateCommentError: null,
  removeCommentLoading: false,
  removeCommentDone: false,
  removeCommentError: null,
  filterWeather: [],
  totalPosts: 0,
  Time: '',
  Statistics: null,
  likePosts: [],
  loadLikePostLoading: false,
  loadLikePostDone: false,
  loadLikePostError: null,
  likePostLoading: false,
  likePostDone: false,
  likePostError: null,
  unlikePostLoading: false,
  unlikePostDone: false,
  unlikePostError: null
}

const reducer = (state = initialState, action) => Produce(state, (draft) => {
  switch (action.type) {
    case FIRST_LOAD_ALL_POST_REQUEST:
      draft.firstLoadAllPostLoading = true
      draft.firstLoadAllPostDone = false
      draft.firstLoadAllPostError = null
      break
    case FIRST_LOAD_ALL_POST_SUCCESS:
      draft.firstLoadAllPostLoading = false
      draft.firstLoadAllPostDone = true
      draft.Posts = action.payload.posts
      draft.totalPosts = action.payload.totalPosts
      break
    case FIRST_LOAD_ALL_POST_FAILURE:
      draft.firstLoadAllPostLoading = false
      draft.firstLoadAllPostError = action.payload.message
      break
    case MORE_LOAD_ALL_POST_REQUEST:
      draft.moreLoadAllPostLoading = true
      draft.moreLoadAllPostDone = false
      draft.moreLoadAllPostError = null
      break
    case MORE_LOAD_ALL_POST_SUCCESS:
      draft.moreLoadAllPostLoading = false
      draft.moreLoadAllPostDone = true
      draft.Posts = draft.Posts.concat(action.payload.posts)
      draft.totalPosts = action.payload.totalPosts
      break
    case MORE_LOAD_ALL_POST_FAILURE:
      draft.moreLoadAllPostLoading = false
      draft.moreLoadAllPostError = action.payload.message
      break
    case FIRST_LOAD_POST_REQUEST:
      draft.firstLoadPostLoading = true
      draft.firstLoadPostDone = false
      draft.firstLoadPostError = null
      break
    case FIRST_LOAD_POST_SUCCESS:
      draft.firstLoadPostLoading = false
      draft.firstLoadPostDone = true
      draft.Posts = action.payload.posts
      draft.totalPosts = action.payload.totalPosts
      break
    case FIRST_LOAD_POST_FAILURE:
      draft.firstLoadPostLoading = false
      draft.firstLoadPostError = action.payload.message
      break
    case MORE_LOAD_POST_REQUEST:
      draft.moreLoadPostLoading = true
      draft.moreLoadPostDone = false
      draft.moreLoadPostError = null
      break
    case MORE_LOAD_POST_SUCCESS:
      draft.moreLoadPostLoading = false
      draft.moreLoadPostDone = true
      draft.Posts = draft.Posts.concat(action.payload.posts)
      draft.totalPosts = action.payload.totalPosts
      break
    case MORE_LOAD_POST_FAILURE:
      draft.moreLoadPostLoading = false
      draft.moreLoadPostError = action.payload.message
      break
    case ADD_POST_REQUEST:
      draft.addPostLoading = true
      draft.addPostDone = false
      draft.addPostError = null
      break
    case ADD_POST_SUCCESS:
      draft.addPostLoading = false
      draft.addPostDone = true
      // draft.Posts.unshift(action.payload)
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
    case ADD_COMMENT_SUCCESS: {
      draft.addCommentLoading = false
      draft.addCommentDone = true
      const addPost_ = draft.Posts.find((v) => v._id === action.payload.postId)
      addPost_.comments.push(action.payload.data)
      break
    }
    case ADD_COMMENT_FAILURE:
      draft.addCommentLoading = false
      draft.addCommentError = action.payload.message
      break
    case UPDATE_COMMENT_REQUEST:
      draft.updateCommentLoading = true
      draft.updateCommentDone = false
      draft.updateCommentError = null
      break
    case UPDATE_COMMENT_SUCCESS: {
      draft.updateCommentLoading = false
      draft.updateCommentDone = true
      const updatePost_ = draft.Posts.find((v) => v._id === action.payload.postId)
      updatePost_.comments.find((v) => v._id === action.payload.commentId).content = action.payload.content
      break
    }
    case UPDATE_COMMENT_FAILURE:
      draft.updateCommentLoading = false
      draft.updateCommentError = action.payload.message
      break
    case REMOVE_COMMENT_REQUEST:
      draft.removeCommentLoading = true
      draft.removeCommentDone = false
      draft.removeCommentError = null
      break
    case REMOVE_COMMENT_SUCCESS: {
      draft.removeCommentLoading = false
      draft.removeCommentDone = true
      const removePost_ = draft.Posts.find((v) => v._id === action.payload.postId)
      removePost_.comments = removePost_.comments.filter((v) => v._id !== action.payload.commentId)
      break
    }
    case REMOVE_COMMENT_FAILURE:
      draft.removeCommentLoading = false
      draft.removeCommentError = action.payload.message
      break
    case FILTER_WEATHER:
      draft.filterWeather = action.payload
      break
    case CHANGE_TIME:
      draft.Time = action.payload
      break
    case LOAD_ALL_STATISTICS_REQUEST:
      draft.loadAllStatisticsLoading = true
      draft.loadAllStatisticsDone = false
      draft.loadAllStatisticsError = null
      draft.Statistics = null
      break
    case LOAD_ALL_STATISTICS_SUCCESS:
      draft.loadAllStatisticsLoading = false
      draft.loadAllStatisticsDone = true
      draft.Statistics = action.payload
      break
    case LOAD_ALL_STATISTICS_FAILURE:
      draft.loadAllStatisticsLoading = false
      draft.loadAllStatisticsError = action.payload.message
      break
    case LOAD_STATISTICS_REQUEST:
      draft.loadStatisticsLoading = true
      draft.loadStatisticsDone = false
      draft.loadStatisticsError = null
      draft.Statistics = null
      break
    case LOAD_STATISTICS_SUCCESS:
      draft.loadStatisticsLoading = false
      draft.loadStatisticsDone = true
      draft.Statistics = action.payload
      break
    case LOAD_STATISTICS_FAILURE:
      draft.loadStatisticsLoading = false
      draft.loadStatisticsError = action.payload.message
      break
    case LOAD_LIKE_POST_REQUEST:
      draft.loadLikePostLoading = true
      draft.loadLikePostDone = false
      draft.loadLikePostError = null
      break
    case LOAD_LIKE_POST_SUCCESS:
      draft.likePosts = action.payload
      draft.loadLikePostLoading = false
      draft.likePostDone = true
      break
    case LOAD_LIKE_POST_FAILURE:
      draft.loadLikePostDone = false
      draft.loadLikePostError = action.payload.message
      break
    case LIKE_POST_REQUEST:
      draft.likePostLoading = true
      draft.likePostDone = false
      draft.likePostError = null
      break
    case LIKE_POST_SUCCESS:
      draft.likePosts.push(action.payload)
      draft.likePostLoading = false
      draft.likePostDone = true
      break
    case LIKE_POST_FAILURE:
      draft.likePostLoading = false
      draft.likePostError = action.payload.message
      break
    case UNLIKE_POST_REQUEST:
      draft.unlikePostLoading = true
      draft.unlikePostDone = false
      draft.unlikePostError = null
      break
    case UNLIKE_POST_SUCCESS:
      draft.likePosts = draft.likePosts.filter((v) => v !== action.payload)
      draft.unlikePostLoading = false
      draft.unlikePostDone = true
      break
    case UNLIKE_POST_FAILURE:
      draft.unlikePostLoading = false
      draft.unlikePostError = action.payload.message
      break
    default:
      break
  }
})

export default reducer
