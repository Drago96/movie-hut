import { useSelector, shallowEqual } from 'react-redux';

import { ApplicationState } from 'types/Store';

const useAuthentication = () => {
  const { id, name, email } = useSelector(
    (state: ApplicationState) => state.authentication,
    shallowEqual
  );

  const authenticated = id !== null;

  return {
    authenticated,
    id,
    name,
    email
  };
};

export default useAuthentication;
