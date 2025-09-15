import { useEffect, useState } from 'react';
import { FetchingCast, FetchingDetails } from '../services/fetching';

export const useMovieDetail = movieSlug => {
  const [mediaData, setMediaData] = useState(null);
  const [castData, setCastData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const [details, cast] = await Promise.all([
          FetchingDetails('movie', movieSlug),
          FetchingCast('movie', movieSlug),
        ]);

        setMediaData(details);
        setCastData(cast);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (movieSlug) {
      fetchAll();
    }
  }, [movieSlug]);

  return {
    mediaData,
    castData,
    error,
    isLoading,
  };
};
