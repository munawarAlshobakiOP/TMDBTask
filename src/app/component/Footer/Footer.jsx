'use client';
import { FooterSections } from '../../data/dataG';
import * as Styled from './Footer.styled';

const Footer = () => {
  return (
    <Styled.FooterC>
      <Styled.FooterContainer>
        <Styled.FooterContent>
          <Styled.FooterLogoSection>
            <Styled.StyledFooterLogo
              src="/picture/icon/footerlogo.svg"
              alt="Logo"
              width={150}
              height={90}
            />
            <Styled.JoinCommunityBtn>Join the Community</Styled.JoinCommunityBtn>
          </Styled.FooterLogoSection>

          {FooterSections.map((section) => (
            <Styled.FooterSection key={section.title}>
              <Styled.FooterTitle>{section.title}</Styled.FooterTitle>
              <Styled.FooterList>
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Styled.FooterLink href={link.href}>{link.name}</Styled.FooterLink>
                  </li>
                ))}
              </Styled.FooterList>
            </Styled.FooterSection>
          ))}
        </Styled.FooterContent>
      </Styled.FooterContainer>
    </Styled.FooterC>
  );
};

export default Footer;
