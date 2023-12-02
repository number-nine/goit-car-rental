import React from 'react';
import parse from 'html-react-parser';

import { decimalSeparator } from 'helpers';

import {
  WrapperStyled,
  PhotoStyled,
  PhotoWrapperStyled,
  ThumbStyled,
  HeaderStyled,
  SubHeaderStyled,
  DescriptionWrapperStyled,
  SpecificationItemsStyled,
  SpecificationStyled,
  RequirementItemsStyled,
  RequirementStyled,
  AnnotationStyled,
  AccessoriesWrapperStyled,
  ConditionsWrapperStyled,
} from './FullCard.styled';

import Button from 'components/Button';
import CloseButton from 'components/CloseButton';

function rentalCar() {
  window.location.href = 'tel:+380730000000';
}

export default function FullCard({ vehicle, ...transitProps }) {
  const location = vehicle.address?.split(',').map(el => el.trim());
  location.splice(0, 1);
  const generalInfo = [
    ...location,
    `Id: ${vehicle._id.substr(-4)}`,
    `Year: ${vehicle.year}`,
    `Type: ${vehicle.type}`,
  ];

  const techInfo = [
    `Fuel Consumption: ${vehicle.fuelConsumption}`,
    `Engine Size: ${vehicle.engineSize}`,
  ];

  let rentalConditions = vehicle.rentalConditions
    ?.split('\n')
    .map(el => el.trim());
  const age = rentalConditions[0]
    .split(':')
    .map((el, idx) =>
      idx === 0
        ? el.trim()
        : `<span className="blueSpanAccent">${el.trim()}</span>`
    );
  rentalConditions.splice(0, 1);

  rentalConditions = [
    `${age[0]}: ${age[1]}`,
    ...rentalConditions,
    `Mileage: <span className="blueSpanAccent">${decimalSeparator(
      vehicle.mileage
    )}</span>`,
    `Price: <span className="blueSpanAccent">${vehicle.rentalPrice}$</span>`,
  ];
  return (
    <WrapperStyled>
      <CloseButton {...transitProps} />
      <PhotoWrapperStyled>
        <PhotoStyled src={vehicle.img} alt={vehicle.model} />
      </PhotoWrapperStyled>
      <ThumbStyled>
        <DescriptionWrapperStyled>
          <HeaderStyled>
            <span>
              {vehicle.make} <span className="blueSpanAccent">{vehicle.model}</span>
              , {vehicle.year}
            </span>
          </HeaderStyled>
          <SpecificationStyled>
            {generalInfo.map(item => (
              <SpecificationItemsStyled key={item}>
                {item}
              </SpecificationItemsStyled>
            ))}
          </SpecificationStyled>
          <SpecificationStyled>
            {techInfo.map(item => (
              <SpecificationItemsStyled key={item}>
                {item}
              </SpecificationItemsStyled>
            ))}
          </SpecificationStyled>
          <AnnotationStyled>{vehicle.description}</AnnotationStyled>
        </DescriptionWrapperStyled>
        <AccessoriesWrapperStyled>
          <SubHeaderStyled>Accessories and functionalities:</SubHeaderStyled>
          <SpecificationStyled>
            {vehicle.accessories.map(item => (
              <SpecificationItemsStyled key={item}>
                {item}
              </SpecificationItemsStyled>
            ))}
          </SpecificationStyled>
          <SpecificationStyled>
            {vehicle.functionalities.map(item => (
              <SpecificationItemsStyled key={item}>
                {item}
              </SpecificationItemsStyled>
            ))}
          </SpecificationStyled>
        </AccessoriesWrapperStyled>
        <ConditionsWrapperStyled>
          <SubHeaderStyled>Rental Conditions:</SubHeaderStyled>
          <RequirementStyled>
            {rentalConditions.map(item => (
              <RequirementItemsStyled key={item}>
                {parse(item)}
              </RequirementItemsStyled>
            ))}
          </RequirementStyled>
        </ConditionsWrapperStyled>
        <Button title="Rental car" size="fit-content" handleClick={rentalCar} />
      </ThumbStyled>
    </WrapperStyled>
  );
}
