import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  media: {
    height: '5rem',
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken'
  },
  border: {
    border: 'solid'
  },
  fullHeightCard: {
    height: '80%'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '12px',
    boxShadow: '2px 2px 5px #a2a2a2',
    width: '20%',
    height: '100%',
    minHeight: '300px',
    margin: '21px 26px',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      margin: 0,
      marginBottom: '25px'
    }
  },
  content: {
    overflowY: 'scroll',
    height: '75px',
    '&::-webkit-scrollbar': {
      // display: 'none'
      width: '3px'
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'gray',
      borderRadius: '20px'
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: '#b30000'
    }
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white'
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
    zIndex: '100'
  },
  grid: {
    display: 'flex'
  },
  details: {
    display: 'flex',
    margin: '20px',
    flexWrap: 'wrap'
  },
  title: {
    padding: '0 16px',
    fontWeight: '500',
    fontSize: '20px'
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    bottom: 0
  },
  likeTxt: {
    color: '#F8485E'
  },
  likePost: {
    padding: 5,
    color: '#F8485E',
    '&:hover': {
      backgroundColor: '#f7cad0'
    }
  },
  cardButton: {
    display: 'block',
    textAlign: 'initial'
  }
}))
