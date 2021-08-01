import React from 'react'
import { AppBar, Typography, IconButton, Popover, Box } from '@material-ui/core'
import useStyles from '../../assets/styles/MuiStyles/NavBarConpoStyle'
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash'
import RestoreIcon from '@material-ui/icons/Restore'

function NavBarComponent(props) {
  let renderDelPost = []
  const classes = useStyles()
  const [HideTrash, setHideTrash] = React.useState(true)
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
    setHideTrash(!HideTrash)
    if (HideTrash) {
      props.getDeletedPostRequest()
    }
  }

  const handleRestorePost = (id) => {
    props.restorePostRequest({ id })
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  if (props.listDeletedPost) {
    renderDelPost = props.listDeletedPost.map((delPost, index) => {
      return (
        <Box
          className={classes.itemPopover}
          key={index}
          style={{
            display: 'flex',
            backgroundColor: 'gray',
            padding: '10px 0',
            width: '90%',
            justifyContent: 'space-around',
            margin: '0 auto',
            borderRadius: '12px',
            alignItems: 'center'
          }}
        >
          <Box>{index + 1}</Box>
          <Box>{delPost.title}</Box>
          <Box>{delPost.creator}</Box>
          <Box>
            <IconButton onClick={() => handleRestorePost(delPost.id)}>
              <RestoreIcon />
            </IconButton>
          </Box>
        </Box>
      )
    })
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} varian='h2' align='center'>
          Memories
        </Typography>
      </AppBar>
      <IconButton
        style={{
          backgroundColor: 'white',
          padding: 20,
          borderRadius: 15,
          boxShadow: '2px 2px 5px #a2a2a2',
          marginLeft: '1rem'
        }}
        onClick={handleClick}
      >
        <RestoreFromTrashIcon />
      </IconButton>
      <Popover
        className={classes.popover}
        // id={id}
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
            width: '20rem',
            height: '30rem',
            backgroundColor: 'white',
            borderRadius: 15,
            boxShadow: '2px 2px 5px #a2a2a2'
          }}
        >
          <Typography
            align='center'
            style={{
              fontWeight: 600,
              fontSize: 'large',
              padding: '10px 0'
            }}
          >
            Deleted Posts
          </Typography>
          {renderDelPost}
        </Box>
      </Popover>
    </div>
  )
}

export default NavBarComponent
