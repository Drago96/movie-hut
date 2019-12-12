import React from 'react';

import AppHeader from 'components/AppHeader/AppHeader';
import Sidebar from 'components/Sidebar/Sidebar';

import Main from './Main/Main';
import LoadingOverlay from './UI/LoadingOverlay/LoadingOverlay';

const App: React.FC = () => {
  return (
    <>
      <AppHeader />
      <Sidebar />
      <LoadingOverlay />
      <Main />
    </>
  );
};

export default App;
