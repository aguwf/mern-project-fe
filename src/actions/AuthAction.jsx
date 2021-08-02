import * as constants from '../constants'
import { createAction } from 'redux-actions'

const auth = createAction(constants.AUTH)
const logout = createAction(constants.LOGOUT)

const signupRequest = createAction(constants.SIGNUP_REQUEST)
const signupSuccess = createAction(constants.SIGNUP_SUCCESS)
const signupFailure = createAction(constants.SIGNUP_FAILURE)

const signinRequest = createAction(constants.SIGNIN_REQUEST)
const signinSuccess = createAction(constants.SIGNIN_SUCCESS)
const signinFailure = createAction(constants.SIGNIN_FAILURE)

export {
  auth,
  logout,
  signinRequest,
  signinSuccess,
  signinFailure,
  signupRequest,
  signupSuccess,
  signupFailure
}
