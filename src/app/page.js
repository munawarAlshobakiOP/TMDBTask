'use client';
import { useState } from 'react';
import Trending from "./component/Trending-Movie/trending";
import Link from "next/link";
import TMDBSearch from "./component/SearchInterface/search"
import SearchBar from "./component/SearchInterface/SearchBar";
import Navbar from "./component/Navbar/Navbar";
import WelcomeSection from "./component/WelcomeSection/WelcomeSection";
import Footer from './component/Footer/Footer';

export default function Home() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <div>
      <Navbar />
      <SearchBar onSearchResults={handleSearchResults} />
      <div style={{ marginTop: '80px' }}>
        <WelcomeSection />
        <main style={{ padding: '20px' }}>
          <Trending/>
        </main>
      </div>
      <Footer/>
    </div>
  );
}

 