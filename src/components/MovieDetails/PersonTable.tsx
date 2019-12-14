import React, { ElementType } from 'react';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import {
  Typography,
  Collapse,
  Paper,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody
} from '@material-ui/core';

import Heading from 'components/UI/Heading/Heading';
import useStyles from './useStyles';
import usePersonTable from './usePersonTable';
import PersonTableRow, { Person } from './PersonTableRow';

type Props = {
  persons: Person[];
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
  const {
    tableRef,
    expand,
    toggleExpand,
    handleExpanding,
    handleExpanded,
    scrollToTop
  } = usePersonTable();

  const classes = useStyles();

  const TableIcon = tableIcon;

  return (
    <div className={classes.personTable} ref={tableRef}>
      <Heading
        onClick={toggleExpand}
        classes={{
          typography: classes.tableHeading
        }}
      >
        <TableIcon className={classes.tableHeadingIcon} />
        <span>{tableHeading}</span>
        {expand ? (
          <ExpandLess className={classes.tableHeadingIcon} />
        ) : (
          <ExpandMore className={classes.tableHeadingIcon} />
        )}
      </Heading>
      <Collapse
        timeout="auto"
        onEntering={handleExpanding}
        onEntered={handleExpanded}
        in={expand}
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
                <PersonTableRow key={person.id} person={person} />
              ))}
              <TableRow>
                <TableCell colSpan={3}>
                  <Typography
                    className={classes.backToTopLink}
                    onClick={scrollToTop}
                  >
                    Back to Top
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </Collapse>
    </div>
  );
};

export default PersonTable;
