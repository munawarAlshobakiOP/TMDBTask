import styled from 'styled-components';
export const Container = styled.div`
  padding: 0;
  width: 14rem;
  position: sticky;
  height: fit-content;
  overflow-y: auto;
  border-radius: 0;

  top: 11.9rem;

  @media (max-width: 768px) {
    width: 100%;
    position: static;
    top: auto;
  }

 

  /* Mobile-specific styling - keeping default design */
  @media (max-width: 768px) {
    input[type="radio"],
    input[type="checkbox"] {
      margin-right: 0.25rem;
      vertical-align: middle;
      transform: scale(0.38);
      border: none;
      outline: none;
    }
    label {
      display: inline;
      font-size: 0.8rem;
      vertical-align: middle;
      margin-left: 0.25rem;
    }

    /* Make input containers inline */
    div {
      margin-right: 0.5rem;
      margin-bottom: 0.25rem;
    }

    input[type="date"] {
      font-size: 0.8rem;
      padding: 0.375rem 0.5rem;
    }

    select {
      font-size: 0.8rem;
      padding: 0.375rem 0.5rem;
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
    font-size: 1rem;
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
  padding: 0.5rem 0.75rem;
  margin-bottom: 0.75rem;
  box-shadow: 0 .125rem .5rem rgba(0,0,0,.1);
  width: 100%;
  justify-content:space-between;
  position: relative;
  z-index: 0;
  overflow: visible;
    border: .125rem solid #e3e3e3;
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
  @media (max-width: 768px) {
  display: inline-block;
            position: absolute;
        margin-left: 80%;
    align-items: center;
    justify-content: flex-end;
  }
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

  p{
  font-size:1rem;
      display: inline-flex
    align-items: center;
    width: 100%;
    font-weight: 300 !important;
    margin-bottom: .625rem;
  }
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
  background-color: #dee2e6 !important;
  border-color:#dee2e6 !important;
  color:#212529 !important;
  font-size: 0.8rem;
  appearance: none !important;
  -webkit-appearance: none !important;
  -moz-appearance: none !important;
  position: relative;
  z-index: 1;
  option{
  background-color:var(--color-white);
  
  }
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
    padding-top: 1rem;

  width: 100%;
p{
font-weight:300 !important;
font-size:1rem;
}
label{
  text-transform: capitalize;

}
`;

export const Avalabilites = styled.div`
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-top: .125rem solid #eee;
  width: 100%;
white-space: nowrap;
  padding-top: 1rem;

`;

export const ReleaseDates = styled.div`
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-top: .125rem solid #eee;
    padding-top: 1rem;

  width: 100%;
  label{
      width: 6.25rem !important;
    color: #a4a4a4;
  }
`;
export const Calender=styled.span`
height:2rem;
border: 0.0625rem solid rgba(33, 37, 41, 0.2);
border-radius: 0.375rem;
display: flex;
justify-content: space-between;
align-items: center;

@media (max-width: 768px) {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.4rem;
  width: auto;
}
`;
export const CalenderButton= styled.button`

background-color:rgba(33, 37, 41, 0.2);
min-width: 2.5rem;

border-radius: 0.375rem;

    min-height: 2rem;

@media (max-width: 768px) {
        min-width: 3rem;
        min-height: 2rem;`;

export const ToDate = styled.input`
width: 100%;
    padding: 0.1rem 0.2rem;
    
    margin-bottom: 0;
    background-color: var(--background);
    font-size: 0.775rem;
    box-sizing: border-box;
    transition: border-color 0.2s
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
           margin-left: 0.4rem;

      margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        background: transparent;
  }
`;

export const FromDate = styled.input`
    max-width: 100%;
    padding: 0.1rem 0.3rem;
  
    background-color: var(--background);
    font-size: 0.775rem;
    box-sizing: border-box;
    transition: border-color 0.2s

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
       margin-left: 0.4rem;

            margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        background: transparent;
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
    @media (max-width: 768px) {
      padding: 0.25rem 0.425rem;
      align-items: center;
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
    padding-top: 1rem;

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
    padding-top: 1rem;

  border-top: .125rem solid #eee;
  width: 100%;
`;

export const Language = styled.div`
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  padding-top: 1rem;
  width: 100%;
    border-top: .125rem solid #eee;

`;

export const SearchButtonDiv = styled.div`
  width: 100%;
`;
export const SearchButton = styled.button`
  width: 100%;
  background-color: rgba(228,228,228,.7);
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
export const Dates=styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: .5rem;
    width: 100%;
    &.to-date-row {
      padding-top: 0.4rem;
      gap:1.2rem;
    }
    label {
      display: inline-flex;
      align-items: center;
    }
    @media (max-width: 768px) {
      flex-direction: row;
      align-items: center;
      gap: 1.2rem;

     
    }
`;
export const LanguageInputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const LanguageDropdownIcon = styled.span`
  display: flex;
  align-items: center;
  position: absolute;
  right: 0.5rem;
  pointer-events: none;
  color: #888;
`;