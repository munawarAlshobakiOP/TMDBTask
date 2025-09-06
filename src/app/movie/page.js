'use client';
import { useEffect, useState } from 'react';
import MediaCard from '@/app/component/mediaCard/mediaCard';
import Navbar from '../component/Navbar/Navbar';
import MediaFilters from '../component/MediaFilters/MediaFilters';
import Footer from '../component/Footer/Footer';
const API_KEY = 'e2161fa6a40f29be185672567ac4df00';

export default function MovieGrid() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [autoLoadEnabled, setAutoLoadEnabled] = useState(false);
  const [loadMoreTimeout, setLoadMoreTimeout] = useState(null);
  
  const [sortBy, setSortBy] = useState('popularity.desc');
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedYear, setSelectedYear] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        let url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=${page}`;
        
        if (sortBy) {
          url += `&sort_by=${sortBy}`;
        }
        if (selectedYear) {
          url += `&year=${selectedYear}`;
        }
        
        if (fromDate) {
          url += `&release_date.gte=${fromDate}`;
        }
        if (toDate) {
          url += `&release_date.lte=${toDate}`;
        }
        
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
        setTotalPages(data.total_pages);
      } catch (err) {
        console.error('Error fetching movies:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [page, sortBy, selectedYear, fromDate, toDate]);

  const loadMoreMovies = () => {
    if (!isLoading) {
      setPage(prev => prev + 1);
    }
  };

  const handleLoadMoreClick = () => {
    loadMoreMovies();
    setAutoLoadEnabled(true);
  };

  const handleScroll = () => {
    if (!autoLoadEnabled || isLoading) return;
    
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    if (scrollTop + windowHeight >= documentHeight - 200) {
      if (loadMoreTimeout) {
        clearTimeout(loadMoreTimeout);
      }
      
      const timeout = setTimeout(() => {
        loadMoreMovies();
      }, 500);
      
      setLoadMoreTimeout(timeout);
    }
  };

  useEffect(() => {
    if (autoLoadEnabled) {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
        if (loadMoreTimeout) {
          clearTimeout(loadMoreTimeout);
        }
      };
    }
  }, [autoLoadEnabled, isLoading, loadMoreTimeout]);


  const handleSearch = () => {
     setPage(1);
    setMovies([]);
    
    
  };


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
    <div>
      <Navbar />
      <div style={{ display: 'flex', marginTop: '80px' }}>
        <div style={{ width: '300px', padding: '20px' }}>
          <MediaFilters 
            mediaType="movie"
            sortBy={sortBy}
            setSortBy={setSortBy}
            selectedGenres={selectedGenres}
            setSelectedGenres={setSelectedGenres}
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
            fromDate={fromDate}
            setFromDate={setFromDate}
            toDate={toDate}
            setToDate={setToDate}
            onSearch={handleSearch}
          />
        </div>
        <div style={{ flex: 1, padding: '20px' }}>
          <div style={{ marginBottom: '20px' }}>
          </div>

          {movies.length === 0 && !isLoading ? (
            <div style={{ textAlign: 'center', padding: '40px', color: '#666', backgroundColor: '#ffffff' }}>
              <h3>No movies found</h3>
              <p>Try refreshing the page to see more results.</p>
            </div>
          ) : (
            <div>
              {movies.map(movie => (
                <div key={movie.id} style={{ 
                  display: 'inline-block', 
                  width: '200px', 
                  margin: '10px',
                  verticalAlign: 'top'
                }}>
                  <MediaCard media={movie} media_type="movie" />
                </div>
              ))}
            </div>
          )}

          {isLoading && (
            <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
              <div style={{ 
                display: 'inline-block',
                width: '40px',
                height: '40px',
                border: '4px solid #f3f3f3',
                borderTop: '4px solid #01b4e4',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
                marginBottom: '20px'
              }}></div>
              <p style={{ fontSize: '16px', fontWeight: '500' }}>Loading movies...</p>
            </div>
          )}

          {!isLoading && (
            <div style={{ textAlign: 'center', padding: '30px' }}>
              <button
                onClick={handleLoadMoreClick}
                style={{
                  backgroundColor: '#01b4e4',
                  color: 'white',
                  border: 'none',
                  padding: '12px 30px',
                  borderRadius: '15px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  width: '100%',
                  textAlign: 'center'
                }}
              >
                Load More
              </button>
           
            </div>
          )}
        </div>
        
      </div>
      <Footer />

    </div>
  );
}
