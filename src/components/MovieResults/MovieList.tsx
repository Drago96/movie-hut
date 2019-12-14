import React from 'react';

import PaginationType from 'types/Pagination';
import MovieListItemType from 'types/MovieListItem';
import NoResultsFound from 'components/UI/NoResultsFound/NoResultsFound';
import Paginator from './Paginator';
import MovieListItem from './MovieListItem';

type Props = PaginationType & {
  movies: MovieListItemType[];
  totalResults: number;
};

const MovieList: React.FC<Props> = ({
  movies,
  page,
  totalPages,
  totalResults
}) => {
  if (totalResults === 0) {
    return <NoResultsFound />;
  }

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
