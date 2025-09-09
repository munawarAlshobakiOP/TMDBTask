'use client';
import Styles from "./MediaFilter.module.css";
import { useState, useEffect, useRef } from "react";
import { fetchGenres, fetchLanguages } from "./fetching";
const MediaFilters = ({
  mediaType = "movie",
  sortBy,
  setSortBy,
  fromDate,
  setFromDate,
  toDate,
  setToDate,
  selectedLang,
  onSearch,
}) => {
  const sortOptions = [
    { value: "popularity.desc", label: "Popularity Descending" },
    { value: "popularity.asc", label: "Popularity Ascending" },
    { value: "vote_average.desc", label: "Rating Descending" },
    { value: "vote_average.asc", label: "Rating Ascending" },
    { value: "title.asc", label: "Title (A-Z)" },
    { value: "title.desc", label: "Title (Z-A)" },
  ];

  const [expandedSections, setExpandedSections] = useState({
    sort: true,
    Filter: false,
  });

  const [fetchedGenres, setFetchedGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState(selectedLang || "en");
  const [languageSearch, setLanguageSearch] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      const langs = await fetchLanguages();
      setLanguages(langs);

      const genreData = await fetchGenres(mediaType, selectedLanguage);
      setFetchedGenres(genreData);
    };

    fetchData();
  }, [mediaType, selectedLanguage]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

  const filteredLanguages = languages.filter((lang) =>
    lang.english_name.toLowerCase().includes(languageSearch.toLowerCase())
  );

  const getSelectedLanguageName = () => {
    const selected = languages.find((lang) => lang.iso_639_1 === selectedLanguage);
    return selected ? selected.english_name : "";
  };

  return (
    <div className={Styles.container}>
      {/* ----------------------Sort Section--------------- */}
      <div className={Styles.h4Section}>
        <h4 onClick={() => toggleSection("sort")}>
          Sort{" "}
          <span
            className={Styles.expand}
            style={{
              transform: expandedSections.sort ? "rotate(0deg)" : "rotate(-90deg)",
            }}
          >
            ▼
          </span>
        </h4>
      </div>

      {expandedSections.sort && (
        <div className={Styles.sectionContent}>
          <p>Sort Result By</p>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className={Styles.sortDropdownSelect}
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* -----------------Filter Section ----------------------*/}
      <div className={Styles.h4Section}>
        <h4 onClick={() => toggleSection("Filter")}>
          Filter{" "}
          <span
            className={Styles.expand}
            style={{
              transform: expandedSections.Filter ? "rotate(0deg)" : "rotate(-90deg)",
            }}
          >
            ▼
          </span>
        </h4>
      </div>

      {expandedSections.Filter && (
        <div className={Styles.sectionContent}>
          {/* --------------Show me section  haik bs ------------*/}
          <div className={Styles.Showme}>
            <p>Show me</p>
            <input type="radio" name="showme" defaultChecked />
            <label> everything</label> <br />
            <input type="radio" name="showme" />
            <label> {mediaType} I haven't seen</label> <br />
            <input type="radio" name="showme" />
            <label> {mediaType} I have seen</label> <br />
          </div>

          <div className={Styles.Avalabilites}>
            <input type="checkbox" name="Avalabilites" defaultChecked />
            <label> Search all availabilities?</label>
          </div>

          {/* _---------------Release Dates--------------------- */}
          <div className={Styles.ReleaseDates}>
            <p>Release Dates</p>
            <label>from:</label>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className={Styles.fromDate}
            />
            <label>to:</label>
            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className={Styles.ToDate}
            />
          </div>

          {/* ---------------Genres-------------------------- */}
          <div className={Styles.genres}>
            <p>Genres</p>
            <ul className={Styles.genreList}>
              {fetchedGenres.map((genre) => (
                <li key={genre.id}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleGenre(genre.id);
                    }}
                    className={`${Styles.genreLink} ${
                      selectedGenres.includes(genre.id) ? Styles.selected : ""
                    }`}
                  >
                    {genre.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/*---------------------Language-----------------------------*/}
          <div className={Styles.Lang} ref={dropdownRef}>
            <p>Language</p>
            <div className={Styles.languageDropdown}>
              <input
                type="text"
                placeholder="Search language..."
                value={dropdownOpen ? languageSearch : getSelectedLanguageName()}
                onChange={(e) => {
                  setLanguageSearch(e.target.value);
                  setDropdownOpen(true);
                }}
                onFocus={() => setDropdownOpen(true)}
                readOnly={!dropdownOpen}
                className={Styles.languageSearchInput}
              />

              {dropdownOpen && (
                <ul className={Styles.languageList}>
                  <li
                    onClick={() => {
                      setSelectedLanguage("");
                      setLanguageSearch("");
                      setDropdownOpen(false);
                    }}
                    className={!selectedLanguage ? Styles.selected : ""}
                  >
                    All Languages
                  </li>
                  {filteredLanguages.map((lang) => (
                    <li
                      key={lang.iso_639_1}
                      onClick={() => {
                        setSelectedLanguage(lang.iso_639_1);
                        setLanguageSearch("");
                        setDropdownOpen(false);
                      }}
                      className={
                        selectedLanguage === lang.iso_639_1 ? Styles.selected : ""
                      }
                    >
                      {lang.english_name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}

      {/*--------------------Search Button----------------------------*/}
      <div style={{ width: "100%" }}>
        <button
          className={Styles.searchButton}
          onClick={() => {
            onSearch({
              language: selectedLanguage,
              genres: selectedGenres,
              fromDate,
              toDate,
              sortBy,
            });
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default MediaFilters;
