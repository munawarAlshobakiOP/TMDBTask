'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const SearchIcon = () => (
  <svg 
    className={styles.searchIcon}
    width="20" 
    height="20" 
    fill="currentColor" 
    viewBox="0 0 20 20"
  >
    <path 
      fillRule="evenodd" 
      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" 
      clipRule="evenodd" 
    />
  </svg>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const scrollY = window.scrollY;
        if (scrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      handleScroll();
      
      return () => {
        if (typeof window !== 'undefined') {
          window.removeEventListener('scroll', handleScroll);
        }
      };
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoContainer}>
              <Image src="../assests/icon/logoNAv.svg" alt="Logo" width={140} height={80} style={{ display: 'block' }} />
            </div>
          </Link>
        </div>

        <div className={styles.desktopNav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/movie" className={styles.navLink}>
                Movies
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/TV" className={styles.navLink}>
                TV Shows
              </Link>
            </li>
       
          </ul>
        </div>

        <div className={styles.userActions}>
          <button className={styles.plusIcon}>+</button>
          <div className={styles.languageSelector}>
            <span>EN</span>
          </div>
          <Link href="/login" className={styles.loginBtn}>
            Login
          </Link>
          <button className={styles.joinBtn}>Join TMDB</button>
        </div>

        <div className={styles.rightIcons}>
          <SearchIcon />
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
