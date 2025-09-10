"use client";
import React, { useEffect, useState } from 'react';
import DonutChart from '../../DonutChart/DonutChart';
import styled from 'styled-components';
import { fetchTrendingDayMovies } from '../fetchingTrends.js/fetching';

const IMAGE_BASE = process.env.NEXT_PUBLIC_IMAGE_BASE;

const Container = styled.div`
  padding: 1rem;
  font-family: Arial;
  max-width: 100%;
  overflow: hidden;
`;

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
`;

const LoadingMessage = styled.p`
  text-align: center;
`;

const TrendingScroller = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: hidden;
  gap: 0.5rem;
  padding: 0.625rem;
  scroll-snap-type: x mandatory;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  white-space: nowrap;
  scroll-behavior: smooth;
  height: 21.875rem;
  margin: 0 auto;
  position: relative;

  &::-webkit-scrollbar {
    height: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 0.25rem;
  }
`;

const TrendingCard = styled.div`
  width: 10rem;
  min-width: 10rem;
  max-width: 10rem;
  flex: 0 0 10rem;
  flex-shrink: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 0;
  scroll-snap-align: start;
`;

const MoviePoster = styled.img`
  width: 10rem;
  height: 15rem;
  object-fit: cover;
  border-radius: 0.5rem;
`;

const NoImagePlaceholder = styled.div`
  width: 10rem;
  height: 15rem;
  background-color: #f0f0f0;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 0.875rem;
`;

const MovieTitle = styled.h4`
  font-size: 0.83rem;
  font-weight: 600;
  margin: 0.625rem 0;
  color: #1f1f1f;
  max-width: 8.125rem;
`;

const MovieRating = styled.div`
  margin: -3.75rem 0 0.3125rem 0;
  color: #0070f3;
  font-weight: 500;
  font-size: 0.875rem;
  min-height: 2.5rem;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding-left: 0.625rem;
`;

const MovieYear = styled.p`
  font-size: 0.8rem;
  color: #555;
  margin: 0.625rem 0 0 0;
`;

const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        const results = await fetchTrendingDayMovies();
        setMovies(results);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);


  return (
    <Container>
      {error && (
        <ErrorMessage>
          Error: {error}
        </ErrorMessage>
      )}
      
      {loading ? (
        <LoadingMessage>Loading popular movies...</LoadingMessage>
      ) : movies.length === 0 ? (
        <LoadingMessage>No movies found.</LoadingMessage>
      ) : (
        <TrendingScroller>
          {movies.map(movie => (
            <TrendingCard key={movie.id}>
              {movie.poster_path ? (
                <MoviePoster
                  src={`${IMAGE_BASE}/w200${movie.poster_path}`}
                  alt={movie.title}
                />
              ) : (
                <NoImagePlaceholder>
                  No Image
                </NoImagePlaceholder>
              )}
              <MovieTitle>{movie.title}</MovieTitle>
              <MovieRating>
                <DonutChart percentage={movie.vote_average ? Math.round(movie.vote_average * 10) : 0} size={34} />
              </MovieRating>
              <MovieYear>
                {movie.release_date ? 
                  new Date(movie.release_date).toLocaleDateString('en-US', { 
                    day: 'numeric',
                    month: 'long', 
                    year: 'numeric' 
                  }) : 'Unknown'}
              </MovieYear>
            </TrendingCard>
          ))}
        </TrendingScroller>
      )}
    </Container>
  );
};

export default TrendingMovies;
