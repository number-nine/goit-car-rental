import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://goit-car-rental.onrender.com/api';


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
