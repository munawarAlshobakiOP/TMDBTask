import styled from 'styled-components';
import Image from 'next/image';

export const FooterC = styled.footer`
  background: var(--color-dark);
  color: var(--color-white);
  padding: 2.5rem 0 1.25rem 0;
  margin-top: 3.75rem;
  border-top: 0.0625rem solid var(--color-border);

  @media (max-width: 30rem) {
    padding: 1.875rem 0 0.9375rem 0;
  }
`;

export const FooterContainer = styled.div`
  max-width: var(--aligment-size);
  margin: 0 auto;
  padding: 0 1.25rem;

  @media (max-width: 30rem) {
    padding: 0 0.9375rem;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;

  @media (max-width: 48rem) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterLogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 12rem;
  text-align: center;
`;

export const StyledFooterLogo = styled(Image)`
  width: auto;
  height: auto;
  max-height: 5.625rem;
  object-fit: contain;
  margin-bottom: 1rem;
`;

export const JoinCommunityBtn = styled.button`
  background: var(--color-white);
  color: var(--color-primary);
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: var(--color-gray-light);
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 10rem;
  align-items: center;
  text-align: center;
`;

export const FooterTitle = styled.h3`
  color: var(--color-white);
  font-size: 1.125rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
`;

export const FooterLink = styled.a`
  color: var(--color-white);
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.2s ease;
  cursor: pointer;

  &:hover {
    color: var(--color-primary);
  }
`;

export const FooterList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin-bottom: 0.1875rem;
  }
`;
