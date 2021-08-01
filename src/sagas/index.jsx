import { PostSaga } from './PostSagas'
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
  yield all([...PostSaga])
}
