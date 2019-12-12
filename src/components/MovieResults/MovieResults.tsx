import React from 'react';

import useMovieListSlice, {
  UseMovieListSliceOptions
} from 'hooks/useMovieListSlice';
import NoResultsFound from 'components/UI/NoResultsFound/NoResultsFound';
import MovieList from './MovieList';

type Props = UseMovieListSliceOptions;

const MovieResults: React.FC<Props> = ({ url, params }) => {
  const { data } = useMovieListSlice({
    url,
    params
  });

  if (!data) {
    return null;
  }

  if (data.totalResults === 0) {
    return <NoResultsFound />;
  }

  return (
    <MovieList
      movies={data.results}
      page={data.page}
      totalPages={data.totalPages}
    />
  );
};

export default MovieResults;
