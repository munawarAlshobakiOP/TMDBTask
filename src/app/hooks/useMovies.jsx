'use client';
import { useState, useEffect, useCallback } from 'react';

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE;

export const useMovies = filters => {
  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [displayedCount, setDisplayedCount] = useState(20);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [autoLoadEnabled, setAutoLoadEnabled] = useState(false);
  const [loadMoreTimeout, setLoadMoreTimeout] = useState(null);

  const { sortBy, selectedGenres, fromDate, toDate, selectedLang } = filters;

  const buildMovieUrl = useCallback(() => {
    let url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${selectedLang || 'en-US'}&page=${page}&with_original_language=${selectedLang || 'en'}`;

    if (sortBy) {
      url += `&sort_by=${sortBy}`;
    }
    if (fromDate) {
      url += `&primary_release_date.gte=${fromDate}`;
    }
    if (toDate) {
      url += `&primary_release_date.lte=${toDate}`;
    }
    if (selectedGenres && selectedGenres.length > 0) {
      url += `&with_genres=${selectedGenres.join(',')}`;
    }

    return url;
  }, [page, sortBy, fromDate, toDate, selectedLang, selectedGenres]);

  const deduplicateMovies = useCallback(allMovies => {
    const uniqueMoviesMap = new Map();
    allMovies.forEach(movie => {
      uniqueMoviesMap.set(movie.id, movie);
    });
    return Array.from(uniqueMoviesMap.values());
  }, []);

  const fetchMovies = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const url = buildMovieUrl();
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(`Failed to fetch movies: ${res.status}`);
      }

      const data = await res.json();

      setAllMovies(prev => {
        if (page === 1) {
          return data.results;
        }
        const allMovies = [...prev, ...data.results];
        return deduplicateMovies(allMovies);
      });

      setTotalPages(data.total_pages);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [buildMovieUrl, page, deduplicateMovies]);

  const loadMoreMovies = useCallback(() => {
    if (!isLoading && page < totalPages) {
      setPage(prev => prev + 1);
    }
  }, [isLoading, page, totalPages]);

  const handleLoadMoreClick = useCallback(() => {
    if (displayedCount < allMovies.length) {
      setDisplayedCount(prev => Math.min(prev + 20, allMovies.length));
    } else {
      loadMoreMovies();
    }
    setAutoLoadEnabled(true);
  }, [displayedCount, allMovies.length, loadMoreMovies]);

  const handleScroll = useCallback(() => {
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
        loadMoreMovies();
      }, 500);

      setLoadMoreTimeout(timeout);
    }
  }, [
    autoLoadEnabled,
    isLoading,
    loadMoreTimeout,
    loadMoreMovies,
    page,
    totalPages,
  ]);

  const resetMovies = useCallback(() => {
    setPage(1);
    setMovies([]);
    setAllMovies([]);
    setDisplayedCount(20);
    setError(null);
    setAutoLoadEnabled(false);
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  useEffect(() => {
    setMovies(allMovies.slice(0, displayedCount));
  }, [allMovies, displayedCount]);

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
  }, [autoLoadEnabled, handleScroll, loadMoreTimeout]);

  return {
    movies,
    isLoading,
    error,
    totalPages,
    hasMore: displayedCount < allMovies.length || page < totalPages,
    handleLoadMoreClick,
    resetMovies,
  };
};
