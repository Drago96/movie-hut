import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

import Poster from 'components/Movie/Poster';
import Title from 'components/Movie/Title';
import Link from 'components/UI/Link/Link';
import WatchlistItem from 'types/WatchlistItem';
import useStyles from './useStyles';

type Props = {
  movie: WatchlistItem;
  onRemove: (movieId: number) => void;
};

const WatchlistTableRow: React.FC<Props> = ({ movie, onRemove }) => {
  const classes = useStyles();

  return (
    <TableRow key={movie.id}>
      <TableCell className={classes.actionsColumn}>
        <Delete className={classes.actionIcon} onClick={() => onRemove(movie.id)} />
      </TableCell>
      <TableCell className={classes.posterColumn}>
        <Poster
          title={movie.title}
          posterPath={movie.posterPath}
          className={classes.poster}
          width={200}
        />
      </TableCell>
      <TableCell>
        <Link
          to={`/movie/${movie.id}`}
          className={classes.title}
          color="inherit"
        >
          <Title
            title={movie.title}
            releaseDate={movie.releaseDate}
            variant="h5"
          />
        </Link>
      </TableCell>
    </TableRow>
  );
};

export default WatchlistTableRow;
