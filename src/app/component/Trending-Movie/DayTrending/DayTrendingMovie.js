"use client";
import React, { useEffect, useState } from 'react';
import DonutChart from '../../DonutChart/DonutChart';
import styles from '../trending.module.css';
import { fetchTrendingDayMovies } from '../fetchingTrends.js/fetching';

const IMAGE_BASE = process.env.NEXT_PUBLIC_IMAGE_BASE;

const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        const results = await fetchTrendingDayMovies();
        setMovies(results);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);


  return (
    <div style={{ padding: '1rem', fontFamily: 'Arial', maxWidth: '100%', overflow: 'hidden' }}>
      
      {error && (
        <p style={{ color: 'red', textAlign: 'center' }}>
          Error: {error}
        </p>
      )}
      
      {loading ? (
        <p style={{ textAlign: 'center' }}>Loading popular movies...</p>
      ) : movies.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No movies found.</p>
      ) : (
        <div className={styles.trendingScroller}>
          {movies.map(movie => (
            <div key={movie.id} className={styles.trendingCard}>
              {movie.poster_path ? (
                <img
                  src={`${IMAGE_BASE}/w200${movie.poster_path}`}
                  alt={movie.title}
                />
              ) : (
                <div style={{ 
                  width: '180px', 
                  height: '270px', 
                  backgroundColor: '#f0f0f0', 
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#666'
                }}>
                  No Image
                </div>
              )}
              <h4>{movie.title}</h4>
              <div className={styles.movieRating}>
                <DonutChart percentage={movie.vote_average ? Math.round(movie.vote_average * 10) : 0} size={34} />
              </div>
              <p>
                {movie.release_date ? 
                  new Date(movie.release_date).toLocaleDateString('en-US', { 
                    day: 'numeric',
                    month: 'long', 
                    year: 'numeric' 
                  }) : 'Unknown'}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TrendingMovies;
