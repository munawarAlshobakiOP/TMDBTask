import styled from "styled-components";

export const PageContainer = styled.div`
  background-color: var(--color-white);
  min-height: 100vh;
  overflow-x: hidden;
`;

export const MainLayout = styled.div`
  display: flex;
  margin-top: var(--spacing-sm);
  max-width: var(--width-container-max);
  margin-left: auto;
  margin-right: auto;
  padding: 0 var(--spacing-base);
`;

export const Sidebar = styled.div`
  width: 14rem;
  position: sticky;
  top: var(--spacing-5xl);
  max-width: var(--width-container-max);
  margin-left: auto;
  margin-right: auto;
`;

export const ContentArea = styled.div`
  flex: 1;
  padding: var(--spacing-base);
  box-sizing: border-box;
`;

export const MoviesContainer = styled.div`
  margin-bottom: var(--spacing-base);
`;

export const TitleContainer = styled.div`
  max-width: var(--width-container-max);
  margin: 7rem auto var(--spacing-sm) auto;
  padding: 0 var(--spacing-lg);
  background-color: var(--color-white);
`;

export const SectionTitle = styled.h1`
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-dark);
  margin: 0;
  text-align: left;
  padding: 0;
`;

export const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--spacing-base) 0;
  padding: var(--spacing-xs);
  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fit, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, 1fr);
  }
`;



export const MovieCardWrapper = styled.div`
  width: 100%;
  margin: 0;
`;

export const ErrorTitle = styled.h2`
  margin-bottom: var(--spacing-base);
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-gray-medium);
`;

export const ErrorMessage = styled.p`
  margin-bottom: var(--spacing-base);
  line-height: 1.5;
  font-size: var(--font-size-lg);
  color: var(--color-gray-medium);
`;

export const RetryButton = styled.button`
  background-color: var(--color-primary);
  color: var(--color-white);
  border: none;
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  cursor: pointer;
  transition: var(--transition-all);

  &:hover {
    background-color: var(--color-primary-hover);
    transform: translateY(-0.125rem);
  }
`;

export const NoMoviesContainer = styled.div`
  text-align: center;
  padding: var(--spacing-3xl);
  color: var(--color-gray-medium);
  background-color: var(--color-white);
`;

export const NoMoviesTitle = styled.h3`
  margin-bottom: var(--spacing-base);
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-semibold);
`;

export const NoMoviesMessage = styled.p`
  font-size: var(--font-size-lg);
  line-height: 1.5;
`;

export const LoadingContainer = styled.div`
  text-align: center;
  padding: var(--spacing-3xl);
  color: var(--color-gray-medium);
`;

export const LoadingSpinner = styled.div`
  display: inline-block;
  width: var(--spacing-3xl);
  height: var(--spacing-3xl);
  border: var(--spacing-xs) solid var(--color-gray-light);
  border-top: var(--spacing-xs) solid var(--color-primary);
  border-radius: var(--radius-full);
  animation: spin 1s linear infinite;
  margin-bottom: var(--spacing-lg);

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const LoadingText = styled.p`
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
`;

export const LoadMoreContainer = styled.div`
  text-align: center;
  padding: var(--spacing-3xl);
`;

export const LoadMoreButton = styled.button`
  background-color: var(--color-primary);
  color: var(--color-white);
  border: none;
  padding: var(--spacing-md) var(--spacing-3xl);
  border-radius: var(--radius-3xl);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-bold);
  width: 100%;
  text-align: center;
  cursor: pointer;
  transition: var(--transition-all);

  &:hover {
    background-color: var(--color-primary-hover);
    transform: translateY(-0.125rem);
    box-shadow: var(--shadow-lg);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const MainContent = styled.main`
  min-height: calc(100vh - var(--height-navbar));
`;

export const ErrorContainer = styled.div`
  background-color: var(--color-white);
  min-height: 100vh;
`;

export const ErrorContent = styled.div`
  text-align: center;
  padding: var(--spacing-3xl);
  color: var(--color-gray-medium);
`;

export const NoDataContainer = styled.div`
  background-color: var(--color-white);
  min-height: 100vh;
`;

export const NoDataContent = styled.div`
  padding: var(--spacing-lg);
  text-align: center;
`;

export const NoDataMessage = styled.p`
  font-size: var(--font-size-lg);
  color: var(--color-gray-medium);
`;

export const CastSectionContainer = styled.div`
  max-width: var(--aligment-size);
  margin: 0 auto;
  padding: var(--spacing-2xl) 1.25rem;
  margin-top: var(--spacing-sm);
`;

export const CastTitle = styled.h2`
  margin-bottom: var(--spacing-sm);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-dark);
`;


