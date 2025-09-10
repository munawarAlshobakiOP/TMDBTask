"use client";
import { useEffect, useState } from "react";
import { use } from "react";
import styled from "styled-components";
import { FetchingCast, FetchingDetails } from "@/app/component/Details/fetching/fetchingDetails";
import MediaDetailsContainer from "@/app/component/Details/cardDetails";
import CastSection from "@/app/component/Details/casts/castsDetail";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";

const PageContainer = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
`;

const MainContent = styled.main`
  min-height: calc(100vh - 4rem);
`;

const ErrorContainer = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
`;

const ErrorContent = styled.div`
  padding: 1.25rem;
  text-align: center;
  color: red;
`;

const ErrorTitle = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
`;

const ErrorMessage = styled.p`
  margin-bottom: 0.5rem;
  line-height: 1.5;
`;

const NoDataContainer = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
`;

const NoDataContent = styled.div`
  padding: 1.25rem;
  text-align: center;
`;

const NoDataMessage = styled.p`
  font-size: 1.1rem;
  color: #666;
`;

const CastSectionContainer = styled.div`
  padding: 1.25rem;
  margin-top: 1.25rem;
`;

const CastTitle = styled.h2`
  margin-bottom: 1.25rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #032541;
`;

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
      <ErrorContainer>
        <ErrorContent>
          <ErrorTitle>Error Loading Movie</ErrorTitle>
          <ErrorMessage>{error}</ErrorMessage>
          <ErrorMessage>Please try refreshing the page or check your internet connection.</ErrorMessage>
        </ErrorContent>
      </ErrorContainer>
    );
  }

  if (!mediaData) {
    return (
      <NoDataContainer>
        <NoDataContent>
          <NoDataMessage>No movie data found.</NoDataMessage>
        </NoDataContent>
      </NoDataContainer>
    );
  }

  return (
    <PageContainer>
      <MainContent>
        <MediaDetailsContainer
          media_type={mediaType}
          mediaId={movieDslug}
          mediaData={mediaData}
        />
        
        <CastSectionContainer>
          <CastTitle>Top Billed Cast</CastTitle>
          <CastSection cast={castData} />
        </CastSectionContainer>
      </MainContent>
    </PageContainer>
  );
}
