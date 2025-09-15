'use client';
import Link from 'next/link';
import * as Styled from './login.styled.jsx';
import { formFields } from '../../../data/dataG';

export default function LoginComponent() {
  return (
    <Styled.LoginContainer>
      <Styled.LoginTitle>Login to your account</Styled.LoginTitle>

      <Styled.LoginDescription>
        In order to use the editing and rating capabilities of TMDB, as well as
        get personal recommendations you will need to login to your account. If
        you do not have an account, registering for an account is free and
        simple.
        <Styled.DescriptionLink href='/login'>
          {' '}
          Click here
        </Styled.DescriptionLink>{' '}
        to get started.
      </Styled.LoginDescription>

      <Styled.LoginDescription>
        If you signed up but didn't get your verification email,{' '}
        <Styled.DescriptionLink href='/login'>
          click here
        </Styled.DescriptionLink>{' '}
        to have it resent.
      </Styled.LoginDescription>

      <Styled.LoginForm>
        {formFields.map(field => (
          <Styled.FieldContainer key={field.id}>
            <Styled.FieldLabel htmlFor={field.id}>
              {field.label}
            </Styled.FieldLabel>
            <Styled.FieldInput
              type={field.type}
              name={field.name}
              id={field.id}
            />
          </Styled.FieldContainer>
        ))}

        <Styled.ButtonContainer>
          <Styled.LoginButton type='submit'>Login</Styled.LoginButton>
          <Styled.ResetPasswordLink href='/login'>
            Reset Password
          </Styled.ResetPasswordLink>
        </Styled.ButtonContainer>
      </Styled.LoginForm>
    </Styled.LoginContainer>
  );
}
