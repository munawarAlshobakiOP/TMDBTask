"use client"
import { useState } from 'react';
import CastCard from './castCard';
import classes from './CastScrolling.module.css';

const CastScrolling = ({ cast }) => {
  const [visibleCount, setVisibleCount] = useState(9);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 9);
  };

  return (
    <div>
      <div className={classes.scroller}>
        {cast.slice(0, visibleCount).map((member, index) => (
          <CastCard
            key={index}
            name={member.name}
            character={member.character}
            image={member.image}
          />
        ))}
        <div className={classes.card + ' ' + classes.loadMoreCard}>
          <a href="#" style={{textDecoration: 'none', color: 'inherit', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <span style={{fontWeight: 'bold', fontSize: '1rem', marginBottom: '0.5rem'}}>Load More</span>
            <span style={{fontSize: '2rem', color: '#888'}}>&#8594;</span>
          </a>
        </div>
      </div>
      {visibleCount < cast.length && (
        <button className={classes.loadMore} onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default CastScrolling;
