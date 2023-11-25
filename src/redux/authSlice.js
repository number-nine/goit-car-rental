import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userName: '',
    isLoggedIn: false,
  },
  reducers: {
    login: {
      reducer: (state, action) => (state = action.payload),
      prepare: user => ({ payload: { ...user, isLoggedIn: true } }),
    },
    logout: () => ({ userName: '', isLoggedIn: false }),
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
