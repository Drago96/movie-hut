import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';

import personNotFound from 'assets/images/person-not-found.gif';
import ImgWithFallback from 'components/UI/ImgWithFallback/ImgWithFallback';
import createMovieImageUrl from 'utilities/createMovieImageUrl';
import useStyles from './useStyles';

export type Person = {
  id: number;
  name: string;
  profilePath: string;
  role: string;
};

type Props = {
  person: Person;
};

const PersonTableRow: React.FC<Props> = ({ person }) => {
  const classes = useStyles();

  return (
    <TableRow key={person.id}>
      <TableCell>
        <ImgWithFallback
          src={createMovieImageUrl({
            relativeUrl: person.profilePath,
            width: 200
          })}
          className={classes.personImage}
          fallbackUrl={personNotFound}
        />
      </TableCell>
      <TableCell>{person.name}</TableCell>
      <TableCell>{person.role}</TableCell>
    </TableRow>
  );
};

export default PersonTableRow;
