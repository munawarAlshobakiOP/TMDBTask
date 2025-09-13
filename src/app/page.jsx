'use client';
import { useState } from 'react';
import Trending from "./component/Trending_Movie/trending";
import SearchBar from "./component/SearchInterface/SearchBar";
import WelcomeSection from "./component/WelcomeSection/WelcomeSection";
import { PageContainer, ContentWrapper, MainContent } from "./page.styled";

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
