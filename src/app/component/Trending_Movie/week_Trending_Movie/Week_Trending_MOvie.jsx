'use client';
import React, { useRef } from 'react';
import * as TrendingStyled from '../Trending.styled.jsx';
import TrendingMovieCard from '../../trending_card/Trending_Card.jsx';
import { useWeekTrendingMovies } from '../../../libs/hooks/useWeekTrendingMovies';

const TrendingWeekMovies = () => {
  const { movies, error, loading } = useWeekTrendingMovies();
  const scrollContainerRef = useRef(null);

  return (
    <TrendingStyled.Container>
      {error && (
        <TrendingStyled.ErrorMessage>
          Error: {error}
        </TrendingStyled.ErrorMessage>
      )}

      {loading ? (
        <TrendingStyled.LoadingMessage>
          Loading weekly trending movies...
        </TrendingStyled.LoadingMessage>
      ) : movies.length === 0 ? (
        <TrendingStyled.LoadingMessage>
          No weekly trending movies found.
        </TrendingStyled.LoadingMessage>
      ) : (
        <TrendingStyled.TrendingScroller ref={scrollContainerRef}>
          {movies.map(movie => (
            <TrendingMovieCard key={movie.id} movie={movie} />
          ))}
        </TrendingStyled.TrendingScroller>
      )}
    </TrendingStyled.Container>
  );
};

export default TrendingWeekMovies;
