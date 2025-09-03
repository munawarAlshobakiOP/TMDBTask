'use client';
import { useState } from 'react';
import styles from './WelcomeSection.module.css';

const WelcomeSection = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Handle search functionality here
      console.log('Searching for:', searchQuery);
    }
  };

  return (
    <section className={styles.welcomeSection}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div className={styles.welcomeContainer}>
          <h1 className={styles.welcomeTitle}>
            Welcome.
          </h1>
          <h2 className={styles.welcomeSubtitle}>
            Millions of movies, TV shows and people to discover. Explore now.
          </h2>
          
          <form className={styles.searchForm} onSubmit={handleSearch}>
            <div className={styles.searchContainer}>
              <input
                type="text"
                placeholder="Search for a movie, tv show, person..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
              <button type="submit" className={styles.searchButton}>
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
