'use client';
import { useEffect, useState } from 'react';
import MediaCard from '@/app/component/mediaCard/mediaCard';
import Navbar from '../component/Navbar/Navbar';
import MediaFilters from '../component/MediaFilters/MediaFilters';
import Footer from '../component/Footer/Footer';
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE;

export default function TVGrid() {
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
        setPage(prev => prev + 1);
      }, 500);
      setLoadMoreTimeout(timeout);
    }
  };
  const [tv, settv] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [autoLoadEnabled, setAutoLoadEnabled] = useState(false);
  const [loadMoreTimeout, setLoadMoreTimeout] = useState(null);
  const [sortBy, setSortBy] = useState('popularity.desc');
  const [selectedGenres, setSelectedGenres] = useState([]); 
  const [fromDate, setFromDate] = useState(''); 
  const [toDate, setToDate] = useState(''); 
  const [selectedLanguage, setSelectedLanguage] = useState('');     
  useEffect(() => {
    if (selectedLanguage) {
      console.log( selectedGenres);
    }
  }, [selectedLanguage]);

  useEffect(() => {
    const fetchShows = async () => {
      setIsLoading(true);
      setError(null);
      try {
        let url = `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=${selectedLanguage || 'en-US'}&page=${page}&with_original_language=${selectedLanguage || 'en'}`;
        if (sortBy) {
          url += `&sort_by=${sortBy}`;
        }
        if (fromDate) {
          url += `&first_air_date.gte=${fromDate}`;
        }
        if (toDate) {
          url += `&first_air_date.lte=${toDate}`;
        }
        if (selectedGenres && selectedGenres.length > 0) {
          url += `&with_genres=${selectedGenres.join(',')}`;
        }
        console.log('Fetching TV shows with URL:', url);
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Failed to fetch TV shows: ${res.status}`);
        }

        const data = await res.json();
        if (data.results && Array.isArray(data.results)) {
          settv(prev => {
            if (page === 1) {
              return data.results;
            }
            const allShows = [...prev, ...data.results];
            const uniqueShowsMap = new Map();
            allShows.forEach(show => {
              uniqueShowsMap.set(show.id, show);
            });
            return Array.from(uniqueShowsMap.values());
          });
          setTotalPages(data.total_pages);
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
  }, [page, sortBy, fromDate, toDate, selectedLanguage, selectedGenres]);
  const loadMoreMovies = () => {
    if (!isLoading) {
      setPage(prev => prev + 1);
    }
  };

  const handleLoadMoreClick = () => {
    loadMoreMovies();
    setAutoLoadEnabled(true);
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

  const handleClearFilters = () => {
  setSortBy('popularity.desc');
  setFromDate('');
  setToDate('');
  setSelectedGenres([]);
  setSelectedLanguage('en-US');
  setPage(1);
  settv([]);
  };

  const handleSearch = () => {
  setPage(1);
  settv([]);
  };

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
    <div>
      <Navbar />
      <div style={{ display: 'flex', marginTop: '80px' }}>
        <div style={{ width: '300px', padding: '20px' }}>
          <MediaFilters 
            mediaType="tv"
            sortBy={sortBy}
            setSortBy={setSortBy}
            selectedGenres={selectedGenres}
            setSelectedGenres={setSelectedGenres}
            fromDate={fromDate}
            setFromDate={setFromDate}
            toDate={toDate}
            setToDate={setToDate}
            filteredCount={tv.length}
            onClearFilters={handleClearFilters}
  onSearch={({ language, genres, fromDate, toDate, sortBy }) => {
              setSelectedLanguage(language);
              setSelectedGenres(genres);
              setFromDate(fromDate);
              setToDate(toDate);
              setSortBy(sortBy);
              handleSearch();
            }}          />
        </div>
        <div style={{ flex: 1, padding: '20px' }}>
          <div style={{ marginBottom: '20px' }}>
          </div>

          {tv.length === 0 && !isLoading ? (
            <div style={{ textAlign: 'center', padding: '40px', color: '#666', backgroundColor: '#ffffff' }}>
              <h3>No TV shows found</h3>
              <p>Try refreshing the page to see more results.</p>
            </div>
          ) : (
            <div>
              {tv.map(show => (
                <div key={show.id} style={{ 
                  display: 'inline-block', 
                  width: '200px', 
                  margin: '10px',
                  verticalAlign: 'top'
                }}>
                  <MediaCard media={show} media_type="TV" />
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
              <p style={{ fontSize: '16px', fontWeight: '500' }}>Loading TV shows...</p>
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
