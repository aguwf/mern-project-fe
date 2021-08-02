import React from 'react'
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container
} from '@material-ui/core'
import { GoogleLogin } from 'react-google-login'
import LockOutlineIcon from '@material-ui/icons/LockOutlined'
import useStyles from '../../assets/styles/MuiStyles/AuthStyle'
import { useHistory } from 'react-router-dom'
import Input from '../common/Input'
import Icon from './Icon'

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
  const [ShowPass, setShowPass] = React.useState(true)
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
      history.push('/')
    } catch (error) {}
  }
  const googleFailure = (error) => {
    console.log('Google stupid' + error)
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
                color='primary'
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
