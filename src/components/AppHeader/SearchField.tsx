import React from 'react';
import { Search } from '@material-ui/icons';
import { InputBase } from '@material-ui/core';
import { FieldProps } from 'formik';

import useStyles from './useStyles';

type Props = FieldProps;

const SearchField: React.FC<Props> = ({ field }) => {
  const classes = useStyles();

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <Search />
      </div>
      <InputBase
        {...field}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
        placeholder="Search"
      />
    </div>
  );
};

export default SearchField;
