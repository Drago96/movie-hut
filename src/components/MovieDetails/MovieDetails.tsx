import React from 'react';
import { useParams } from 'react-router';

import useRequestSlice from 'hooks/useRequestSlice';
import movieSlice from 'store/slices/movieSlice';
import MovieCard from './MovieCard';
import Credits from './Credits';

const MovieDetails: React.FC = () => {
  const { id } = useParams();
  const { data } = useRequestSlice(movieSlice, {
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
    </>
  );
};

export default MovieDetails;
