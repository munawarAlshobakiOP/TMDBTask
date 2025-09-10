'use client';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchRandomImg } from './FetchingWelcomeSection';
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE;

const WelcomeSectionContainer = styled.section`
  position: relative;
  width: 100%;
  height: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(135deg, #032541, #01b4e4);
  background-color: #0077a3;
  animation: fadeIn 0.8s ease-out;
  transition: background-image 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(1.25rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 48rem) {
    height: 17.5rem;
    padding: 1.25rem 0;
  }

  @media (max-width: 30rem) {
    height: 15.625rem;
  }

  @media (max-width: 22.5rem) {
    height: 13.75rem;
  }
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(1, 180, 228, 0.4), rgba(0, 119, 163, 0.5));
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 75rem;
  padding: 0 3.75rem;
  text-align: left;
  color: #ffffff !important;

  @media (max-width: 48rem) {
    padding: 0 2.5rem;
  }

  @media (max-width: 30rem) {
    padding: 0 1.25rem;
  }

  @media (max-width: 22.5rem) {
    padding: 0 0.9375rem;
  }
`;

const WelcomeContainer = styled.div`
  max-width: 50rem;
  text-align: left;
`;

const WelcomeTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 300;
  margin: 0 0 1.25rem 0;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #ffffff !important;

  @media (max-width: 48rem) {
    font-size: 2.8rem;
    margin-bottom: 0.9375rem;
  }

  @media (max-width: 30rem) {
    font-size: 2.2rem;
  }

  @media (max-width: 22.5rem) {
    font-size: 1.8rem;
  }
`;

const WelcomeSubtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
  margin: 0 0 2.5rem 0;
  line-height: 1.4;
  opacity: 1;
  color: #ffffff !important;

  @media (max-width: 48rem) {
    font-size: 1.3rem;
    margin-bottom: 1.875rem;
  }

  @media (max-width: 30rem) {
    font-size: 1.1rem;
    margin-bottom: 1.5625rem;
  }

  @media (max-width: 22.5rem) {
    font-size: 1rem;
    margin-bottom: 1.25rem;
  }
`;

const Search = styled.div`
  width: 100%;
  max-width: 56.25rem;
  margin-top: 1.25rem;

  @media (max-width: 30rem) {
    margin-top: 0.9375rem;
  }
`;

const SearchForm = styled.form`
  position: relative;
  width: 100%;
`;

const SearchWrapper = styled.label`
  width: 100%;
`;

const SearchInput = styled.span`
  background: #fff;
  border-radius: 1.875rem;
  padding: 0.625rem 8.75rem 0.625rem 1.25rem;
  display: flex;
  align-items: center;
  border: 0.125rem solid transparent;
  transition: all 0.3s ease;

  &:focus-within {
    border-color: #01b4e4;
    box-shadow: 0 0 0 0.1875rem rgba(1, 180, 228, 0.1);
  }

  @media (max-width: 48rem) {
    padding: 0.5rem 7.5rem 0.5rem 0.9375rem;
  }

  @media (max-width: 30rem) {
    padding: 0.5rem 6.25rem 0.5rem 0.75rem;
    border-radius: 1.5625rem;
  }

  @media (max-width: 22.5rem) {
    padding: 0.375rem 5rem 0.375rem 0.625rem;
  }
`;

const SearchInputInner = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-size: 1.2em;
  background: transparent;
  color: #333;

  &::placeholder {
    color: #888;
    opacity: 1;
  }

  @media (max-width: 48rem) {
    font-size: 1.1em;
  }

  @media (max-width: 30rem) {
    font-size: 1em;

    &::placeholder {
      font-size: 0.9em;
    }
  }

  @media (max-width: 22.5rem) {
    font-size: 0.9em;

    &::placeholder {
      font-size: 0.8em;
    }
  }
`;

const SearchButton = styled.button`
  position: absolute;
  right: 0.3125rem;
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(to right, #90cea1, #01b4e4);
  color: white;
  border: none;
  border-radius: 1.5625rem;
  padding: 0.625rem 2rem;
  font-size: 1.3em;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 10;

  &:hover {
    background: linear-gradient(to right, #1ed5a9, #029ac7);
    transform: translateY(-50%) scale(1.05);
  }

  @media (max-width: 48rem) {
    padding: 0.5rem 1.5rem;
    font-size: 1.1em;
  }

  @media (max-width: 30rem) {
    padding: 0.375rem 1.25rem;
    font-size: 1em;
    border-radius: 1.25rem;
  }

  @media (max-width: 22.5rem) {
    padding: 0.3125rem 1rem;
    font-size: 0.9em;
  }
`;

const LoadingIndicator = styled.div`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.625rem;
  border-radius: 0.3125rem;
  z-index: 10;
`;
const WelcomeSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [backgroundImage, setBackgroundImage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchRandomImg(setBackgroundImage, setIsLoading);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
   
  };
  return (
    <WelcomeSectionContainer 
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        filter: backgroundImage ? 'brightness(0.7) contrast(1.1)' : 'none'
      }}
    >
      <Overlay />
      {isLoading && (
        <LoadingIndicator>
          Loading background...
        </LoadingIndicator>
      )}
      <Content>
        <WelcomeContainer>
          <WelcomeTitle>
            Welcome.
          </WelcomeTitle>
          <WelcomeSubtitle>
            Millions of movies, TV shows and people to discover. Explore now.
          </WelcomeSubtitle>
          
          <Search>
            <SearchForm onSubmit={handleSearch}>
              <SearchWrapper>
                <SearchInput>
                  <SearchInputInner 
                    type="text" 
                    placeholder="search for a person, movie, tv..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </SearchInput>
              </SearchWrapper>

              <SearchButton type="submit">
                Search
              </SearchButton>
            </SearchForm>
          </Search>
        </WelcomeContainer>
      </Content>
    </WelcomeSectionContainer>
  );
};

export default WelcomeSection;
