import React from "react";

import {
  ButtonStyled
} from './Button.styled';

export default function Button({ title, handleClick }) {
  return <ButtonStyled onClick={handleClick}>{title}</ButtonStyled>;
}

