'use client';
import { useState, useEffect } from 'react';
import * as Fetching from '../../services/fetching';
import * as StyledW from './WelcomeSection.Styled.jsx';
const WelcomeSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [backgroundImage, setBackgroundImage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Fetching.fetchRandomImg(setBackgroundImage, setIsLoading);
  }, []);

  const handleSearch = e => {
    e.preventDefault();
  };
  return (
    <StyledW.WelcomeSectionContainer backgroundImage={backgroundImage}>
      <StyledW.Overlay />
      {isLoading && (
        <StyledW.LoadingIndicator>
          Loading background...
        </StyledW.LoadingIndicator>
      )}
      <StyledW.Content>
        <StyledW.WelcomeContainer>
          <StyledW.WelcomeTitle>Welcome.</StyledW.WelcomeTitle>
          <StyledW.WelcomeSubtitle>
            Millions of movies, TV shows and people to discover. Explore now.
          </StyledW.WelcomeSubtitle>

          <StyledW.Search>
            <StyledW.SearchForm onSubmit={handleSearch}>
              <StyledW.SearchWrapper>
                <StyledW.SearchInput>
                  <StyledW.SearchInputInner
                    type='text'
                    placeholder='search for a person, movie, tv...'
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                  />
                </StyledW.SearchInput>
              </StyledW.SearchWrapper>

              <StyledW.SearchButton type='submit'>Search</StyledW.SearchButton>
            </StyledW.SearchForm>
          </StyledW.Search>
        </StyledW.WelcomeContainer>
      </StyledW.Content>
    </StyledW.WelcomeSectionContainer>
  );
};

export default WelcomeSection;
