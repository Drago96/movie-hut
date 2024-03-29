import React from 'react';

import PaginationType from 'types/Pagination';
import MovieListItemType from 'types/MovieListItem';
import Paginator from './Paginator';
import MovieListItem from './MovieListItem';

type Props = PaginationType & {
  movies: MovieListItemType[];
};

const MovieList: React.FC<Props> = ({
  movies,
  page,
  totalPages
}) => {
  const Pagination = () => (
    <Paginator page={page || 1} totalPages={totalPages || 1} />
  );

  return (
    <>
      <Pagination />
      {movies.map(movie => (
        <MovieListItem key={movie.id} movie={movie} />
      ))}
      <Pagination />
    </>
  );
};

export default MovieList;
