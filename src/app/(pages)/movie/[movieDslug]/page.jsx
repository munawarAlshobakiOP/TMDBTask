'use client';
import { Suspense, use } from 'react';
import MediaDetailsContainer from '../../../Component/MovieTvDetails/CardDetails';
import CastSection from '../../../Component/Casts/CastsDetail';
import * as MovieStyled from '../movie.style.js';
import { useMovieDetail } from '../../../libs/hooks/useMovieDetail';

export default function MoviePage({ params }) {
  const { movieDslug } = use(params);
  const { mediaData, castData, error, isLoading } = useMovieDetail(movieDslug);

  if (isLoading) {
    return (
      <MovieStyled.NoDataContainer>
        <MovieStyled.NoDataContent>
          <MovieStyled.NoDataMessage>
            Loading movie details...
          </MovieStyled.NoDataMessage>
        </MovieStyled.NoDataContent>
      </MovieStyled.NoDataContainer>
    );
  }

  if (error) {
    return (
      <MovieStyled.ErrorContainer>
        <MovieStyled.ErrorContent>
          <MovieStyled.ErrorTitle>Error Loading Movie</MovieStyled.ErrorTitle>
          <MovieStyled.ErrorMessage>{error}</MovieStyled.ErrorMessage>
          <MovieStyled.ErrorMessage>
            Please try refreshing the page or check your internet connection.
          </MovieStyled.ErrorMessage>
        </MovieStyled.ErrorContent>
      </MovieStyled.ErrorContainer>
    );
  }

  if (!mediaData) {
    return (
      <MovieStyled.NoDataContainer>
        <MovieStyled.NoDataContent>
          <MovieStyled.NoDataMessage>
            No movie data found.
          </MovieStyled.NoDataMessage>
        </MovieStyled.NoDataContent>
      </MovieStyled.NoDataContainer>
    );
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MovieStyled.PageContainer>
        <MovieStyled.MainContent>
          <MediaDetailsContainer
            media_type='movie'
            mediaId={movieDslug}
            mediaData={mediaData}
          />
          <MovieStyled.CastSectionContainer>
            <MovieStyled.CastTitle>Top Billed Cast</MovieStyled.CastTitle>
            <CastSection cast={castData} />
          </MovieStyled.CastSectionContainer>
        </MovieStyled.MainContent>
      </MovieStyled.PageContainer>
    </Suspense>
  );
}
