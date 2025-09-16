'use client';
import { useState } from 'react';
import Trending from './Component/TrendingMovie/Trending';
import SearchBar from './Component/SearchInterface/SearchBar';
import WelcomeSection from './Component/WelcomeSection/WelcomeSection';
import { PageContainer, ContentWrapper, MainContent } from './page.styled';

export default function Home() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResults = results => {
    setSearchResults(results);
  };

  return (
    <PageContainer>
      <SearchBar onSearchResults={handleSearchResults} />
      <ContentWrapper>
        <WelcomeSection />
        <MainContent>
          <Trending />
        </MainContent>
      </ContentWrapper>
    </PageContainer>
  );
}
