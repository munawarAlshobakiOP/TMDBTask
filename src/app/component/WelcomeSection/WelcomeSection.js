'use client';
import { useState, useEffect } from 'react';
import styles from './WelcomeSection.module.css';

const API_KEY = 'e2161fa6a40f29be185672567ac4df00';

const WelcomeSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [backgroundImage, setBackgroundImage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Function to fetch popular movies and get a random backdrop
  const fetchRandomIMg = async () => {
    try {
      setIsLoading(true);
      
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
      
      
      if (!response.ok) {
        throw new Error(`Failed to fetch movies: ${response.status} ${response.statusText}`);
      }
      
      const data = await response.json();
            const movies = data.results || [];
      
      const moviesWithBackdrops = movies.filter(movie => movie.backdrop_path);
      
      if (moviesWithBackdrops.length > 0) {
        const randomIndex = Math.floor(Math.random() * moviesWithBackdrops.length);
        const randomMovie = moviesWithBackdrops[randomIndex];
        
        const backdropUrl = `https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`;
        setBackgroundImage(backdropUrl);
      } else {
        setBackgroundImage('https://image.tmdb.org/t/p/original/7WJjFviFBffEJvkAms4uWwbcVUk.jpg');
      }
    } catch (error) {
     
      setBackgroundImage('https://image.tmdb.org/t/p/original/7WJjFviFBffEJvkAms4uWwbcVUk.jpg');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomIMg();
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
