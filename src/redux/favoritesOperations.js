import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


axios.defaults.baseURL = 'http://localhost:3000/api';

export const addFavorite = createAsyncThunk(
  'favorites/addFavorite',
  async (
     id ,
    thunkAPI
  ) => {
    try {
      const response = await axios.post('/favorites', {id});
      console.log(response.data);
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
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getFavorites = createAsyncThunk(
  'favorites/getFavorites',
  async ({ page }, thunkAPI) => {
    try {
      const response = await axios.get(`/favorites`, { params: {page} });
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
