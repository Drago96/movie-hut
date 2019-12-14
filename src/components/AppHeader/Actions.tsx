import React from 'react';

import Authentication from 'components/Authentication/Authentication';
import useAuthentication from 'hooks/useAuthentication';
import Authenticated from './Authenticated';
import ThemeToggle from './ThemeToggle';

const Actions = () => {
  const { authenticated, name } = useAuthentication();

  return (
    <>
      <ThemeToggle />
      {authenticated ? (
        <Authenticated name={name as string} />
      ) : (
        <Authentication />
      )}
    </>
  );
};

export default Actions;
