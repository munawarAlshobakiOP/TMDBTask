import { useState, useEffect } from 'react';
import { fetchSearchResults } from '../services/fetching';

export const useSearchBar = (onSearchResults) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const searchMovies = async () => {
    if (query.trim() === '') {
      setResults([]);
      setShowDropdown(false);
      onSearchResults([]);
      setError(null);
      return;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      const searchData = await fetchSearchResults(query.trim());
      
      const processedResults = (searchData.results || []).map(item => {
        if (!item.media_type) {
          item.media_type = item.title ? 'movie' : 'tv';
        }
        return item;
      });
      
      setResults(processedResults);
      setShowDropdown(processedResults.length > 0);
      onSearchResults(processedResults);
    } catch (error) {
      setError(error.message);
      setResults([]);
      setShowDropdown(false);
      onSearchResults([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(searchMovies, 500);
    return () => clearTimeout(timeoutId);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showDropdown && !event.target.closest('[data-search-container]')) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown]);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchMovies();
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleInputFocus = () => {
    setShowDropdown(results.length > 0);
  };

  return {
    query,
    results,
    loading,
    error,
    showDropdown,
    handleSubmit,
    handleInputChange,
    handleInputFocus
  };
};
