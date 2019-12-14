import React from 'react';
import { useParams } from 'react-router';

import MovieResults from 'components/MovieResults/MovieResults';
import useGenre from 'hooks/useGenre';

const GenreResults: React.FC = () => {
  const { id } = useParams();

  const genre = useGenre(Number(id));

  return (
    <MovieResults
      url="discover/movie"
      params={{ withGenres: id }}
      heading={genre?.name}
    />
  );
};

export default GenreResults;
