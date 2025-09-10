'use client';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
const FooterC = styled.footer`
  background: #032541;
  color: #fff;
  padding: 2.5rem 0 1.25rem 0;
  margin-top: 3.75rem;
  border-top: .0625rem solid rgba(255, 255, 255, 0.1);
   @media (max-width: 30rem) {
    padding: 1.875rem 0 .9375rem 0;
    }
    
`; 
const FooterContainer = styled.div`max-width: 75rem;
  margin: 0 auto;
  padding: 0 1.25rem;
     @media (max-width: 30rem) {
    padding: 0 .9375rem;

    }
  `;
const FooterBottomContentMain= styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 3.125rem;
  @media (max-width: 48rem) {
  
      flex-direction: column;
    gap: 1.25rem;
    text-align: center;
  }
`;
const FooterContentRight = styled.div`
  flex: 1;

`;
const FooterContent= styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2.1875rem;
  margin-bottom: 2.5rem;
@media (max-width: 48rem) {
  
    flex-direction: column;
    gap: 1.25rem;
}
  @media (max-width: 30rem) {
    gap: .9375rem;

    }
`;
const FooterLogoSection= styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 7.5rem;  
@media (max-width: 48rem) {
    align-items: center;
  }
`;
const JoinCommunityBtn= styled.button`
background: #fff;
  color: #01b4e4;
  border-radius: .25rem;
  padding: .5rem 1rem;
  font-size: .75rem;
  font-weight: bolder;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
  margin-top: 1.875rem;  `;
  const FooterSection= styled.div`
    display: flex;
  flex-direction: column;
  `;
  const FooterTitle= styled.h3`
   color: #fff;
  font-size: 1.125rem;
  font-weight: 900;
  margin-bottom: .5rem;
  `;
  const FooterLink= styled.a`
  color: #fff;
  text-decoration: none;
  font-size: .875rem;
  transition: color 0.2s ease;
  `;
  const FooterList= styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
${FooterLink}{
    margin-bottom: .1875rem;

  }
  `;
const Footer = () => {
  return (
    <FooterC>
      <FooterContainer>
        <FooterBottomContentMain>
          <FooterContentRight>
            <FooterContent>
              <FooterLogoSection>
                <Image src="/assests/icon/footerlogo.svg" alt="Logo" width={130} height={90} />
                <JoinCommunityBtn>Join the Community</JoinCommunityBtn>
              </FooterLogoSection>
              <FooterSection>
                <FooterTitle>The Basics</FooterTitle>
                <FooterList>
                  <li><FooterLink href="/about" >About TMDB</FooterLink></li>
                  <li><FooterLink href="/contact">Contact Us</FooterLink></li>
                  <li><FooterLink href="/support">Support Forums</FooterLink></li>
                  <li><FooterLink href="/api-docs" >API Documentation</FooterLink></li>
                  <li><FooterLink href="/status" >System Status</FooterLink></li>
                </FooterList>
              </FooterSection>
              <FooterSection>
                <FooterTitle>Get Involved</FooterTitle>
                <FooterList>
                  <li><FooterLink href="/contribute" >Contribution Bible</FooterLink></li>
                  <li><FooterLink href="/add-movie">Add New Movie</FooterLink></li>
                  <li><FooterLink href="/add-tv" >Add New TV Show</FooterLink></li>
                </FooterList>
              </FooterSection>
              <FooterSection>
                <FooterTitle >Community</FooterTitle>
                <FooterList>
                  <li><FooterLink href="/guidelines" >Guidelines</FooterLink></li>
                  <li><FooterLink href="/discussions" >Discussions</FooterLink></li>
                  <li><FooterLink href="/leaderboard" >Leaderboard</FooterLink></li>
                </FooterList>
              </FooterSection>
              <FooterSection >
                <FooterTitle >Legal</FooterTitle>
                <FooterList>
                  <li><FooterLink href="/terms" >Terms of Use</FooterLink></li>
                  <li><FooterLink href="/api-terms" >API Terms of Use</FooterLink></li>
                  <li><FooterLink href="/privacy" >Privacy Policy</FooterLink></li>
                  <li><FooterLink href="/dmca" >DMCA Policy</FooterLink></li>
                </FooterList>
              </FooterSection>
            </FooterContent>
          </FooterContentRight>
        </FooterBottomContentMain>
      </FooterContainer>
    </FooterC>
  );
};

export default Footer;
