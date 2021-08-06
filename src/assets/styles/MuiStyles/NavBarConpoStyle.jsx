import { alpha, makeStyles } from '@material-ui/core/styles'
import { deepPurple } from '@material-ui/core/colors'

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 0',
    textTransform: 'uppercase',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      margin: '11px 0',
      padding: 0
    }
  },
  popover: {
    marginTop: '30px'
  },
  itemPopover: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '0 auto',
    borderRadius: '12px',
    alignItems: 'center',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#F3F3F3'
    }
  },
  restoreBtn: {
    '&:hover': {
      backgroundColor: '#F3F3F3',
      color: '#86C4BA'
    }
  },
  heading: {
    color: 'rgba(0, 183, 255, 1)',
    textDecoration: 'none',
    fontSize: 30,
    fontWeight: 700,
    paddingLeft: '3rem',
    [theme.breakpoints.down('md')]: {
      paddingLeft: 0
    }
  },
  title: {
    [theme.breakpoints.down('md')]: {
      margin: '1rem'
    }
  },
  image: {
    marginLeft: '15px'
  },
  marginLeft: {
    marginLeft: '20px'
  },
  trash: {
    marginRight: '20px',
    transition: 'all 0.5s',
    border: '1px solid #c3c3c3',
    borderRadius: 10,
    '&:hover': {
      border: '1px solid #ffc9c9',
      backgroundColor: '#ffc9c9'
    },
    [theme.breakpoints.down('md')]: {
      borderRadius: 6
    }
  },
  trashBtn: {
    [theme.breakpoints.down('md')]: {
      padding: '4px 20px'
    }
  },
  inputRoot: {
    color: 'inherit',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  },
  inputInput: {
    border: '1px solid #c3c3c3',
    borderRadius: 10,
    padding: theme.spacing(1, 1, 1, 0),
    height: '2rem',
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '50ch',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    marginLeft: '50px !important',
    width: '35%',
    [theme.breakpoints.down('md')]: {
      width: '90%',
      marginLeft: '0 !important'
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tool: {
    display: 'flex',
    alignItems: 'center'
  },
  borderRadius: {
    borderRadius: 10
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    width: '27%',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('md')]: {
      margin: '1rem 0',
      width: '100%',
      justifyContent: 'center'
    }
  },
  profile: {
    display: 'flex',
    alignItems: 'center'
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    marginRight: '20px',
    [theme.breakpoints.down('md')]: {
      width: '30px',
      height: '30px',
      marginRight: '10px'
    }
  },
  UserName: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      fontSize: '0.8rem'
      // width: '4rem'
    }
  },
  logout: {
    marginLeft: '20px',
    [theme.breakpoints.down('md')]: {
      marginLeft: '10px',
      fontSize: '0.65rem'
    }
  }
}))
