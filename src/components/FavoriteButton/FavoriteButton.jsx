import React from 'react';
import svgHeart from 'images/heart.svg';

import { SVG } from './FavoriteButton.styled';

export default function FavoriteButton(props) {
  return (
    <SVG
      src={svgHeart}
      onClick={() => {
        console.log('wrapper onClick');
      }}
      
      {...props}
    />
  );
}
