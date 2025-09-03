'use client';
import { useState } from 'react';
import Trending from "./component/Trending-Movie/trending";
import Link from "next/link";
import TMDBSearch from "./component/SearchInterface/search"
import Navbar from "./component/Navbar/Navbar";
import WelcomeSection from "./component/WelcomeSection/WelcomeSection";
import Footer from './component/Footer/Footer';

export default function Home() {


  return (
    <div style={{minHeight: '100vh' }}>
      <Navbar />
      <TMDBSearch/>
      <main style={{ padding: '20px' }}>
        <Trending/>
      </main>
      <Footer/>
    </div>
  );
}

 