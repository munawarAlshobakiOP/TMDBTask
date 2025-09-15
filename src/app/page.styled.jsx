import styled from 'styled-components';

export const PageContainer = styled.div`
  background-color: var(--color-white);
`;

export const ContentWrapper = styled.div`
  margin-top: var(--spacing-5xl);

  @media (max-width: 768px) {
    margin-top: 6rem;
  }

  @media (max-width: 480px) {
    margin-top: 5.5rem;
  }
`;

export const MainContent = styled.main`
  padding: var(--spacing-lg);

  @media (max-width: 768px) {
    padding: var(--spacing-md);
  }

  @media (max-width: 480px) {
    padding: var(--spacing-sm);
  }
`;
