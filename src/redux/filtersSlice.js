import { createSlice } from '@reduxjs/toolkit';
import * as filtersAPI from './filtersOperations';

// const initialState = {
//   isLoading: false,
//   makes: [],
//   error: null,
//   total: 0,
// };

const pendingHandler = state => {
  state.isLoading = true;
  state.error = null;
};

const rejectedHandler = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    make: 'all',
    price: 'all',
    mileageFrom: 0,
    mileageTo: null,
    isLoading: false,
    optionsData: {
      makes: [],
      rentalPrice: {},
      mileage:{}
    },
  },
  // reducers: {
  //   update: (state, action) => (state = action.payload),
  // },
  extraReducers: builder => {
    builder
      .addCase(filtersAPI.getFilters.fulfilled, (state, action) => {
        state.isLoading = false;
        state.optionsData = action.payload;
      })
      .addMatcher(
        action =>
          action.type.startsWith('filters') && action.type.endsWith('pending'),
        pendingHandler
      )
      .addMatcher(
        action =>
          action.type.startsWith('filters') && action.type.endsWith('rejected'),
        rejectedHandler
      );
  },
});

export const { update } = filterSlice.actions;

export default filterSlice.reducer;
