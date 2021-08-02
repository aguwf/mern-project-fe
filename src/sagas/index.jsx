import { PostSaga } from './PostSagas'
import { AuthSaga } from './AuthSaga'
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
  yield all([...PostSaga, ...AuthSaga])
}
