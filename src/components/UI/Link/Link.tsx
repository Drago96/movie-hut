import React from 'react';
import { Link as MaterialLink, LinkProps } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

type OwnProps = {
  to: string;
};

type Props = OwnProps & LinkProps;

const Link: React.FC<Props> = ({ to, children, ref: _, ...props }) => (
  <MaterialLink {...props} component={RouterLink} to={to}>
    {children}
  </MaterialLink>
);

export default Link;
