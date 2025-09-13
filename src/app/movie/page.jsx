'use client';
import { useState, Suspense } from 'react';
import MediaFilters from '../component/Media_Filters/Media_Filters.jsx';
import * as MovieStyled from './movie.styled.jsx';
import MediaCard from '../component/Media_Card/media_Card.jsx';
import { useMovies } from '../hooks/useMovies.jsx';

export default function MovieGrid() {
  const [sortBy, setSortBy] = useState('popularity.desc');
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [selectedLang, setSelectedLang] = useState('');

  const filters = {
    sortBy,
    selectedGenres,
    fromDate,
    toDate,
    selectedLang
  };

  const {
    movies,
    isLoading,
    error,
    hasMore,
    handleLoadMoreClick,
    resetMovies
  } = useMovies(filters);
  const handleSearch = () => {
    resetMovies();
  };


  if (error) {
    return (
      <MovieStyled.ErrorContainer>
        <MovieStyled.ErrorContent>
          <MovieStyled.ErrorTitle>Error Loading Movies</MovieStyled.ErrorTitle>
          <MovieStyled.ErrorMessage>{error}</MovieStyled.ErrorMessage>
          <MovieStyled.RetryButton onClick={() => window.location.reload()}>Try Again</MovieStyled.RetryButton>
        </MovieStyled.ErrorContent>
      </MovieStyled.ErrorContainer>
    );
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <MovieStyled.PageContainer>
      <MovieStyled.TitleContainer>
        <MovieStyled.SectionTitle>Popular Movies</MovieStyled.SectionTitle>
      </MovieStyled.TitleContainer>
      <MovieStyled.MainLayout>
        <MovieStyled.Sidebar>
          <MediaFilters 
            mediaType="movie"
            sortBy={sortBy}
            setSortBy={setSortBy}
            selectedGenres={selectedGenres}
            setSelectedGenres={setSelectedGenres}
            fromDate={fromDate}
            setFromDate={setFromDate}
            toDate={toDate}
            setToDate={setToDate}
            selectedLang={selectedLang}
            onSearch={({ language, genres, fromDate, toDate, sortBy }) => {
              setSelectedLang(language);
              setSelectedGenres(Array.isArray(genres) ? genres : []);
              setFromDate(fromDate);
              setToDate(toDate);
              setSortBy(sortBy);
              handleSearch();
            }}
          /></MovieStyled.Sidebar>
        <MovieStyled.ContentArea>
          <MovieStyled.MoviesContainer />

          {movies.length === 0 && !isLoading ? (
            <MovieStyled.NoMoviesContainer>
              <MovieStyled.NoMoviesTitle>No movies found</MovieStyled.NoMoviesTitle>
              <MovieStyled.NoMoviesMessage>Try refreshing the page to see more results.</MovieStyled.NoMoviesMessage>
            </MovieStyled.NoMoviesContainer>
          ) : (
            <MovieStyled.MoviesGrid>
              {movies.map(movie => (
                <MovieStyled.MovieCardWrapper key={movie.id}>
                  <MediaCard media={movie} media_type="movie" />
                </MovieStyled.MovieCardWrapper>
              ))}
            </MovieStyled.MoviesGrid>
          )}

          {isLoading && (
            <MovieStyled.LoadingContainer>
              <MovieStyled.LoadingSpinner />
              <MovieStyled.LoadingText>Loading movies...</MovieStyled.LoadingText>
            </MovieStyled.LoadingContainer>
          )}

          {!isLoading && (
            <MovieStyled.LoadMoreContainer>
              <MovieStyled.LoadMoreButton onClick={handleLoadMoreClick}>
                Load More
              </MovieStyled.LoadMoreButton>
            </MovieStyled.LoadMoreContainer>
          )}
        </MovieStyled.ContentArea>
      </MovieStyled.MainLayout>
    </MovieStyled.PageContainer>
    </Suspense>
  );
}
