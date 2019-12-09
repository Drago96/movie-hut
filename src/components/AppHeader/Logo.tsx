import React from 'react';
import { Videocam } from '@material-ui/icons';

import Link from 'components/UI/Link/Link';
import useStyles from './useStyles';

const Logo: React.FC = () => {
  const styles = useStyles();

  return (
    <>
      <Videocam className={styles.logoIcon} />
      <Link to="/" color="inherit" variant="h6" className={styles.title}>
        MovieHut
      </Link>
    </>
  );
};

export default Logo;
