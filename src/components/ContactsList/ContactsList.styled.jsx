import styled from '@emotion/styled';

export const ListWrapper = styled.ul`
  margin: 0;
  padding: 0;
  li {
    margin: 0;
    padding: 0 0 8px 0;
    list-style: none;

    display: flex;
    align-items: center;
    button {
      margin-left: auto;
      margin-right: 0;
    }
  }
`;

export const PrivateContact = styled.span`
  position: relative;
  top: -0.4rem;
  left: 0.25rem;
  padding: 2px;
  color: #ffffff;
  background-color: #eb643a;
  font-size: 0.75rem;
  border-radius: 0.2rem;
`;

export const SharedContact = styled.span`
  position: relative;
  top: -0.4rem;
  left: 0.25rem;
  padding: 2px;
  color: #ffffff;
  background-color: #15cc0e;
  font-size: 0.75rem;
  border-radius: 0.2rem;
`;
