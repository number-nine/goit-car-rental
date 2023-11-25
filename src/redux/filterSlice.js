import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    update: (state, action) => (state = action.payload),
  },
});

export const { update } = filterSlice.actions;

export default filterSlice.reducer;
