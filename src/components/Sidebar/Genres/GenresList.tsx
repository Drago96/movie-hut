import React, { memo, useState } from 'react';
import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import { ExpandLess, ExpandMore, MovieFilter } from '@material-ui/icons';

import useStyles from '../useStyles';
import GenreListItem, { Genre } from './GenreListItem';

type Props = {
  genres: [Genre];
};

const GenresList: React.FC<Props> = memo(({ genres }) => {
  const [open, setOpen] = useState(false);
  const styles = useStyles();

  const toggleOpen = () => setOpen(!open);

  return (
    <>
      <ListItem button onClick={toggleOpen} className={styles.listItem}>
        <ListItemIcon>
          <MovieFilter />
        </ListItemIcon>
        <ListItemText primary="Genres" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List>
          {genres.map(genre => (
            <GenreListItem key={genre.id} genre={genre} />
          ))}
        </List>
      </Collapse>
    </>
  );
});

GenresList.defaultProps = {
  genres: []
} as any;

export default GenresList;
