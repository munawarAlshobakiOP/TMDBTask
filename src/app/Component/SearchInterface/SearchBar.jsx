'use client';
import * as SearchStyled from './Search.style.js';
import SearchIcon from '@mui/icons-material/Search';
import { useSearchBar } from '../../libs/hooks/useSearchBar.jsx';
import { TrendingUp_Icon } from '../../assests/icons';

export default function SearchBar({ onSearchResults }) {
  const {
    query,
    results,
    loading,
    error,
    showDropdown,
    trending,
    handleSubmit,
    handleInputChange,
    handleInputFocus,
  } = useSearchBar(onSearchResults);

  return (
    <SearchStyled.SearchBarContainer data-search-container>
      <SearchStyled.SearchForm2 onSubmit={handleSubmit}>
        <SearchStyled.SearchInputWrapper>
          <SearchIcon />
          <SearchStyled.SearchInput2
            type='text'
            placeholder='Search for a movie, TV show, person...'
            value={query}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </SearchStyled.SearchInputWrapper>
      </SearchStyled.SearchForm2>

      {showDropdown && (
        <SearchStyled.Dropdown>
          {loading && (
            <SearchStyled.LoadingIndicator>
              <p>Searching for movies and TV shows...</p>
            </SearchStyled.LoadingIndicator>
          )}

          {error && (
            <SearchStyled.LoadingIndicator>
              <p>Search failed: {error}</p>
            </SearchStyled.LoadingIndicator>
          )}

          {query.trim() === '' && trending.length > 0 && (
            <SearchStyled.ResultsList>
              <SearchStyled.ResultItem as="div">
                <SearchStyled.spanTrending>
                  <SearchStyled.IConTrending><TrendingUp_Icon /> </SearchStyled.IConTrending> Trending
                </SearchStyled.spanTrending>
              </SearchStyled.ResultItem>
              {trending.map(item => {
                const title = item.title || item.name || 'Unknown Title';
                return (
                  <SearchStyled.ResultItem key={item.id}>
                    <SearchStyled.ResultIcon>
                      <SearchIcon />
                    </SearchStyled.ResultIcon>
                    <SearchStyled.ResultTitle>{title}</SearchStyled.ResultTitle>
                  </SearchStyled.ResultItem>
                );
              })}
            </SearchStyled.ResultsList>
          )}

          {query.trim() !== '' && results.length > 0 && (
            <SearchStyled.ResultsList>
              {results.slice(0, 9).map(item => {
                const title = item.title || item.name || 'Unknown Title';
                return (
                  <SearchStyled.ResultItem key={item.id}>
                    <SearchStyled.ResultIcon>
                      <SearchIcon />
                    </SearchStyled.ResultIcon>
                    <SearchStyled.ResultTitle>{title}</SearchStyled.ResultTitle>
                  </SearchStyled.ResultItem>
                );
              })}
            </SearchStyled.ResultsList>
          )}
        </SearchStyled.Dropdown>
      )}
    </SearchStyled.SearchBarContainer>
  );
}


