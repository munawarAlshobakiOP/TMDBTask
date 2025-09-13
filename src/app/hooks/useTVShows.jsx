import { useEffect, useState } from 'react';

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE;

export const useTVShows = () => {
  const [tv, setTv] = useState([]);
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

  const fetchShows = async () => {
    setIsLoading(true);
    setError(null);
    try {
      console.log('API_KEY:', API_KEY);
      console.log('BASE_URL:', BASE_URL);
      
      if (!API_KEY || !BASE_URL) {
        throw new Error('API configuration missing. Please check environment variables.');
      }
      
      // Start with basic discover TV endpoint
      let url = `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=${selectedLanguage || 'en-US'}&page=${page}`;
      
      // Add sort_by parameter
      if (sortBy) {
        url += `&sort_by=${sortBy}`;
      }
      
      // Add date filters
      if (fromDate) {
        url += `&first_air_date.gte=${fromDate}`;
      }
      if (toDate) {
        url += `&first_air_date.lte=${toDate}`;
      }
      if (selectedGenres && selectedGenres.length > 0) {
        url += `&with_genres=${selectedGenres.join(',')}`;
      }
      
      // Add original language filter (only if not English)
      if (selectedLanguage && selectedLanguage !== 'en-US') {
        url += `&with_original_language=${selectedLanguage.split('-')[0]}`;
      }
      
      console.log('Fetching TV shows with URL:', url);
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Failed to fetch TV shows: ${res.status}`);
      }

      const data = await res.json();
      if (data.results && Array.isArray(data.results)) {
        setTv(prev => {
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

  const loadMoreMovies = () => {
    if (!isLoading) {
      setPage(prev => prev + 1);
    }
  };

  const handleLoadMoreClick = () => {
    loadMoreMovies();
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
  };

  const handleSearch = () => {
    setPage(1);
    setTv([]);
  };

  useEffect(() => {
    if (selectedLanguage) {
      console.log(selectedGenres);
    }
  }, [selectedLanguage, selectedGenres]);

  useEffect(() => {
    fetchShows();
  }, [page, sortBy, fromDate, toDate, selectedLanguage, selectedGenres]);

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
    page,
    isLoading,
    error,
    totalPages,
    autoLoadEnabled,
    
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
    handleSearch,
    setSelectedLanguage: (language) => {
      setSelectedLanguage(language);
    },
    setSelectedGenres: (genres) => {
      setSelectedGenres(genres);
    },
    setFromDate: (date) => {
      setFromDate(date);
    },
    setToDate: (date) => {
      setToDate(date);
    },
    setSortBy: (sort) => {
      setSortBy(sort);
    }
  };
};
