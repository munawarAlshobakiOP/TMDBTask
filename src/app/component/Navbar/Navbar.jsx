'use client';
import { useState } from 'react';
import { Nav_link_data_Left } from '../../data/dataG';

import * as NavbarS from './navbar.styled.jsx';
import { Search_Icon, Menu_Icon } from '../../assests/icons';
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <NavbarS.NavbarWrapper>
      <NavbarS.NavContainer>
        <NavbarS.LeftGroup>
          <NavbarS.MobileMenuButton onClick={toggleMobileMenu}>
            <Menu_Icon />
          </NavbarS.MobileMenuButton>

          <NavbarS.Brand>
            <NavbarS.LogoContainer>
              <NavbarS.LogoLink href='/'>
                <NavbarS.DesktopLogo
                  src='/picture/icon/logoNAv.svg'
                  alt='Logo'
                  width={140}
                  height={80}
                />
                <NavbarS.MobileLogo
                  src='/picture/icon/footerlogo.svg'
                  alt='Logo'
                  width={120}
                  height={60}
                />
              </NavbarS.LogoLink>
            </NavbarS.LogoContainer>
          </NavbarS.Brand>

          <NavbarS.DesktopNav>
            <NavbarS.NavList>
              {Nav_link_data_Left.map(item => (
                <NavbarS.NavItem key={item.name}>
                  <NavbarS.NavLink href={item.Path}>
                    {item.name}
                  </NavbarS.NavLink>
                </NavbarS.NavItem>
              ))}
            </NavbarS.NavList>
          </NavbarS.DesktopNav>
        </NavbarS.LeftGroup>

        <NavbarS.UserActions>
          <NavbarS.LanguageSelector>
            <span>EN</span>
          </NavbarS.LanguageSelector>

          <NavbarS.LoginButton href='/login'>Login</NavbarS.LoginButton>

          <NavbarS.JoinButton>Join TMDB</NavbarS.JoinButton>

          <NavbarS.RightIcons>
            <Search_Icon />
          </NavbarS.RightIcons>
        </NavbarS.UserActions>
      </NavbarS.NavContainer>

      <NavbarS.MobileMenuBackdrop isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
      <NavbarS.MobileMenu isOpen={isMobileMenuOpen}>
        <NavbarS.MobileNavList>
          {Nav_link_data_Left.map(item => (
            <NavbarS.MobileNavItem key={item.name}>
              <NavbarS.MobileNavLink href={item.Path}>
                {item.name}
              </NavbarS.MobileNavLink>
            </NavbarS.MobileNavItem>
          ))}
          <NavbarS.MobileNavItem>
            <NavbarS.MobileLoginLink href='/login'>
              Login
            </NavbarS.MobileLoginLink>
          </NavbarS.MobileNavItem>
        </NavbarS.MobileNavList>
      </NavbarS.MobileMenu>
    </NavbarS.NavbarWrapper>
  );
};

export default Navbar;
