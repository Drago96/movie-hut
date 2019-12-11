import React, { memo } from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';

import PaginationType from 'types/Pagination';
import Movie from 'types/Movie';
import createMovieImageUrl from 'utilities/createMovieImageUrl';
import useStyles from './useStyles';
import Paginator from './Paginator';

type Props = PaginationType & {
  movies: [Movie];
};

const MovieList: React.FC<Props> = memo(({ movies, page, totalPages }) => {
  const classes = useStyles();

  const Pagination = () => <Paginator page={page} totalPages={totalPages} />;

  return (
    <>
      <Pagination />
      {movies.map(movie => (
        <Card key={movie.id} className={classes.card}>
          <CardMedia
            className={classes.poster}
            image={createMovieImageUrl({
              width: 200,
              relativeUrl: movie.posterPath
            })}
            title={movie.title}
            component="img"
          />
          <CardContent className={classes.content}>
            <Typography gutterBottom variant="h4" component="h1">
              {movie.title}
            </Typography>
            <Typography variant="body1" color="textSecondary" component="div">
              {movie.overview}
            </Typography>
          </CardContent>
        </Card>
      ))}
      <Pagination />
    </>
  );
});

export default MovieList;
