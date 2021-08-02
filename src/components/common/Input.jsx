import React from 'react'
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

function Input({
  name,
  half,
  label,
  autoFocus,
  type,
  handleShowPassword,
  onChange
}) {
  return (
    <Grid item xs={12} md={half ? 6 : 12}>
      <TextField
        name={name}
        onChange={onChange}
        variant='outlined'
        required
        fullWidth
        label={label}
        autoFocus={autoFocus}
        type={type}
        InputProps={
          name === 'password' || name === 'confirmPass'
            ? {
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton onClick={handleShowPassword}>
                      {type === 'password' ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }
            : null
        }
      ></TextField>
    </Grid>
  )
}

export default Input
