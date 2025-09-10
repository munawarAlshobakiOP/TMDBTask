'use client';
import { useState } from 'react';
import styled from 'styled-components';
import Trending from "./component/Trending-Movie/trending";
import Link from "next/link";
import TMDBSearch from "./component/SearchInterface/search"
import SearchBar from "./component/SearchInterface/SearchBar";
import Navbar from "./component/Navbar/Navbar";
import WelcomeSection from "./component/WelcomeSection/WelcomeSection";
import Footer from './component/Footer/Footer';

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
`;

const ContentWrapper = styled.div`
  margin-top: 5rem;
`;

const MainContent = styled.main`
  padding: 1.25rem;
`;

export default function Home() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <PageContainer>
      <SearchBar onSearchResults={handleSearchResults} />
      <ContentWrapper>
        <WelcomeSection />
        <MainContent>
          <Trending/>
        </MainContent>
      </ContentWrapper>
    </PageContainer>
  );
}

 