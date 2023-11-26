import { NavLinkStyled, HeaderStyled } from './Header.styled';

export default function Header() {

  return (
    <HeaderStyled>
      <nav>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/vehicles">Vehicles</NavLinkStyled>
        <NavLinkStyled to="/favorites">Favorites</NavLinkStyled>
      </nav>
    </HeaderStyled>
  );
}
