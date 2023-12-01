import React from 'react';
import { nanoid } from 'nanoid';

import { useSelector, useDispatch } from 'react-redux';
import * as favoritesAPI from 'redux/favoritesOperations';
import { toggleIsFavorite } from 'redux/vehiclesSlice';



import {
  WrapperStyled,
  PhotoStyled,
  PhotoWrapperStyled,
  ThumbStyled,
  HeaderStyled,
  DescriptionWrapperStyled,
  SpecificationItemsStyled,
  SpecificationStyled,
} from './SmallCard.styled';

import Button from 'components/Button';
import FavoriteButton from 'components/FavoriteButton';

function learnMore(id) {
  console.log('Learn more: ', id);
}

function getRandomArrayItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}


export default function SmallCard({ vehicle }) {
  const dispatch = useDispatch();

  const locations = vehicle.address?.split(',').map(el => el.trim());
  locations.splice(0, 1);
  locations.push(vehicle.rentalCompany);
 
  const features = [
    vehicle.type,
    vehicle.make,
    vehicle.mileage,
    getRandomArrayItem(vehicle.accessories),
  ];

  const onFavoriteClick = (isFavorite, id) => {
    dispatch(toggleIsFavorite(id)); //antipattern -> TODO: refactor with asyncDispatch

    isFavorite
      ? dispatch(favoritesAPI.removeFavorite(id))
      : dispatch(favoritesAPI.addFavorite(id));
  };
  
  return (
    <WrapperStyled>
      <PhotoWrapperStyled>
        <PhotoStyled src={vehicle.img} alt={vehicle.model} />
      </PhotoWrapperStyled>
      <FavoriteButton
        isactive={vehicle.isFavorite ? 1 : 0}
        handleClick={() => onFavoriteClick(vehicle.isFavorite, vehicle._id)}
      />
      <ThumbStyled>
        <DescriptionWrapperStyled>
          <HeaderStyled>
            <span>
              {vehicle.make}, {vehicle.year}
            </span>
            <span>${vehicle.rentalPrice}</span>
          </HeaderStyled>
          <SpecificationStyled>
            {locations.map(item => (
              <SpecificationItemsStyled key={item}>
                {item}
              </SpecificationItemsStyled>
            ))}
          </SpecificationStyled>
          <SpecificationStyled>
            {features.map(item => (
              <SpecificationItemsStyled key={item}>
                {item}
              </SpecificationItemsStyled>
            ))}
          </SpecificationStyled>
        </DescriptionWrapperStyled>
        <Button
          title="Learn more"
          size="100%"
          handleClick={() => {
            learnMore(vehicle._id);
          }}
        />
      </ThumbStyled>
    </WrapperStyled>
  );
}
