import styled from 'styled-components';

export const ColumnWrapper = styled.div`
  width: 100%;
  max-width: var(--width-container-max);
  margin: 0 auto;
  padding: 0 var(--spacing-lg);

  @media (max-width: 768px) {
    padding: 0 var(--spacing-sm);
  }

  @media (max-width: var(--breakpoint-sm)) {
    padding: 0 var(--spacing-xs);
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
`;

export const Column = styled.div`
  width: 100%;
`;

export const ButtonContainer = styled.div`
  margin-bottom: var(--spacing-base);
  display: flex;
  align-items: center;
  gap: var(--spacing-base);
  width: var(--width-container-max);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-sm);
    margin-bottom: var(--spacing-lg);
  }

  @media (max-width: var(--breakpoint-sm)) {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-xs);
    margin-bottom: var(--spacing-md);
  }

  p {
    font-weight: var(--font-weight-bold);
    margin: 0;
    font-size: 1.3rem;
    color: var(--color-text);

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }

    @media (max-width: var(--breakpoint-sm)) {
      font-size: 1rem;
    }
  }
`;
export const SwitchContainer = styled.div`
  display: flex;
  border: var(--border-width-thin) solid var(--color-dark);
  border-radius: var(--radius-3xl);
  min-width: 12.5rem;

  @media (max-width: 768px) {
    min-width: 11rem;
  }

  @media (max-width: var(--breakpoint-sm)) {
    min-width: 10rem;
  }

`;

export const SwitchButton = styled.button`
  padding: var(--spacing-xs) 1.5rem;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  transition: var(all 0.4s cubic-bezier(0.4, 0, 0.2, 1));

  background: transparent;
  color: var(--color-black);
  flex: 1;
  text-align: center;
  cursor: pointer;


  white-space: nowrap;

  &:first-child {
    border-radius: var(--radius-3xl) 0 0 var(--radius-3xl);
  }

  &:last-child {
    border-radius: 0 var(--radius-3xl) var(--radius-3xl) 0;
  }

  &.active {
    border-radius: 1.5rem;

    color: rgb(var(--tmdbLightGreen));
    background: var(--color-dark);
  }

  &.inactive {
    color: var(--color-dark);
    background: #ffffff;
  }
`;


export const ColumnContent = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  padding: var(--spacing-base);
  max-width: 100%;
  overflow: hidden;
`;

export const ErrorMessage = styled.p`
  text-align: center;
`;

export const TrendingScroller = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: hidden;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm);
  scroll-snap-type: x mandatory;
  width: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;
  margin: 0 auto;
  position: relative;

  @media (max-width: 768px) {
    padding: 0.5rem;
    gap: 0.5rem;
  }

  @media (max-width: var(--breakpoint-sm)) {
    padding: 0.25rem;
    gap: 0.25rem;
  }

  &::-webkit-scrollbar {
    height: var(--spacing-sm);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-text-lighter);
    border-radius: var(--spacing-xs);
  }
`;

export const TrendingCard = styled.div`
  width: 10rem;
  min-width: 10rem;
  max-width: 10rem;
  flex: 0 0 10rem;
  flex-shrink: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 0;
  scroll-snap-align: start;
`;

export const MoviePoster = styled.img`
  width: var(--width-movie-card);
  height: var(--height-movie-poster);
  object-fit: cover;
  border-radius: var(--radius-lg);
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
`;

export const MovieTitle = styled.h4`
  font-size: 0.83rem;
  font-weight: var(--font-weight-semibold);
  margin: var(--spacing-sm) 0;
  color: var(--color-text-secondary);
  max-width: 8.125rem;
`;

export const MovieRating = styled.div`
  margin: -3.75rem 0 var(--spacing-xs) 0;
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
  margin: var(--spacing-sm) 0 0 0;
`;

export const LoadingMessage = styled.p`
  text-align: center;
  color: var(--color-text-light);
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
    margin: var(--spacing-xs) var(--spacing-md) var(--spacing-xs) var(--spacing-md);
    color: var(--color-text);
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
