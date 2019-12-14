import { createSlice } from '@reduxjs/toolkit';

export type ErrorSnackbarState = {
  message: string | null;
};

const initialState = {
  message: null
};

const errorSnackbarSlice = createSlice({
  name: 'errorSnackbar',
  initialState,
  reducers: {
    showMessage: (_, { payload: { message } }) => ({
      message
    }),
    hide: () => initialState
  }
});

export default errorSnackbarSlice;
