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

const LoadingContainer = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
`;

const LoadingContent = styled.div`
  padding: 1.25rem;
  text-align: center;
`;

const LoadingText = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 0.5rem;
`;

const LoadingId = styled.p`
  font-size: 0.9rem;
  color: #999;
  font-family: monospace;
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
  margin-bottom: 0.5rem;
`;

const NoDataId = styled.p`
  font-size: 0.9rem;
  color: #999;
  font-family: monospace;
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

export default function TVPage({ params }) {
  const { tvSlug } = use(params);
  const mediaType = "tv"; 

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
          FetchingDetails(mediaType, tvSlug),
          FetchingCast(mediaType, tvSlug),
        ]);
        
    
        setMediaData(details);
        setCastData(cast);
      } catch (err) {
        console.error("Error fetching TV show data:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (tvSlug) {
      fetchAll();
    }
  }, [tvSlug, mediaType]);

  if (isLoading) {
    return (
      <LoadingContainer>
        <LoadingContent>
          <LoadingText>Loading TV show details and cast...</LoadingText>
        </LoadingContent>
      </LoadingContainer>
    );
  }
  
  if (!mediaData) {
    return (
      <NoDataContainer>
        <NoDataContent>
          <NoDataMessage>No TV show data found.</NoDataMessage>
        </NoDataContent>
      </NoDataContainer>
    );
  }
  
  return (
    <PageContainer>
      <MainContent>
        <MediaDetailsContainer
          media_type={mediaType}
          mediaId={tvSlug}
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
