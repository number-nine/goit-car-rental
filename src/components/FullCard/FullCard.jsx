import React from 'react';

import {
  WrapperStyled,
  PhotoStyled,
  PhotoWrapperStyled,
  ThumbStyled,
  HeaderStyled,
  DescriptionWrapperStyled,
  SpecificationItemsStyled,
  SpecificationStyled,
  AnnotationStyled,
  AccessoriesWrapperStyled,
  ConditionsWrapperStyled,
} from './FullCard.styled';

import Button from 'components/Button';
import FavoriteButton from 'components/FavoriteButton';

const items1 = ['Kiev', 'Ukraine', 'Economy Car Rentals'];
const items2 = ['Suv', 'Tucson', '9598', 'Apple CarPlay'];

function learnMore() {
  console.log('Learn more');
}

export default function FullCard() {
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
        <AccessoriesWrapperStyled></AccessoriesWrapperStyled>
        <ConditionsWrapperStyled></ConditionsWrapperStyled>
        <Button title="Button" handleClick={learnMore} />
      </ThumbStyled>
    </WrapperStyled>
  );
}
