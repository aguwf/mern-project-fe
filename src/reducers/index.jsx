import { combineReducers } from 'redux'
import PostReducer from './PostReducers'
import AuthReducer from './AuthReducer'

export default combineReducers({
  posts: PostReducer,
  auth: AuthReducer
})
