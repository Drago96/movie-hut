import React from 'react';
import { Button } from '@material-ui/core';
import { pick } from 'lodash';

import useRequestSlice from 'hooks/useRequestSlice';
import watchlistToggleRequestSlice from 'store/slices/watchlistToggleRequestSlice';
import Movie from 'types/Movie';
import useStyles from './useStyles';

type Props = {
  movie: Movie;
  watchlisted: boolean;
};

const Actions: React.FC<Props> = ({ movie, watchlisted }) => {
  const [toggleWatchlist, { isLoading }] = useRequestSlice(
    watchlistToggleRequestSlice
  );

  const handleToggleWatchlist = () => {
    if (watchlisted) {
      toggleWatchlist({ movieId: movie.id, watchlisted: false });
    } else {
      toggleWatchlist({
        movie: pick(movie, ['id', 'title', 'posterPath', 'releaseDate']),
        watchlisted: true
      });
    }
  };

  const classes = useStyles();

  return (
    <Button
      className={classes.actions}
      disabled={isLoading}
      onClick={handleToggleWatchlist}
      // variant="outlined"
    >
      {watchlisted ? 'Remove from watchlist' : 'Add to watchlist'}
    </Button>
  );
};

export default Actions;
