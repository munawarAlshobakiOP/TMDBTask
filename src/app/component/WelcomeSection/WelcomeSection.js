'use client';
import { useState, useEffect } from 'react';
import styles from './WelcomeSection.module.css';
import { fetchRandomImg } from './FetchingWelcomeSection';
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE;
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
    <section 
      className={styles.welcomeSection}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        filter: backgroundImage ? 'brightness(0.7) contrast(1.1)' : 'none'
      }}
    >
      <div className={styles.overlay}></div>
      {isLoading && (
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          background: 'rgba(0,0,0,0.7)',
          color: 'white',
          padding: '10px',
          borderRadius: '5px',
          zIndex: 10
        }}>
          Loading background...
        </div>
      )}
      <div className={styles.content}>
        <div className={styles.welcomeContainer}>
          <h1 className={styles.welcomeTitle}>
            Welcome.
          </h1>
          <h2 className={styles.welcomeSubtitle}>
            Millions of movies, TV shows and people to discover. Explore now.
          </h2>
          
          <div className={styles.search}>
            <form 
              className={styles.searchForm}
              onSubmit={handleSearch}
            >
              <label className={styles.searchWrapper}>
                <span className={styles.searchInput}>
                  <input 
                    type="text" 
                    placeholder="search for a person, movie, tv..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={styles.searchInputInner}
                   
                  />
                </span>
              </label>

              <button 
                type="submit" 
                className={styles.searchButton}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
