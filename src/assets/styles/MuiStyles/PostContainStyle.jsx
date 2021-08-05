import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  mainContainer: {
    position: 'relative'
  },
  smMargin: {
    margin: theme.spacing(1)
  },
  actionDiv: {},
  maxWidth: {
    maxWidth: '79.333333%',
    flexBasis: '100%'
  },
  sticky: {
    position: 'sticky',
    top: '5%'
  },
  marginTop: {
    marginTop: '2rem'
  },
  searchRoot: {
    maxWidth: '90%'
  },
  formRoot: {
    width: '19.666666%'
  },
  form: {
    maxWidth: '100%'
  },
  pagination: {
    borderRadius: 12
  }
}))
