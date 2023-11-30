import React from 'react';

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

const items1 = ['Kiev', 'Ukraine', 'Economy Car Rentals'];
const items2 = ['Suv', 'Tucson', '9598', 'Apple CarPlay'];

function rentalCar() {
  console.log('Rental car');
}

export default function FullCard() {
  return (
    <WrapperStyled>
      <CloseButton />
      <PhotoWrapperStyled>
        <PhotoStyled
          src={
            'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
          alt="Tucson"
        />
      </PhotoWrapperStyled>
      {/* <FavoriteButton isactive={false?1:0} /> */}
      <ThumbStyled>
        <DescriptionWrapperStyled>
          <HeaderStyled>
            <span>
              MINI <span style={{ color: '#3470FF' }}>Enclave</span>, 2008
            </span>
          </HeaderStyled>
          <SpecificationStyled>
            {items1.map(item => (
              <SpecificationItemsStyled key={item}>
                {item}
              </SpecificationItemsStyled>
            ))}
          </SpecificationStyled>
          <SpecificationStyled>
            {items2.map(item => (
              <SpecificationItemsStyled key={item}>
                {item}
              </SpecificationItemsStyled>
            ))}
          </SpecificationStyled>
          <AnnotationStyled>
            The Buick Enclave is a stylish and spacious SUV known for its
            comfortable ride and luxurious features.
          </AnnotationStyled>
        </DescriptionWrapperStyled>
        <AccessoriesWrapperStyled>
          <SubHeaderStyled>Accessories and functionalities:</SubHeaderStyled>
          <SpecificationStyled>
            {items1.map(item => (
              <SpecificationItemsStyled key={item}>
                {item}
              </SpecificationItemsStyled>
            ))}
          </SpecificationStyled>
          <SpecificationStyled>
            {items2.map(item => (
              <SpecificationItemsStyled key={item}>
                {item}
              </SpecificationItemsStyled>
            ))}
          </SpecificationStyled>
        </AccessoriesWrapperStyled>
        <ConditionsWrapperStyled>
          <SubHeaderStyled>Rental Conditions:</SubHeaderStyled>
          <RequirementStyled>
            {items2.map(item => (
              <RequirementItemsStyled key={item}>{item}</RequirementItemsStyled>
            ))}
          </RequirementStyled>
        </ConditionsWrapperStyled>
        <Button title="Rental car" size="fit-content" handleClick={rentalCar} />
      </ThumbStyled>
    </WrapperStyled>
  );
}
