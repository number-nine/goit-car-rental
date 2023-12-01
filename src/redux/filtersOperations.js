import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3000/api';


export const getFilters = createAsyncThunk(
  'filters/getFilters',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/filters');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
