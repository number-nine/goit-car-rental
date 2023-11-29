import React from "react";

import {
  ButtonStyled
} from './Button.styled';

export default function Button({ title, handleClick, ...transitProps }) {
  return <ButtonStyled onClick={handleClick} {...transitProps}>{title}</ButtonStyled>;
}

