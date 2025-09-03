import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Navbar from "./component/Navbar/Navbar";
// import Footer from "./component/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TMDB Movie Database",
  description: "Browse movies, TV shows, and people from The Movie Database",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ backgroundColor: '#ffffff', margin: 0, padding: 0 }}
      >
        {/* <Navbar /> */}
        <main style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
