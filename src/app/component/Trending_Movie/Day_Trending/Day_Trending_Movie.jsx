'use client';
import React from 'react';
import * as TrendingStyled from '../Trending.styled.jsx';
import TrendingMovieCard from '../../trending_card/Trending_Card.jsx';
import { useDayTrendingMovies } from '../../../hooks/useDayTrendingMovies';

const TrendingMovies = () => {
  const { movies, error, loading } = useDayTrendingMovies();

  return (
    <TrendingStyled.Container>
      {error && (
        <TrendingStyled.ErrorMessage>{error}</TrendingStyled.ErrorMessage>
      )}

      {loading ? (
        <TrendingStyled.LoadingMessage>
          Loading trending movies...
        </TrendingStyled.LoadingMessage>
      ) : movies.length === 0 ? (
        <TrendingStyled.LoadingMessage>
          No trending movies found.
        </TrendingStyled.LoadingMessage>
      ) : (
        <TrendingStyled.TrendingScroller>
          {movies.map(movie => (
            <TrendingMovieCard key={movie.id} movie={movie} />
          ))}
        </TrendingStyled.TrendingScroller>
      )}
    </TrendingStyled.Container>
  );
};

export default TrendingMovies;
