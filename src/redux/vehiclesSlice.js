import { createSlice } from '@reduxjs/toolkit';

import * as vehiclesAPI from './vehiclesOperations';


const initialState = {
  isLoading: false,
  data: [],
  error: null,
  total: 0,
  page: 1,
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
  reducers: {
    toggleIsFavorite: (state, action) => {
      const target = state.data.findIndex(({ _id: id }) => id === action.payload)
      state.data[target] = {
        ...state.data[target],
        isFavorite: !state.data[target].isFavorite,
      };

    },
  },
  extraReducers: builder => {
    builder
      .addCase(vehiclesAPI.getFiltered.fulfilled, (state, action) => {
        state.isLoading = false;
        const { total, page } = action.payload.metadata[0];
        state.data =
          page > 1
            ? [...state.data, ...action.payload.data]
            : action.payload.data;
        state.total = total;
        state.page = page;
      })
      .addMatcher(
        action =>
          action.type.startsWith('vehicles') && action.type.endsWith('pending'),
        pendingHandler
      )
      .addMatcher(
        action =>
          action.type.startsWith('vehicles') &&
          action.type.endsWith('rejected'),
        rejectedHandler
      );
  },
});

export const { toggleIsFavorite } = vehiclesSlice.actions;

export default vehiclesSlice.reducer;
