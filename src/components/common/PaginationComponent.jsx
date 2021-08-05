import React from 'react'
import { Pagination, PaginationItem } from '@material-ui/lab'

import useStyles from '../../assets/styles/MuiStyles/PaginationCompo'
import { Link } from 'react-router-dom'

function PaginationComponent() {
  const classes = useStyles()

  return (
    <Pagination
      classes={{ ul: classes.ul }}
      count={5}
      page={1}
      variant='outlined'
      color='primary'
      renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={'#post'} />
      )}
    ></Pagination>
  )
}

export default PaginationComponent
