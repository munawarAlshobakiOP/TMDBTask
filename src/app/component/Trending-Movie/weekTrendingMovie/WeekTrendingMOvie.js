"use client";
import React, { useEffect, useState } from 'react';

const API_KEY = 'e2161fa6a40f29be185672567ac4df00';

const TrendingWeekMovies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        
  const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;
        
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
    <div style={{ padding: '1rem', fontFamily: 'Arial' }}>
      
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
        <div style={{ 
          display: 'flex', 
          overflowX: 'auto', 
          gap: '1rem', 
          paddingBottom: '1rem',
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch'
        }}>
          {movies.map(movie => (
            <div key={movie.id} style={{ minWidth: '180px', maxWidth: '180px', textAlign: 'center', flexShrink: 0 }}>
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                  style={{ borderRadius: '8px', width: '180px', height: '270px', objectFit: 'cover' }}
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
              <h4 style={{ margin: '10px 0', fontSize: '16px' }}>{movie.title}</h4>
              <p style={{ margin: '5px 0' }}> {movie.vote_average ? Math.round(movie.vote_average * 10) / 10 : 'N/A'}</p>
              <p style={{ fontSize: '0.9rem', color: '#555', margin: '5px 0' }}>
                {movie.release_date ? new Date(movie.release_date).getFullYear() : 'Unknown'}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TrendingWeekMovies;
