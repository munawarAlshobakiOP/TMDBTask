import styled from 'styled-components';

export const CardWrapper = styled.div`
  position: relative;
`;

export const Details = styled.div`
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  width: 100%;
  height: 5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 0 0 0.4rem 0.4rem;

  @media (max-width: 48rem) {
    position: static;
    flex: 1;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
export const CardLink = styled.a`
  text-decoration: none;
  color: inherit;
  width: 100%;
  height: 15rem;
  display: block;
  transition:
    filter 0.3s ease,
    background-color 0.3s ease;
  pointer-events: none;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 15rem;
  overflow: hidden;
  border-radius: 0.4rem 0.4rem 0 0;
  padding: 0;
  margin: 0;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 48rem) {
    width: 5rem;
    height: 7.5rem;
    border-radius: 0.375rem;
    margin-right: 1rem;
    margin-top: -0.5rem;
    flex-shrink: 0;
    overflow: hidden;
  }
`;

export const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 0.4rem 0.4rem 0 0;
  border-bottom: 0.05rem solid #eee;

  @media (max-width: 48rem) {
    object-fit: contain;
    border-radius: 0.375rem;
    border-bottom: none;
  }
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


  @media (max-width: 48rem) {
    font-size: 1rem;
    margin: 0 0 0.25rem 0;
    padding: 0;
    line-height: 1.2;
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

  @media (max-width: 48rem) {
    font-size: 0.875rem;
    color: #888;
    margin: 0 0 0.5rem 0;
    padding: 0;
  }
`;

export const Description = styled.p`
  display: none;

  @media (max-width: 48rem) {
    font-size: 0.875rem;
    color: #666;
    line-height: 1.4;
    margin: 0;
    padding: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
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

  @media (max-width: 48rem) {
    display: none;
  }
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

  @media (max-width: 48rem) {
    display: none;
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



export const ClickableOverlay = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  text-decoration: none;
  color: inherit;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #fff;
  border-radius: 0.4rem;
  box-shadow: 0 0.1rem 0.25rem rgba(0, 0, 0, 0.5);
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  height: 19.8rem;
  width: 100%;
  max-width: 10.5rem;
  padding: 0;
  margin: 0;
  cursor: pointer;


  &.blurred {
    filter: blur(0.1rem);
  }

  @media (max-width: 48rem) {
    flex-direction: row;
    height: auto;
    min-height: 9rem;
    max-width: 100%;
    padding: 1rem;
    margin-bottom: 0.75rem;
    border-radius: 0.5rem;
    box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.1);
  }
`;

export const EmojiReaction = styled.div`
  display: none;

  @media (max-width: 48rem) {
    display: flex;
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    font-size: 1.5rem;
    z-index: 5;
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.8);
  }
`;
