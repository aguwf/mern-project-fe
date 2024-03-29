import React from 'react'
import {
  Card,
  CardHeader,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Box,
  Popover,
  Button,
  ButtonBase
} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import DeleteIcon from '@material-ui/icons/Delete'
import ShareIcon from '@material-ui/icons/Share'
import useStyles from '../../assets/styles/MuiStyles/PostCompoStyle'
import moment from 'moment'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
import {
  FacebookShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon
} from 'react-share'

function PostComponent(props) {
  const classes = useStyles()
  const history = useHistory()
  let renderPost = []
  const User = JSON.parse(localStorage.getItem('profile'))

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleUpdate = (post) => {
    props.onPostUpdate(post)
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
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

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleGetPost = (id) => {
    props.getSinglePostRequest({ id, history })
  }

  const handleSearchTag = (tag) => {
    props.searchPostRequest({ tag, pageIndex: 1 })
  }

  const open = Boolean(anchorEl)
  if (props.listPost) {
    renderPost = props.listPost.map((post, index) => {
      const Likes = () => {
        if (post.likes.length > 0) {
          return post.likes.find(
            (like) =>
              like ===
              (User?.result?.googleId ||
                User?.result?._id ||
                User?.result?.facebookId)
          ) ? (
            <>
              <FavoriteIcon fontSize='small' />
              &nbsp;
              {post.likes.length > 2
                ? `You and ${post.likes.length - 1} others`
                : `${post.likes.length} like${
                    post.likes.length > 1 ? 's' : ''
                  }`}
            </>
          ) : (
            <>
              <FavoriteBorderIcon fontSize='small' />
              &nbsp;{post.likes.length}{' '}
              {post.likes.length === 1 ? 'Like' : 'Likes'}
            </>
          )
        }

        return (
          <>
            <FavoriteBorderIcon fontSize='small' />
            &nbsp;Like
          </>
        )
      }
      return (
        <Card key={index} className={classes.card}>
          <ButtonBase
            component='span'
            className={classes.cardButton}
            onClick={() => handleGetPost(post.id)}
          >
            <CardHeader
              className={classes.overlay2}
              action={
                (User?.result?.googleId === post?.creator ||
                  User?.result?._id === post?.creator) && (
                  <IconButton
                    aria-label='settings'
                    onClick={() => handleUpdate(post)}
                    style={{ color: 'white' }}
                    size={'small'}
                  >
                    <EditIcon />
                  </IconButton>
                )
              }
            />
            <div className={classes.overlay}>
              <div style={{ width: '16rem' }}>
                <Typography variant={'h5'} style={{ width: '80%' }}>
                  {post.title}
                </Typography>
              </div>
              <Typography variant={'body2'}>
                {moment(post.createAt).fromNow()}
              </Typography>
            </div>
            <CardMedia className={classes.media} image={post.selectedFile} />
          </ButtonBase>

          <Typography
            className={classes.details}
            variant='body2'
            color='textSecondary'
            component='p'
          >
            Tags :
            {post.tags.map((tag, index) => (
              <span
                key={index}
                style={{
                  cursor: 'pointer'
                }}
                onClick={() => handleSearchTag(tag)}
              >
                #{tag}
              </span>
            ))}
          </Typography>

          <ButtonBase
            component='span'
            className={classes.cardButton}
            onClick={() => handleGetPost(post.id)}
          >
            <CardContent className={classes.content}>
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
                Người đăng : {post.name}
              </Typography>
            </CardContent>
          </ButtonBase>

          <CardActions disableSpacing className={classes.cardActions}>
            <div className={classes.likeTxt}>
              <Button
                disabled={!User?.result}
                className={classes.likePost}
                aria-label='add to favorites'
                onClick={() => handleLikePost(post.id)}
              >
                <Likes />
              </Button>
            </div>

            <IconButton aria-label='share' onClick={handleClick}>
              <ShareIcon />
            </IconButton>

            {(User?.result?.googleId === post?.creator ||
              User?.result?._id === post?.creator) && (
              <IconButton
                aria-label='share'
                className={classes.deleteBtn}
                onClick={() => handleDelete(post.id)}
              >
                <DeleteIcon />
              </IconButton>
            )}
          </CardActions>

          <Popover
            className={classes.popover}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}
          >
            <Box
              p={2}
              style={{
                width: '12rem',
                backgroundColor: 'white',
                borderRadius: 15,
                boxShadow: '2px 2px 5px #a2a2a2'
              }}
            >
              <Box justifyContent='center' alignItems='center'>
                <FacebookShareButton
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingBottom: '20px'
                  }}
                  url={'https://meosieubeo.netlify.app/'}
                  quote={'Share to facebook'}
                  className='Demo__some-network__share-button'
                >
                  <FacebookIcon
                    size={32}
                    round
                    style={{ marginRight: '10px' }}
                  />
                  Share to facebook
                </FacebookShareButton>
              </Box>

              <Box justifyContent='center' alignItems='center'>
                <FacebookMessengerShareButton
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingBottom: '20px'
                  }}
                  url={'https://meosieubeo.netlify.app/'}
                  appId='1019021612204810'
                  className='Demo__some-network__share-button'
                >
                  <FacebookMessengerIcon
                    size={32}
                    round
                    style={{ marginRight: '10px' }}
                  />
                  Share to messenger
                </FacebookMessengerShareButton>
              </Box>

              <Box justifyContent='center' alignItems='center'>
                <TwitterShareButton
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingBottom: '20px'
                  }}
                  url={'https://meosieubeo.netlify.app/'}
                  quote={'Share to facebook'}
                  className='Demo__some-network__share-button'
                >
                  <TwitterIcon
                    size={32}
                    round
                    style={{ marginRight: '10px' }}
                  />
                  Share to twitter
                </TwitterShareButton>
              </Box>

              <Box justifyContent='center' alignItems='center'>
                <TelegramShareButton
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingBottom: '20px'
                  }}
                  url={'https://meosieubeo.netlify.app/'}
                  quote={'Share to facebook'}
                  className='Demo__some-network__share-button'
                >
                  <TelegramIcon
                    size={32}
                    round
                    style={{ marginRight: '10px' }}
                  />
                  Share to telegram
                </TelegramShareButton>
              </Box>
            </Box>
          </Popover>
        </Card>
      )
    })
  }

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>{renderPost}</div>
    </div>
  )
}

export default PostComponent
