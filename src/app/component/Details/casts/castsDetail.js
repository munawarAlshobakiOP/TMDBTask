"use client";
import CastScrolling from "@/app/component/Details/casts/castScrolling";
import styled from "styled-components";

const CAStSectiondiv = styled.div`
textAlign: center; 
padding: 1.25rem;
color: #666; 
`;

const CastSection = ({ cast }) => {
  if (!cast || cast.length === 0) {
    return (
      <CAStSectiondiv>
        <p>No cast information available.</p>
      </CAStSectiondiv>
    );
  }

  return <CastScrolling cast={cast} />;
};

export default CastSection;
