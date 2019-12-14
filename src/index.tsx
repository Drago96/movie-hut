import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';

import store from 'store/store';
import theme from 'styles/theme';
import App from 'components/App';
import { initAuthentication } from 'store/actions/authenticationActions';

import * as serviceWorker from './serviceWorker';

store.dispatch(initAuthentication());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
