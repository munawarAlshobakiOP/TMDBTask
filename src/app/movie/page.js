'use client';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import MediaCard from '@/app/component/mediaCard/mediaCard';
import Navbar from '../component/Navbar/Navbar';
import MediaFilters from '../component/MediaFilters/MediaFilters';
import Footer from '../component/Footer/Footer';

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

const MoviesContainer = styled.div`
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

const NoMoviesContainer = styled.div`
  text-align: center;
  padding: 2.5rem;
  color: #666;
  background-color: #ffffff;
`;

const NoMoviesTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
`;

const NoMoviesMessage = styled.p`
  font-size: 1.1rem;
  line-height: 1.5;
`;

const MoviesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;
`;

const MovieCardWrapper = styled.div`
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

export default function MovieGrid() {
  const [movies, setMovies] = useState([]);
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
  const [selectedLang, setSelectedLang] = useState(''); 
  const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE;
  useEffect(() => {
  
    const fetchMovies = async () => {
      setIsLoading(true);
      setError(null);
      try {

        let url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${selectedLang || 'en-US'}&page=${page}&with_original_language=${selectedLang || 'en'}`;
        if (sortBy) {
          url += `&sort_by=${sortBy}`;
        }
        if (fromDate) {
          url += `&primary_release_date.gte=${fromDate}`;
        }
        if (toDate) {
          url += `&primary_release_date.lte=${toDate}`;
        }
        if (selectedGenres && selectedGenres.length > 0) {
          url += `&with_genres=${selectedGenres.join(',')}`;
        }
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error(`Failed to fetch movies: ${res.status}`);
        }
        const data = await res.json();
        setMovies(prev => {
          if (page === 1) {
            return data.results;
          }
          const allMovies = [...prev, ...data.results];
          const uniqueMoviesMap = new Map();
          allMovies.forEach(movie => {
            uniqueMoviesMap.set(movie.id, movie);
          });
          return Array.from(uniqueMoviesMap.values());
        });
        setTotalPages(data.total_pages);
      } catch (err) {
        console.error('Error fetching movies:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [page, sortBy, fromDate, toDate, selectedLang, selectedGenres]);

  const loadMoreMovies = () => {
    if (!isLoading) {
      setPage(prev => prev + 1);
    }
  };

  const handleLoadMoreClick = () => {
    loadMoreMovies();
    setAutoLoadEnabled(true);
  };

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
        loadMoreMovies();
      }, 500);
      
      setLoadMoreTimeout(timeout);
    }
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


  const handleSearch = () => {
    setPage(1);
    setMovies([]);
  };


  if (error) {
    return (
      <ErrorContainer>
        <ErrorContent>
          <ErrorTitle>Error Loading Movies</ErrorTitle>
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
          />
        </Sidebar>
        <ContentArea>
          <MoviesContainer />

          {movies.length === 0 && !isLoading ? (
            <NoMoviesContainer>
              <NoMoviesTitle>No movies found</NoMoviesTitle>
              <NoMoviesMessage>Try refreshing the page to see more results.</NoMoviesMessage>
            </NoMoviesContainer>
          ) : (
            <MoviesGrid>
              {movies.map(movie => (
                <MovieCardWrapper key={movie.id}>
                  <MediaCard media={movie} media_type="movie" />
                </MovieCardWrapper>
              ))}
            </MoviesGrid>
          )}

          {isLoading && (
            <LoadingContainer>
              <LoadingSpinner />
              <LoadingText>Loading movies...</LoadingText>
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
