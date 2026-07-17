import Navbar from './components/layout/Navbar/Navbar'
import Footer from './components/layout/Footer/Footer'

import HeroSection from './components/sections/Hero/HeroSection'
import BookSection from './components/sections/Book/BookSection'
import ReadingPreviewSection from './components/sections/ReadingPreview/ReadingPreviewSection'
import ReelsSection from './components/sections/Reels/ReelsSection'
import QuotesSection from './components/sections/Quotes/QuotesSection'
import AuthorSection from './components/sections/Author/AuthorSection'
import ContactSection from './components/sections/Contact/ContactSection'

export default function App() {
  return (
    <>
      <a href="#main-content" className="skipLink">
        Zum Inhalt springen
      </a>
      <Navbar />

      <main id="main-content">
        <HeroSection />
        <BookSection />
        <ReadingPreviewSection />
        <ReelsSection />
        <QuotesSection />
        <AuthorSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  )
}
