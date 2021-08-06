/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { connect } from 'react-redux'
import { Container, Paper } from '@material-ui/core'
import NavBar from '../components/common/NavBarComponent'
import PostDetail from '../components/PostDetail/DetailPostComponent'
import * as postActions from '../actions/PostAction'
import loading from '../assets/images/loading-meo.gif'
import { useParams, useHistory } from 'react-router-dom'
import { logout } from '../actions/AuthAction'

export const DetailPostContainer = (props) => {
  const { id } = useParams()
  const history = useHistory()
  React.useEffect(() => {
    if (!props.detailPost) {
      props.getSinglePostRequest({ id, history })
    }
  }, [])
  console.log(props)
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
      {props.isFetching ? (
        <Paper>
          <img src={loading} width={'70%'} height={'70%'} alt={loading} />
        </Paper>
      ) : (
        <PostDetail
          detailPost={props.detailPost}
          recommendPost={props.recommendPost}
          likePostRequest={(data) => props.likePostRequest(data)}
          getSinglePostRequest={(data) => props.getSinglePostRequest(data)}
        />
      )}
    </Container>
  )
}

const mapStateToProps = (state) => ({
  recommendPost: state.detailPost.recommendPost,
  isFetching: state.detailPost.isFetching,
  detailPost: state.detailPost.detailPost
})

const mapDispatchToProps = (dispatch) => ({
  getPostRequest: (data) => dispatch(postActions.getPostRequest(data)),
  getDeletedPostRequest: (data) =>
    dispatch(postActions.getDeletedPostRequest(data)),
  restorePostRequest: (data) => dispatch(postActions.restorePostRequest(data)),
  searchPostRequest: (data) => dispatch(postActions.searchPostRequest(data)),
  likePostRequest: (data) => dispatch(postActions.likePostRequest(data)),
  logout: () => dispatch(logout()),
  getSinglePostRequest: (data) =>
    dispatch(postActions.getSinglePostRequest(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailPostContainer)
