'use client';
import Link from 'next/link';
import styled from 'styled-components';

const LoginContainer = styled.div`
  padding: 2rem;
  max-width: 75rem;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  margin-top: 4rem;

  a {
    color: #01b4e4;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      text-decoration: underline;
      text-decoration-color: #01b4e4;
    }
  }

  h2 {
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 0.75rem;
    font-size: 1.2rem;
  }

  form {
    width: 100%;
  }

  input {
    border: 0.0625rem solid #9ca3af;
    border-radius: 0.25rem;
    padding: 0.375rem 0.5rem;
    font-size: 0.875rem;
    width: 100%;
    box-sizing: border-box;
    transition: border-color 0.3s ease;

    &:focus {
      border-color: #01b4e4;
      box-shadow: 0 0 0 0.125rem rgba(1, 180, 228, 0.2);
      outline: none;
    }
  }

  button {
    background-color: #e5e7eb;
    border: none;
    border-radius: 0.25rem;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #9ca3af;
    }
  }
`;

const LabelContainer = styled.div`
  margin-bottom: 0.5rem;
`;

const InputContainer = styled.div`
  margin-top: 0.25rem;
  margin-bottom: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: 1rem;
`;

export default function LoginComponent() {
  return (
    <LoginContainer>
      <h2>Login to your account</h2>
      <p>
        In order to use the editing and rating capabilities of TMDB, as well as get personal
        recommendations you will need to login to your account. If you do not have an account,
        registering for an account is free and simple.
        <Link href="/login"> Click here</Link> to get started.
      </p>
      <p>
        If you signed up but didn't get your verification email,{' '}
        <Link href="/login">click here</Link> to have it resent.
      </p>

      <form>
        <LabelContainer>
          <label>Username</label>
        </LabelContainer>
        <InputContainer>
          <input type="text" name="username" />
        </InputContainer>

        <LabelContainer>
          <label>Password</label>
        </LabelContainer>
        <InputContainer>
          <input type="password" name="password" />
        </InputContainer>

        <ButtonContainer>
          <button type="submit">Login</button>
          <Link href="/login">Reset Password</Link>
        </ButtonContainer>
      </form>
    </LoginContainer>
  );
}
