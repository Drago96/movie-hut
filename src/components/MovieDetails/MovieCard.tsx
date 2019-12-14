import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Divider,
  Typography
} from '@material-ui/core';
import moment from 'moment';

import Movie from 'types/Movie';
import Title from 'components/Movie/Title';
import Poster from 'components/Movie/Poster';
import GenreList from 'components/Movie/GenreList';
import formatMovieRating from 'utilities/formatMovieRating';
import formatHour from 'utilities/formatHour';
import useAuthentication from 'hooks/useAuthentication';
import useStyles from './useStyles';
import Vote from './Vote';
import Actions from './Actions';

type Props = {
  movie: Movie;
  watchlisted: boolean;
};

const MovieCard: React.FC<Props> = ({ movie, watchlisted }) => {
  const { authenticated } = useAuthentication();

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        component={() => (
          <Poster
            className={classes.poster}
            width={400}
            posterPath={movie.posterPath}
            title={movie.title}
          />
        )}
        image={movie.title}
      />
      <CardContent className={classes.content}>
        <div className={classes.title}>
          <Title title={movie.title} releaseDate={movie.releaseDate} />
          <Divider className={classes.divider} orientation="vertical" />
          <Vote voteCount={movie.voteCount} voteAverage={movie.voteAverage} />
          {authenticated && <Actions watchlisted={watchlisted} movie={movie} />}
        </div>
        <Typography
          className={classes.subtitle}
          color="textSecondary"
          variant="subtitle1"
        >
          <span>{formatMovieRating(movie.adult)}</span>
          <Divider className={classes.divider} orientation="vertical" />
          <span>{formatHour(movie.runtime)}</span>
          <Divider className={classes.divider} orientation="vertical" />
          <span>{moment(movie.releaseDate).format('D MMM YYYY')}</span>
        </Typography>
        <Typography
          className={classes.description}
          variant="body1"
          color="textSecondary"
          component="div"
        >
          {movie.overview}
        </Typography>
        <GenreList genres={movie.genres} clickable />
      </CardContent>
    </Card>
  );
};

export default MovieCard;
