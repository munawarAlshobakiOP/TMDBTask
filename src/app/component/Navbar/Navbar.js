'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
const NavbarWrapper = styled.nav`
  background: #032541 !important;
  box-shadow: 0 .125rem .5rem rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0;
  margin: 0;
  border: none;
  border-bottom: 0.0625rem solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
`;

const NavContainer = styled.div`
  max-width: 75rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.25rem;
  height: 3.125rem;
  transition: all 0.3s ease;

  @media (max-width: 1024px) {
    padding: 0 .9375rem;
  }

  @media (max-width: 768px) {
    height: 4rem;
  }
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;
const LogoLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  transition: all 0.3s ease;
  padding: 0.5rem;
`;

const DesktopNav = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-start;
  margin-left: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  position: relative;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 1.25rem 1rem;
  display: block;
  font-weight: 500;
  font-size: 0.9375rem;
  letter-spacing: 0.0187rem;
  transition: all 0.3s ease;

  @media (max-width: 1024px) {
    padding: 1.125rem 0.875rem;
  }
`;

const UserActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    display: none;
  }
`;

const IconButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 1.125rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.25rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
`;

const LanguageSelector = styled.div`
  border: 0.0625rem solid rgba(255, 255, 255, 0.4);
  border-radius: 0.25rem;
  padding: 0.375rem 0.75rem;
  color: #fff;
  font-size: 0.625rem;
  font-weight: 500;
  cursor: pointer;
  background: transparent;
  transition: all 0.3s ease;

  &:hover {
    background: #fff;
    color: #032541;
    border-color: #fff;
  }
`;

const LoginButton = styled(Link)`
  background: transparent;
  border: none;
  color: #fff;
  font-size: 0.8125rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition: all 0.3s ease;
`;

const JoinButton = styled.button`
  background: transparent;
  border: none;
  color: #fff;
  font-size: 0.8125rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition: all 0.3s ease;
`;

const RightIcons = styled.div`
  display: flex;
  align-items: center;
`;
const SearchIcon = () => (
  <svg
    width="20"
    height="20"
    fill="currentColor"
    viewBox="0 0 20 20"
    style={{
      color: '#fff',
      cursor: 'pointer',
    }}
  >
    <path
      fillRule="evenodd"
      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
      clipRule="evenodd"
    />
  </svg>
);
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const scrollY = window.scrollY;
        if (scrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      handleScroll();
      
      return () => {
        if (typeof window !== 'undefined') {
          window.removeEventListener('scroll', handleScroll);
        }
      };
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
  <NavbarWrapper>
      <NavContainer>
        <Brand>
          <LogoLink href="/" >
            <LogoContainer>
              <Image src="../assests/icon/logoNAv.svg" alt="Logo" width={140} height={80} style={{ display: 'block' }} />
            </LogoContainer>
          </LogoLink>
        </Brand>

        <DesktopNav>
          <NavList>
            <NavItem>
              <NavLink href="/movie" >
                Movies
              </NavLink>
            </NavItem>
            <NavItem >
              <NavLink href="/TV" >
                TV Shows
              </NavLink>
            </NavItem>
       
          </NavList>
        </DesktopNav>

        <UserActions>
          <IconButton>+</IconButton>
          <LanguageSelector>
            <span>EN</span>
          </LanguageSelector>
          <LoginButton href="/login" >
            Login
          </LoginButton>
          <JoinButton >Join TMDB</JoinButton>
        </UserActions>

        <RightIcons>
          <SearchIcon />
        </RightIcons>
      </NavContainer>

    </NavbarWrapper>
  );
};

export default Navbar;
