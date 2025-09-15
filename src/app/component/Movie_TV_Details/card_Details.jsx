'use client';
import Image from 'next/image';
import DonutChart from '../Donut_Chart/Donut_Chart';
import Link from 'next/link';
import * as styled from './card_Details.styled';
import { actionItems, emojiReactions } from '../../data/dataG';
import { MediaTitle, UserScore, MediaInfo, OverviewSection, ActionButtons } from './MediaComponents';
import { OpenWith_Icon } from '../../assests/icons';
const DEFAULT_IMAGE = process.env.NEXT_PUBLIC_DEFAULT_IMAGE;
const IMAGE_BASE = process.env.NEXT_PUBLIC_IMAGE_BASE;

export default function MediaDetailsContainer({ mediaData }) {
  const data = mediaData;
  const imageUrl = data.poster_path
    ? `${IMAGE_BASE}/w500${data.poster_path}`
    : `${DEFAULT_IMAGE}`;

  const backdropUrl = data.backdrop_path
    ? `${IMAGE_BASE}/original${data.backdrop_path}`
    : null;

  function formatRuntime(minutes) {
    if (!minutes) return 'Runtime not available';
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return `${h}h ${m}m`;
  }

  function formatDate(dateString) {
    if (!dateString) return 'Release date not available';
    return new Date(dateString).toLocaleDateString('en-GB', {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric',
    });
  }

  function formatGenres(genres) {
    if (!genres || genres.length === 0) return 'Genre not specified';
    return genres.map(genre => genre.name).join(', ');
  }


  return (
    <>
      <styled.TopSection backdropUrl={backdropUrl}>
        <styled.BackgroundOverlay />
        <styled.TopContent>
          <styled.LeftPoster>
            <styled.PosterImage src={imageUrl} alt={data.title || data.name} />
          </styled.LeftPoster>
          <styled.RightBackground />
        </styled.TopContent>
      </styled.TopSection>

      <styled.MobileDetailsSection>
        <styled.MobileDetailsContent>
          <MediaTitle data={data} />
          <UserScore data={data} emojiReactions={emojiReactions} />
          <MediaInfo 
            data={data} 
            formatDate={formatDate} 
            formatRuntime={formatRuntime} 
            formatGenres={formatGenres} 
          />
          <styled.GenresSection>
            {formatGenres(data.genres)}
          </styled.GenresSection>
          <OverviewSection data={data} />
          <styled.Detailgrid></styled.Detailgrid>
        </styled.MobileDetailsContent>
      </styled.MobileDetailsSection>
      
      {/* Desktop layout */}
      <styled.DesktopContainer backdropUrl={backdropUrl}>
        <styled.Udiv />
        <styled.Content>
          <styled.LayOut>
            <styled.Poster>
              <styled.PosterImage src={imageUrl} alt={data.title || data.name} />
              <styled.PosterOverlay>
                <styled.PosterOverlayText>
                  {' '}
                  <OpenWith_Icon /> Expand{' '}
                </styled.PosterOverlayText>
              </styled.PosterOverlay>
            </styled.Poster>

            <styled.DetailsDiv>
              <MediaTitle data={data} />
              <styled.INfoSection>
                <MediaInfo 
                  data={data} 
                  formatDate={formatDate} 
                  formatRuntime={formatRuntime} 
                  formatGenres={formatGenres} 
                  showGenres={true} 
                />
                <UserScore 
                  data={data} 
                  emojiReactions={emojiReactions} 
                  size={60} 
                  ringThickness={4} 
                />
                <ActionButtons actionItems={actionItems} />
                <OverviewSection data={data} />
                <styled.Detailgrid></styled.Detailgrid>
              </styled.INfoSection>
            </styled.DetailsDiv>
        </styled.LayOut>
      </styled.Content>
      </styled.DesktopContainer>
    </>
  );
}
