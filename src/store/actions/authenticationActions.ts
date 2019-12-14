import { createAction } from '@reduxjs/toolkit';

type SetAuthenticationPayload = {
  id: string;
  name: string;
  email: string;
};

export const initAuthentication = createAction('authentication/init');
export const setAuthentication = createAction<SetAuthenticationPayload>(
  'authentication/set'
);
export const clearAuthentication = createAction('authentication/clear');
export const logout = createAction('authentication/logout');
