import styled from 'styled-components';
import Link from 'next/link';

export const LoginContainer = styled.div`
  padding: var(--spacing-2xl);
  width: var(--width-container-max);
  margin-left: var(--spacing-2xl);
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  margin-top: var(--spacing-4xl);

  @media (max-width: 480px) {
    padding: var(--spacing-lg);
    width: 100%;
    margin-left: 0;
    margin-top: var(--spacing-2xl);
    min-height: 50vh;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: var(--spacing-base);
  align-items: center;
  margin-top: var(--spacing-base);

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
    gap: var(--spacing-sm);
  }
`;

export const LoginTitle = styled.h1`
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-base);
  color: var(--color-text-dark); 

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: var(--spacing-sm);
  }
`;

export const LoginDescription = styled.p`
  margin-bottom: var(--spacing-md);
  font-size: var(--font-size-lg);
  line-height: 1.5;
  color: var(--color-text-secondary);

  @media (max-width: 480px) {
    font-size: var(--font-size-base);
    margin-bottom: var(--spacing-sm);
    line-height: 1.4;
  }
`;

export const LoginForm = styled.form`
  width: 100%;
  margin-top: var(--spacing-xl);

  @media (max-width: 480px) {
    margin-top: var(--spacing-lg);
  }
`;

export const FieldContainer = styled.div`
  margin-bottom: var(--spacing-base);

  @media (max-width: 480px) {
    margin-bottom: var(--spacing-sm);
  }
`;

export const FieldLabel = styled.label`
  display: block;
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--spacing-sm);
  color: var(--color-text-secondary); 

  @media (max-width: 480px) {
    font-size: var(--font-size-sm);
    margin-bottom: 0.25rem;
  }
`;

export const FieldInput = styled.input`
  border: var(--border-width-thin) solid var(--color-gray-dark);
  border-radius: var(--radius-sm);
  padding: var(--spacing-sm);
  font-size: var(--font-size-base);
  width: 100%;
  box-sizing: border-box;
  transition: var(--transition-base);

  &:focus {
    border-color: var(--color-primary); 
    box-shadow: var(--shadow-primary);
    outline: none;
  }

  @media (max-width: 480px) {
    padding: 0.75rem;
    font-size: 1rem;
  }
`;
export const LoginButton = styled.button`
  background-color: var(--color-gray-dark); 
  color: var(--color-white);
  border: none;
  border-radius: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-sm); 
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  cursor: pointer;
  transition: var(--transition-base);

  &:hover {
    background-color: var(--color-gray-darker); 
  }

  @media (max-width: 480px) {
    padding: 0.75rem 1rem;
    font-size: var(--font-size-base);
    width: 100%;
  }
`;


export const ResetPasswordLink = styled(Link)`
  color: var(--color-primary);
  text-decoration: none;
  font-size: var(--font-size-sm);
  transition: var(--transition-base);

  &:hover {
    text-decoration: underline;
    text-decoration-color: var(--color-primary);
  }

  @media (max-width: 480px) {
    text-align: center;
    padding: 0.5rem;
  }
`;

export const DescriptionLink = styled(Link)`
  color: var(--color-primary);
  text-decoration: none;
  transition: var(--transition-base);

  &:hover {
    text-decoration: underline;
    text-decoration-color: var(--color-primary);
  }
`;
