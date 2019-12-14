import React from 'react';

import useAppStateLoading from 'hooks/useAppStateLoading';
import Body from './Body/Body';

const App: React.FC = () => {
  const appStateLoading = useAppStateLoading();

  if (appStateLoading) {
    return null;
  }

  return <Body />;
};

export default App;
