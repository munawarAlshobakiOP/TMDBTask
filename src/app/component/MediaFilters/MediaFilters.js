'use client';
import { useState, useEffect, useRef } from "react";
import { fetchGenres, fetchLanguages } from "./fetching";
import styled from "styled-components";
const Container = styled.div`
  padding: 1.25rem;
  width: 18.75rem;
  position: sticky;
  height: fit-content;
  overflow-y: auto;
  background-color: #ffffff;
  border-radius: .5rem;
`;
const H4Section = styled.div`
margin-top: 1.25rem;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .75rem 1rem;
  background-color: white;
  border: .0625rem solid #dee2e6;
  border-radius: .375rem;
  font-size: 1rem;
  font-weight: 500;
    box-shadow: 0 .125rem .375rem rgba(0, 0, 0, 0.05); 

`;
const Expand= styled.span`font-size: .75rem;
  display: inline-block;
  transition: transform 0.2s ease;
  margin-left: .5rem;`;
const SectionContent = styled.div`  padding: 1rem;
  border: .0625rem solid #e6e6e6;
  border-radius: .375rem;
  margin-top: .5rem;
  background-color: white;`;

const SortDropdownSelect= styled.select`
width: 100%;
  padding: .5rem;
  border-radius: .25rem;
  border: .0625rem solid #ddd;
  background-color: #fff;
  font-size: .875rem;`;
  const Showme= styled.div`  margin-bottom: 1rem;`;
  const Avalabilites= styled.div`  margin-bottom: 1rem;`;
  const ReleaseDates= styled.div`  margin-bottom: 1rem;`;
const ToDate= styled.input` width: 100%;
  padding: .5rem .625rem;
  margin-top: .375rem;
  margin-bottom: .75rem;
  border: .0625rem solid #ccc;
  border-radius: .375rem;
  background-color: #fff;
  font-size: .875rem;
  box-sizing: border-box;
  transition: border-color 0.2s;
   &:focus {
  outline: none;
  border-color: #007bff;
}
  
  `;

const FromDate= styled.input` width: 100%;
  padding: .5rem .625rem;
  margin-top: .375rem;
  margin-bottom: .75rem;
  border: .0625rem solid #ccc;
  border-radius: .375rem;
  background-color: #fff;
  font-size: .875rem;
  box-sizing: border-box;
  transition: border-color 0.2s;
  &:focus {
  outline: none;
  border-color: #007bff;
}

  `;
  const GenreList= styled.ul`   padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: .375rem;
  margin-top: .5rem;`;
  const GenreItem= styled.li``;
  const GenreLink= styled.a`display: inline-block;
  padding: .25rem .625rem;
  font-size: .75rem;
  margin: 0;
  text-decoration: none;
  color: #333;
  border: .0625rem solid #ccc;
  border-radius: 1.5625rem;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s;
   background-color: ${({ selected }) => (selected ? '#007bff' : 'transparent')};
  color: ${({ selected }) => (selected ? 'white' : '#333')};
  border-color: ${({ selected }) => (selected ? '#007bff' : '#ccc')};
  &:hover {
  background-color: #f0f0f0;
}

  `;

const LanguageListItem = styled.li`
  padding: 0.375rem 0.5rem;
  background-color: ${({ selected }) => (selected ? '#007bff' : 'transparent')};
  color: ${({ selected }) => (selected ? 'white' : 'inherit')};
`;
  const LanguageDropdown= styled.div` 
  width: 100%;
  position: relative;
  font-size: .875rem;
  margin-top: .5rem;
  `;
  const LanguageSearchInput= styled.input`   width: 100%;
  padding: .375rem .5rem;
  box-sizing: border-box;
  margin-bottom: .25rem;
  border: .0625rem solid #ccc;
  border-radius: .25rem;`;
const LanguageList= styled.ul` max-height: 9.375rem;
  overflow-y: auto;
  border: .0625rem solid #ccc;
  border-radius: .25rem;
  padding: 0;
  margin: 0;
  list-style: none;
  background: white;
  li {
  padding: .375rem .5rem;
}
  li:hover {
  background-color: #f0f0f0;`;
const Genres= styled.div`  margin-bottom: 1rem;`;
const Language= styled.div`  margin-bottom: 1rem;`;
const SearchButtonDiv= styled.div`width: 100%;`;
const SearchButton= styled.button` 
width: 100%;
  background-color: #01b4e4;
  color: #fff;
  border: none;
  padding: .875rem 0;
  border-radius: .5rem;
  font-size: 1.125rem;
  font-weight: 600;
  margin-top: 1rem;
  transition: background 0.2s, color 0.2s;
&:hover {
  background-color: #0096c7;
}
`;

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
    <Container>
      {/* ----------------------Sort Section--------------- */}
      <H4Section>
        <h4 onClick={() => toggleSection("sort")}>
          Sort{" "}
          <Expand
            style={{
              transform: expandedSections.sort ? "rotate(0deg)" : "rotate(-90deg)",
            }}
          >
            ▼
          </Expand>
        </h4>
      </H4Section>

      {expandedSections.sort && (
        <SectionContent>
          <p>Sort Result By</p>
          <SortDropdownSelect
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </SortDropdownSelect>
        </SectionContent>
      )}

      {/* -----------------Filter Section ----------------------*/}
      <H4Section>
        <h4 onClick={() => toggleSection("Filter")}>
          Filter{" "}
          <Expand
            style={{
              transform: expandedSections.Filter ? "rotate(0deg)" : "rotate(-90deg)",
            }}
          >
            ▼
          </Expand>
        </h4>
      </H4Section>

      {expandedSections.Filter && (
        <SectionContent>
          {/* --------------Show me section  haik bs ------------*/}
          <Showme>
            <p>Show me</p>
            <input type="radio" name="showme" defaultChecked />
            <label> everything</label> <br />
            <input type="radio" name="showme" />
            <label> {mediaType} I haven't seen</label> <br />
            <input type="radio" name="showme" />
            <label> {mediaType} I have seen</label> <br />
          </Showme>

          <Avalabilites>
            <input type="checkbox" name="Avalabilites" defaultChecked />
            <label> Search all availabilities?</label>
          </Avalabilites>

          {/* _---------------Release Dates--------------------- */}
          <ReleaseDates>
            <p>Release Dates</p>
            <label>from:</label>
            <FromDate
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
           />
            <label>to:</label>
            <ToDate
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
          </ReleaseDates>

          {/* ---------------Genres-------------------------- */}
          <Genres>
            <p>Genres</p>
            <GenreList>
              {fetchedGenres.map((genre) => (
                <li key={genre.id}>
                  <GenreLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleGenre(genre.id);
                    }}
                    selected={selectedGenres.includes(genre.id)}
                  >
                    {genre.name}
                  </GenreLink>
                </li>
              ))}
            </GenreList>
          </Genres>

          {/*---------------------Language-----------------------------*/}
          <Language ref={dropdownRef}>
            <p>Language</p>
            <LanguageDropdown>
              <LanguageSearchInput
                type="text"
                placeholder="Search language..."
                value={dropdownOpen ? languageSearch : getSelectedLanguageName()}
                onChange={(e) => {
                  setLanguageSearch(e.target.value);
                  setDropdownOpen(true);
                }}
                onFocus={() => setDropdownOpen(true)}
                readOnly={!dropdownOpen}
              />

              {dropdownOpen && (
                <LanguageList>
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
                    <LanguageListItem
                      key={lang.iso_639_1}
                      selected={selectedLanguage === lang.iso_639_1}
                      onClick={() => {
                        setSelectedLanguage(lang.iso_639_1);
                        setLanguageSearch("");
                        setDropdownOpen(false);
                      }}
                    >
                      {lang.english_name}
                    </LanguageListItem>
                  ))}
                </LanguageList>
              )}
            </LanguageDropdown>
          </Language>
  </SectionContent>
      )}

      {/*--------------------Search Button----------------------------*/}
      <SearchButtonDiv >
        <SearchButton
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
        </SearchButton>
      </SearchButtonDiv>
    </Container>
  );
};

export default MediaFilters;
