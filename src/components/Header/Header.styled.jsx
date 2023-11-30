import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
  display: flex;
  padding: 8px 0;
  background-color: #121417;
`;

export const NavStyled = styled.nav`
  display: flex;
  justify-content: flex-start;
  width: 1184px;
  margin: 0 auto;
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 4px 8px;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  text-decoration: none;

  &:hover {
    text-decoration: revert;
  }

  &.active {
    color: #ffa500;
  }
`;
