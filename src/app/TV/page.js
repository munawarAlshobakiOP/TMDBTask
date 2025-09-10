'use client';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import MediaCard from '@/app/component/mediaCard/mediaCard';
import Navbar from '../component/Navbar/Navbar';
import MediaFilters from '../component/MediaFilters/MediaFilters';
import Footer from '../component/Footer/Footer';
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE;

const PageContainer = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
`;

const MainLayout = styled.div`
  display: flex;
  margin-top: 5rem;
`;

const Sidebar = styled.div`
  width: 18.75rem;
  padding: 1.25rem;
`;

const ContentArea = styled.div`
  flex: 1;
  padding: 1.25rem;
`;

const TVShowsContainer = styled.div`
  margin-bottom: 1.25rem;
`;

const ErrorContainer = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
`;

const ErrorContent = styled.div`
  padding: 1.25rem;
  text-align: center;
  color: red;
`;

const ErrorTitle = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
`;

const ErrorMessage = styled.p`
  margin-bottom: 1rem;
  line-height: 1.5;
`;

const RetryButton = styled.button`
  background-color: #01b4e4;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #029ac7;
    transform: translateY(-0.125rem);
  }
`;

const NoShowsContainer = styled.div`
  text-align: center;
  padding: 2.5rem;
  color: #666;
  background-color: #ffffff;
`;

const NoShowsTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
`;

const NoShowsMessage = styled.p`
  font-size: 1.1rem;
  line-height: 1.5;
`;

const ShowsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;
`;

const ShowCardWrapper = styled.div`
  display: inline-block;
  width: 12.5rem;
  margin: 0.625rem;
  vertical-align: top;
`;

const LoadingContainer = styled.div`
  text-align: center;
  padding: 2.5rem;
  color: #666;
`;

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 2.5rem;
  height: 2.5rem;
  border: 0.25rem solid #f3f3f3;
  border-top: 0.25rem solid #01b4e4;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1.25rem;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const LoadingText = styled.p`
  font-size: 1rem;
  font-weight: 500;
`;

const LoadMoreContainer = styled.div`
  text-align: center;
  padding: 1.875rem;
`;

const LoadMoreButton = styled.button`
  background-color: #01b4e4;
  color: white;
  border: none;
  padding: 0.75rem 1.875rem;
  border-radius: 0.9375rem;
  font-size: 1rem;
  font-weight: bold;
  width: 100%;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #029ac7;
    transform: translateY(-0.125rem);
    box-shadow: 0 0.25rem 0.75rem rgba(1, 180, 228, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

export default function TVGrid() {
  const handleScroll = () => {
    if (!autoLoadEnabled || isLoading) return;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    if (scrollTop + windowHeight >= documentHeight - 200) {
      if (loadMoreTimeout) {
        clearTimeout(loadMoreTimeout);
      }
      const timeout = setTimeout(() => {
        setPage(prev => prev + 1);
      }, 500);
      setLoadMoreTimeout(timeout);
    }
  };
  const [tv, settv] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [autoLoadEnabled, setAutoLoadEnabled] = useState(false);
  const [loadMoreTimeout, setLoadMoreTimeout] = useState(null);
  const [sortBy, setSortBy] = useState('popularity.desc');
  const [selectedGenres, setSelectedGenres] = useState([]); 
  const [fromDate, setFromDate] = useState(''); 
  const [toDate, setToDate] = useState(''); 
  const [selectedLanguage, setSelectedLanguage] = useState('');     
  useEffect(() => {
    if (selectedLanguage) {
      console.log( selectedGenres);
    }
  }, [selectedLanguage]);

  useEffect(() => {
    const fetchShows = async () => {
      setIsLoading(true);
      setError(null);
      try {
        let url = `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=${selectedLanguage || 'en-US'}&page=${page}&with_original_language=${selectedLanguage || 'en'}`;
        if (sortBy) {
          url += `&sort_by=${sortBy}`;
        }
        if (fromDate) {
          url += `&first_air_date.gte=${fromDate}`;
        }
        if (toDate) {
          url += `&first_air_date.lte=${toDate}`;
        }
        if (selectedGenres && selectedGenres.length > 0) {
          url += `&with_genres=${selectedGenres.join(',')}`;
        }
        console.log('Fetching TV shows with URL:', url);
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Failed to fetch TV shows: ${res.status}`);
        }

        const data = await res.json();
        if (data.results && Array.isArray(data.results)) {
          settv(prev => {
            if (page === 1) {
              return data.results;
            }
            const allShows = [...prev, ...data.results];
            const uniqueShowsMap = new Map();
            allShows.forEach(show => {
              uniqueShowsMap.set(show.id, show);
            });
            return Array.from(uniqueShowsMap.values());
          });
          setTotalPages(data.total_pages);
        } else {
          console.error('Invalid data structure:', data);
          setError('Invalid data received from API');
        }
      } catch (err) {
        console.error('Error fetching TV shows:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchShows();
  }, [page, sortBy, fromDate, toDate, selectedLanguage, selectedGenres]);
  const loadMoreMovies = () => {
    if (!isLoading) {
      setPage(prev => prev + 1);
    }
  };

  const handleLoadMoreClick = () => {
    loadMoreMovies();
    setAutoLoadEnabled(true);
  };
  useEffect(() => {
    if (autoLoadEnabled) {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
        if (loadMoreTimeout) {
          clearTimeout(loadMoreTimeout);
        }
      };
    }
  }, [autoLoadEnabled, isLoading, loadMoreTimeout]);

  const handleClearFilters = () => {
  setSortBy('popularity.desc');
  setFromDate('');
  setToDate('');
  setSelectedGenres([]);
  setSelectedLanguage('en-US');
  setPage(1);
  settv([]);
  };

  const handleSearch = () => {
  setPage(1);
  settv([]);
  };

  if (error) {
    return (
      <ErrorContainer>
        <Navbar />
        <ErrorContent>
          <ErrorTitle>Error Loading TV Shows</ErrorTitle>
          <ErrorMessage>{error}</ErrorMessage>
          <RetryButton onClick={() => window.location.reload()}>Try Again</RetryButton>
        </ErrorContent>
      </ErrorContainer>
    );
  }

  return (
    <PageContainer>
      <MainLayout>
        <Sidebar>
          <MediaFilters 
            mediaType="tv"
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
        </Sidebar>
        <ContentArea>
          <TVShowsContainer />

          {tv.length === 0 && !isLoading ? (
            <NoShowsContainer>
              <NoShowsTitle>No TV shows found</NoShowsTitle>
              <NoShowsMessage>Try refreshing the page to see more results.</NoShowsMessage>
            </NoShowsContainer>
          ) : (
            <ShowsGrid>
              {tv.map(show => (
                <ShowCardWrapper key={show.id}>
                  <MediaCard media={show} media_type="TV" />
                </ShowCardWrapper>
              ))}
            </ShowsGrid>
          )}

          {isLoading && (
            <LoadingContainer>
              <LoadingSpinner />
              <LoadingText>Loading TV shows...</LoadingText>
            </LoadingContainer>
          )}

          {!isLoading && (
            <LoadMoreContainer>
              <LoadMoreButton onClick={handleLoadMoreClick}>
                Load More
              </LoadMoreButton>
            </LoadMoreContainer>
          )}
        </ContentArea>
      </MainLayout>
    </PageContainer>
  );
}
