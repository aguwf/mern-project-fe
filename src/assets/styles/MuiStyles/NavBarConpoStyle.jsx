import { makeStyles } from '@material-ui/core/styles'

export default makeStyles({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 0',
    textTransform: 'uppercase',
    width: '90%'
  },
  popover: {
    marginTop: '30px'
  },
  itemPopover: {
    '&:hover': {
      backgroundColor: 'black'
    }
  },
  heading: {
    color: 'rgba(0, 183, 255, 1)'
  },
  image: {
    marginLeft: '15px'
  }
})
