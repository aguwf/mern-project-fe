import React from 'react'
import {
  Card,
  CardHeader,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions
} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import FavoriteIcon from '@material-ui/icons/Favorite'
import DeleteIcon from '@material-ui/icons/Delete'
import ShareIcon from '@material-ui/icons/Share'
import useStyles from '../../assets/styles/MuiStyles/PostCompoStyle'
import moment from 'moment'
import Swal from 'sweetalert2'

function PostComponent(props) {
  const classes = useStyles()
  let renderPost = []

  const handleUpdate = (post) => {
    props.onPostUpdate(post)
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        props.deletePostRequest({ id, textSearch: props.textSearch })
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success')
      }
    })
  }

  const handleLikePost = (id) => {
    props.likePostRequest({ id })
  }
  if (props.listPost) {
    renderPost = props.listPost.map((post, index) => {
      return (
        <Card key={index} className={classes.card}>
          <CardHeader
            className={classes.overlay2}
            action={
              <IconButton
                aria-label='settings'
                onClick={() => handleUpdate(post)}
                style={{ color: 'white' }}
                size={'small'}
              >
                <EditIcon />
              </IconButton>
            }
          />
          <div className={classes.overlay}>
            <div style={{ width: '22rem' }}>
              <Typography variant={'h4'} style={{ width: '80%' }}>
                {post.title}
              </Typography>
            </div>
            <Typography variant={'body2'}>
              {moment(post.createAt).fromNow()}
            </Typography>
          </div>
          <CardMedia className={classes.media} image={post.selectedFile} />
          <CardContent>
            <Typography
              className={classes.details}
              variant='body2'
              color='textSecondary'
              component='p'
            >
              Tags : {post.tags.map((tag) => ' #' + tag)}
            </Typography>
            <Typography
              className={classes.title}
              variant='body2'
              color='textSecondary'
              component='p'
              gutterBottom
            >
              {post.message}
            </Typography>
            <Typography
              className={classes.title}
              variant='body2'
              color='textSecondary'
              component='p'
            >
              Người đăng : {post.creator}
            </Typography>
          </CardContent>
          <CardActions disableSpacing className={classes.cardActions}>
            <div className={classes.likeTxt}>
              {post.likeCount}
              <IconButton
                className={classes.likePost}
                aria-label='add to favorites'
                onClick={() => handleLikePost(post.id)}
              >
                <FavoriteIcon />
              </IconButton>
            </div>
            <IconButton aria-label='share'>
              <ShareIcon />
            </IconButton>
            <IconButton
              aria-label='share'
              className={classes.deleteBtn}
              onClick={() => handleDelete(post.id)}
            >
              <DeleteIcon />
            </IconButton>
          </CardActions>
        </Card>
      )
    })
  }

  return (
    <div>
      <h1>Posts</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>{renderPost}</div>
    </div>
  )
}

export default PostComponent
