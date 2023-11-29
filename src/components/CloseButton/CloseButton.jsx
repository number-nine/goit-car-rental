import React from 'react';
import svgCross from 'images/x.svg';

import { SVG } from './CloseButton.styled';

export default function FavoriteButton(props) {
  return (
    <SVG
      src={svgCross}
      onClick={() => {
        console.log('wrapper onClick');
      }}
      {...props}
    />
  );
}
