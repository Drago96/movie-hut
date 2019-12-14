import React, { useState } from 'react';
import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import { ExpandLess, ExpandMore, MovieFilter } from '@material-ui/icons';

import GenreListType from 'types/GenreList';
import useStyles from '../useStyles';
import GenreListItem from './GenreListItem';

type Props = Partial<GenreListType>;

const GenreList: React.FC<Props> = ({ genres }) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const toggleOpen = () => setOpen(!open);

  return (
    <>
      <ListItem button onClick={toggleOpen} className={classes.listItem}>
        <ListItemIcon>
          <MovieFilter className={classes.itemIcon} />
        </ListItemIcon>
        <ListItemText primary="Genres" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List>
          {genres?.map(genre => (
            <GenreListItem key={genre.id} genre={genre} />
          ))}
        </List>
      </Collapse>
    </>
  );
};

GenreList.defaultProps = {
  genres: []
};

export default GenreList;
