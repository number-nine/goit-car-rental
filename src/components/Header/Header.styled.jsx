import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem auto 0 auto;
  width: 640px;
  border-bottom: 1px solid #008cba;
`;

export const NavStyled = styled.nav`
  display: flex;
  justify-content: flex-start;
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 0.5rem;
  font-size: 1.5rem;
  color: #008cba;
  text-decoration: none;

  &:hover {
    color: #095872;
    text-decoration: revert;
  }

  &.active {
    color: #ffa500;
  }
`;
