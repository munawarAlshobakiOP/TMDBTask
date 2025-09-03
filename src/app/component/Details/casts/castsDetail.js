"use client";
import CastScrolling from "@/app/component/Details/casts/castScrolling";

const CastSection = ({ cast }) => {
  if (!cast || cast.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '20px', color: '#666' }}>
        <p>No cast information available.</p>
      </div>
    );
  }

  return <CastScrolling cast={cast} />;
};

export default CastSection;
