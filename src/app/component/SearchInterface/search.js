'use client';
////////////////////////////////////Review it  (display)/////////////////
////the image  of the background (hero section) 
///// search bar////dropdown search option 
/////////////////////////
import { useState, useEffect } from 'react';
import MediaCard from '../mediaCard/mediaCard';
import classes from './search.module.css';

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY || 'e2161fa6a40f29be185672567ac4df00';

export default function TMDBSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchMovies = async () => {
    if (query.trim() === '') {
      setResults([]);
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
    } catch (error) {
      console.error('Error searching:', error);
      setError(error.message);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(searchMovies, 500);
    return () => clearTimeout(timeoutId);
  }, [query]);


  return (
    <>
      <section className={classes.heroSection}>
        <div className={classes.mediaDiscover}>
          <div className={classes.columnWrapper}>
            <div className={classes.contentWrapper}>
              <div className={classes.titleContainer + ' ' + classes.leftAlign}>
                <div className={classes.title}>
                  <h2>Welcome.</h2>
                  <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
                </div>
              </div>

              <div className={classes.search}>
                <form 
                  className={classes.searchForm}
                  onSubmit={(e) => {
                    e.preventDefault();
                    searchMovies();
                  }}
                >
                  <label className={classes.searchWrapper}>
                    <span className={classes.searchInput}>
                      <input 
                        type="text" 
                        placeholder="search for a person, movie, tv..." 
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className={classes.searchInputInner}
                        autoCorrect="off" 
                        autoComplete="off" 
                        spellCheck="false"
                      />
                    </span>
                  </label>

                  <button 
                    type="submit" 
                    className={classes.searchButton}
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
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
        
        {!loading && !error && results.length === 0 && query.trim() !== '' && (
          <div className={classes.errorMessage}>
            <p>No results found for "{query}"</p>
          </div>
        )}
      </div>
    </>
  );
}