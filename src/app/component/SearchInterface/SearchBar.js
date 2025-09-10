'use client';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY ;
const BaseUrl = process.env.NEXT_PUBLIC_API_BASE ;
const SearchBarContainer = styled.div`
position: fixed;
  top: 3.125rem;
  left: 0;
  right: 0;
  background: white;
  z-index: 1001;
  padding: .125rem 0;
`;
const SearchBarWrapper = styled.div`
  width: 100%;
  padding: 0 1.25rem;
`;
const SearchForm = styled.form`
   display: flex;
  align-items: center;
  gap: .9375rem;
  width: 100%;
  @media (max-width: 48rem) {
  flex-direction: column;
    gap: .625rem;
  }
`;
const SearchInputWrapper = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 .625rem 0 1.25rem;
  min-height: 2.5rem;
  border: none;
  transition: all 0.3s ease;
  @media (max-width: 48rem) {
    width: 100%;
  }

  & svg {
  color: #666;
  margin-right: .625rem;
  flex-shrink: 0;
  position: absolute;
  left: .625rem;
}
`;
const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-size: 1rem;
  background: transparent;
  color: #333;
  padding: 0 0 0 1.875rem;
  
  &::placeholder {
    color: #888;
    opacity: 1;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border-radius: .5rem;
  box-shadow: 0 .25rem 1.25rem rgba(0, 0, 0, 0.15);
  margin-top: .3125rem;
  max-height: 25rem;
  overflow-y: auto;
  z-index: 1002;
`;

const ResultsList = styled.div`
  padding: .625rem 0;
`;

const ResultItem = styled.div`
  display: flex;
  align-items: center;
  gap: .75rem;
  padding: .5rem 1.25rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
  border-bottom: .0625rem solid #e0e0e0;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 1.25rem;
    right: 1.25rem;
    height: .0313rem;
    background-color: #e0e0e0;
  }
`;

const ResultIcon = styled.div`
  flex-shrink: 0;
  width: 1.25rem;
  height: 1.25rem;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: .75rem;
    height: .75rem;
    color: #666;
  }
`;

const ResultContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const ResultTitle = styled.h4`
  font-size: .75rem;
  font-weight: 600;
  color: #032541;
  margin: 0 0 .25rem 0;
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const LoadingIndicator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
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

export default function SearchBar({ onSearchResults }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const searchMovies = async () => {
    if (query.trim() === '') {
      setResults([]);
      setShowDropdown(false);
      onSearchResults([]);
      setError(null);
      return;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      const url = `${BaseUrl}/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(query.trim())}&language=en-US&page=1`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Search failed: ${response.status}`);
      }
      
      const data = await response.json();
      
      const processedResults = (data.results || []).map(item => {
        if (!item.media_type) {
          item.media_type = item.title ? 'movie' : 'tv';
        }
        return item;
      });
      
      setResults(processedResults);
      setShowDropdown(processedResults.length > 0);
      onSearchResults(processedResults);
    } catch (error) {
      console.error('Error searching:', error);
      setError(error.message);
      setResults([]);
      setShowDropdown(false);
      onSearchResults([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(searchMovies, 500);
    return () => clearTimeout(timeoutId);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showDropdown && !event.target.closest('[data-search-container]')) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown]);

  return (
      <SearchBarContainer data-search-container>
      <SearchBarWrapper>
        <SearchForm 
          onSubmit={(e) => {
            e.preventDefault();
            searchMovies();
          }}
        >
          <SearchInputWrapper>
            <SearchIcon />
            <SearchInput 
              type="text" 
              placeholder="Search for a movie, TV show, person..." 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setShowDropdown(results.length > 0)}
            />
          </SearchInputWrapper>
        </SearchForm>
        
        {showDropdown && (
          <Dropdown>
            {loading && (
              <LoadingIndicator>
                <div>Loading...</div>
                <p>Searching...</p>
              </LoadingIndicator>
            )}
            
            {error && (
              <LoadingIndicator>
                <p>Error: {error}</p>
              </LoadingIndicator>
            )}
            
            {results.length > 0 && (
              <ResultsList>
                {results.slice(0, 9).map((item) => {
                  const title = item.title || item.name || 'Unknown Title';

                  return (
                    <ResultItem key={item.id}>
                      <ResultIcon>
                        <SearchIcon />
                      </ResultIcon>
                      <ResultContent>
                        <ResultTitle>{title}</ResultTitle>
                      </ResultContent>
                    </ResultItem>
                  );
                })}
              </ResultsList>
            )}
          </Dropdown>
        )}
      </SearchBarWrapper>
    </SearchBarContainer>
  );
}
