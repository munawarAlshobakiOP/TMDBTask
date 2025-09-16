'use client';
import CastScrolling from './CastScrolling';
import * as styled from './Cast.style';

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
