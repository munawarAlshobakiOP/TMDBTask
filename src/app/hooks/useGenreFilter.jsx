import { useState } from 'react';

export const useGenreFilter = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);

  const toggleGenre = (genreId) => {
    setSelectedGenres((prev) =>
      prev.includes(genreId) ? prev.filter((g) => g !== genreId) : [...prev, genreId]
    );
  };

  const clearGenres = () => {
    setSelectedGenres([]);
  };

  const isGenreSelected = (genreId) => {
    return selectedGenres.includes(genreId);
  };

  return {
    selectedGenres,
    setSelectedGenres,
    toggleGenre,
    clearGenres,
    isGenreSelected,
  };
};
