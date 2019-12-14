import React from 'react';
import { useParams } from 'react-router';

import useInitiateRequestSlice from 'hooks/useInitiateRequestSlice';
import movieDetailsSlice from 'store/slices/movieDetailsSlice';
import MovieHorizontalList from 'components/MovieHorizontalList/MovieHorizontalList';
import MovieCard from './MovieCard';
import Credits from './Credits';

const MovieDetails: React.FC = () => {
  const { id } = useParams();
  const { data } = useInitiateRequestSlice(movieDetailsSlice, {
    params: { id },
    scrollToTop: true,
    showLoadingOverlay: true
  });

  if (!data) {
    return null;
  }

  return (
    <>
      <MovieCard movie={data.movie} />
      <Credits cast={data.credits.cast} crew={data.credits.crew} />
      <MovieHorizontalList heading="Similar Movies" movies={data.similarMovies.results} />
    </>
  );
};

export default MovieDetails;
