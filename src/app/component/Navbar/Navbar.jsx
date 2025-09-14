'use client';
import { useState } from 'react';
import { Nav_link_data_Left } from "../../data/dataG";

import * as NavbarS from "./navbar.styled.jsx";
import { Add_Icon, Search_Icon, Menu_Icon  } from '../../assests/icons';  
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <NavbarS.NavbarWrapper>
      <NavbarS.NavContainer>
         <NavbarS.LeftGroup> 
      <NavbarS.Brand>
        <NavbarS.LogoContainer>
          <NavbarS.LogoLink href="/">
            <NavbarS.StyledLogo
              src="/picture/icon/logoNAv.svg"
              alt="Logo"
              width={140}
              height={80}
            />
          </NavbarS.LogoLink>
        </NavbarS.LogoContainer>
      </NavbarS.Brand>

      <NavbarS.DesktopNav>
        <NavbarS.NavList>
          {Nav_link_data_Left.map((item) => (
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
          <NavbarS.IconButton>
            <Add_Icon />
          </NavbarS.IconButton>
          
          <NavbarS.LanguageSelector>
            <span>EN</span>
          </NavbarS.LanguageSelector>
          
          <NavbarS.LoginButton href="/login">
            Login
          </NavbarS.LoginButton>
          
          <NavbarS.JoinButton>
            Join TMDB
          </NavbarS.JoinButton>

          <NavbarS.RightIcons>
            <Search_Icon />
          </NavbarS.RightIcons>
          
          <NavbarS.MobileMenuButton onClick={toggleMobileMenu}>
            <Menu_Icon />
          </NavbarS.MobileMenuButton>
        </NavbarS.UserActions>
      </NavbarS.NavContainer>

      <NavbarS.MobileMenu isOpen={isMobileMenuOpen}>
        <NavbarS.MobileNavList>
          {Nav_link_data_Left.map((item) => (
            <NavbarS.MobileNavItem key={item.name}>
              <NavbarS.MobileNavLink href={item.Path}>
                {item.name}
              </NavbarS.MobileNavLink>
            </NavbarS.MobileNavItem>
          ))}
          <NavbarS.MobileNavItem>
            <NavbarS.MobileJoinLink href="/login">
              Join TMDB
            </NavbarS.MobileJoinLink>
          </NavbarS.MobileNavItem>
        </NavbarS.MobileNavList>
      </NavbarS.MobileMenu>
    </NavbarS.NavbarWrapper>
  );
};

export default Navbar;
