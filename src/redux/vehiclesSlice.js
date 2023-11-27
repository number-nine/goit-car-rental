import { createSlice } from '@reduxjs/toolkit';

import  * as vehiclesAPI from './vehiclesOperations';

const initialState = {
  isLoading: false,
  items:[],
  error: null,
  total:0,
};

const pendingHandler = state => {
  state.isLoading = true;
  state.error = null;
};

    const rejectedHandler = (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    };

export const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState,
  extraReducers: (builder) => {
  builder
    .addCase(vehiclesAPI.getAll.fulfilled, (state, action) => {
      state.isLoading = false;
      state = action.payload;
    })
    .addMatcher(action => action.type.endsWith('pending'), pendingHandler)
    .addMatcher(action => action.type.endsWith('rejected'), rejectedHandler);
  },
});

export default vehiclesSlice.reducer;
