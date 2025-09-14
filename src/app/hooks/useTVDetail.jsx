import { useEffect, useState } from 'react';
import { FetchingCast, FetchingDetails } from '../services/fetching';

export const useTVDetail = (tvSlug) => {
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
          FetchingDetails('tv', tvSlug),
          FetchingCast('tv', tvSlug),
        ]);

        setMediaData(details);
        setCastData(cast);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (tvSlug) {
      fetchAll();
    }
  }, [tvSlug]);

  return {
    mediaData,
    castData,
    error,
    isLoading
  };
};
