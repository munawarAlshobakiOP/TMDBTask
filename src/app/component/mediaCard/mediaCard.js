'use client';
import Link from 'next/link';
import styles from './MediaCard.module.css';
import DonutChart from '../DonutChart/DonutChart';

export default function MediaCard({ media, media_type }) {
  const imageUrl = media.poster_path
    ? `https://image.tmdb.org/t/p/w300${media.poster_path}`
    : 'https://via.placeholder.com/300x450?text=No+Image';

  const displayTitle = media.title || media.name;
  const displayDate = media.release_date || media.first_air_date;
  const score = media.vote_average ? Math.round(media.vote_average * 10) : 'N/A';

  let linkUrl;
  if (media_type?.toLowerCase() === 'tv') {
    linkUrl = `/TV/${media.id}`; 
  } else {
    linkUrl = `/movie/${media.id}`; 
  }
  
  console.log('MediaCard - media_type:', media_type, 'media.id:', media.id, 'Generated URL:', linkUrl);

  return (
    <Link href={linkUrl} className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={displayTitle} className={styles.poster} loading="lazy" />
      </div>
      <h3 className={styles.title}>{displayTitle}</h3>
      <p className={styles.date}>{displayDate}</p>
      
      <div className={styles.score}><DonutChart percentage={score}/></div>
    </Link>
  );
}
