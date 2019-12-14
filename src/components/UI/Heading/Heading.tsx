import React, { HTMLProps } from 'react';
import { Typography, Divider } from '@material-ui/core';
import classnames from 'classnames';

import useStyles from './useStyles';

type OwnProps = {
  classes?: {
    typography?: string;
  };
};

type Props = OwnProps & HTMLProps<any>;

const Heading: React.FC<Props> = ({
  children,
  classes: childClasses,
  ...props
}) => {
  const classes = useStyles();

  return (
    <div {...props}>
      <Typography
        className={classnames(childClasses?.typography, classes.tableHeading)}
        component="h4"
        variant="h4"
        color="textPrimary"
      >
        {children}
      </Typography>
      <Divider />
    </div>
  );
};

Heading.defaultProps = {
  classes: {}
};

export default Heading;
