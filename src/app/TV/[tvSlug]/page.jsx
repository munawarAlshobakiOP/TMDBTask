'use client';
import { use } from 'react';
import MediaDetailsContainer from '../../component/Movie_TV_Details/card_Details';
import CastSection from '../../component/casts/castsDetail';
import * as TVStyled from '../TV.styled.jsx';
import { useTVDetail } from '../../hooks/useTVDetail';

export default function TVPage({ params }) {
  const { tvSlug } = use(params);
  const { mediaData, castData, error, isLoading } = useTVDetail(tvSlug);

  if (isLoading) {
    return (
      <TVStyled.NoDataContainer>
        <TVStyled.NoDataContent>
          <TVStyled.NoDataMessage>Loading TV show details...</TVStyled.NoDataMessage>
        </TVStyled.NoDataContent>
      </TVStyled.NoDataContainer>
    );
  }

  if (error) {
    return (
      <TVStyled.NoDataContainer>
        <TVStyled.NoDataContent>
          <TVStyled.NoDataMessage>Error loading TV show: {error}</TVStyled.NoDataMessage>
        </TVStyled.NoDataContent>
      </TVStyled.NoDataContainer>
    );
  }

  if (!mediaData) {
    return (
      <TVStyled.NoDataContainer>
        <TVStyled.NoDataContent>
          <TVStyled.NoDataMessage>No TV show data found.</TVStyled.NoDataMessage>
        </TVStyled.NoDataContent>
      </TVStyled.NoDataContainer>
    );
  }

  return (
    <TVStyled.PageContainer>
      <TVStyled.MainContent>
        <MediaDetailsContainer
          media_type="tv"
          mediaId={tvSlug}
          mediaData={mediaData}
        />
        <TVStyled.CastSectionContainer>
          <TVStyled.CastTitle>Top Billed Cast</TVStyled.CastTitle>
          <CastSection cast={castData} />
        </TVStyled.CastSectionContainer>
      </TVStyled.MainContent>
    </TVStyled.PageContainer>
  );
}
