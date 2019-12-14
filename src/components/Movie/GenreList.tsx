import React from 'react';
import { Chip, Typography } from '@material-ui/core';
import { useHistory } from 'react-router';

import Genre from 'types/Genre';
import useStyles from './useStyles';

type Props = {
  genres: Genre[];
  clickable?: boolean;
};

const GenreList: React.FC<Props> = ({ genres, clickable }) => {
  const classes = useStyles();
  const history = useHistory();

  const navigateToGenreResults = (genreId: number) => {
    if (clickable) {
      history.push(`/genre/${genreId}`);
    }
  };

  return (
    <Typography variant="body1" color="textSecondary" component="div">
      Genres:{' '}
      {genres.map(genre => (
        <Chip
          clickable={clickable}
          onClick={() => navigateToGenreResults(genre.id)}
          className={classes.genreChip}
          key={genre.id}
          label={genre.name}
        />
      ))}
    </Typography>
  );
};

GenreList.defaultProps = {
  clickable: false
};

export default GenreList;
