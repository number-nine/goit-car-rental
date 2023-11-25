import styled from '@emotion/styled';

export const FormStyled = styled.form`
  display: flex;
  column-gap: 8px;
  align-items: center;
`;

export const ButtonStyled = styled.button`
  padding: 4px;
  margin-right: auto;

  background-color: #008cba;
  color: #ffffff;

  border: none;
  border-radius: 4px;
  outline: none;

  cursor: pointer;

  &:hover {
    background-color: #095872;
  }
`;

export const LabelStyled = styled.label`
  padding: 0.5rem;
  color: #008cba;
  text-decoration: none;
`;
