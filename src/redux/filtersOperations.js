import { createAsyncThunk } from '@reduxjs/toolkit';
import makes from 'providers/localData';


const MIN_PRICE = 11;
const MAX_PRICE = 60;

const createEnumOptions = (min, max, step) => {
  const options = [];
  const lowest = Math.trunc(min / step) * step;
  const bigest = Math.ceil(max / step) * step;

  for (let i = lowest; i <= bigest; i = i + step) {
    options.push(i);
  }
  return options;
};

export const getPrices = createAsyncThunk(
  'filters/getPrices',
  async (_, thunkAPI) => {
    const options = createEnumOptions(MIN_PRICE, MAX_PRICE, 10);
console.log(options);
    return options;
  }
);

export const getMakes = createAsyncThunk(
  'filters/getMakes',
  async (_, thunkAPI) => {
    return makes;
  }
);


