import { useEffect, useState } from 'react';

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE;

export const useTVShows = () => {
  const [tv, setTv] = useState([]);
  const [allTv, setAllTv] = useState([]);
  const [displayedCount, setDisplayedCount] = useState(20);
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
  const [selectedLanguage, setSelectedLanguage] = useState('en-US');

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    if (!autoLoadEnabled || isLoading || page >= totalPages) {
      return;
    }
    
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

  const fetchShows = async () => {
    setIsLoading(true);
    setError(null);
    try {
      if (!API_KEY || !BASE_URL) {
        throw new Error('API configuration missing. Please check environment variables.');
      }
      
      let url = `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=${selectedLanguage || 'en-US'}&page=${page}`;
      
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
      
      if (selectedLanguage && selectedLanguage !== 'en-US') {
        url += `&with_original_language=${selectedLanguage.split('-')[0]}`;
      }
      
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Failed to fetch TV shows: ${res.status}`);
      }

      const data = await res.json();
      if (data.results && Array.isArray(data.results)) {
        setAllTv(prev => {
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
        setError('Invalid data received from API');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadMoreClick = () => {
    if (displayedCount < allTv.length) {
      setDisplayedCount(prev => Math.min(prev + 20, allTv.length));
    } else {
      if (!isLoading) {
        setPage(prev => prev + 1);
      }
    }
    setAutoLoadEnabled(true);
  };

  const handleClearFilters = () => {
    setSortBy('popularity.desc');
    setFromDate('');
    setToDate('');
    setSelectedGenres([]);
    setSelectedLanguage('en-US');
    setPage(1);
    setTv([]);
    setAllTv([]);
    setDisplayedCount(20);
    setAutoLoadEnabled(false);
  };

  const handleSearch = () => {
    setPage(1);
    setTv([]);
    setAllTv([]);
    setDisplayedCount(20);
    setAutoLoadEnabled(false);
  };


  useEffect(() => {
    fetchShows();
  }, [page, sortBy, fromDate, toDate, selectedLanguage, selectedGenres]);


  useEffect(() => {
    setTv(allTv.slice(0, displayedCount));
  }, [allTv, displayedCount]);

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

  return {
    tv,
    isLoading,
    error,
    totalPages,
    
    sortBy,
    selectedGenres,
    fromDate,
    toDate,
    selectedLanguage,
    
    setSortBy,
    setSelectedGenres,
    setFromDate,
    setToDate,
    setSelectedLanguage,
    
    handleLoadMoreClick,
    handleClearFilters,
    handleSearch
  };
};
