import React from 'react';

import useMovieListSlice, {
  UseMovieListSliceOptions
} from 'hooks/useMovieListSlice';
import Heading from 'components/UI/Heading/Heading';
import NoResultsFound from 'components/UI/NoResultsFound/NoResultsFound';
import MovieList from './MovieList';
import useStyles from './useStyles';

type OwnProps = {
  heading?: string;
};

type Props = UseMovieListSliceOptions & OwnProps;

const MovieResults: React.FC<Props> = ({ url, params, heading }) => {
  const classes = useStyles();

  const { data } = useMovieListSlice({
    url,
    params
  });

  if (!data) {
    return null;
  }

  return (
    <>
      {heading && <Heading className={classes.heading}>{heading}</Heading>}
      {data.totalResults === 0 ? (
        <NoResultsFound />
      ) : (
        <MovieList
          movies={data.results}
          page={data.page}
          totalPages={data.totalPages}
        />
      )}
    </>
  );
};

export default MovieResults;
