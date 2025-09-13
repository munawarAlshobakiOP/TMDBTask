import styled from 'styled-components';

export const WelcomeSectionContainer = styled.section.withConfig({
  shouldForwardProp: (prop) => prop !== 'backgroundImage',
})`
  position: relative;
  width: 100%;
  height: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  background-image: ${({ backgroundImage }) =>
    backgroundImage ? `url(${backgroundImage})` : 'none'};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  background-color: var(--color-primary);
  animation: fadeIn 0.8s ease-out;
  transition: background-image var(--transition-slow);

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(var(--spacing-lg));
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 48rem) {
    height: 17.5rem;
    padding: var(--spacing-lg) 0;
  }

  @media (max-width: 30rem) {
    height: 15.625rem;
  }

  @media (max-width: 22.5rem) {
    height: 13.75rem;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--shadow-primary), var(--gradient-color1));
  z-index: 1;
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
  width: var(--width-container-max);
  margin: auto;
  padding: 0 var(--spacing-lg);
  text-align: left;
  color: var(--color-white) !important;
  box-sizing: border-box;

  @media (max-width: 48rem) {
    padding: 0 var(--spacing-3xl);
  }

  @media (max-width: 30rem) {
    padding: 0 var(--spacing-lg);
  }

  @media (max-width: 22.5rem) {
    padding: 0 var(--spacing-md);
  }
`;

export const WelcomeContainer = styled.div`
  width: 100%;
  text-align: left;
`;

export const WelcomeTitle = styled.h1`
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-5xl);
  margin: 0 0 var(--spacing-lg) 0;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--color-white) !important;

  @media (max-width: 48rem) {
    margin-bottom: var(--spacing-md);
  }

  @media (max-width: 30rem) {
    font-size: 2.2rem;
  }

  @media (max-width: 22.5rem) {
    font-size: 1.8rem;
  }
`;

export const WelcomeSubtitle = styled.h2`
  font-weight: var(--font-weight-semibold);
  font-size: 1.8rem;
  margin: 0 0 var(--spacing-xl) 0;
  line-height: 1.4;
  opacity: 1;
  color: var(--color-white) !important;

  @media (max-width: 48rem) {
    margin-bottom: var(--spacing-3xl);
  }

  @media (max-width: 30rem) {
    margin-bottom: var(--spacing-3xl);
  }

  @media (max-width: 22.5rem) {
    margin-bottom: var(--spacing-lg);
  }
`;

export const Search = styled.div`
  width: 100%;
  max-width: 56.25rem;
  margin-top: var(--spacing-lg);

  @media (max-width: 30rem) {
    margin-top: var(--spacing-md);
  }
`;

export const SearchForm = styled.form`
  position: relative;
  width: 100%;
`;

export const SearchWrapper = styled.label`
  width: 100%;
`;

export const SearchInput = styled.div`
  background: var(--color-white);
  border-radius: var(--radius-3xl);
  padding: var(--spacing-xs) 8.75rem var(--spacing-xs) var(--spacing-base);
  display: flex;
  align-items: center;
  border: var(--border-width-medium) solid transparent;
  width: 100%;

  @media (max-width: 48rem) {
    padding: var(--spacing-sm) 7.5rem var(--spacing-sm) var(--spacing-md);
  }

  @media (max-width: 30rem) {
    padding: var(--spacing-sm) 6.25rem var(--spacing-sm) var(--spacing-md);
    border-radius: var(--radius-3xl);
  }

  @media (max-width: 22.5rem) {
    padding: var(--spacing-xs) 5rem var(--spacing-xs) var(--spacing-sm);
  }
`;

export const SearchInputInner = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-size: var(--font-size-xl);
  background: transparent;
  color: var(--color-text);
  flex: 1;

  &::placeholder {
    color: var(--color-text-lighter);
    opacity: 1;
  }

  @media (max-width: 48rem) {
    font-size: var(--font-size-lg);
  }

  @media (max-width: 30rem) {
    font-size: var(--font-size-base);

    &::placeholder {
      font-size: var(--font-size-sm);
    }
  }

  @media (max-width: 22.5rem) {
    font-size: var(--font-size-sm);

    &::placeholder {
      font-size: var(--font-size-xs);
    }
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(to right, var(--color-success), var(--color-primary));
  color: var(--color-white);
  border: none;
  border-radius: var(--radius-3xl);
  padding: 0.64rem var(--spacing-2xl);
  cursor: pointer;
  transition: var(--transition-all);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  z-index: var(--z-dropdown);

  &:hover {
    color: var(--color-black);
  }

  @media (max-width: 48rem) {
    padding: var(--spacing-sm) var(--spacing-xl);
    font-size: var(--font-size-lg);
  }

  @media (max-width: 30rem) {
    padding: var(--spacing-xs) var(--spacing-lg);
    font-size: var(--font-size-base);
    border-radius: var(--radius-2xl);
  }

  @media (max-width: 22.5rem) {
    padding: var(--spacing-xs) var(--spacing-base);
    font-size: var(--font-size-sm);
  }
`;

export const LoadingIndicator = styled.div`
  position: absolute;
  top: var(--spacing-lg);
  right: var(--spacing-lg);
  background: var(--shadow-color-dark);
  color: var(--color-white);
  padding: var(--spacing-sm);
  border-radius: var(--radius-sm);
  z-index: var(--z-dropdown);
`;
