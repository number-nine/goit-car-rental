import styled from '@emotion/styled';

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  width: 100%;
`;

export const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  width: 50%;
  font-size: 14px;
`;

export const LabelStyledChk = styled.label`
  display: flex;
  column-gap: 8px;
  font-size: 14px;
`;

export const FieldStyled = styled.input`
  height: 36px;
  font-size: 24px;
`;

export const Error = styled.div`
  font-size: 14px;
  color: #f36258;
`;
