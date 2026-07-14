import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";

import HeroSection from "./components/sections/Hero/HeroSection";
import BookSection from "./components/sections/Book/BookSection";
import QuotesSection from "./components/sections/Quotes/QuotesSection";
import ReelsSection from "./components/sections/Reels/ReelsSection";
import AuthorSection from "./components/sections/Author/AuthorSection";
import ContactSection from "./components/sections/Contact/ContactSection";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <BookSection />
        <QuotesSection />
        <ReelsSection />
        <AuthorSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
