import * as constants from '../constants'

const INIT_STATE = {
  isFetching: '',
  detailPost: '',
  listPost: [],
  error: false,
  errMsg: ''
}

const DetailPostReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case constants.GET_RECOMMEND_POST_REQUEST:
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
    case constants.GET_RECOMMEND_POST_FAILURE:
      return {
        ...state,
        isFetching: false
      }
    default:
      return { state }
  }
}

export default DetailPostReducer
