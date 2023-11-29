import styled from '@emotion/styled';

export const ButtonStyled = styled.button`
  padding: 12px 50px 12px 50px;

  background-color: #3470ff;
  color: #ffffff;

  border: none;
  border-radius: 12px;
  outline: none;
  width: ${props => (props.type)};
  cursor: pointer;

  font-size: 14px;
  font-weight: 600;
  font-family: 'Manrope', sans-serif;
  &:hover {
    background-color: #0b44cd;
  }
`;
