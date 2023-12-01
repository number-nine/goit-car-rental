import React from 'react';
import svgCross from 'images/x.svg';

import { SVG } from './CloseButton.styled';

export default function FavoriteButton({ visibilityHandler, ...transitProps }) {
  return (
    <SVG
      src={svgCross}
      onClick={() => {
        visibilityHandler(false);
      }}
      {...transitProps}
    />
  );
}
