import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1)
    }
  },
  paper: {
    padding: theme.spacing(2),
    boxShadow: '2px 2px 6px #a2a2a2',
    borderRadius: 10,
    position: 'sticky',
    top: '5%',
    [theme.breakpoints.up('xs')]: {
      position: 'relative'
    }
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
    textAlign: 'center'
  },
  buttonSubmit: {
    marginBottom: 10
  },
  formImage: {
    margin: '10px 0',
    borderRadius: 10
  },
  marginTopBottom: {
    margin: '10px 0'
  },
  formImg: {
    textAlign: 'center',
    position: 'relative'
  },
  deleteImg: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    color: '#fff',
    backgroundColor: '#333',
    position: 'absolute',
    top: '8%',
    right: '18%',
    cursor: 'pointer',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}))
