import React from 'react';
import { Videocam } from '@material-ui/icons';

import Link from 'components/UI/Link/Link';
import useStyles from './useStyles';

const Logo: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Videocam className={classes.logoIcon} />
      <Link to="/" color="inherit" variant="h6" className={classes.title}>
        MovieHut
      </Link>
    </>
  );
};

export default Logo;
