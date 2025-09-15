import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  top: 3.5rem;
  left: 0;
  right: 0;
  background: var(--color-white);
  z-index: var(--z-sticky);
  box-sizing: border-box;
  border-bottom: var(--border-width-thin) solid var(--color-border);
  box-shadow: var(--shadow-sm);

  @media (max-width: 768px) {
    padding: 0 1rem;
    top: 3.5rem;
  }

  @media (max-width: 480px) {
    padding: 0 0.75rem;
    top: 3.25rem;
  }
`;

export const SearchForm2 = styled.form`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  width: 100%;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }

  @media (max-width: 480px) {
    gap: 0.25rem;
  }
`;

export const SearchInputWrapper = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  width: var(--width-container-max);
  align-items: center;
  padding: 0 var(--spacing-base) 0 var(--spacing-lg);
  min-height: 2rem;
  border: var(--border-width-thin) solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-white);
  transition: var(--transition-all);

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 0.75rem 0 1rem;
    min-height: 2rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0 0.5rem 0 0.75rem;
    min-height: 1.75rem;
  }

  &:focus-within {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 0.125rem rgba(1, 180, 228, 0.2);
  }

  & svg {
    color: var(--color-black);
    position: absolute;
    left: 4rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1.125rem;
    height: 1.125rem;
    z-index: 1;

    @media (max-width: 768px) {
      left: 3.5rem;
      width: 1rem;
      height: 1rem;
    }

    @media (max-width: 480px) {
      left: 3rem;
      width: 0.875rem;
      height: 0.875rem;
    }
  }

  & input {
    padding-left: 5.5rem;

    @media (max-width: 768px) {
      padding-left: 5rem;
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      padding-left: 4.5rem;
      font-size: 0.875rem;
    }
  }
`;

export const SearchInput2 = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-size: var(--font-size-base);
  background: transparent;
  color: var(--color-text-secondary);
  padding: 0.5rem 0.75rem 0.5rem 5.5rem;

  &::placeholder {
    color: var(--color-text-lighter);
    opacity: 1;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.5rem 0.75rem 0.5rem 5rem;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
    padding: 0.375rem 0.5rem 0.375rem 4.5rem;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--color-white);
  border-radius: 0 0 var(--radius-lg) var(--radius-lg);
  box-shadow: var(--shadow-lg);
  max-height: 25rem;
  overflow-y: auto;
  z-index: var(--z-dropdown);

  @media (max-width: 768px) {
    max-height: 22rem;
    border-radius: 0 0 0.75rem 0.75rem;
  }

  @media (max-width: 480px) {
    max-height: 20rem;
    border-radius: 0 0 0.5rem 0.5rem;
  }
`;

export const LoadingIndicator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-3xl);
`;

export const ResultsList = styled.div`
  padding: var(--spacing-xs) 0;
`;

export const ResultItem = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-md);
  transition: var(--transition-base);
  border-bottom: var(--border-width-thin) solid var(--color-border);
  position: relative;
  min-height: auto;
  font-size: var(--font-size-sm);

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: var(--spacing-md);
    right: var(--spacing-md);
    height: 0.125rem;
    background-color: var(--color-white);
  }

  &:hover {
    background-color: var(--color-border-light);
  }

  @media (max-width: 768px) {
    padding: 0.75rem 0.75rem;
    gap: 0.75rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0.5rem;
    gap: 0.5rem;
  }
`;

export const ResultIcon = styled.div`
  flex-shrink: 0;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: var(--radius-full);
  display: flex;
  color: var(--color-black);
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 2.25rem;
    height: 2.25rem;
  }

  @media (max-width: 480px) {
    width: 2rem;
    height: 2rem;
  }

  & svg {
    width: var(--spacing-base);
    height: var(--spacing-base);
    color: var(--color-black);

    @media (max-width: 768px) {
      width: 1.375rem;
      height: 1.375rem;
    }

    @media (max-width: 480px) {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`;

export const ResultTitle = styled.h4`
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-dark);
  margin: 0 0 var(--spacing-xs) 0;
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    line-height: 1.25;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
    line-height: 1.2;
  }
`;
