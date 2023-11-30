import React from 'react';
import { nanoid } from 'nanoid';

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

function learnMore() {
  console.log('Learn more');
}

function getRandomArrayItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export default function SmallCard({ vehicle }) {

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
    <WrapperStyled>
      <PhotoWrapperStyled>
        <PhotoStyled
          src={
            'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
          alt="Tucson"
        />
      </PhotoWrapperStyled>
      <FavoriteButton isactive={false ? 1 : 0} />
      <ThumbStyled>
        <DescriptionWrapperStyled>
          <HeaderStyled>
            <span>
              {vehicle.type}, {vehicle.year}
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
        <Button title="Learn more" size="100%" handleClick={learnMore} />
      </ThumbStyled>
    </WrapperStyled>
  );
}
