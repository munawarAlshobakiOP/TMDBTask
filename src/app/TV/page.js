'use client';
import { useEffect, useState, useRef } from 'react';
import MediaCard from '@/app/component/mediaCard/mediaCard';
import Navbar from '../component/Navbar/Navbar';

const API_KEY = 'e2161fa6a40f29be185672567ac4df00';

export default function TVGrid() {
  const [shows, setShows] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const loaderRef = useRef(null);

  useEffect(() => {
    const fetchShows = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const url = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
        const res = await fetch(url);
        
        if (!res.ok) {
          throw new Error(`Failed to fetch TV shows: ${res.status}`);
        }
        
        const data = await res.json();
        
        if (data.results && Array.isArray(data.results)) {
          setShows(prev => {
            const allShows = [...prev, ...data.results];
            const uniqueShowsMap = new Map();

            allShows.forEach(show => {
              uniqueShowsMap.set(show.id, show);
            });

            return Array.from(uniqueShowsMap.values());
          });
        } else {
          console.error('Invalid data structure:', data);
          setError('Invalid data received from API');
        }
      } catch (err) {
        console.error('Error fetching TV shows:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchShows();
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
  }, []);

  if (error) {
    return (
      <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
        <Navbar />
        <div style={{ padding: '20px', textAlign: 'center', color: 'red' }}>
          <h2>Error Loading TV Shows</h2>
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>Try Again</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ padding: '20px', backgroundColor: '#ffffff', minHeight: 'calc(100vh - 64px)' }}>
        <h2 style={{ color: '#333', fontSize: '28px', fontWeight: '600', marginBottom: '30px' }}>📺 Popular TV Shows</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px', backgroundColor: '#ffffff' }}>
          {shows.map(show => (
            <MediaCard 
              key={show.id} 
              media={show} 
              media_type="TV" 
            />
          ))}
        </div>
        
        {isLoading && (
          <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#ffffff' }}>
            <p>Loading more TV shows...</p>
          </div>
        )}
        
        <div ref={loaderRef} style={{ height: '50px', marginTop: '20px' }} />
      </div>
    </div>
  );
}
