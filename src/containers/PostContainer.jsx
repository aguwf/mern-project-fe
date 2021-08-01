import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Post from '../components/Post/PostComponent'
import Form from '../components/Forms/FormComponent'
import NavBar from '../components/common/NavBarComponent'
import { Container, Grow, Grid } from '@material-ui/core'
import * as actions from '../actions/PostAction'
import useStyles from '../assets/styles/MuiStyles/PostContainStyle'

export const PostContainer = (props) => {
  const classes = useStyles()
  const [PostData, setPostData] = useState(null)
  const onPostUpdate = (data) => {
    setPostData(data)
  }
  const clearPost = () => {
    console.log(111)
    setPostData(null)
  }
  useEffect(() => {
    !props.listPost && props.getPostRequest({ pageIndex: 1 })
  }, [props])
  return (
    <Container maxWidth='lg' className={classes.mainContainer}>
      <NavBar
        getDeletedPostRequest={props.getDeletedPostRequest}
        listDeletedPost={props.listDeletedPost}
        restorePostRequest={(data) => props.restorePostRequest(data)}
      />
      <Grow in className={classes.actionDiv}>
        <Container>
          <Grid
            container
            justifyContent='space-between'
            alignItems='stretch'
            spacing={4}
          >
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
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form
                addPostRequest={(data) => props.addPostRequest(data)}
                updatePostRequest={(data) => props.updatePostRequest(data)}
                PostUpdate={PostData}
                clearPost={clearPost}
                textSearch={props.textSearch}
              />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
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
    likePostRequest: (data) => dispatch(actions.likePostRequest(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer)
