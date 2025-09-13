'use client';
import { sortOptions, showMeOptions } from "../../data/dataG";
import * as Styles from "./Media_Filter.styled";
import H1Section from "./Box_filter";
import { KeyboardArrowDown_Icon } from "../../assests/icons";
import { useMediaFilters } from "../../hooks/useMediaFilters";
import { useLanguageFilter } from "../../hooks/useLanguageFilter";
import { useGenreFilter } from "../../hooks/useGenreFilter";

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
  const {
    expandedSections,
    fetchedGenres,
    selectedGenres,
    languages,
    selectedLanguage,
    setSelectedLanguage,
    toggleSection,
    toggleGenre,
  } = useMediaFilters(mediaType, selectedLang);

  const {
    languageSearch,
    dropdownOpen,
    dropdownRef,
    filteredLanguages,
    getSelectedLanguageName,
    handleLanguageSelect,
    handleClearLanguage,
    handleSearchChange,
    handleInputFocus,
  } = useLanguageFilter(languages, selectedLanguage, setSelectedLanguage);

  const { isGenreSelected } = useGenreFilter();

  return (
    <Styles.Container>
      {/* ----------------------Sort Section--------------- */}
     <Styles.SectionWrapper>
      <H1Section
        sectionId="sort"
        title="Sort"
        expandedSections={expandedSections}
        toggleSection={toggleSection}
      />

      {expandedSections.sort && (
        <Styles.SectionContent>
          <p>Sort Result By</p>
          <Styles.SortDropdownWrapper>
            <Styles.SortDropdownSelect
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Styles.SortDropdownSelect>
            <Styles.SortDropdownIcon>
              <KeyboardArrowDown_Icon />
            </Styles.SortDropdownIcon>
          </Styles.SortDropdownWrapper>
        </Styles.SectionContent>
      )}
</Styles.SectionWrapper>
      {/* -----------------Filter Section ----------------------*/}
     <Styles.SectionWrapper>
      <H1Section
        sectionId="Filter"
        title="Filter"
        expandedSections={expandedSections}
        toggleSection={toggleSection}
      />

      {expandedSections.Filter && (
        <Styles.SectionContent>
          {/* --------------Show me section  haik bs ------------*/}
          <Styles.Showme>
            <p>Show me</p>
            {showMeOptions.map((option) => (
              <div key={option.id}>
                <input
                  type="radio"
                  name="showme"
                  defaultChecked={option.defaultChecked}
                />
                <label> {option.id === "everything" ? option.label : `${mediaType} ${option.label}`}</label> <br />
              </div>
            ))}
          </Styles.Showme>

          <Styles.Avalabilites>
            <input type="checkbox" name="Avalabilites" defaultChecked />
            <label> Search all availabilities?</label>
          </Styles.Avalabilites>

          {/* _---------------Release Dates--------------------- */}
          <Styles.ReleaseDates>
            <p>Release Dates</p>
            <label>from:</label>
            <Styles.FromDate
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
            <label>to:</label>
            <Styles.ToDate
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
          </Styles.ReleaseDates>

          {/* ---------------Genres-------------------------- */}
          <Styles.Genres>
            <p>Genres</p>
            <Styles.GenreList>
              {fetchedGenres.map((genre) => (
                <li key={genre.id}>
                  <Styles.GenreLink
  href="#"
  onClick={(e) => {
    e.preventDefault();
    toggleGenre(genre.id);
  }}
  selected={selectedGenres.includes(genre.id)}
>
  {genre.name}
</Styles.GenreLink>

                </li>
              ))}
            </Styles.GenreList>
          </Styles.Genres>

          {/*---------------------Language-----------------------------*/}
          <Styles.Language ref={dropdownRef}>
            <p>Language</p>
            <Styles.LanguageDropdown>
              <Styles.LanguageSearchInput
                type="text"
                placeholder="Search language..."
                value={dropdownOpen ? languageSearch : getSelectedLanguageName()}
                onChange={handleSearchChange}
                onFocus={handleInputFocus}
                readOnly={!dropdownOpen}
              />

              {dropdownOpen && (
                <Styles.LanguageList>
                  <li
                    onClick={handleClearLanguage}
                    className={!selectedLanguage ? Styles.selected : ""}
                  >
                    All Languages
                  </li>
                  {filteredLanguages.map((lang) => (
                    <Styles.LanguageListItem
                      key={lang.iso_639_1}
                      selected={selectedLanguage === lang.iso_639_1}
                      onClick={() => handleLanguageSelect(lang.iso_639_1)}
                    >
                      {lang.english_name}
                    </Styles.LanguageListItem>
                  ))}
                </Styles.LanguageList>
              )}
            </Styles.LanguageDropdown>
          </Styles.Language>
        </Styles.SectionContent>
      )}
</Styles.SectionWrapper>
      {/*--------------------Search Button----------------------------*/}
      <Styles.SearchButtonDiv >
        <Styles.SearchButton
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
        </Styles.SearchButton>
      </Styles.SearchButtonDiv>
    </Styles.Container>
  );
};

export default MediaFilters;
