import React from 'react'
import { connect } from 'react-redux'
import { Container, Grow, Grid, Paper } from '@material-ui/core'
import NavBar from '../components/common/NavBarComponent'
import * as postActions from '../actions/PostAction'

export const PostDetailContainer = (props) => {
  return (
    <Container>
      <NavBar
        getDeletedPostRequest={props.getDeletedPostRequest}
        listDeletedPost={props.listDeletedPost}
        restorePostRequest={(data) => props.restorePostRequest(data)}
        logout={() => props.logout()}
        searchPostRequest={(data) => props.searchPostRequest(data)}
        getPostRequest={(data) => props.getPostRequest(data)}
      />
    </Container>
  )
}

const mapStateToProps = (state) => ({
  listDeletedPost: state.posts.listDeletedPost
})

const mapDispatchToProps = (dispatch) => ({
  getPostRequest: (data) => dispatch(postActions.getPostRequest(data)),
  getDeletedPostRequest: (data) =>
    dispatch(postActions.getDeletedPostRequest(data)),
  restorePostRequest: (data) => dispatch(postActions.restorePostRequest(data)),
  searchPostRequest: (data) => dispatch(postActions.searchPostRequest(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailContainer)
