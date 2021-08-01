import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  mainContainer: {
    maxWidth: '1500px',
    position: 'relative'
  },
  smMargin: {
    margin: theme.spacing(1)
  },
  actionDiv: {
    maxWidth: '1500px'
  },
  maxWidth: {
    maxWidth: '66.333333%',
    flexBasis: '66.333333%'
  },
  sticky: {
    position: 'sticky',
    top: '5%'
  }
}))
