import { createSlice } from '@reduxjs/toolkit';
import makes from "../providers/localData";

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    makes,
    price: null,
    mileageFrom: 0,
    mileageTo: null,
  },
  reducers: {
    update: (state, action) => (state = action.payload),
  },
});

export const { update } = filterSlice.actions;

export default filterSlice.reducer;
