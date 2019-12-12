import React from 'react';
import { Card, CardMedia, Typography, CardContent } from '@material-ui/core';
import moment from 'moment';

import createMovieImageUrl from 'utilities/createMovieImageUrl';
import Link from 'components/UI/Link/Link';
import posterNotFound from 'assets/images/poster-not-found.jpg';
import Movie from 'types/Movie';
import useStyles from './useStyles';
import Genres from './Genres';
import ImgWithFallback from 'components/UI/ImgWithFallback/ImgWithFallback';

type Props = {
  movie: Movie;
};

const MovieListItem: React.FC<Props> = ({ movie }) => {
  const classes = useStyles();

  return (
    <Card key={movie.id} className={classes.card}>
      <CardMedia
        component={() => (
          <ImgWithFallback
            src={createMovieImageUrl({
              width: 200,
              relativeUrl: movie.posterPath
            })}
            className={classes.poster}
            alt={movie.title}
            fallbackUrl={posterNotFound}
          />
        )}
      />
      <CardContent className={classes.content}>
        <Link
          className={classes.title}
          color="inherit"
          to={`/movie/${movie.id}`}
        >
          <Typography gutterBottom variant="h4" component="h1">
            {movie.title} (
            {movie.releaseDate ? moment(movie.releaseDate).year() : ''})
          </Typography>
        </Link>
        <Typography
          className={classes.description}
          variant="body1"
          color="textSecondary"
          component="div"
        >
          {movie.overview}
        </Typography>
        <Genres genreIds={movie.genreIds} />
      </CardContent>
    </Card>
  );
};

export default MovieListItem;
