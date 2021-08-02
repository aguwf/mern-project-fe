import React from 'react'
import { connect } from 'react-redux'
import AuthComponent from '../components/auth/AuthComponent'
import NavBar from '../components/common/NavBarComponent'
import * as actions from '../actions/PostAction'
import {
  auth,
  logout,
  signinRequest,
  signupRequest
} from '../actions/AuthAction'

export const AuthContainer = (props) => {
  return (
    <div>
      <NavBar
        getDeletedPostRequest={props.getDeletedPostRequest}
        listDeletedPost={props.listDeletedPost}
        restorePostRequest={(data) => props.restorePostRequest(data)}
        logout={() => props.logout()}
      />
      <AuthComponent
        auth={(data) => props.auth(data)}
        signupRequest={(data) => {
          props.signupRequest(data)
        }}
        signinRequest={(data) => {
          props.signinRequest(data)
        }}
        logout={() => props.logout()}
      />
    </div>
  )
}

const mapStateToProps = (state) => ({
  listDeletedPost: state.posts.listDeletedPost
})

const mapDispatchToProps = (dispatch) => ({
  getDeletedPostRequest: (data) =>
    dispatch(actions.getDeletedPostRequest(data)),
  restorePostRequest: (data) => dispatch(actions.restorePostRequest(data)),
  likePostRequest: (data) => dispatch(actions.likePostRequest(data)),
  auth: (data) => dispatch(auth(data)),
  logout: () => dispatch(logout()),
  signupRequest: (data) => dispatch(signupRequest(data)),
  signinRequest: (data) => dispatch(signinRequest(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)
