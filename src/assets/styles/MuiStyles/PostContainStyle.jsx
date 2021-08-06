import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  mainContainer: {
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      padding: 0
    }
  },
  smMargin: {
    margin: theme.spacing(1)
  },
  actionDiv: {
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column-reverse'
    }
  },
  maxWidth: {
    maxWidth: '79.333333%',
    flexBasis: '100%',
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%',
      flexBasis: '100%'
    }
  },
  sticky: {
    position: 'sticky',
    top: '5%',
    [theme.breakpoints.down('md')]: {
      position: 'relative'
    }
  },
  marginTop: {
    marginTop: '2rem'
  },
  searchRoot: {
    maxWidth: '90%'
  },
  formRoot: {
    width: '19.666666%',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  },
  form: {
    maxWidth: '100%'
  },
  pagination: {
    borderRadius: 12
  }
}))
