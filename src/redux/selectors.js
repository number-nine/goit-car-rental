import { createSelector } from '@reduxjs/toolkit';


// const selfSelector = state => state;

export const selectVehicles = state => state.vehicles;
export const selectIsLoading = state => state.vehicles.isLoading;
export const selectVehiclesList = state => state.vehicles.data;
export const selectVehiclesMetadata = state => ({total: state.vehicles.total, page:state.vehicles.page});


export const selectFilter = state => state.filter;
export const selectFilterDataMakes = state => state.filter.optionsData.makes;
export const selectFilterDataRentalPrice = state => state.filter.optionsData.rentalPrice;
export const selectFilterDataMileage = state => state.filter.optionsData.mileage;
export const selectFilterValues = createSelector(
  [selectFilter, selectVehicles],
  (filterState, vehiclesState) => {
    const { brand, price, mileageFrom, mileageTo } = filterState;
    const page = vehiclesState.page;
    return { brand, price, mileageFrom, mileageTo, page };
  }
);

export const selectFavoritesList = state => state.favorites.data;
export const selectFavoritesMetadata = state => ({
  total: state.favorites.total,
  page: state.favorites.page,
});
