'use client';

import * as styled from './card_Details.styled';
import { actionItems, emojiReactions } from '../../data/dataG';
import { MediaTitle, UserScore, MediaInfo, OverviewSection, ActionButtons } from './MediaComponents';
import { OpenWith_Icon } from '../../assests/icons';
import {format_Date_NumericAll} from "../../libs/get_date"
import {formatRuntime} from "../../libs/run_time_format"
import {formatGenres} from "../../libs/genre_format"
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
            formatDate={format_Date_NumericAll} 
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
                  formatDate={format_Date_NumericAll} 
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
