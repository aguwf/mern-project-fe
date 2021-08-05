import React from 'react'
import {
  AppBar,
  Typography,
  IconButton,
  Popover,
  Box,
  Button,
  Toolbar,
  Avatar,
  InputBase
} from '@material-ui/core'
import useStyles from '../../assets/styles/MuiStyles/NavBarConpoStyle'
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash'
import RestoreIcon from '@material-ui/icons/Restore'
import SearchIcon from '@material-ui/icons/Search'
import { Link, useHistory, useLocation } from 'react-router-dom'
import decode from 'jwt-decode'

function NavBarComponent(props) {
  let renderDelPost = []
  const classes = useStyles()
  const history = useHistory()
  const location = useLocation()
  const [HideTrash, setHideTrash] = React.useState(true)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [User, setUser] = React.useState(null)

  React.useEffect(() => {
    const token = User?.token
    if (token) {
      const decodedToken = decode(token)

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout()
      }
    }
    setUser(JSON.parse(localStorage.getItem('profile')))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

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

  const handleLogout = () => {
    props.logout()
    history.push('/')
    setUser(null)
  }

  const open = Boolean(anchorEl)

  if (props.listDeletedPost) {
    renderDelPost = props.listDeletedPost.map((delPost, index) => {
      return (
        <Box className={classes.itemPopover} key={index}>
          <Box>{index + 1}</Box>
          <Box>{delPost.title}</Box>
          <Box>{delPost.name}</Box>
          <Box>
            <IconButton
              onClick={() => handleRestorePost(delPost.id)}
              className={classes.restoreBtn}
            >
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
        <Box>
          <Typography
            component={Link}
            to={'/'}
            className={classes.heading}
            align='center'
          >
            Memories
          </Typography>
        </Box>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder='Search…'
            inputProps={{ 'aria-label': 'search' }}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
          />
        </div>
        <Toolbar className={classes.toolbar}>
          {User ? (
            <div className={classes.profile}>
              <Avatar
                className={classes.purple}
                alt={User.result.name}
                src={User.result.imageUrl}
              >
                {User.result.name.charAt(0)}
              </Avatar>
              <Typography className={classes.UserName} variant='h6'>
                {User.result.name}
              </Typography>
              <Button
                size='small'
                variant='contained'
                className={classes.logout}
                color='secondary'
                onClick={handleLogout}
              >
                Log Out
              </Button>
            </div>
          ) : (
            <Box className={classes.tool}>
              <Button
                size='medium'
                color='secondary'
                variant='contained'
                className={`${classes.borderRadius}`}
                component={Link}
                to={'/auth'}
              >
                Sign Up
              </Button>
              {/* <Button
                size='small'
                color='default'
                variant='outlined'
                className={`${classes.borderRadius} ${classes.marginLeft} ${classes.loginBtn}`}
              >
                Log In
              </Button> */}
            </Box>
          )}
          {User?.result?.name && (
            <Box className={`${classes.trash} ${classes.marginLeft}`}>
              <IconButton onClick={handleClick} color='secondary'>
                <RestoreFromTrashIcon />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>
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
