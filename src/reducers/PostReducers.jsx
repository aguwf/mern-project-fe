import * as constants from '../constants'

const INIT_STATE = {
  isFetching: '',
  listPost: [],
  listDeletedPost: [],
  pageIndex: 1,
  totalPage: 1,
  textSearch: '',
  error: false,
  errMsg: ''
}

const PostReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case constants.GET_POST_REQUEST:
    case constants.GET_DELETED_POST_REQUEST:
    case constants.ADD_POST_REQUEST:
    case constants.UPDATE_POST_REQUEST:
    case constants.DELETE_POST_REQUEST:
    case constants.RESTORE_POST_REQUEST:
    case constants.LIKE_POST_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case constants.ADD_POST_SUCCESS:
    case constants.UPDATE_POST_SUCCESS:
    case constants.DELETE_POST_SUCCESS:
    case constants.RESTORE_POST_SUCCESS:
    case constants.LIKE_POST_SUCCESS:
      return {
        ...state,
        isFetching: true
      }
    case constants.GET_POST_SUCCESS:
      return {
        ...state,
        listPost: action.payload.listPost,
        pageIndex: action.payload.pageIndex,
        totalPage: action.payload.totalPage,
        textSearch: '',
        isFetching: false
      }
    case constants.GET_DELETED_POST_SUCCESS:
      return {
        ...state,
        listDeletedPost: action.payload.listDeletedPost,
        isFetching: false
      }
    case constants.GET_POST_FAILURE:
    case constants.GET_DELETED_POST_FAILURE:
    case constants.ADD_POST_FAILURE:
    case constants.UPDATE_POST_FAILURE:
    case constants.DELETE_POST_FAILURE:
    case constants.RESTORE_POST_FAILURE:
    case constants.LIKE_POST_FAILURE:
      return {
        ...state,
        isFetching: false
      }
    default:
      return { state }
  }
}

export default PostReducer
