import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';
import { useHistory } from 'react-router';

import Genre from 'types/Genre';
import useStyles from '../useStyles';

type Props = {
  genre: Genre;
};

const GenreListItem: React.FC<Props> = ({ genre }) => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <ListItem
      button
      className={classes.nestedItem}
      onClick={() => history.push(`/genre/${genre.id}`)}
    >
      <ListItemText primary={genre.name} />
    </ListItem>
  );
};

export default GenreListItem;
