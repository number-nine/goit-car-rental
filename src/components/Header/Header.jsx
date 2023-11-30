import { NavLinkStyled, HeaderStyled, NavStyled } from './Header.styled';

export default function Header() {

  return (
    <HeaderStyled>
      <NavStyled>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/catalog">Vehicles</NavLinkStyled>
        <NavLinkStyled to="/favorites">Favorites</NavLinkStyled>
      </NavStyled>
    </HeaderStyled>
  );
}
