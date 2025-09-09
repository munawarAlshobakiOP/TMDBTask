'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import styles from './MediaCard.module.css';
import DonutChart from '../DonutChart/DonutChart';
const IMAGE_BASE = process.env.NEXT_PUBLIC_IMAGE_BASE;
const DEFAULT_IMAGE = process.env.NEXT_PUBLIC_DEFAULT_IMAGE;
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
    <div className={styles.card} ref={cardRef}>
      <Link href={linkUrl} className={`${styles.cardLink} ${showMoreBox ? styles.blurred : ''}`}>
        <div className={`${styles.imageWrapper}`}>
          <img src={imageUrl} alt={displayTitle} className={styles.poster} loading="lazy" />
        </div>
        <h3 className={styles.title}>{displayTitle}</h3>
        <p className={styles.date}>{displayDate}</p>

        <div className={styles.score}><DonutChart percentage={score} /></div>
      </Link>

      <button
        onClick={handleMoreClick}
        className={styles.moreButton}
        type="button"
      >
        <Image
          src="/assests/icon/more.png"
          alt="more"
          width={16}
          height={16}
          className={styles.more}
        />
      </button>
      {showMoreBox && (
        <div className={styles.moreBox}>
          <div className={styles.moreBoxContent}>
            <div>
              <p>Want to rate or add this item to a list?
              </p>
              <Link href="/login" className={styles.moreBoxItem}>login</Link>

            </div>
            <div>
              <p>Not a member?
              </p>
              <Link href="" className={styles.moreBoxItem}>signup </Link>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
