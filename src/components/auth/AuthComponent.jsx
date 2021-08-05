import React from 'react'
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container
} from '@material-ui/core'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import LockOutlineIcon from '@material-ui/icons/LockOutlined'
import useStyles from '../../assets/styles/MuiStyles/AuthStyle'
import { useHistory } from 'react-router-dom'
import Input from '../common/Input'
import Icon from './Icon'
import { firebaseApp } from './base'
import firebase from 'firebase'

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPass: ''
}

function AuthComponent(props) {
  const classes = useStyles()
  const history = useHistory()
  const [ShowPass, setShowPass] = React.useState(false)
  const [isSignUp, setIsSignUp] = React.useState(false)
  const [FormData, setFormData] = React.useState(initialState)

  const handleShowPassword = () => {
    setShowPass((preShowPass) => !preShowPass)
  }
  const switchMode = () => {
    setIsSignUp((preIsSignUp) => !preIsSignUp)
    setShowPass(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (isSignUp) {
      props.signupRequest({ FormData, history })
    } else {
      props.signinRequest({ FormData, history })
    }
  }

  const handleChangeInput = (event) => {
    const { name, value } = event.target
    setFormData({ ...FormData, [name]: value })
  }

  const googleSuccess = async (res) => {
    try {
      const result = res?.profileObj
      const token = res?.tokenId
      props.auth({ result, token })
    } catch (error) {}
  }
  const googleFailure = (error) => {
    console.log('Google stupid' + error)
  }

  const authHandler = async (authData) => {
    const user = authData.user
    console.log(authData, user)
    props.auth({
      result: {
        name: user.displayName,
        email: user.email,
        imageUrl: user.photoURL,
        facebookId: user.uid
      },
      token: user.Aa
    })
    history.push('/')
  }

  const authenticate = (provider) => {
    console.log(provider)
    const authProvider = new firebase.auth[`${provider}AuthProvider`]()
    firebaseApp.auth().signInWithPopup(authProvider).then(authHandler)
  }

  const logout = async () => {
    await firebase.auth().signOut()
  }

  return (
    <Container component='main' maxWidth='xs'>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlineIcon />
        </Avatar>
        <Typography variant='h5'>{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
        <form onSubmit={handleSubmit} className={classes.form}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Input
                  name={'firstName'}
                  label={'First Name'}
                  onChange={handleChangeInput}
                  half
                />
                <Input
                  name={'lastName'}
                  label={'Last Name'}
                  onChange={handleChangeInput}
                  half
                />
              </>
            )}
            <Input
              name='email'
              label='Email Address'
              onChange={handleChangeInput}
              type='email'
            />
            <Input
              name='password'
              label='Password'
              onChange={handleChangeInput}
              type={ShowPass ? 'text' : 'password'}
              handleShowPassword={handleShowPassword}
            />
            {isSignUp && (
              <Input
                name='confirmPass'
                label='Confirm Password'
                onChange={handleChangeInput}
                type={ShowPass ? 'text' : 'password'}
                handleShowPassword={handleShowPassword}
              />
            )}
          </Grid>
          <Button
            type='Submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </Button>
          <GoogleLogin
            clientId='417602221863-fq9pmp9m0av9rriopp6ea10cfb9g9ouu.apps.googleusercontent.com'
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                style={{
                  backgroundColor: '#D54C4C',
                  color: 'white'
                }}
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant='contained'
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy='single_host_origin'
          />
          <Button
            type='Submit'
            fullWidth
            style={{
              backgroundColor: '#035397',
              color: 'white'
            }}
            variant='contained'
            className={classes.googleButton}
            onClick={() => authenticate('Facebook')}
          >
            Login with Facebook
          </Button>
          <Button
            type='Submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.googleButton}
            style={{
              backgroundColor: '#2B2B2B'
            }}
            onClick={() => authenticate('Github')}
          >
            Login with Github
          </Button>
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Button onClick={switchMode}>
                {isSignUp
                  ? 'Already have account ? Sign In'
                  : `Don't have account ? Sign Up`}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default AuthComponent
