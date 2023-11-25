import { createSlice } from '@reduxjs/toolkit';

import  * as contactsAPI from './contactOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const pendingHandler = state => {
  state.isLoading = true;
  state.error = null;
};

    const rejectedHandler = (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    };

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: (builder) => {
  builder
    .addCase(contactsAPI.getAllContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    })
    .addCase(contactsAPI.deleteContactById.fulfilled, (state, action) => {
      state.isLoading = false;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    })
    .addCase(contactsAPI.addContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items.push(action.payload);
    })
    .addMatcher(action => action.type.endsWith('pending'), pendingHandler)
    .addMatcher(action => action.type.endsWith('rejected'), rejectedHandler);
  },
});

export default contactsSlice.reducer;
