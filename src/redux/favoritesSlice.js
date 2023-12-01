import { createSlice } from '@reduxjs/toolkit';

import * as favoritesAPI from './favoritesOperations';


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


export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(favoritesAPI.getFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
        const { total, page } = action.payload.metadata[0];
        state.data =
          page > 1
            ? [...state.data, ...action.payload.data]
            : action.payload.data;
        state.total = total;
        state.page = page;
      })
      .addCase(favoritesAPI.addFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(favoritesAPI.removeFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addMatcher(
        action =>
          action.type.startsWith('favorites') &&
          action.type.endsWith('pending'),
        pendingHandler
      )
      .addMatcher(
        action =>
          action.type.startsWith('favorites') &&
          action.type.endsWith('rejected'),
        rejectedHandler
      );
  },
});

export default favoritesSlice.reducer;
