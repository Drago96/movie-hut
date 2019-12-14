import React from 'react';
import { Grid } from '@material-ui/core';
import classnames from 'classnames';

import useStyles from './useStyles';

type Props = {
  classes?: {
    grid?: string;
    gridItem?: string;
  };
};

const CenteredGrid: React.FC<Props> = ({ children, classes: childClasses }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      className={classnames(classes.grid, childClasses?.gridItem)}
    >
      <Grid className={classnames(childClasses?.gridItem)} item xs={3}>
        {children}
      </Grid>
    </Grid>
  );
};

CenteredGrid.defaultProps = {
  classes: {}
};

export default CenteredGrid;
