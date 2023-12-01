import { createSelector } from '@reduxjs/toolkit';


const selfSelector = state => state;
// const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.vehicles.isLoading;
export const selectVehicles = state => state.vehicles.data;
export const selectVehiclesState = state => state.vehicles;

export const selectFilter = state => state.filter;
export const selectFilterDataMakes = state => state.filter.optionsData.makes;
export const selectFilterDataRentalPrice = state => state.filter.optionsData.rentalPrice;
export const selectFilterDataMileage = state => state.filter.optionsData.mileage;
export const selectFilterValues = createSelector(
  [selectFilter, selectVehiclesState],
  (filterState, vehiclesState) => {
    const { brand, price, mileageFrom, mileageTo } = filterState;
    const page = vehiclesState.page;
    return { brand, price, mileageFrom, mileageTo, page };
  }
);




// export const selectError = state => state.contacts.error;
// export const selectFilter = state => state.filter;

// export const selectAuth = createSelector([selfSelector], state => {
//   return state.auth;
// });

// export const selectVisibleContacts = createSelector(
//   [selectFilter, selectAuth, selectContacts],
//   (filter, { isLoggedIn }, items) => {
//     return items.filter(
//       contact =>
//         contact.name.toLowerCase().includes(filter.trim().toLowerCase()) &&
//         (!contact.isPrivate || isLoggedIn)
//     );
//   }
// );
