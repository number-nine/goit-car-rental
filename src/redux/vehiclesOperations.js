import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const requestConfig = {
  params: {
    page: 1,
    limit: 20,
  },
};

axios.defaults.baseURL = 'https://65623e70dcd355c08324afe1.mockapi.io';

export const getAll = createAsyncThunk(
  'vehicles/getAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/advertss', requestConfig);
      console.log(response.data);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
  }
);


