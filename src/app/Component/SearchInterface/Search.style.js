import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  top: 4rem;
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
  gap: 2rem;
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
  min-height: 3rem;
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

  & svg {
    color: var(--color-black);
    position: absolute;
    left: 2rem; 
    top: 50%;
    transform: translateY(-50%);
    width: 1.25rem;
    height: 1.25rem;
    z-index: 1;

    @media (max-width: 768px) {
      left: 0.75rem;
      width: 1rem;
      height: 1rem;
    }

    @media (max-width: 480px) {
      left: 0.5rem;
      width: 0.875rem;
      height: 0.875rem;
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
  padding: 0.5rem 0.75rem 0.5rem 3.2rem;

  &::placeholder {
    color: var(--color-text-lighter);
    opacity: 1;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.5rem 0.75rem 0.5rem 2rem;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
    padding: 0.375rem 0.5rem 0.375rem 1.5rem;
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
  gap: 2.5rem;
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
  display:flex;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: var(--radius-full);
  color: var(--color-black);
  @media (max-width: 600px) {
    margin-right: 2rem;
  }
  @media (max-width: 768px) {
    width: 2.25rem;
    height: 2.25rem;
  }

  @media (max-width: 480px) {
    width: 2rem;
    height: 2rem;
  }

  & svg {
      position: absolute;
       width: 1.25rem;
    height: 1.25rem;
    left:3.5rem;
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
export const spanTrending = styled.span`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  height:4rem;
  font-weight: bold;
  font-size: 2rem;
  pointer-events: none;
  background: transparent;
  color: inherit;
  padding-left:1rem;
  margin-right: 2.5rem;

  
`;

export const IConTrending = styled.span`
flex-shrink: 0;
  display:flex;
  width: 4.5rem;
  height: 4.5rem;
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
      position: absolute;
       width: 2.25rem;
    height: 2.25rem;
    color: var(--color-black);

    @media (max-width: 768px) {
      width: 2.375rem;
      height: 2.375rem;
    }

    @media (max-width: 480px) {
      width: 2.25rem;
      height: 2.25rem;
}}
`;