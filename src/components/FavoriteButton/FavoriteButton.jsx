import React from 'react';
import svgHeart from 'images/heart.svg';

import { SVG } from './FavoriteButton.styled';

export default function FavoriteButton({handleClick, ...transitProps}) {
  return <SVG src={svgHeart} onClick={handleClick} {...transitProps} />;
}
