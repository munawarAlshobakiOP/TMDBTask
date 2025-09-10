'use client';
import { useState, useEffect } from 'react';
import MediaCard from '../mediaCard/mediaCard';
import styled from 'styled-components';
const ResultsContainer = styled.div`
 width: 100%;
  max-width: 87.5rem;
  margin: 0 auto;
  padding: 1.875rem 2.5rem;

  @media (max-width: 48rem) {
      padding: 1.25rem;

}
`;
const LoadingIndicator = styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.5rem;
`;
const LoadingSpinner = styled.div`
width: 3.125rem;
  height: 3.125rem;
  border: .3125rem solid #f3f3f3;
  border-top: .3125rem solid #01b4e4;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: .9375rem;
  
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

const ErrorMessage = styled.div`
  background-color: #ffebee;
  color: #c62828;
  padding: .9375rem;
  border-radius: .3125rem;
  margin: 1.25rem 0;
  text-align: center;
`;
const ResultsSection = styled.div`
  h3 { font-size: 1.8em;
  margin-bottom: 1.25rem;
  color: #032541;}
`;
const ResultsGrid = styled.div`
display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18.75rem, 1fr));
  gap: 1.25rem;

  @media (max-width: 48rem) {
 grid-template-columns: 1fr;
    gap: .9375rem;
  }
`;
const ResultCard = styled.div`
 background: white;
  border-radius: .625rem;
  padding: 1.25rem;
  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  gap: .9375rem;

  @media (max-width: 48rem) {
      padding: .9375rem;
}
      &:hover {
      transform: translateY(-0.125rem);
  box-shadow: 0 .375rem 1.25rem rgba(0, 0, 0, 0.15);
      }
  @media (max-width: 30rem) {
 flex-direction: column;
    text-align: center;
  }
`;
const ResultIcon = styled.div`
 flex-shrink: 0;
  width: 2.5rem;
  height: 2.5rem;
  background: linear-gradient(135deg, #032541, #01b4e4);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 30rem) {
    align-self: center;

  }
`;
const ResultContent = styled.div`
flex: 1;
  min-width: 0;
`;
const ResultTitle = styled.h4`
font-size: 1.2em;
  font-weight: 600;
  color: #032541;
  margin: 0 0 .5rem 0;
  line-height: 1.3;
`;
const ResultMeta = styled.div`
 display: flex;
  align-items: center;
  gap: .625rem;
  margin-bottom: .625rem;
`;
const ResultType = styled.span`
 background: #01b4e4;
  color: white;
  padding: .25rem .5rem;
  border-radius: .25rem;
  font-size: 0.8em;
  font-weight: 500;
  text-transform: uppercase;
`;
const ResultYear = styled.span`
 color: #666;
  font-size: 0.9em;
`;
const ResultOverview = styled.p`
 color: #666;
  font-size: 0.9em;
  line-height: 1.4;
  margin: 0;
`;
// Hero Section Styled Components
const HeroSection = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 18.75rem;
  height: calc(100vh/2.5);
  max-height: 22.5rem;
  background: linear-gradient(135deg, #032541, #01b4e4);
  color: #fff;
  min-width: 100%;
`;

const MediaDiscover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ColumnWrapper = styled.div`
  width: 100%;
  max-width: 87.5rem;
  padding: 0 2.5rem;

  @media (max-width: 48rem) {
    padding: 0 1.25rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 1.25rem;

  @media (max-width: 48rem) {
    flex-direction: column;
    gap: .625rem;
  }

  @media (max-width: 30rem) {
    text-align: center;
  }
`;

const SearchIconWrapper = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  color: white;
  opacity: 0.9;

  @media (max-width: 48rem) {
    width: 1.875rem;
    height: 1.875rem;
  }
`;

const Title = styled.div`
  h2 {
    font-size: 3em;
    font-weight: 700;
    margin: 0 0 .625rem;
    line-height: 1;

    @media (max-width: 48rem) {
      font-size: 2em;
    }
  }

  h3 {
    font-size: 2em;
    font-weight: 600;
    margin: 0 0 1.25rem;

    @media (max-width: 48rem) {
      font-size: 1.5em;
    }
  }
`;

const Search = styled.div`
  width: 100%;
  max-width: 43.75rem;
  margin-top: 1.25rem;
`;

const SearchForm = styled.form`
  display: flex;
  width: 100%;
  gap: .625rem;

  @media (max-width: 48rem) {
    flex-direction: column;
  }
`;

const SearchWrapper = styled.div`
  flex: 1;
`;

const SearchInput = styled.div`
  background: #fff;
  border-radius: 1.875rem;
  padding: .625rem 1.25rem;
  display: flex;
  align-items: center;
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
`;

const SearchButton = styled.button`
  background: linear-gradient(to right, #90cea1, #01b4e4);
  color: white;
  border: none;
  border-radius: 1.875rem;
  padding: .625rem 1.625rem;
  font-size: 1.2em;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: .5rem;

  &:hover {
    background: linear-gradient(to right, #1ed5a9, #029ac7);
    transform: scale(1.05);
  }

  .searchIcon {
    width: 1rem;
    height: 1rem;
  }

  @media (max-width: 48rem) {
    margin-top: .625rem;
    width: 100%;
    justify-content: center;
  }
`;

const SearchIcon = () => (
  <svg 
    width="20" 
    height="20" 
    fill="currentColor" 
    viewBox="0 0 20 20"
  >
    <path 
      fillRule="evenodd" 
      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" 
      clipRule="evenodd" 
    />
  </svg>
);


export default function TMDBSearch({ searchResults = [] }) {
  const [results, setResults] = useState(searchResults);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setResults(searchResults);
  }, [searchResults]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Search logic would go here
    console.log('Searching for:', searchQuery);
  };

  return (
    <>
      <HeroSection>
        <MediaDiscover>
          <ColumnWrapper>
            <ContentWrapper>
              <TitleContainer>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <Title>
                  <h2>Welcome.</h2>
                  <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
                </Title>
              </TitleContainer>
              
              <Search>
                <SearchForm onSubmit={handleSearch}>
                  <SearchWrapper>
                    <SearchInput>
                      <SearchInputInner
                        type="text"
                        placeholder="Search for a movie, TV show, person..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </SearchInput>
                  </SearchWrapper>
                  <SearchButton type="submit">
                    <SearchIcon />
                    Search
                  </SearchButton>
                </SearchForm>
              </Search>
            </ContentWrapper>
          </ColumnWrapper>
        </MediaDiscover>
      </HeroSection>

      <ResultsContainer>
        {loading && (
          <LoadingIndicator>
            <LoadingSpinner></LoadingSpinner>
            <p>Searching...</p>
          </LoadingIndicator>
        )}
        
        {error && (
          <ErrorMessage>
            <p>Error: {error}</p>
          </ErrorMessage>
        )}
        
        {results.length > 0 && (
          <ResultsSection>
            <h3>Search Results ({results.length})</h3>
            <ResultsGrid>
              {results.map((item) => {
                const title = item.title || item.name || 'Unknown Title';
                const mediaType = item.media_type === 'tv' ? 'TV Show' : 
                                 item.media_type === 'movie' ? 'Movie' : 
                                 item.media_type === 'person' ? 'Person' : 'Unknown';
                const releaseYear = item.release_date ? new Date(item.release_date).getFullYear() : 
                                   item.first_air_date ? new Date(item.first_air_date).getFullYear() : '';

                return (
                  <ResultCard key={item.id}>
                    <ResultIcon>
                      <SearchIcon />
                    </ResultIcon>
                    <ResultContent>
                      <ResultTitle>{title}</ResultTitle>
                      <ResultMeta>
                        <ResultType>{mediaType}</ResultType>
                        {releaseYear && <ResultYear>({releaseYear})</ResultYear>}
                      </ResultMeta>
                      {item.overview && (
                        <ResultOverview>
                          {item.overview.slice(0, 100)}...
                        </ResultOverview>
                      )}
                    </ResultContent>
                  </ResultCard>
                );
              })}
            </ResultsGrid>
          </ResultsSection>
        )}
        
        {!loading && !error && results.length === 0 && (
          <ErrorMessage>
            <p>No results found</p>
          </ErrorMessage>
        )}
      </ResultsContainer>
    </>
  );
}