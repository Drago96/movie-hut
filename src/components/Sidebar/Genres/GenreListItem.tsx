import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';
import { useHistory } from 'react-router';

import useStyles from '../useStyles';

export type Genre = {
  id: number;
  name: string;
};

type Props = {
  genre: Genre;
};

const GenreListItem: React.FC<Props> = ({ genre }) => {
  const history = useHistory();
  const styles = useStyles();

  return (
    <ListItem
      button
      className={styles.nestedItem}
      onClick={() => history.push(`/genre/${genre.id}`)}
    >
      <ListItemText primary={genre.name} />
    </ListItem>
  );
};

export default GenreListItem;
