import React from 'react';

import Heading from 'components/UI/Heading/Heading';
import useInitiateRequestSlice from 'hooks/useInitiateRequestSlice';
import watchlistSlice from 'store/slices/watchlistSlice';
import CenteredDissatisfiedMessage from 'components/UI/CenteredDissatisfiedMessage/CenteredDissatisfiedMessage';
import useStyles from './useStyles';
import WatchlistTable from './WatchlistTable';

const Watchlist: React.FC = () => {
  const { data } = useInitiateRequestSlice(watchlistSlice, {
    showLoadingOverlay: true
  });

  const classes = useStyles();

  if (!data) {
    return null;
  }

  return (
    <>
      <Heading className={classes.heading}>Watchlist</Heading>{' '}
      {data.movies.length === 0 ? (
        <CenteredDissatisfiedMessage>
          Watchlist is empty
        </CenteredDissatisfiedMessage>
      ) : (
        <WatchlistTable movies={data.movies} />
      )}
    </>
  );
};

export default Watchlist;
