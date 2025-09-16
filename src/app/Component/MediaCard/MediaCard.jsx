'use client';
import { useState, useEffect, useRef } from 'react';
import DonutChart from '../DountChart/DonutChart';
import * as styled from './MediaCard.style';
import { moreBoxContent } from '../../Data/dataG';
import { MoreHoriz_Icon } from '../../assests/icons';
import {formatDate} from "../../libs/get_date"
import useClickOutside from '../../libs/hooks/useClickOutside';
const IMAGE_BASE = process.env.NEXT_PUBLIC_IMAGE_BASE;
const DEFAULT_IMAGE = process.env.NEXT_PUBLIC_DEFAULT_IMAGE;

export default function MediaCard({ media, media_type }) {
  const [showMoreBox, setShowMoreBox] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const cardRef = useRef(null);

  const imageUrl = media.poster_path
    ? `${IMAGE_BASE}/w300${media.poster_path}`
    : `${DEFAULT_IMAGE}`;

  const displayTitle = media.title || media.name;
  const rawDate = media.release_date || media.first_air_date;
  const score = media.vote_average
    ? Math.round(media.vote_average * 10)
    : 'N/A';  
  const displayDate = formatDate(rawDate);

  const linkUrl =
    media_type?.toLowerCase() === 'tv'
      ? `/TV/${media.id}`
      : `/movie/${media.id}`;


  const handleMoreClick = e => {
    e.preventDefault();
    setShowMoreBox(prev => !prev);
  };

  const handleTitleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleTitleMouseLeave = () => {
    setShowTooltip(false);
  };

  useClickOutside(cardRef, () => setShowMoreBox(false), showMoreBox);
  return (
    <styled.CardWrapper ref={cardRef}>
      <styled.Card className={showMoreBox ? 'blurred' : ''}>
        <styled.ClickableOverlay href={linkUrl} />
        <styled.ImageWrapper>
          <styled.Poster src={imageUrl} alt={displayTitle} loading='lazy' />
        </styled.ImageWrapper>
        <styled.Details>
          <styled.Title
            onMouseEnter={handleTitleMouseEnter}
            onMouseLeave={handleTitleMouseLeave}
          >
            {displayTitle}
            {showTooltip && <styled.Tooltip>{displayTitle}</styled.Tooltip>}
          </styled.Title>
          <styled.Date>{displayDate}</styled.Date>
          <styled.Description>{media.overview || 'No description available.'}</styled.Description>
        </styled.Details>
        <styled.Score>
          <DonutChart percentage={score} />
        </styled.Score>

        <styled.MoreButton onClick={handleMoreClick} type='button'>
          <MoreHoriz_Icon />
        </styled.MoreButton>
      </styled.Card>
      {showMoreBox && (
        <styled.Morebox>
          <styled.MoreBoxContent>
            {moreBoxContent.map(item => (
              <div key={item.id}>
                <p>{item.text}</p>
                <styled.MoreBoxItem href={item.href}>
                  {item.linkText}
                </styled.MoreBoxItem>
              </div>
            ))}
          </styled.MoreBoxContent>
        </styled.Morebox>
      )}
    </styled.CardWrapper>
  );
}
