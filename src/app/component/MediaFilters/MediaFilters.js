
////////////////////////Review it ??????????????????????????????????????
'use client';
import { useState } from 'react';

const MediaFilters = ({ 
  mediaType = 'movie',
  sortBy, 
  setSortBy, 
  selectedGenres, 
  setSelectedGenres, 
  selectedYear, 
  setSelectedYear, 
  minRating, 
  setMinRating, 
  filteredCount,
  onClearFilters 
}) => {
  const [showFilters, setShowFilters] = useState(true);

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

  const handleClearFilters = () => {
    onClearFilters();
  };

  const getMediaIcon = () => {
    return mediaType === 'tv' ? '📺' : '🎬';
  };

  const getMediaTitle = () => {
    return mediaType === 'tv' ? 'TV Shows' : 'Movies';
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
      backgroundColor: '#f8f9fa', 
      borderRight: '1px solid #dee2e6',
      padding: '20px',
      position: 'sticky',
      top: 0,
      height: 'fit-content',
      overflowY: 'auto'
    }}>
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ marginBottom: '15px', color: '#333' }}>
          {getMediaIcon()} {getMediaTitle()}
        </h3>
                <button
          onClick={() => setShowFilters(!showFilters)}
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginBottom: '20px'
          }}
        >
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>

      {showFilters && (
        <>
          {/* Sort Options */}
          <div style={{ marginBottom: '25px' }}>
            <h4 style={{ marginBottom: '10px', color: '#555' }}>Sort Results By</h4>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid #ddd'
              }}
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
{/******************************************/}
          <div style={{ marginBottom: '25px' }}>
            <h4 style={{ marginBottom: '10px', color: '#555' }}>{getYearLabel()}</h4>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid #ddd'
              }}
            >
              <option value="">All Years</option>
              {Array.from({ length: 25 }, (_, i) => 2025 - i).map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>

{/******************************************/}
          <div style={{ marginBottom: '25px' }}>
            <h4 style={{ marginBottom: '10px', color: '#555' }}>Minimum Rating</h4>
            <input
              type="range"
              min="0"
              max="10"
              step="0.5"
              value={minRating}
              onChange={(e) => setMinRating(parseFloat(e.target.value))}
              style={{ width: '100%' }}
            />
            <div style={{ textAlign: 'center', marginTop: '5px' }}>
              {minRating > 0 ? `${minRating}+` : 'Any Rating'}
            </div>
          </div>

{/******************************************/}    
      <button
            onClick={handleClearFilters}
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Clear All Filters
          </button>

{/******************************************/}     
     <div style={{ 
            marginTop: '20px', 
            padding: '15px', 
            backgroundColor: '#e9ecef', 
            borderRadius: '5px',
            textAlign: 'center'
          }}>
            <strong>{filteredCount}</strong> {getCountLabel()}
          </div>
        </>
      )}
    </div>
  );
};

export default MediaFilters;
