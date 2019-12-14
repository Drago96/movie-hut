import React from 'react';

import useMovieListSlice, {
  UseMovieListSliceOptions
} from 'hooks/useMovieListSlice';
import Heading from 'components/UI/Heading/Heading';
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
      <MovieList
        movies={data.results}
        page={data.page}
        totalPages={data.totalPages}
        totalResults={data.totalResults}
      />
    </>
  );
};

export default MovieResults;
