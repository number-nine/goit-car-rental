import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const requestConfig = {
  params: {
    page: 1,
    limit: 20,
  },
};

axios.defaults.baseURL = 'http://localhost:3000/api';

export const getAll = createAsyncThunk(
  'vehicles/getAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/adverts', requestConfig);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
  }
);


