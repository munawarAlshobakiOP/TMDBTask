import Image from 'next/image';
import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
  background-color: var(--color-dark);
  box-shadow: 0 .125rem .5rem var(--shadow-color-medium);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0;
  margin: 0;
  border: none;
  border-bottom: 0.0625rem solid var(--color-border);
  transition: all 0.3s ease;
`;

export const NavContainer = styled.div`
  width: var(--aligment-size);
  margin: auto;
  padding: 0 1.25rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  box-sizing: border-box;

`;

export const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const StyledLogo = styled(Image)`
  display: 'block',
  width: 140,
  height: 90,
`;

export const DesktopNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  position: relative;
`;

export const NavLink = styled.a`
  color: var(--background);
  text-decoration: none;
  padding: 1.25rem 1rem;
  display: block;
  
  letter-spacing: 0.0187rem;
  transition: all 0.3s ease;

  @media (max-width: 1024px) {
    padding: 1.125rem 0.875rem;
  }
`;

export const UserActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  color: var(--background);
  padding: 0.5rem;
  border-radius: 0.25rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
`;

export const LanguageSelector = styled.div`
  border: 0.0625rem solid rgba(255, 255, 255, 0.4);
  border-radius: 0.25rem;
  padding: 0.375rem 0.75rem;
  color: var(--background);
  font-size: 0.625rem;
  cursor: pointer;
  background: transparent;
  transition: all 0.3s ease;

  &:hover {
    background: var(--background);
    color: var(--color-dark);
    border-color: var(--background);
  }
`;

export const LoginButton = styled.a`
  background: transparent;
  border: none;
  color: var(--background);
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition: all 0.3s ease;
`;

export const JoinButton = styled.button`
  background: transparent;
  border: none;
  color:  var(--background);
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition: all 0.3s ease;
`;

export const RightIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 0.25rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
