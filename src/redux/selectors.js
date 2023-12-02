import { createSelector } from '@reduxjs/toolkit';


// const selfSelector = state => state;

export const selectVehicles = state => state.vehicles;
export const selectVehiclesIsLoading = state => state.vehicles.isLoading;
export const selectVehiclesList = state => state.vehicles.data;
export const selectVehiclesMetadata = state => ({total: state.vehicles.total, page:state.vehicles.page});


export const selectFilter = state => state.filter;
export const selectFilterIsLoading = state => state.vehicles.isLoading;
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

export const selectFavoritesIsLoading = state => state.favorites.isLoading;


export const selectIsLoading = createSelector([selectFilterIsLoading, selectVehiclesIsLoading, selectFavoritesIsLoading], (filterIsLoading, vehicleIsLoading, favoritesIsLoading) => (filterIsLoading || vehicleIsLoading || favoritesIsLoading));

export const selectFavoritesList = state => state.favorites.data.map(({vehicle}) => vehicle);
export const selectFavoritesMetadata = state => ({
  total: state.favorites.total,
  page: state.favorites.page,
});
