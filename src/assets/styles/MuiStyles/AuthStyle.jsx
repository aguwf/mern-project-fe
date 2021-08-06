import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1)
    }
  },
  paperAuth: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    borderRadius: '10px',
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(3)
    }
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#628395',
    '&:hover': {
      backgroundColor: '#628395'
    }
    // width: '50%',
    // transform: 'translateX(50%)'
  },
  googleButton: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1)
    // width: '50%',
    // transform: 'translateX(50%)'
  }
}))
