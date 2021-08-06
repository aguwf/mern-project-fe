import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Post from '../components/Post/PostComponent'
import Form from '../components/Forms/FormComponent'
import NavBar from '../components/common/NavBarComponent'
import Pagination from '../components/common/PaginationComponent'
import { Container, Grow, Grid, Paper } from '@material-ui/core'
import * as actions from '../actions/PostAction'
import { logout } from '../actions/AuthAction'
import useStyles from '../assets/styles/MuiStyles/PostContainStyle'
import loading from '../assets/images/loading-meo.gif'

export const PostContainer = (props) => {
  const classes = useStyles()
  const [PostData, setPostData] = useState(null)
  const onPostUpdate = (data) => {
    setPostData(data)
  }
  const clearPost = () => {
    setPostData(null)
  }
  useEffect(() => {
    !props.listPost &&
      !props.textSearch &&
      props.getPostRequest({ pageIndex: 1 })
  }, [])
  return (
    <Container maxWidth={false} className={classes.mainContainer}>
      <NavBar
        getDeletedPostRequest={() => props.getDeletedPostRequest()}
        listDeletedPost={props.listDeletedPost}
        restorePostRequest={(data) => props.restorePostRequest(data)}
        logout={() => props.logout()}
        searchPostRequest={(data) => props.searchPostRequest(data)}
        getPostRequest={(data) => props.getPostRequest(data)}
      />
      <Grow in>
        <Container maxWidth={false}>
          <Grid
            className={classes.actionDiv}
            container
            justifyContent='space-between'
            alignItems='stretch'
            spacing={4}
          >
            {props.isFetching ? (
              <img
                src={loading}
                alt={'meooooooooooo'}
                width={'70%'}
                height={'70%'}
              />
            ) : (
              <Grid item xs={12} sm={7} className={classes.maxWidth}>
                <Post
                  listPost={props.listPost}
                  totalPage={props.totalPage}
                  pageIndex={props.pageIndex}
                  textSearch={props.textSearch}
                  onPostUpdate={onPostUpdate}
                  deletePostRequest={(data) => props.deletePostRequest(data)}
                  likePostRequest={(data) => props.likePostRequest(data)}
                  clearPost={clearPost}
                  searchPostRequest={(data) => props.searchPostRequest(data)}
                  getSinglePostRequest={(data) =>
                    props.getSinglePostRequest(data)
                  }
                />
              </Grid>
            )}
            <Grid className={`${classes.formRoot} ${classes.sticky}`}>
              <Grid
                item
                xs={12}
                sm={4}
                className={`${classes.form} ${classes.marginTop} ${classes.sticky}`}
              >
                <Form
                  addPostRequest={(data) => props.addPostRequest(data)}
                  updatePostRequest={(data) => props.updatePostRequest(data)}
                  PostUpdate={PostData}
                  clearPost={clearPost}
                  textSearch={props.textSearch}
                />
                <Paper
                  className={`${classes.pagination} ${classes.marginTop}`}
                  elevation={6}
                >
                  <Pagination
                    totalPage={props.totalPage}
                    textSearch={props.textSearch}
                    getPostRequest={(data) => props.getPostRequest(data)}
                    searchPostRequest={(data) => props.searchPostRequest(data)}
                  />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.posts.isFetching,
    listPost: state.posts.listPost,
    listDeletedPost: state.posts.listDeletedPost,
    pageIndex: state.posts.pageIndex,
    totalPage: state.posts.totalPage,
    textSearch: state.posts.textSearch
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPostRequest: (data) => dispatch(actions.getPostRequest(data)),
    getDeletedPostRequest: (data) =>
      dispatch(actions.getDeletedPostRequest(data)),
    addPostRequest: (data) => dispatch(actions.addPostRequest(data)),
    updatePostRequest: (data) => dispatch(actions.updatePostRequest(data)),
    deletePostRequest: (data) => dispatch(actions.deletePostRequest(data)),
    restorePostRequest: (data) => dispatch(actions.restorePostRequest(data)),
    likePostRequest: (data) => dispatch(actions.likePostRequest(data)),
    logout: () => dispatch(logout()),
    getSinglePostRequest: (data) =>
      dispatch(actions.getSinglePostRequest(data)),
    searchPostRequest: (data) => dispatch(actions.searchPostRequest(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer)
