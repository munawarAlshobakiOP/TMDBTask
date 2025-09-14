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
  width: var(--width-container-max);
  margin: auto;
  padding: 0 1.25rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  box-sizing: border-box;

  @media (max-width: 480px) {
    width: 100%;
    padding: 0 0.5rem;
    height: 3.5rem;
  }
`;

export const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
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
  display: block;
  width: 8.75rem;
  height: 5rem;
  transition: all 0.3s ease;

  @media (max-width: 480px) {
    width: 6.25rem;
    height: 3.75rem;
  }
`;

export const DesktopNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;

  @media (max-width: 480px) {
    display: none;
  }
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

  @media (max-width: 480px) {
    gap: 0.25rem;
    flex-wrap: nowrap;
  }
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
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 480px) {
    width: 2rem;
    height: 2rem;
    padding: 0.25rem;
    
    & svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`;

export const LanguageSelector = styled.div`
  background: transparent;
  transition: all 0.3s ease;
  color: var(--background);

  span {
    font-family: sans-serif;
    font-size: 0.9rem;
    font-weight: 600;
    border: 0.0625rem solid var(--background);
    padding: 0.25rem 0.3125rem;
    border-radius: 0.25rem;
    display: inline-block;
    transition: all 0.3s ease;
    cursor: pointer;
    
    &:hover {
      background: var(--background);
      color: var(--color-dark);
      border-color: var(--background);
    }

    @media (max-width: 480px) {
      font-size: 0.8rem;
      padding: 0.2rem 0.25rem;
    }
  }
`;

export const LoginButton = styled.a`
  background: transparent;
  border: none;
  color: var(--background);
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition: all 0.3s ease;

  @media (max-width: 480px) {
    display: none;
  }
`;

export const JoinButton = styled.button`
  background: transparent;
  border: none;
  color: var(--background);
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition: all 0.3s ease;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;

  @media (max-width: 480px) {
    display: none;
  }
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

  @media (max-width: 480px) {
    width: 2rem;
    height: 2rem;
    
    & svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--background);
  padding: 0.5rem;
  border-radius: 0.25rem;
  transition: all 0.3s ease;
  cursor: pointer;

  @media (max-width: 480px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.25rem;
    height: 2.25rem;
  }
  
  & svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const MobileMenu = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen',
})`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--color-dark);
  border-top: 0.0625rem solid var(--color-border);
  box-shadow: var(--shadow-lg);
  z-index: var(--z-dropdown);

  @media (max-width: 480px) {
    display: ${props => props.isOpen ? 'block' : 'none'};
  }
`;

export const MobileNavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0.5rem 0;
  max-height: 80vh;
  overflow-y: auto;
`;

export const MobileNavItem = styled.li`
  width: 100%;
  border-bottom: 0.0625rem solid rgba(255, 255, 255, 0.1);
  
  &:last-child {
    border-bottom: none;
  }
`;

export const MobileNavLink = styled.a`
  color: var(--background);
  text-decoration: none;
  padding: 0.75rem 1rem;
  display: block;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.0187rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: var(--color-primary);
  }

  &:active {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const MobileJoinLink = styled.a`
  color: var(--color-primary);
  text-decoration: none;
  padding: 0.75rem 1rem;
  display: block;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.0187rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: var(--background);
  }

  &:active {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
