'use client';
import CastScrolling from './castScrolling';
import * as styled from './cast.styled';

const CastSection = ({ cast }) => {
  if (!cast || cast.length === 0) {
    return (
      <styled.CaStSectiondiv>
        <styled.Pragraph>No cast information available.</styled.Pragraph>
      </styled.CaStSectiondiv>
    );
  }

  return (
    <styled.CastSection>
      <CastScrolling cast={cast} />
    </styled.CastSection>
  );
};

export default CastSection;
