'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import styles from './MediaCard.module.css';
import DonutChart from '../DonutChart/DonutChart';
import styled from 'styled-components';
const IMAGE_BASE = process.env.NEXT_PUBLIC_IMAGE_BASE;
const DEFAULT_IMAGE = process.env.NEXT_PUBLIC_DEFAULT_IMAGE;
const Card = styled.div`
 display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #fff;
  border-radius: .5rem;
  box-shadow: 0 .125rem .5rem rgba(0,0,0,0.08);
  overflow: visible;
  transition: box-shadow 0.2s;
  position: relative;
  height: 20rem;
  width: 100%;

`;
const CardLink = styled.a`

 text-decoration: none;
  color: inherit;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: filter 0.3s ease, background-color 0.3s ease;
`;
const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 14rem !important;
  min-height: 14rem;
  max-height: 14rem;
  overflow: hidden;
`;
const Poster= styled.img`
   width: 100% !important;
  height: 100% !important;
  min-height: 14rem;
  max-height: 14rem;
  object-fit: cover;
  display: block;
  border-bottom: .0625rem solid #eee;
`;
const Title= styled.h3`
  font-size: .9rem;
  color: #222;
  margin: .75rem 0 .25rem 0;
  font-weight: 700; 
  line-height: 1.1;
  text-align: left;
  font-weight: bold;
  padding: 0 .75rem;
  flex-grow: 1;
  display: flex;
  align-items: flex-start;

  &:hover {  color: #01b4e4;
}
`;
const Date = styled.p` font-size: .8rem;
  color: #666;
  margin: 0 0 .375rem 0;
  padding: 0 .75rem;
  text-align: left;`;

const Score = styled.div`position: absolute;
  top: 12.1875rem;
  left: .5rem;
  color: #222;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  font-size: .9rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;`;
const MoreButton= styled.button`position: absolute;
  top: .5rem;
  right: .5rem;
  background: rgba(166, 166, 166, 0.7);
  border: none;
  border-radius: 50%;
  width: 1.75rem;
  height: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: background-color 0.2s ease;
  &:hover {  background: rgba(0, 0, 0, 0.9);
}
  `;

const More= styled.img`  filter: invert(1);
  opacity: 0.8;`;
  const Morebox= styled.div`position: absolute;
  top: 2.5rem;
  right: .5rem;
  background: white;
  border-radius: .5rem;
  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, 0.15);
  z-index: 20;
  min-width: 7.5rem;
  overflow: hidden;`;
  const MoreBoxContent= styled.div`  
  display: flex;
  flex-direction: column;
   p{
  font-size: .6875rem;
  font-weight: bold;
  margin: .375rem .75rem .125rem .75rem;
  color: #333;
  text-align: left;
   }
> div {
    padding: 0.25rem 0;
    border-bottom: 0.0625rem solid #f0f0f0;
  }
  `;
  const MoreBoxItem= styled.a`
  background: none;
  border: none;
  padding: .25rem .75rem;
  text-align: left;
  font-size: .625rem;
  text-decoration: none;
  transition: background-color 0.2s ease;
  display: block;
  width: 100%;
  &:hover {
  background-color: #032541;
  color: #fff;
}
  `;
export default function MediaCard({ media, media_type }) {
  const [showMoreBox, setShowMoreBox] = useState(false);
  const cardRef = useRef(null);

  const imageUrl = media.poster_path
    ? `${IMAGE_BASE}/w300${media.poster_path}`
    : `${DEFAULT_IMAGE}`;

  const displayTitle = media.title || media.name;
  const displayDate = media.release_date || media.first_air_date;
  const score = media.vote_average ? Math.round(media.vote_average * 10) : 'N/A';

  let linkUrl;
  if (media_type?.toLowerCase() === 'tv') {
    linkUrl = `/TV/${media.id}`;
  } else {
    linkUrl = `/movie/${media.id}`;
  }
  ////////////////////////
  const handleMoreClick = (e) => {
    e.preventDefault();
    setShowMoreBox(!showMoreBox);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setShowMoreBox(false);
      }
    };
    ///////////////////////////////////////////////////////////////
    if (showMoreBox) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMoreBox]);


  return (
    <Card>
      <Link href={linkUrl} className={`${styles.cardLink} ${showMoreBox ? styles.blurred : ''}`}>
        <ImageWrapper>
          <Poster src={imageUrl} alt={displayTitle}  loading="lazy" />
        </ImageWrapper>
        <Title>{displayTitle}</Title>
        <Date>{displayDate}</Date>

        <Score><DonutChart percentage={score} /></Score>
      </Link>

      <MoreButton
        onClick={handleMoreClick}
        type="button"
      >
        <More
          src="/assests/icon/more.png"
          alt="more"
          width={16}
          height={16}
        />
      </MoreButton>
      {showMoreBox && (
        <Morebox>
          <MoreBoxContent>
            <div>
              <p>Want to rate or add this item to a list?
              </p>
              <MoreBoxItem href="/login" >login</MoreBoxItem>

            </div>
            <div>
              <p>Not a member?
              </p>
              <MoreBoxItem href="">signup </MoreBoxItem>

            </div>
          </MoreBoxContent>
        </Morebox>
      )}
    </Card>
  );
}
