'use client';
import React from 'react';
import * as TrendingStyled from '../Trending.style.js';
import TrendingMovieCard from '../../TrendingCard/TrendingCard.jsx';
import { useDayTrendingMovies } from '../../../libs/hooks/useDayTrendingMovies.jsx';

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
