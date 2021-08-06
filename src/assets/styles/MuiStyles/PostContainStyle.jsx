import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  mainContainer: {
    position: 'relative',
    [theme.breakpoints.up('xs')]: {
      padding: 0
    }
  },
  smMargin: {
    margin: theme.spacing(1)
  },
  actionDiv: {
    [theme.breakpoints.up('xs')]: {
      flexDirection: 'column-reverse'
    }
  },
  maxWidth: {
    maxWidth: '79.333333%',
    flexBasis: '100%',
    [theme.breakpoints.up('xs')]: {
      maxWidth: '100%',
      flexBasis: '100%'
    }
  },
  sticky: {
    position: 'sticky',
    top: '5%',
    [theme.breakpoints.up('xs')]: {
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
    [theme.breakpoints.up('xs')]: {
      width: '100%'
      // height: '285px'
    }
  },
  form: {
    maxWidth: '100%'
  },
  pagination: {
    borderRadius: 12
  }
}))
