import { makeStyles } from '@material-ui/core/styles'

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken'
  },
  border: {
    border: 'solid'
  },
  fullHeightCard: {
    height: '100%'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '12px',
    boxShadow: '2px 2px 5px #a2a2a2',
    width: '398px',
    minHeight: '300px',
    margin: '21px 26px',
    position: 'relative'
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
    justifyContent: 'space-between',
    margin: '20px'
  },
  title: {
    padding: '0 16px',
    fontWeight: '500',
    fontSize: '20px'
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between'
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
  }
})
