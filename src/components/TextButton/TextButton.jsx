import React from "react";

import { TextButtonStyled } from './TextButton.styled';

export default function TextButton({ title, handleClick }) {
  return <TextButtonStyled onClick={handleClick}>{title}</TextButtonStyled>;
}

