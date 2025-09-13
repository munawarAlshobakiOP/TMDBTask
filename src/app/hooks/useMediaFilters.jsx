import { useState, useEffect } from 'react';
import { fetchGenres, fetchLanguages } from '../services/fetching';

export const useMediaFilters = (mediaType = 'movie', selectedLang = 'en') => {
  const [expandedSections, setExpandedSections] = useState({
    sort: true,
    Filter: false,
  });

  const [fetchedGenres, setFetchedGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState(selectedLang);

  useEffect(() => {
    const fetchData = async () => {
      const langs = await fetchLanguages();
      setLanguages(langs);

      const genreData = await fetchGenres(mediaType, selectedLanguage);
      setFetchedGenres(genreData);
    };

    fetchData();
  }, [mediaType, selectedLanguage]);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const toggleGenre = (genreId) => {
    setSelectedGenres((prev) =>
      prev.includes(genreId) ? prev.filter((g) => g !== genreId) : [...prev, genreId]
    );
  };

  const getSelectedLanguageName = () => {
    const selected = languages.find((lang) => lang.iso_639_1 === selectedLanguage);
    return selected ? selected.english_name : '';
  };

  return {
    expandedSections,
    fetchedGenres,
    selectedGenres,
    languages,
    selectedLanguage,
    setSelectedLanguage,
    toggleSection,
    toggleGenre,
    getSelectedLanguageName,
  };
};
