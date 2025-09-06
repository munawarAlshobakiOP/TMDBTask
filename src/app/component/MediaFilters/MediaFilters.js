
'use client';
import { useState } from 'react';

const MediaFilters = ({ 
  mediaType = 'movie',
  sortBy, 
  setSortBy, 
  
  selectedYear, 
  setSelectedYear, 
  fromDate,
  setFromDate,
  toDate,
  setToDate,

  onSearch
}) => {
  const [expandedSections, setExpandedSections] = useState({
    sort: true,
    year: false,
    dateRange: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const sortOptions = [
    { value: 'popularity.desc', label: 'Popularity Descending' },
    { value: 'popularity.asc', label: 'Popularity Ascending' },
    { value: 'vote_average.desc', label: 'Rating Descending' },
    { value: 'vote_average.asc', label: 'Rating Ascending' },
    { value: 'release_date.desc', label: 'Release Date Descending' },
    { value: 'release_date.asc', label: 'Release Date Ascending' },
    { value: 'title.asc', label: 'Title (A-Z)' },
    { value: 'title.desc', label: 'Title (Z-A)' }
  ];



  const getDateLabel = () => {
    return mediaType === 'tv' ? 'Air Date Range' : 'Release Date Range';
  };

  
  const getYearLabel = () => {
    return mediaType === 'tv' ? 'Air Date' : 'Release Year';
  };

  const getCountLabel = () => {
    return mediaType === 'tv' ? 'shows found' : 'movies found';
  };

  return (
    <div style={{ 
      width: '300px', 
      padding: '20px',
      position: 'sticky',
      height: 'fit-content',
      overflowY: 'auto'
    }}>
     

          <div style={{ 
            marginBottom: '20px',
            backgroundColor: '#fff',
            border: '1px solid #dee2e6',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            overflow: 'hidden'
          }}>
            <h4 
              onClick={() => toggleSection('sort')}
              style={{ 
                margin: 0,
                color: '#555',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                backgroundColor: '#f8f9fa',
                borderBottom: '1px solid #dee2e6',
                fontSize: '16px',
                fontWeight: '500'
              }}
            >
              Sort Results By
              <span style={{ 
                fontSize: '12px',
                display: 'inline-block',
                transform: expandedSections.sort ? 'rotate(0deg)' : 'rotate(-90deg)',
                transition: 'transform 0.2s ease'
              }}>
                ▼
              </span>
            </h4>
            {expandedSections.sort && (
              <div style={{ padding: '16px' }}>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)} 
                  style={{
                    width: '100%',
                    padding: '8px',
                    borderRadius: '4px',
                    border: '1px solid #ddd',
                    backgroundColor: '#fff'
                  }}
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
{/******************************************/}
          <div style={{ 
            marginBottom: '20px',
            backgroundColor: '#fff',
            border: '1px solid #dee2e6',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            overflow: 'hidden'
          }}>
            <h4 
              onClick={() => toggleSection('year')}
              style={{ 
                margin: 0,
                color: '#555',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                backgroundColor: '#f8f9fa',
                borderBottom: '1px solid #dee2e6',
                fontSize: '16px',
                fontWeight: '500'
              }}
            >
              {getYearLabel()}
              <span style={{ 
                fontSize: '12px',
                display: 'inline-block',
                transform: expandedSections.year ? 'rotate(0deg)' : 'rotate(-90deg)',
                transition: 'transform 0.2s ease'
              }}>
                ▼
              </span>
            </h4>
            {expandedSections.year && (
              <div style={{ padding: '16px' }}>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)} 
                  style={{
                    width: '100%',
                    padding: '8px',
                    borderRadius: '4px',
                    border: '1px solid #ddd',
                    backgroundColor: '#fff'
                  }}
                >
                  <option value="">All Years</option>
                  {Array.from({ length: 25 }, (_, i) => 2025 - i).map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            )}
          </div>

{/******************************************/}
          <div style={{ 
            marginBottom: '20px',
            backgroundColor: '#fff',
            border: '1px solid #dee2e6',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            overflow: 'hidden'
          }}>
            <h4 
              onClick={() => toggleSection('dateRange')}
              style={{ 
                margin: 0,
                color: '#555',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                backgroundColor: '#f8f9fa',
                borderBottom: '1px solid #dee2e6',
                fontSize: '16px',
                fontWeight: '500'
              }}
            >
              {getDateLabel()}
              <span style={{ 
                fontSize: '12px',
                display: 'inline-block',
                transform: expandedSections.dateRange ? 'rotate(0deg)' : 'rotate(-90deg)',
                transition: 'transform 0.2s ease'
              }}>
                ▼
              </span>
            </h4>
            {expandedSections.dateRange && (
              <div style={{ padding: '16px' }}>
                <div style={{ marginBottom: '10px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', color: '#666' }}>
                    From Date:
                  </label>
                  <input
                    type="date"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '8px',
                      borderRadius: '4px',
                      border: '1px solid #ddd',
                      fontSize: '14px',
                      backgroundColor: '#fff'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', color: '#666' }}>
                    To Date:
                  </label>
                  <input
                    type="date"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '8px',
                      borderRadius: '4px',
                      border: '1px solid #ddd',
                      fontSize: '14px',
                      backgroundColor: '#fff'
                    }}
                  />
                </div>
                {(fromDate || toDate) && (
                  <div style={{ marginTop: '10px', textAlign: 'center' }}>
                    <button
                      onClick={() => {
                        setFromDate('');
                        setToDate('');
                      }}
                      style={{
                        padding: '4px 8px',
                        fontSize: '12px',
                        backgroundColor: '#01b4e4',
                        color: 'white',
                        border: 'none',
                        borderRadius: '3px',
                        cursor: 'pointer'
                      }}
                    >
                      Clear Date Range
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>


{/******************************************/}
          <div style={{ 
            marginTop: '20px',
            textAlign: 'center'
          }}>
            <button
              onClick={onSearch}
              style={{
                width: '100%',
                padding: '12px 20px',
                backgroundColor: '#01b4e4',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                transition: 'background-color 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#0099cc';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#01b4e4';
              }}
            >
             Search
            </button>
          </div>
    </div>
  );
};

export default MediaFilters;
