import { combineReducers } from 'redux'
import PostReducer from './PostReducers'
import AuthReducer from './AuthReducer'
import DetailPostReducer from './DetailPostReducer'

export default combineReducers({
  posts: PostReducer,
  auth: AuthReducer,
  detailPost: DetailPostReducer
})
