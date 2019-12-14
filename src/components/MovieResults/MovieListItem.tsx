import React from 'react';
import { Card, CardMedia, Typography, CardContent } from '@material-ui/core';

import Link from 'components/UI/Link/Link';
import Poster from 'components/Movie/Poster';
import Title from 'components/Movie/Title';
import MovieListItemType from 'types/MovieListItem';
import useStyles from './useStyles';
import Genres from './Genres';

type Props = {
  movie: MovieListItemType;
};

const MovieListItem: React.FC<Props> = ({ movie }) => {
  const classes = useStyles();

  return (
    <Card key={movie.id} className={classes.card}>
      <CardMedia
        component={() => (
          <Poster
            className={classes.poster}
            width={200}
            posterPath={movie.posterPath}
            title={movie.title}
          />
        )}
        image={movie.title}
      />
      <CardContent className={classes.content}>
        <Link
          className={classes.title}
          color="inherit"
          to={`/movie/${movie.id}`}
        >
          <Title
            title={movie.title}
            releaseDate={movie.releaseDate}
            className={classes.title}
          />
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
