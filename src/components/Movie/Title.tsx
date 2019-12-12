import React from 'react';
import moment from 'moment';
import { Typography, TypographyProps } from '@material-ui/core';

type OwnProps = {
  title: string;
  releaseDate: string;
};

type Props = OwnProps & TypographyProps;

const Title: React.FC<Props> = ({ title, releaseDate, ...props }) => {
  return (
    <Typography {...props} variant="h4" component="h1">
      {title} ({releaseDate ? moment(releaseDate).year() : ''})
    </Typography>
  );
};

export default Title;
