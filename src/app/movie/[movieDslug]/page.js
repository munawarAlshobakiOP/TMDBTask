"use client";
import { useEffect, useState } from "react";
import { use } from "react";
import { FetchingCast, FetchingDetails } from "@/app/component/Details/fetching/fetchingDetails";
import MediaDetailsContainer from "@/app/component/Details/cardDetails";
import CastSection from "@/app/component/Details/casts/castsDetail";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
export default function MoviePage({ params }) {
  const { movieDslug } = use(params);
  const mediaType = "movie"; 

  const [mediaData, setMediaData] = useState(null);
  const [castData, setCastData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const [details, cast] = await Promise.all([
          FetchingDetails(mediaType, movieDslug),
          FetchingCast(mediaType, movieDslug),
        ]);
        
        setMediaData(details);
        setCastData(cast);
      } catch (err) {
        console.error("Error fetching movie data:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (movieDslug) {
      fetchAll();
    }
  }, [movieDslug, mediaType]);


  if (error) {
    return (
      <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
        <Navbar />
        <div style={{ padding: '20px', textAlign: 'center', color: 'red' }}>
          <h2>Error Loading Movie</h2>
          <p>{error}</p>
          <p>Please try refreshing the page or check your internet connection.</p>
        </div>
      </div>
    );
  }

  if (!mediaData) {
    return (
      <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
        <Navbar />
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <p>No movie data found.</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ minHeight: 'calc(100vh - 64px)' }}>
        <MediaDetailsContainer
          media_type={mediaType}
          mediaId={movieDslug}
          mediaData={mediaData}
        />
        
        <div style={{ padding: '20px', marginTop: '20px' }}>
          <h2 style={{ marginBottom: '20px', fontSize: '24px', fontWeight: 'bold' }}>
          Top Billed Cast
          </h2>
          <CastSection cast={castData} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
