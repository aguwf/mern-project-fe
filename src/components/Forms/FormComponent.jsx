import React, { useState, useEffect } from 'react'
import { TextField, Paper, Button, Typography } from '@material-ui/core'
import useStyles from '../../assets/styles/MuiStyles/FormCompoStyle'

function FormComponent(props) {
  const classes = useStyles()
  const User = JSON.parse(localStorage.getItem('profile'))
  const [PostData, setPostData] = useState({
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
    id: '',
    defaultImg:
      'https://www.microtracteurs-lebosse.com/uploads/produit/image/thumb_w1200h1200zc3q100__default.jpg'
  })

  useEffect(() => {
    if (props.PostUpdate) {
      if (
        props.PostUpdate.id !== '' ||
        (props.PostUpdate.id !== PostData.id && PostData.id === '')
      ) {
        props.PostUpdate.defaultImg =
          'https://www.microtracteurs-lebosse.com/uploads/produit/image/thumb_w1200h1200zc3q100__default.jpg'
        setPostData(props.PostUpdate)
      }
    }
  }, [PostData.id, props.PostUpdate])

  const handleSubmit = () => {
    if (PostData.message && PostData.title && PostData.tags) {
      PostData.id
        ? props.updatePostRequest({
            PostData: { ...PostData, name: User?.result?.name },
            textSearch: props.textSearch
          })
        : props.addPostRequest({
            PostData: { ...PostData, name: User?.result?.name },
            textSearch: props.textSearch
          })
    }
    handleClear()
    props.clearPost()
  }
  const handleClear = () => {
    setPostData({
      id: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: '',
      defaultImg:
        'https://www.microtracteurs-lebosse.com/uploads/produit/image/thumb_w1200h1200zc3q100__default.jpg'
    })
    props.clearPost()
  }
  const handleDeleteImg = () => {
    setPostData({ ...PostData, selectedFile: '' })
  }
  const handleChangeInput = (event) => {
    const { name, value } = event.target
    if (name === 'tags') {
      setPostData({ ...PostData, [name]: value.split(',') })
    } else {
      setPostData({ ...PostData, [name]: value })
    }
  }
  const handleChangeFile = (event) => {
    if (event.target.files[0]) {
      const file = event.target.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        setPostData({
          ...PostData,
          selectedFile: reader.result
        })
      }
    }
  }

  if (!User?.result?.name) {
    return (
      <Paper>
        <Typography variant='h6' align='center'>
          Please sign in to create your memories and like other's memories
        </Typography>
      </Paper>
    )
  }

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete={'off'}
        noValidate
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <Typography variant={'h5'}>Creating memory</Typography>
        <TextField
          className={classes.marginTopBottom}
          name={'title'}
          variant={'outlined'}
          label={'Title'}
          required
          fullWidth
          value={PostData.title}
          onChange={handleChangeInput}
        />
        <TextField
          className={classes.marginTopBottom}
          name={'message'}
          variant={'outlined'}
          required
          label={'Message'}
          fullWidth
          value={PostData.message}
          onChange={handleChangeInput}
        />
        <TextField
          className={classes.marginTopBottom}
          name={'tags'}
          variant={'outlined'}
          required
          label={'Tags'}
          fullWidth
          value={PostData.tags}
          onChange={handleChangeInput}
        />
        <div className={classes.formImg}>
          <span className={classes.deleteImg} onClick={handleDeleteImg}>
            X
          </span>
          <img
            className={classes.formImage}
            width={'70%'}
            src={
              PostData.selectedFile
                ? PostData.selectedFile
                : PostData.defaultImg
            }
            alt='Form'
          />
        </div>
        <div className={classes.fileInput}>
          <input
            hidden={true}
            type='file'
            name='form-file'
            id='form-file-input'
            onChange={handleChangeFile}
          />
          <label htmlFor='form-file-input'>
            <Button color='primary' variant='contained' component='span'>
              Upload image
            </Button>
          </label>
        </div>
        <Button
          variant='contained'
          size='large'
          // type='submit'
          color='primary'
          fullWidth
          className={classes.buttonSubmit}
          onClick={handleSubmit}
        >
          Submit
        </Button>
        <Button
          variant='contained'
          size='small'
          color='secondary'
          fullWidth
          className={classes.buttonSubmit}
          onClick={handleClear}
        >
          Clear
        </Button>
      </form>
    </Paper>
  )
}

export default FormComponent
