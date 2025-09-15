import styled from 'styled-components';


export const MoviePoster = styled.img`
  width: var(--width-movie-card);
  height: var(--height-movie-poster);
  object-fit: cover;
  border-radius: var(--radius-lg);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 48rem) {
    width: 9.5rem;
    height: 14.25rem;
  }

  @media (max-width: var(--breakpoint-sm)) {
    width: 9rem;
    height: 13.5rem;
  }
`;

export const NoImagePlaceholder = styled.div`
  width: var(--width-movie-card);
  height: var(--height-movie-poster);
  background-color: var(--color-gray-light);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-light);
  font-size: var(--font-size-sm);

  @media (max-width: 48rem) {
    width: 9.5rem;
    height: 14.25rem;
  }

  @media (max-width: var(--breakpoint-sm)) {
    width: 9rem;
    height: 13.5rem;
  }
`;

export const MovieTitle = styled.h4`
  font-size: 0.83rem;
  font-weight: var(--font-weight-semibold);
  margin: var(--spacing-xs) 0;
  color: var(--color-text-secondary);
  max-width: 8.125rem;

  @media (max-width: 48rem) {
    font-size: 0.8rem;
    max-width: 8.5rem;
  }

  @media (max-width: var(--breakpoint-sm)) {
    font-size: 0.75rem;
    max-width: 8rem;
  }
`;

export const MovieRating = styled.div`
  margin: -1.5rem 0 var(--spacing-xs) 0;
  color: var(--color-secondary);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-sm);
  min-height: 2.5rem;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding-left: var(--spacing-sm);
`;

export const MovieYear = styled.p`
  font-size: 0.8rem;
  color: var(--color-gray-darker);
  margin: var(--spacing-xs) 0 0 0;

  @media (max-width: 48rem) {
    font-size: 0.75rem;
  }

  @media (max-width: var(--breakpoint-sm)) {
    font-size: 0.7rem;
  }
`;

export const MoreButton = styled.button`
  position: absolute;
  top: var(--spacing-sm);
  right: var(--spacing-sm);
  background: var(--shadow-color-medium);
  border: none;
  border-radius: var(--radius-full);
  width: 1.75rem;
  height: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--z-dropdown);
  transition: var(--transition-base);

  svg {
    width: var(--spacing-base);
    height: var(--spacing-base);
    color: var(--color-white);
    opacity: 0.8;
  }

  &:hover {
    background: var(--shadow-color-dark);

    svg {
      opacity: 1;
    }
  }
`;

export const Morebox = styled.div`
  position: absolute;
  top: var(--spacing-3xl);
  right: var(--spacing-sm);
  background: var(--color-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  z-index: var(--z-sticky);
  min-width: 7.5rem;
  overflow: hidden;
`;

export const MoreBoxContent = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 0.6875rem;
    font-weight: var(--font-weight-bold);
    margin: var(--spacing-xs) var(--spacing-md) var(--spacing-xs)
      var(--spacing-md);
    color: var(--color-text-secondary);
    text-align: left;
  }

  > div {
    padding: var(--spacing-xs) 0;
    border-bottom: var(--border-width-thin) solid var(--color-gray-light);
  }
`;

export const MoreBoxItem = styled.a`
  background: none;
  border: none;
  padding: var(--spacing-xs) var(--spacing-md);
  text-align: left;
  font-size: 0.625rem;
  text-decoration: none;
  transition: var(--transition-base);
  display: block;
  width: 100%;

  &:hover {
    background-color: var(--color-dark);
    color: var(--color-white);
  }
`;


export const MovieDetail = styled.div`
  word-break: break-word;
  white-space: normal;
  margin-top: var(--spacing-sm);
`;

export const TrendingCard = styled.div`
  width: var(--width-movie-card);
  min-width: var(--width-movie-card);
  max-width: var(--width-movie-card);
  flex: 0 0 var(--width-movie-card);
  flex-shrink: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 0;
  scroll-snap-align: start;
  position: relative;
  min-height: 26rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;


  @media (max-width: 48rem) {
    width: 9.5rem;
    min-width: 9.5rem;
    max-width: 9.5rem;
    flex: 0 0 9.5rem;
    min-height: 24rem;
  }

  @media (max-width: var(--breakpoint-sm)) {
    width: 9rem;
    min-width: 9rem;
    max-width: 9rem;
    flex: 0 0 9rem;
    min-height: 20rem;
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
