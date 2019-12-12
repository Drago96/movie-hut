import React, { useState, useRef, ElementType } from 'react';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import {
  Typography,
  Collapse,
  Paper,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  Box
} from '@material-ui/core';

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
  persons: [Person];
  tableIcon: ElementType;
  tableHeading: string;
  roleColumnName: string;
};

const PersonTable: React.FC<Props> = ({
  persons,
  tableHeading,
  tableIcon,
  roleColumnName
}) => {
  const [expanded, setExpanded] = useState(false);
  const tableRef = useRef<HTMLDivElement>(null);
  const classes = useStyles();

  const toggleExpanded = () => setExpanded(!expanded);
  const scrollToTable = () => {
    if (!tableRef.current) {
      return;
    }

    const offsetHeight = 80;

    window.scrollTo({
      top: tableRef.current.offsetTop - offsetHeight,
      behavior: 'smooth'
    });
  };

  const TableIcon = tableIcon;

  return (
    <div className={classes.personTable} ref={tableRef}>
      <Box
        onClick={toggleExpanded}
        className={classes.tableHeading}
        borderBottom={1}
      >
        <TableIcon className={classes.tableHeadingIcon} />
        <Typography variant="h4" component="h4" color="textPrimary">
          {tableHeading}
        </Typography>
        {expanded ? (
          <ExpandLess className={classes.tableHeadingIcon} />
        ) : (
          <ExpandMore className={classes.tableHeadingIcon} />
        )}
      </Box>
      <Collapse
        timeout="auto"
        onEntered={scrollToTable}
        in={expanded}
      >
        <Paper>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.personImageColumn} />
                <TableCell className={classes.personNameColumn}>Name</TableCell>
                <TableCell>{roleColumnName}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {persons.map(person => (
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
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Collapse>
    </div>
  );
};

export default PersonTable;
