import * as constants from '../constants'
import { createAction } from 'redux-actions'

const getPostRequest = createAction(constants.GET_POST_REQUEST)
const getPostSuccess = createAction(constants.GET_POST_SUCCESS)
const getPostFailure = createAction(constants.GET_POST_FAILURE)

const getDeletedPostRequest = createAction(constants.GET_DELETED_POST_REQUEST)
const getDeletedPostSuccess = createAction(constants.GET_DELETED_POST_SUCCESS)
const getDeletedPostFailure = createAction(constants.GET_DELETED_POST_FAILURE)

const addPostRequest = createAction(constants.ADD_POST_REQUEST)
const addPostSuccess = createAction(constants.ADD_POST_SUCCESS)
const addPostFailure = createAction(constants.ADD_POST_FAILURE)

const updatePostRequest = createAction(constants.UPDATE_POST_REQUEST)
const updatePostSuccess = createAction(constants.UPDATE_POST_SUCCESS)
const updatePostFailure = createAction(constants.UPDATE_POST_FAILURE)

const deletePostRequest = createAction(constants.DELETE_POST_REQUEST)
const deletePostSuccess = createAction(constants.DELETE_POST_SUCCESS)
const deletePostFailure = createAction(constants.DELETE_POST_FAILURE)

const restorePostRequest = createAction(constants.RESTORE_POST_REQUEST)
const restorePostSuccess = createAction(constants.RESTORE_POST_SUCCESS)
const restorePostFailure = createAction(constants.RESTORE_POST_FAILURE)

const likePostRequest = createAction(constants.LIKE_POST_REQUEST)
const likePostSuccess = createAction(constants.LIKE_POST_SUCCESS)
const likePostFailure = createAction(constants.LIKE_POST_FAILURE)

const getSinglePostRequest = createAction(constants.GET_SINGLE_POST_REQUEST)
const getSinglePostSuccess = createAction(constants.GET_SINGLE_POST_SUCCESS)
const getSinglePostFailure = createAction(constants.GET_SINGLE_POST_FAILURE)

const searchPostRequest = createAction(constants.SEARCH_POST_REQUEST)
const searchPostSuccess = createAction(constants.SEARCH_POST_SUCCESS)
const searchPostFailure = createAction(constants.SEARCH_POST_FAILURE)

export {
  getPostRequest,
  getPostFailure,
  getPostSuccess,
  getDeletedPostRequest,
  getDeletedPostFailure,
  getDeletedPostSuccess,
  addPostRequest,
  addPostSuccess,
  addPostFailure,
  updatePostRequest,
  updatePostSuccess,
  updatePostFailure,
  deletePostRequest,
  deletePostSuccess,
  deletePostFailure,
  restorePostRequest,
  restorePostSuccess,
  restorePostFailure,
  likePostRequest,
  likePostSuccess,
  likePostFailure,
  getSinglePostRequest,
  getSinglePostSuccess,
  getSinglePostFailure,
  searchPostRequest,
  searchPostSuccess,
  searchPostFailure
}
