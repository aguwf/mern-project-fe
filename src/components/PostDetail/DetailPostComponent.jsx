/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Typography, Paper, Box, Divider } from '@material-ui/core'
import moment from 'moment'
import useStyles from '../../assets/styles/MuiStyles/DetailPostStyle'
import { useHistory } from 'react-router-dom'

function DetailPostComponent(props) {
  const classes = useStyles()
  const history = useHistory()
  const { detailPost, recommendPost } = props
  console.log(recommendPost)

  const handleSearchTag = (tag) => {}

  if (!detailPost) {
    return null
  }

  return (
    <Paper
      style={{
        borderRadius: 15
      }}
    >
      <Box className={classes.card}>
        <Box className={classes.section}>
          <Typography variant='h3' component='h2'>
            {detailPost.title}
          </Typography>
          <Typography
            className={classes.details}
            gutterBottom
            variant='h6'
            color='textSecondary'
            component='h2'
          >
            Tags :
            {detailPost.tags.map((tag, index) => (
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
          <Typography gutterBottom variant='body1' component='p'>
            {detailPost.message}
          </Typography>
          <Typography variant='h6'>Created by: {detailPost.name}</Typography>
          <Typography variant='body1'>
            {moment(detailPost.createAt).fromNow()}
          </Typography>
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant='body1'>
            <strong>Realtime Chat - coming soon!</strong>
          </Typography>
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant='body1'>
            <strong>Comments - coming soon!</strong>
          </Typography>
          <Divider style={{ margin: '20px 0' }} />
        </Box>
        <Box className={classes.imageSection}>
          <img
            className={classes.media}
            src={
              detailPost.selectedFile ||
              'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
            }
            alt={detailPost.title}
          />
        </Box>
      </Box>
      {!!recommendPost.length && (
        <Box className={classes.section}>
          <Typography gutterBottom variant='h5'>
            You might also like:
          </Typography>
          <Divider />
          <Box className={classes.recommendedPosts}>
            {recommendPost.map(
              ({ title, name, message, likes, selectedFile, _id }) => (
                <Box
                  style={{ margin: '20px', cursor: 'pointer' }}
                  onClick={() =>
                    props.getSinglePostRequest({ id: _id, history })
                  }
                  key={_id}
                >
                  <Typography gutterBottom variant='h6'>
                    {title}
                  </Typography>
                  <Typography gutterBottom variant='subtitle2'>
                    {name}
                  </Typography>
                  <Typography gutterBottom variant='subtitle2'>
                    {message}
                  </Typography>
                  <Typography gutterBottom variant='subtitle1'>
                    Like: {likes.length}
                  </Typography>
                  <img src={selectedFile} alt={title} width='200px' />
                </Box>
              )
            )}
          </Box>
        </Box>
      )}
    </Paper>
  )
}

export default DetailPostComponent
