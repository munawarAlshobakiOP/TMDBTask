import { useEffect, useState } from 'react';
import * as fetching from '../../services/fetching';

export const useWeekTrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        const results = await fetching.fetchTrendingWeekMovies();
        setMovies(results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return {
    movies,
    error,
    loading,
  };
};
