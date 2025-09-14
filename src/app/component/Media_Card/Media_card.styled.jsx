import styled from 'styled-components';

export const CardWrapper = styled.div`
  position: relative;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #fff;
  border-radius: 0.4rem;
  box-shadow: 0 0.1rem 0.25rem rgba(0, 0, 0, 0.5);
  overflow: hidden;
  transition: box-shadow 0.2s, filter 0.3s ease;
  position: relative;
  height: 19.8rem; 
  width: 100%;
  max-width: 10.5rem; 
  padding: 0;
  margin: 0;

  &.blurred {
    filter: blur(0.1rem);
  }
`;
export const Details = styled.div`
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  width: 100%;
  height: 5rem;
`;
export const CardLink = styled.a`
  text-decoration: none;
  color: inherit;
  width: 100%;
  height: 15rem; 
  display: block;
  transition: filter 0.3s ease, background-color 0.3s ease;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 15rem; 
  overflow: hidden;
  border-radius: 0.4rem 0.4rem 0 0;
  padding: 0;
  margin: 0;
`;

export const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 0.4rem 0.4rem 0 0;
  border-bottom: 0.05rem solid #eee;
`;

export const Title = styled.h1`
  font-size: 0.85rem; 
  color: #222;
  margin: 0.5rem 0 0.25rem 0;
  font-weight: 700;
  line-height: 1.1;
  text-align: left;
  padding: 0 0.5rem;
  display: flex;
  align-items: flex-start;
  position: relative;
  cursor: pointer;

  &:hover {
    color: #01b4e4;
  }
`;

export const Tooltip = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  white-space: nowrap;
  z-index: 1000;
  margin-top: 0.5rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 0.25rem solid transparent;
    border-bottom-color: rgba(0, 0, 0, 0.9);
  }
`;

export const Date = styled.p`
  font-size: 0.65rem; 
  color: #666;
  margin: 0 0 0.5rem 0;
  padding: 0 0.5rem;
  text-align: left;
`;

export const Score = styled.div`
  position: absolute;
  top: 13.5rem;
  left: 0.4rem;
  color: #222;
  border-radius: 50%;
  width: 2.25rem;
  height: 2.25rem;
  font-size: 0.75rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
`;

export const MoreButton = styled.button`
  position: absolute;
  top: 0.4rem;
  right: 0.4rem;
  background: rgba(166, 166, 166, 0.7);
  border: none;
  border-radius: 50%;
  width: 1.5rem; 
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: background-color 0.2s ease;

  svg {
    width: 0.85rem;
    height: 0.85rem;
    color: #fff;
    opacity: 0.8;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.9);

    svg {
      opacity: 1;
    }
  }
`;

export const Morebox = styled.div`
  position: absolute;
  top: 2rem;
  right: 0.4rem;
  background: white;
  border-radius: 0.4rem;
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.15);
  z-index: 20;
  min-width: 6rem;
  overflow: hidden;
  filter: none !important;
`;

export const MoreBoxContent = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 0.6rem;
    font-weight: bold;
    margin: 0.25rem 0.5rem 0.1rem 0.5rem;
    color: #333;
    text-align: left;
  }

  > div {
    padding: 0.2rem 0;
    border-bottom: 0.05rem solid #f0f0f0;
  }
`;

export const MoreBoxItem = styled.a`
  background: none;
  border: none;
  padding: 0.2rem 0.5rem;
  text-align: left;
  font-size: 0.55rem;
  text-decoration: none;
  transition: background-color 0.2s ease;
  display: block;
  width: 100%;

  &:hover {
    background-color: var(--color-dark);
    color: #fff;
  }
`;


