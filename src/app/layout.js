import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import StyledComponentsRegistry from "./StyledComponentsRegistry";


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
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <StyledComponentsRegistry>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer/>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
