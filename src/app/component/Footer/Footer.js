'use client';
import Link from 'next/link';
import styles from './Footer.module.css';
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerBottomContentMain}>
          <div className={styles.footerContentRight}>
            <div className={styles.footerContent}>
              <div className={styles.footerLogoSection}>
                <Image src="/assests/icon/footerlogo.svg" alt="Logo" width={130} height={90} />
                <button className={styles.joinCommunityBtn}>Join the Community</button>
              </div>
              <div className={styles.footerSection}>
                <h3 className={styles.footerTitle}>The Basics</h3>
                <ul className={styles.footerList}>
                  <li><Link href="/about" className={styles.footerLink}>About TMDB</Link></li>
                  <li><Link href="/contact" className={styles.footerLink}>Contact Us</Link></li>
                  <li><Link href="/support" className={styles.footerLink}>Support Forums</Link></li>
                  <li><Link href="/api-docs" className={styles.footerLink}>API Documentation</Link></li>
                  <li><Link href="/status" className={styles.footerLink}>System Status</Link></li>
                </ul>
              </div>
              <div className={styles.footerSection}>
                <h3 className={styles.footerTitle}>Get Involved</h3>
                <ul className={styles.footerList}>
                  <li><Link href="/contribute" className={styles.footerLink}>Contribution Bible</Link></li>
                  <li><Link href="/add-movie" className={styles.footerLink}>Add New Movie</Link></li>
                  <li><Link href="/add-tv" className={styles.footerLink}>Add New TV Show</Link></li>
                </ul>
              </div>
              <div className={styles.footerSection}>
                <h3 className={styles.footerTitle}>Community</h3>
                <ul className={styles.footerList}>
                  <li><Link href="/guidelines" className={styles.footerLink}>Guidelines</Link></li>
                  <li><Link href="/discussions" className={styles.footerLink}>Discussions</Link></li>
                  <li><Link href="/leaderboard" className={styles.footerLink}>Leaderboard</Link></li>
                </ul>
              </div>
              <div className={styles.footerSection}>
                <h3 className={styles.footerTitle}>Legal</h3>
                <ul className={styles.footerList}>
                  <li><Link href="/terms" className={styles.footerLink}>Terms of Use</Link></li>
                  <li><Link href="/api-terms" className={styles.footerLink}>API Terms of Use</Link></li>
                  <li><Link href="/privacy" className={styles.footerLink}>Privacy Policy</Link></li>
                  <li><Link href="/dmca" className={styles.footerLink}>DMCA Policy</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
