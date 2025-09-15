import styled from 'styled-components';
export const Container = styled.div`
  padding: 0;
  width: 14rem;
  position: sticky;
  height: fit-content;
  overflow-y: auto;
  border-radius: 0;

  top: 11.5rem;

  @media (max-width: 768px) {
    width: 100%;
    position: static;
    top: auto;
  }

  /* Global input styling for blue theme */
  input[type="radio"],
  input[type="checkbox"] {
    accent-color: var(--color-primary);
  }

  input[type="date"] {
    accent-color: var(--color-primary);
  }

  select {
    accent-color: var(--color-primary);
  }

  /* Mobile-specific styling - keeping default design */
  @media (max-width: 768px) {
    input[type="radio"],
    input[type="checkbox"] {
      accent-color: var(--color-primary);
      margin-right: 0.25rem;
      vertical-align: middle;
      transform: scale(0.38);
      border: none;
      outline: none;
    }

    /* Make labels inline with inputs */
    label {
      display: inline;
      font-size: 0.8rem;
      vertical-align: middle;
      margin-left: 0.25rem;
    }

    /* Make input containers inline */
    div {
      display: inline-block;
      margin-right: 0.5rem;
      margin-bottom: 0.25rem;
    }

    input[type="date"] {
      font-size: 0.8rem;
      padding: 0.375rem 0.5rem;
      accent-color: var(--color-primary);
    }

    select {
      font-size: 0.8rem;
      padding: 0.375rem 0.5rem;
      accent-color: var(--color-primary);
    }
  }
`;

export const selected = styled.div`
  background-color: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
`;
export const H1Section = styled.div`
  margin-top: 0.75rem;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.375rem 0.5rem;
  background-color: transparent;
  font-size: 0.9rem;
  font-weight: 500;
  margin: 0;
  border-radius: 0.25rem 0.25rem;

  h1 {
    margin: 0;
    font-size: 0.9rem;
    font-weight: 700;
    color: #333;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;

export const H4Section = styled.div`
  margin-top: 1.25rem;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background-color: transparent;
  border: 0.0625rem solid #e0e0e0;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 500;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.2);
`;
export const SectionWrapper = styled.div`
  background-color: transparent;
  border-radius: 0.5rem;
  border: 0.0625rem solid #e0e0e0;
  padding: 0.5rem 0.75rem;
  margin-bottom: 0.75rem;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.1);
  width: 100%;
  position: relative;
  z-index: 0;
  overflow: visible;
`;

export const Expand = styled.span.withConfig({
  shouldForwardProp: prop => prop !== 'isExpanded',
})`
  font-size: 0.75rem;
  font-weight: bold;
  display: inline-block;
  transition: transform 0.2s ease;
  margin-left: auto;
  transform: ${props => (props.isExpanded ? 'rotate(90deg)' : 'rotate(0deg)')};
`;
export const SectionContent = styled.div`
  padding: 0.75rem;
  border-top: 0.0625rem solid #333;
  border-left: none;
  border-right: none;
  border-bottom: none;
  border-radius: 0 0 0.25rem 0.25rem;
  margin-top: 0;
  background-color: transparent;
  position: relative;
  z-index: 1;
  width: 100%;
`;

export const SortDropdownWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const SortDropdownSelect = styled.select`
  width: 100%;
  padding: 0.5rem;
  padding-right: 2rem;
  border-radius: 0.2rem;
  background-color: rgb(221, 221, 221);
  font-size: 0.875rem;
  appearance: none !important;
  -webkit-appearance: none !important;
  -moz-appearance: none !important;
  position: relative;
  z-index: 1;
  border: 0.0625rem solid #333 !important;
`;

export const SortDropdownIcon = styled.div`
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 2;
  color: #666;
`;

export const Showme = styled.div`
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 0.0625rem solid #333;
  width: 100%;

  input[type="radio"] {
    accent-color: var(--color-primary);
  }
`;

export const Avalabilites = styled.div`
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 0.0625rem solid #333;
  width: 100%;

  input[type="checkbox"] {
    accent-color: var(--color-primary);
  }
`;

export const ReleaseDates = styled.div`
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 0.0625rem solid #333;
  width: 100%;
`;
export const ToDate = styled.input`
  width: 100%;
  padding: 0.5rem 0.625rem;
  margin-top: 0.375rem;
  margin-bottom: 0.75rem;
  border: 0.0625rem solid #ccc;
  border-radius: 0.375rem;
  background-color: #fff;
  font-size: 0.875rem;
  box-sizing: border-box;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }

  &::-webkit-calendar-picker-indicator {
    filter: invert(1);
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.375rem 0.5rem;
    margin-top: 0.25rem;
    margin-bottom: 0.5rem;
  }
`;

export const FromDate = styled.input`
  width: 100%;
  padding: 0.5rem 0.625rem;
  margin-top: 0.375rem;
  margin-bottom: 0.75rem;
  border: 0.0625rem solid #ccc;
  border-radius: 0.375rem;
  background-color: var(--background);
  font-size: 0.875rem;
  box-sizing: border-box;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }

  &::-webkit-calendar-picker-indicator {
    filter: invert(1);
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.375rem 0.5rem;
    margin-top: 0.25rem;
    margin-bottom: 0.5rem;
  }
`;
export const GenreList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  margin-top: 0.5rem;
`;

export const GenreItem = styled.li``;

export const GenreLink = styled.a`
  display: inline-block;
  padding: 0.25rem 0.625rem;
  font-size: 0.75rem;
  margin: 0;
  text-decoration: none;
  border-radius: 1.5625rem;
  cursor: pointer;
  transition:
    background-color 0.2s,
    color 0.2s,
    border-color 0.2s;

  background-color: ${({ selected }) => (selected ? '#01b4e4' : 'transparent')};
  color: ${({ selected }) => (selected ? '#fff' : '#333')};
  border: 0.0625rem solid ${({ selected }) => (selected ? '#01b4e4' : '#ccc')};

  &:hover {
    background-color: ${({ selected }) => (selected ? '#0096c7' : '#f0f0f0')};
    color: ${({ selected }) => (selected ? '#fff' : '#333')};
  }
`;

export const LanguageListItem = styled.li`
  padding: 0.375rem 0.5rem;
  background-color: transparent;
  color: inherit;
`;
export const LanguageDropdown = styled.div`
  width: 100%;
  position: relative;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

export const LanguageSearchInput = styled.input`
  width: 100%;
  padding: 0.375rem 0.5rem;
  box-sizing: border-box;
  margin-bottom: 0.25rem;
  border: 0.0625rem solid #ccc;
  border-radius: 0.25rem;
`;
export const LanguageList = styled.ul`
  max-height: 9.375rem;
  overflow-y: auto;
  border: 0.0625rem solid #ccc;
  border-radius: 0.25rem;
  padding: 0;
  margin: 0;
  list-style: none;
  background: white;

  li {
    padding: 0.375rem 0.5rem;
  }

  li:hover {
    background-color: #f0f0f0;
  }
`;

export const Genres = styled.div`
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 0.0625rem solid #333;
  width: 100%;
`;

export const Language = styled.div`
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 0.0625rem solid #333;
  width: 100%;
`;

export const SearchButtonDiv = styled.div`
  width: 100%;
`;
export const SearchButton = styled.button`
  width: 100%;
  background-color: var(--color-gray-medium1);
  color: white;
  border: none;
  padding: 0.375rem 0;
  border-radius: 0.5rem;
  font-size: 0.8rem;
  font-weight: 500;
  margin-top: 0.5rem;
  transition:
    background 0.2s,
    color 0.2s;
`;
