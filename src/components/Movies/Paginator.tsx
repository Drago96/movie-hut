import React from 'react';
import ReactPaginate from 'react-paginate';

import Pagination from 'types/Pagination';
import useQueryParams from 'hooks/useQueryParams';
import useStyles from './useStyles';

type Props = Pagination;

const Paginator: React.FC<Props> = ({ page, totalPages }) => {
  const classes = useStyles();
  const { updateQueryParams } = useQueryParams();

  return (
    <ReactPaginate
      onPageChange={selectedPage =>
        updateQueryParams({ page: (selectedPage.selected + 1).toString() })
      }
      forcePage={page - 1}
      previousLabel="Previous"
      nextLabel="Next"
      breakLabel="..."
      pageCount={totalPages}
      pageRangeDisplayed={9}
      marginPagesDisplayed={3}
      containerClassName={classes.pagination}
      pageClassName={classes.page}
      nextClassName={classes.page}
      previousClassName={classes.page}
      breakClassName={classes.page}
      pageLinkClassName={classes.pageLink}
      nextLinkClassName={classes.pageLink}
      previousLinkClassName={classes.pageLink}
      breakLinkClassName={classes.pageLink}
      activeLinkClassName={classes.pageLinkActive}
    />
  );
};

export default Paginator;
