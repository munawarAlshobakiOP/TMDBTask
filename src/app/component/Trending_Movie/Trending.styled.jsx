import styled from 'styled-components';

export const ColumnWrapper = styled.div`
  width: 100%;
  max-width: var(--width-container-max);
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
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

  p {
    font-weight: var(--font-weight-bold);
    margin: 0;
    font-size: 1.3rem;
    color: var(--color-text);
  }
`;

export const SwitchContainer = styled.div`
  position: relative;
  display: flex;
  border: var(--border-width-thin) solid var(--color-black);
  border-radius: var(--radius-3xl);
  padding: var(--spacing-xs);
  gap: 0;
`;

export const SwitchButton = styled.button`
  padding: var(--spacing-xs) 1.2rem;
  border: none;
  border-radius: var(--radius-3xl);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  transition: var(--transition-all);
  background: transparent;
  color: var(--color-black);
  position: relative;
  z-index: 2;
  min-width: 4.375rem;

  &.active {
    background: linear-gradient(
      135deg,
      var(--color-primary),
      var(--color-primary2)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  &.inactive {
    color: var(--color-black);
    background: transparent;
  }
`;

export const SwitchSlider = styled.div`
  position: absolute;
  top: var(--spacing-xs);
  left: var(--spacing-xs);
  width: calc(50% - var(--spacing-xs));
  height: calc(100% - var(--spacing-xs));
  background: var(--color-dark);
  border-radius: var(--radius-3xl);
  transition: var(--transition-all);
  z-index: 1;

  &.sliderLeft {
    transform: translateX(0);
  }

  &.sliderRight {
    transform: translateX(100%);
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
  color: var(--color-error);
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
  white-space: nowrap;
  scroll-behavior: smooth;
  height: 21.875rem;
  margin: 0 auto;
  position: relative;

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
