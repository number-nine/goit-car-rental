import React from 'react';
import { useState } from 'react';


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
import DetailsModal from 'components/DetailsModal';

function getRandomArrayItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}


export default function SmallCard({ vehicle, handleFavoriteClick }) {
    const [isDetailsShown, setIsDetailsShown] = useState(false);


  const locations = vehicle.address?.split(',').map(el => el.trim());
  locations.splice(0, 1);
  locations.push(vehicle.rentalCompany);

  const features = [
    vehicle.type,
    vehicle.make,
    vehicle.mileage,
    getRandomArrayItem(vehicle.accessories),
  ];

  return (
    <>
      <WrapperStyled>
        <PhotoWrapperStyled>
          <PhotoStyled src={vehicle.img} alt={vehicle.model} />
        </PhotoWrapperStyled>
        <FavoriteButton
          isactive={vehicle.isFavorite ? 1 : 0}
          handleClick={() =>
            handleFavoriteClick(vehicle.isFavorite, vehicle._id)
          }
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
              setIsDetailsShown(true);
            }}
          />
        </ThumbStyled>
      </WrapperStyled>
      {isDetailsShown && (
        <DetailsModal vehicle={vehicle} visibilityHandler={setIsDetailsShown} />
      )}
    </>
  );
}
