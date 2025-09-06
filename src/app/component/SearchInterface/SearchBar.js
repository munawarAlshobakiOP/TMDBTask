'use client';
import { useState, useEffect } from 'react';
import classes from './SearchBar.module.css';

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY || 'e2161fa6a40f29be185672567ac4df00';

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
      const url = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(query.trim())}&language=en-US&page=1`;
      
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
      if (showDropdown && !event.target.closest(`.${classes.searchBarContainer}`)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <div className={classes.searchBarContainer}>
      <div className={classes.searchBarWrapper}>
        <form 
          className={classes.searchForm}
          onSubmit={(e) => {
            e.preventDefault();
            searchMovies();
          }}
        >
          <div className={classes.searchInputWrapper}>
            <SearchIcon />
            <input 
              type="text" 
              placeholder="Search for a movie, TV show, person..." 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setShowDropdown(results.length > 0)}
              className={classes.searchInput}
            />
          </div>
        </form>
        
        {showDropdown && (
          <div className={classes.dropdown}>
            {loading && (
              <div className={classes.loadingIndicator}>
                <div className={classes.loadingSpinner}></div>
                <p>Searching...</p>
              </div>
            )}
            
            {error && (
              <div className={classes.errorMessage}>
                <p>Error: {error}</p>
              </div>
            )}
            
            {results.length > 0 && (
              <div className={classes.resultsList}>
                {results.slice(0, 9).map((item) => {
                  const title = item.title || item.name || 'Unknown Title';

                  return (
                    <div key={item.id} className={classes.resultItem}>
                      <div className={classes.resultIcon}>
                        <SearchIcon />
                      </div>
                      <div className={classes.resultContent}>
                        <h4 className={classes.resultTitle}>{title}</h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
