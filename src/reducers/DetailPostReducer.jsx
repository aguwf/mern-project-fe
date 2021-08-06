import * as constants from '../constants'

const INIT_STATE = {
  isFetching: '',
  detailPost: '',
  recommendPost: [],
  listPost: [],
  error: false,
  errMsg: ''
}

const DetailPostReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case constants.GET_RECOMMEND_POST_REQUEST:
    case constants.GET_SINGLE_POST_REQUEST:
      console.log(state)
      return {
        ...state,
        isFetching: true
      }
    case constants.GET_RECOMMEND_POST_SUCCESS:
      return {
        ...state,
        listPost: action.payload.listPost,
        pageIndex: action.payload.pageIndex,
        totalPage: action.payload.totalPage,
        textSearch: '',
        isFetching: false
      }
    case constants.GET_SINGLE_POST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        detailPost: action.payload.response.post,
        recommendPost: action.payload.response.recommendPost
      }
    case constants.GET_RECOMMEND_POST_FAILURE:
    case constants.GET_SINGLE_POST_FAILURE:
      return {
        ...state,
        isFetching: false
      }
    default:
      return { state }
  }
}

export default DetailPostReducer
