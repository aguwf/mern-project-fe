import * as constants from '../constants'

const INIT_STATE = {
  authData: null
}

const AuthReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case constants.AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.payload }))
      return {
        ...state,
        authData: action?.payload
      }
    case constants.LOGOUT:
      localStorage.removeItem('profile')
      return {
        ...state,
        authData: null
      }
    case constants.SIGNIN_REQUEST:
    case constants.SIGNUP_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case constants.SIGNIN_SUCCESS:
      return {
        ...state,
        isFetching: false
      }
    case constants.SIGNUP_SUCCESS:
      return {
        ...state,
        isFetching: false
      }
    case constants.SIGNIN_FAILURE:
    case constants.SIGNUP_FAILURE:
      return {
        ...state,
        isFetching: false
      }
    default:
      return { state }
  }
}

export default AuthReducer
