'use client';
import { useState, useEffect } from 'react';
import MediaCard from '../mediaCard/mediaCard';
import classes from './search.module.css';

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

  useEffect(() => {
    setResults(searchResults);
  }, [searchResults]);


  return (
    <div className={classes.resultsContainer}>
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
          <div className={classes.resultsSection}>
            <h3>Search Results ({results.length})</h3>
            <div className={classes.resultsGrid}>
              {results.map((item) => {
                const title = item.title || item.name || 'Unknown Title';
                const mediaType = item.media_type === 'tv' ? 'TV Show' : 
                                 item.media_type === 'movie' ? 'Movie' : 
                                 item.media_type === 'person' ? 'Person' : 'Unknown';
                const releaseYear = item.release_date ? new Date(item.release_date).getFullYear() : 
                                   item.first_air_date ? new Date(item.first_air_date).getFullYear() : '';

                return (
                  <div key={item.id} className={classes.resultCard}>
                    <div className={classes.resultIcon}>
                      <SearchIcon />
                    </div>
                    <div className={classes.resultContent}>
                      <h4 className={classes.resultTitle}>{title}</h4>
                      <div className={classes.resultMeta}>
                        <span className={classes.resultType}>{mediaType}</span>
                        {releaseYear && <span className={classes.resultYear}>({releaseYear})</span>}
                      </div>
                      {item.overview && (
                        <p className={classes.resultOverview}>
                          {item.overview.slice(0, 100)}...
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        
        {!loading && !error && results.length === 0 && (
          <div className={classes.errorMessage}>
            <p>No results found</p>
          </div>
        )}
    </div>
  );
}