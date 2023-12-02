import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const getFiltered = createAsyncThunk(
  'vehicles/getFiltered',
  async (
    { brand: make, price: rentalPrice, mileageFrom, mileageTo, page } = {},
    thunkAPI
  ) => {
    const requestConfig = {
      params: {},
    };
    if (make && make !== 'all') requestConfig.params.make = make;
    if (rentalPrice && rentalPrice !== 'all')
      requestConfig.params.rentalPrice = rentalPrice;
    if (mileageFrom && mileageFrom !== 'all')
      requestConfig.params.mileageFrom = mileageFrom;
    if (mileageTo && mileageTo !== 'all')
      requestConfig.params.mileageTo = mileageTo;
    if (page)
      requestConfig.params.page = page;

    try {
      const response = await axios.get('/adverts', requestConfig);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
