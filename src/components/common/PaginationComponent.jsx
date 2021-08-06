import React from 'react'
import { Pagination, PaginationItem } from '@material-ui/lab'
import useStyles from '../../assets/styles/MuiStyles/PaginationCompo'

function PaginationComponent(props) {
  const classes = useStyles()
  const [activePage, setActivePage] = React.useState(1)

  const handlePageChange = (page) => {
    console.log(page)
    setActivePage(page)
    props.textSearch
      ? props.searchPostRequest({
          textSearch: props.textSearch,
          pageIndex: page
        })
      : props.getPostRequest({ pageIndex: page })
  }

  return (
    <Pagination
      classes={{ ul: classes.ul }}
      count={props.totalPage}
      page={activePage}
      variant='outlined'
      color='primary'
      renderItem={(item) => (
        <PaginationItem {...item} onClick={() => handlePageChange(item.page)} />
      )}
    ></Pagination>
  )
}

export default PaginationComponent
