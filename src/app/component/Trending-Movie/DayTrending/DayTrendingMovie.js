"use client";
import React, { useEffect, useState } from 'react';
import DonutChart from '../../DonutChart/DonutChart';
import styles from '../trending.module.css';

const API_KEY = 'e2161fa6a40f29be185672567ac4df00';


const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        
   const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
        
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch movies: ${response.status}`);
        }
        
        const data = await response.json();
        setMovies(data.results || []);
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
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
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
