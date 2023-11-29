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
} from './SmallCard.styled';

import Button from 'components/Button';
import FavoriteButton from 'components/FavoriteButton';

const items1 = ['Zaporizhzhia', 'Ukraine', 'Economy Car Rentals'];
const items2 = ['Suv', 'Tucson', '9598', 'Apple CarPlay'];

function learnMore() {
  console.log('Learn more');
}

export default function SmallCard() {
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
            <span>MINI, 2006</span>
            <span>$30</span>
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
        </DescriptionWrapperStyled>
        <Button
          title="Learn more"
          type="100%"
          handleClick={learnMore}
        />
      </ThumbStyled>
    </WrapperStyled>
  );
}
