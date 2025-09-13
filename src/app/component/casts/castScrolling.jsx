"use client"
import { useState } from 'react';
import CastCard from './castCard';
import * as styled from "./cast.styled";
import { ArrowRightAlt_Icon } from '../../assests/icons';

const CastScrolling = ({ cast }) => {
  const [visibleCount, setVisibleCount] = useState(9);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 9);
  };
  return (
    <div>
      <styled.Scroller>
        {cast.slice(0, visibleCount).map((member, index) => (
          <CastCard
            key={index}
            name={member.name}
            character={member.character}
            image={member.image}
          />
        ))}
        <styled.LoadMoreCard>
          <styled.LoadMoreA href="#" >
            <styled.LoadMoreSpan >Load More</styled.LoadMoreSpan>
            <ArrowRightAlt_Icon />
            </styled.LoadMoreA>
        </styled.LoadMoreCard>
      </styled.Scroller>
      {visibleCount < cast.length && (
        <styled.LoadMoreButton onClick={handleLoadMore}>
          Load More
        </styled.LoadMoreButton>
      )}
    </div>
  );
};

export default CastScrolling;
