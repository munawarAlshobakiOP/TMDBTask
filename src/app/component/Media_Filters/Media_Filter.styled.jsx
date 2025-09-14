import styled from 'styled-components';
export const Container = styled.div`
  padding: 0;
  width: 14rem;
  position: sticky;
  height: fit-content;
  overflow-y: auto;
  border-radius: 0;

top:11.5rem;
  `;

export const selected = styled.div`
  background-color: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
`;
export const H1Section = styled.div`
  margin-top: 1.25rem;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .55rem 0.9rem;
  background-color: transparent;
  font-size: 1rem;
  font-weight: 500;
  margin: 0; 
  border-radius: .375rem .375rem;
 
  h1 {
    margin: 0;
    font-size: 1rem;
    font-weight: 700;
    color: #333;
    cursor: pointer;
  }
`;

export const H4Section = styled.div`
  margin-top: 1.25rem;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .75rem 1rem;
  background-color: transparent;
  border: 0.0625rem solid #e0e0e0;
  border-radius: .375rem;
  font-size: 1rem;
  font-weight: 500;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.2);

`;
export const SectionWrapper = styled.div`
  background-color: transparent ;
  border-radius: 0.7rem;
  border: 0.0625rem solid #e0e0e0;
  padding: 0.85rem 0.9rem;
  margin-bottom: 1rem;
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.15);
  width: 100%;
`;

export const Expand = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== 'isExpanded',
})`
    font-size: 0.75rem;
    font-weight:bold;
  display: inline-block;
  transition: transform 0.2s ease;
  position:relative;
  left:7.9rem;
  transform: ${props => props.isExpanded ? "rotate(90deg)" : "rotate(0deg)"};
`;
export const SectionContent = styled.div`
  padding: 1rem;
  border-top: 0.0625rem solid #333;
  border-left: none;
  border-right: none;
  border-bottom: none;
  border-radius: 0 0 .375rem .375rem;
  margin-top: 0; 
  background-color: transparent;
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
`;

export const Avalabilites = styled.div`
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 0.0625rem solid #333;
`;

export const ReleaseDates = styled.div`
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 0.0625rem solid #333;
`;
export const ToDate = styled.input`
  width: 100%;
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

export const FromDate = styled.input`
  width: 100%;
  padding: .5rem .625rem;
  margin-top: .375rem;
  margin-bottom: .75rem;
  border: .0625rem solid #ccc;
  border-radius: .375rem;
  background-color: var(--background);
  font-size: .875rem;
  box-sizing: border-box;
  transition: border-color 0.2s;
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`;
export const GenreList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: .375rem;
  margin-top: .5rem;
`;

export const GenreItem = styled.li``;

export const GenreLink = styled.a`
  display: inline-block;
  padding: .25rem .625rem;
  font-size: .75rem;
  margin: 0;
  text-decoration: none;
  border-radius: 1.5625rem;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s;

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
  font-size: .875rem;
  margin-top: .5rem;
`;

export const LanguageSearchInput = styled.input`
  width: 100%;
  padding: .375rem .5rem;
  box-sizing: border-box;
  margin-bottom: .25rem;
  border: .0625rem solid #ccc;
  border-radius: .25rem;
`;
export const LanguageList = styled.ul`
  max-height: 9.375rem;
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
    background-color: #f0f0f0;
  }
`;

export const Genres = styled.div`
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 0.0625rem solid #333;
`;

export const Language = styled.div`
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 0.0625rem solid #333;
`;

export const SearchButtonDiv = styled.div`
  width: 100%;
`;
export const SearchButton = styled.button`
  width: 100%;
  background-color: var( --color-gray-medium1);
  color: white;
  border: none;
  padding: 0.5rem 0;           
  border-radius: 1rem;     
  font-size: 0.875rem;         
  font-weight: 500;            
  margin-top: 0.75rem;
  transition: background 0.2s, color 0.2s;

  
`;
