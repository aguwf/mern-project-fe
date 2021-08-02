import { takeEvery, put } from 'redux-saga/effects'
import * as constants from '../constants'
import * as API from '../fetchAPI/AllAPI'
import * as actions from '../actions/AuthAction'

function* handleSignin(action) {
  try {
    const objFetch = {
      url: constants.DOMAIN + `/api/users/signin`,
      data: action.payload.FormData
    }

    const { data } = yield API.signin(objFetch)

    yield put(actions.signinSuccess({ data }))

    yield put(actions.auth(data))

    action.payload.history.push('/')
  } catch (error) {
    yield put(actions.signinFailure(error))
  }
}

function* handleSignup(action) {
  try {
    const objFetch = {
      url: constants.DOMAIN + `/api/users/signup`,
      data: action.payload.FormData
    }

    const { data } = yield API.signup(objFetch)

    console.log(data, 'auth saga')

    yield put(actions.signupSuccess({ data }))

    yield put(actions.auth(data))

    action.payload.history.push('/')
  } catch (error) {
    yield put(actions.signupFailure(error))
  }
}

export const AuthSaga = [
  takeEvery(constants.SIGNIN_REQUEST, handleSignin),
  takeEvery(constants.SIGNUP_REQUEST, handleSignup)
]
