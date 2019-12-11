import { createSlice } from '@reduxjs/toolkit';

export type LoadingOverlayState = {
  visible: boolean;
};

const initialState = {
  visible: false
};

const loadingOverlaySlice = createSlice({
  name: 'loadingOverlay',
  initialState,
  reducers: {
    show: state => {
      state.visible = true;
    },
    hide: state => {
      state.visible = false;
    }
  }
});

export default loadingOverlaySlice;
