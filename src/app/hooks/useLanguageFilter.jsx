import { useState, useRef, useEffect } from 'react';

export const useLanguageFilter = (languages = [], selectedLanguage, setSelectedLanguage) => {
  const [languageSearch, setLanguageSearch] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredLanguages = languages.filter((lang) =>
    lang.english_name.toLowerCase().includes(languageSearch.toLowerCase())
  );

  const getSelectedLanguageName = () => {
    const selected = languages.find((lang) => lang.iso_639_1 === selectedLanguage);
    return selected ? selected.english_name : '';
  };

  const handleLanguageSelect = (langIso) => {
    setSelectedLanguage(langIso);
    setLanguageSearch('');
    setDropdownOpen(false);
  };

  const handleClearLanguage = () => {
    setSelectedLanguage('');
    setLanguageSearch('');
    setDropdownOpen(false);
  };

  const handleSearchChange = (e) => {
    setLanguageSearch(e.target.value);
    setDropdownOpen(true);
  };

  const handleInputFocus = () => {
    setDropdownOpen(true);
  };

  return {
    languageSearch,
    dropdownOpen,
    dropdownRef,
    filteredLanguages,
    getSelectedLanguageName,
    handleLanguageSelect,
    handleClearLanguage,
    handleSearchChange,
    handleInputFocus,
  };
};
