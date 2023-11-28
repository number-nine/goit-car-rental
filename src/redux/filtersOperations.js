import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {createEnumOptions} from "../helpers"

axios.defaults.baseURL = 'http://localhost:3000/api';


// const createEnumOptions = (min, max, step) => {
//   const options = [];
//   const lowest = Math.trunc(min / step) * step;
//   const bigest = Math.ceil(max / step) * step;

//   for (let i = lowest; i <= bigest; i = i + step) {
//     options.push(i);
//   }
//   return options;
// };



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
