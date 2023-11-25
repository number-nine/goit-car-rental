import { createSelector } from '@reduxjs/toolkit';


const selfSelector = state => state;
const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;

export const selectAuth = createSelector([selfSelector], state => {
  return state.auth;
});

export const selectVisibleContacts = createSelector(
  [selectFilter, selectAuth, selectContacts],
  (filter, { isLoggedIn }, items) => {
    return items.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.trim().toLowerCase()) &&
        (!contact.isPrivate || isLoggedIn)
    );
  }
);
