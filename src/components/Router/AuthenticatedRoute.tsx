import React, { useEffect } from 'react';
import { useHistory, RouteProps, Route } from 'react-router';

import useAuthentication from 'hooks/useAuthentication';

type Props = RouteProps;

const AuthenticatedRoute: React.FC<Props> = ({ children, ...props }) => {
  const { authenticated } = useAuthentication();
  const history = useHistory();

  useEffect(() => {
    if (!authenticated) {
      history.replace('/');
    }
  }, [authenticated, history]);

  return <Route {...props}>{children}</Route>;
};

export default AuthenticatedRoute;
