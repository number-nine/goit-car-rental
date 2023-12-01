import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// require('dotenv').config();


axios.defaults.baseURL = 'https://goit-car-rental.onrender.com/api';

export const addFavorite = createAsyncThunk(
  'favorites/addFavorite',
  async (
     id ,
    thunkAPI
  ) => {
    try {
      const response = await axios.post('/favorites', {id});
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeFavorite = createAsyncThunk(
  'favorites/removeFavorite',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/favorites/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getFavorites = createAsyncThunk(
  'favorites/getFavorites',
  async ({ page }, thunkAPI) => {
    const requestConfig = {
      params: {},
    };
    if (page) requestConfig.params.page = page;
    try {
      const response = await axios.get(`/favorites`, requestConfig);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
