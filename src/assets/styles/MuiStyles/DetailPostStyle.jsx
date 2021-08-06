import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  card: {
    display: 'flex',
    width: '100%',
    boxShadow: '3px 3px 6px #a2a2a2',
    borderRadius: 16,
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column'
    }
  },
  section: {
    borderRadius: '20px',
    margin: '20px',
    flex: 1
  },
  imageSection: {
    margin: '20px 10px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0
    }
  },
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '450px'
  },
  recommendedPosts: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  }
}))
