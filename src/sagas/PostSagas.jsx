import { takeEvery, put } from 'redux-saga/effects'
import * as constants from '../constants'
import * as API from '../fetchAPI/AllAPI'
import * as actions from '../actions/PostAction'

function* handleGetPost(action) {
  try {
    const objFetch = {
      url:
        constants.DOMAIN +
        `/api/posts?_page=${action.payload.pageIndex}&_limit=${constants.LIMIT}`
    }
    const response = yield API.getPost(objFetch)
    yield put(
      actions.getPostSuccess({
        listPost: response.listPost,
        totalPage: response.totalPage,
        pageIndex: action.payload.pageIndex
      })
    )
  } catch (error) {
    yield put(actions.getPostFailure({ error }))
  }
}

function* handleGetDeletedPost(action) {
  try {
    const objFetch = {
      url: constants.DOMAIN + `/api/posts/deleted`
    }
    const response = yield API.getPost(objFetch)
    yield put(
      actions.getDeletedPostSuccess({
        listDeletedPost: response.listDeletedPost
      })
    )
  } catch (error) {
    yield put(actions.getDeletedPostFailure({ error }))
  }
}

function* handleAddPost(action) {
  try {
    const objFetch = {
      url: constants.DOMAIN + `/api/posts?q=${action.payload.textSearch}`,
      method: constants.HTTP_POST,
      data: action.payload.PostData
    }
    const response = yield API.addPost(objFetch)
    console.log(response)
    yield put(actions.addPostSuccess({ response }))
    yield put(actions.getPostRequest({ pageIndex: response.data.totalPage }))
  } catch (error) {
    yield put(actions.getPostFailure({ error }))
  }
}

function* handleUpdatePost(action) {
  try {
    const objFetch = {
      url:
        constants.DOMAIN +
        `/api/posts/${action.payload.PostData.id}?q=${action.payload.textSearch}`,
      method: constants.HTTP_PUT,
      data: action.payload.PostData
    }
    const response = yield API.updatePost(objFetch)
    yield put(actions.updatePostSuccess({ response }))
    yield put(actions.getPostRequest({ pageIndex: 1 }))
  } catch (error) {
    yield put(actions.updatePostFailure(error))
  }
}

function* handleDeletePost(action) {
  try {
    const objFetch = {
      url:
        constants.DOMAIN +
        `/api/posts/${action.payload.id}?q=${action.payload.textSearch}`,
      method: constants.HTTP_DELETE
    }
    const response = yield API.deletePost(objFetch)
    yield put(actions.deletePostSuccess({ response }))
    yield put(actions.getPostRequest({ pageIndex: 1 }))
  } catch (error) {
    yield put(actions.updatePostFailure(error))
  }
}
function* handleRestorePost(action) {
  try {
    const objFetch = {
      url: constants.DOMAIN + `/api/posts/restore/${action.payload.id}`,
      method: constants.HTTP_PUT
    }
    const response = yield API.updatePost(objFetch)
    yield put(actions.restorePostSuccess({ response }))
    yield put(actions.getPostRequest({ pageIndex: 1 }))
    yield put(actions.getDeletedPostRequest())
  } catch (error) {
    yield put(actions.restorePostFailure(error))
  }
}

function* handleLikePost(action) {
  try {
    const objFetch = {
      url: constants.DOMAIN + `/api/posts/likePost/${action.payload.id}`,
      method: constants.HTTP_PUT
    }
    const response = yield API.updatePost(objFetch)
    yield put(actions.likePostSuccess({ response }))
    yield put(actions.getPostRequest({ pageIndex: 1 }))
  } catch (error) {
    yield put(actions.likePostFailure(error))
  }
}

export const PostSaga = [
  takeEvery(constants.GET_POST_REQUEST, handleGetPost),
  takeEvery(constants.GET_DELETED_POST_REQUEST, handleGetDeletedPost),
  takeEvery(constants.ADD_POST_REQUEST, handleAddPost),
  takeEvery(constants.UPDATE_POST_REQUEST, handleUpdatePost),
  takeEvery(constants.DELETE_POST_REQUEST, handleDeletePost),
  takeEvery(constants.RESTORE_POST_REQUEST, handleRestorePost),
  takeEvery(constants.LIKE_POST_REQUEST, handleLikePost)
]
