"use client"
import { useState } from 'react';
import CastCard from './castCard';
import styled from 'styled-components';
const Scroller = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 1rem 0;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    height: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 0.25rem;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 0.25rem;
  }
`;
const LoadMoreCard = styled.div`

width: 11.25rem;
  min-width: 11.25rem;
  max-width: 11.25rem;
  flex: 0 0 11.25rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 0.5rem;
  
`;
const LoadMoreA= styled.a`
  text-decoration: none;
  color: inherit;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;  
const LoadMoreSpan = styled.span`
  fontWeight: bold; 
  fontSize: 1rem; 
  marginBottom: 0.5rem;
`;
const Span2 = styled.span`
  fontSize: 2rem; 
`;
const LoadMoreButton = styled.button`
margin-top: 0.625rem;
  padding: 0.5rem 1rem;
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-weight: bold;
  &:hover {
    background-color: #555;
  } 
`;
const CastScrolling = ({ cast }) => {
  const [visibleCount, setVisibleCount] = useState(9);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 9);
  };
  return (
    <div>
      <Scroller>
        {cast.slice(0, visibleCount).map((member, index) => (
          <CastCard
            key={index}
            name={member.name}
            character={member.character}
            image={member.image}
          />
        ))}
        <LoadMoreCard>
          <LoadMoreA href="#" >
            <LoadMoreSpan >Load More</LoadMoreSpan>
            <Span2 >&#8594;</Span2>
          </LoadMoreA>
        </LoadMoreCard>
      </Scroller>
      {visibleCount < cast.length && (
        <LoadMoreButton onClick={handleLoadMore}>
          Load More
        </LoadMoreButton>
      )}
    </div>
  );
};

export default CastScrolling;
