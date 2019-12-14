import React from 'react';

import Authentication from 'components/Authentication/Authentication';
import useAuthentication from 'hooks/useAuthentication';
import Authenticated from './Authenticated';

const Actions = () => {
  const { authenticated, name } = useAuthentication();

  if (!authenticated) {
    return <Authentication />;
  }

  return <Authenticated name={name as string} />;
};

export default Actions;
