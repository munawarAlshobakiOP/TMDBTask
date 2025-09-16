'use client';
import MediaCard from '../../Component/MediaCard/MediaCard';
import MediaFilters from '../../Component/MediaFilters/MediaFilters';
import * as TVStyled from './TV.style.js';
import { useTVShows } from '../../libs/hooks/useTVShows';

export default function TVGrid() {
  const {
    tv,
    isLoading,
    error,
    sortBy,
    selectedGenres,
    fromDate,
    toDate,
    selectedLanguage,
    setSortBy,
    setSelectedGenres,
    setFromDate,
    setToDate,
    setSelectedLanguage,
    handleLoadMoreClick,
    handleClearFilters,
    handleSearch,
    hasMore,
  } = useTVShows();

  if (error) {
    return (
      <TVStyled.ErrorContainer>
        <TVStyled.ErrorContent>
          <TVStyled.ErrorTitle>Error Loading TV Shows</TVStyled.ErrorTitle>
          <TVStyled.RetryButton onClick={() => window.location.reload()}>
            Try Again
          </TVStyled.RetryButton>
        </TVStyled.ErrorContent>
      </TVStyled.ErrorContainer>
    );
  }

  return (
    <TVStyled.PageContainer>
      <TVStyled.TitleContainer>
        <TVStyled.SectionTitle>Popular TV Shows</TVStyled.SectionTitle>
      </TVStyled.TitleContainer>
      <TVStyled.MainLayout>
        <TVStyled.Sidebar>
          <MediaFilters
            mediaType='tv'
            sortBy={sortBy}
            setSortBy={setSortBy}
            selectedGenres={selectedGenres}
            setSelectedGenres={setSelectedGenres}
            fromDate={fromDate}
            setFromDate={setFromDate}
            toDate={toDate}
            setToDate={setToDate}
            filteredCount={tv.length}
            onClearFilters={handleClearFilters}
            onSearch={({ language, genres, fromDate, toDate, sortBy }) => {
              setSelectedLanguage(language);
              setSelectedGenres(genres);
              setFromDate(fromDate);
              setToDate(toDate);
              setSortBy(sortBy);
              handleSearch();
            }}
          />
        </TVStyled.Sidebar>
        <TVStyled.ContentArea>
          <TVStyled.TVShowsContainer />

          {tv.length === 0 && !isLoading ? (
            <TVStyled.NoShowsContainer>
              <TVStyled.NoShowsTitle>No TV shows found</TVStyled.NoShowsTitle>
              <TVStyled.NoShowsMessage>
                Try refreshing the page to see more results.
              </TVStyled.NoShowsMessage>
            </TVStyled.NoShowsContainer>
          ) : (
            <TVStyled.ShowsGrid>
              {tv.map(show => (
                <TVStyled.ShowCardWrapper key={show.id}>
                  <MediaCard media={show} media_type='TV' />
                </TVStyled.ShowCardWrapper>
              ))}
            </TVStyled.ShowsGrid>
          )}

          {isLoading && (
            <TVStyled.LoadingContainer>
              <TVStyled.LoadingSpinner />
              <TVStyled.LoadingText>Loading TV shows...</TVStyled.LoadingText>
            </TVStyled.LoadingContainer>
          )}

          {!isLoading && hasMore && (
            <TVStyled.LoadMoreContainer>
              <TVStyled.LoadMoreButton onClick={handleLoadMoreClick}>
                Load More
              </TVStyled.LoadMoreButton>
            </TVStyled.LoadMoreContainer>
          )}
        </TVStyled.ContentArea>
      </TVStyled.MainLayout>
    </TVStyled.PageContainer>
  );
}
