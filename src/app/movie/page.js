'use client';
import { useEffect, useState, useRef } from 'react';
import MediaCard from '@/app/component/mediaCard/mediaCard';
import Navbar from '../component/Navbar/Navbar';
import MediaFilters from '../component/MediaFilters/MediaFilters';

const API_KEY = 'e2161fa6a40f29be185672567ac4df00';

export default function MovieGrid() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [loaderRef] = useState(useRef(null));

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
        const res = await fetch(url);
        
        if (!res.ok) {
          throw new Error(`Failed to fetch movies: ${res.status}`);
        }
        
        const data = await res.json();
        
        setMovies(prev => {
          const allMovies = [...prev, ...data.results];
          const uniqueMoviesMap = new Map();

          allMovies.forEach(movie => {
            uniqueMoviesMap.set(movie.id, movie);
          });

          return Array.from(uniqueMoviesMap.values());
        });
      } catch (err) {
        console.error('Error fetching movies:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries[0].isIntersecting && setPage(prev => prev + 1);
      },
      { threshold: 1 }
    );
    loaderRef.current && observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [loaderRef]);

  if (error) {
    return (
      <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
        <Navbar />
        <div style={{ padding: '20px', textAlign: 'center', color: 'red' }}>
          <h2>Error Loading Movies</h2>
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>Try Again</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', width: '100%', maxWidth: '1400px', margin: '0 auto', padding: '20px 0' }}>
        <div style={{ minWidth: '320px', maxWidth: '350px', flexShrink: 0, marginRight: '30px' }}>
          <MediaFilters mediaType="movie" />
        </div>
        <div style={{ flex: 1, padding: '0 20px', backgroundColor: '#ffffff' }}>
          <div style={{ marginBottom: '20px' }}>
          </div>

          {movies.length === 0 && !isLoading ? (
            <div style={{ textAlign: 'center', padding: '40px', color: '#666', backgroundColor: '#ffffff' }}>
              <h3>No movies found</h3>
              <p>Try refreshing the page to see more results.</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px', backgroundColor: '#ffffff' }}>
              {movies.map(movie => (
                <MediaCard key={movie.id} media={movie} media_type="movie" />
              ))}
            </div>
          )}

          {isLoading && (
            <div style={{ textAlign: 'center', padding: '20px', color: '#666' }}>
              <p>Loading more movies...</p>
            </div>
          )}

          <div ref={loaderRef} style={{ height: '20px' }} />
        </div>
      </div>
    </div>
  );
}
