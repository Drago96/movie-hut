import { createReducer } from '@reduxjs/toolkit';

import {
  setAuthentication,
  clearAuthentication
} from 'store/actions/authenticationActions';

export type State = {
  id: string | null;
  email: string | null;
  name: string | null;
  initialized: boolean;
};

const initialState: State = {
  id: null,
  email: null,
  name: null,
  initialized: false
};

const authenticationReducer = createReducer(initialState, {
  [clearAuthentication.type]: () => ({ ...initialState, initialized: true }),
  [setAuthentication.type]: (_, { payload: { id, name, email } }) => ({
    id,
    name,
    email,
    initialized: true
  })
});

export default authenticationReducer;
