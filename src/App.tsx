import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TopCards from './components/TopCards';
import CTABanner from './components/CTABanner';
import ReviewsSection from './components/ReviewsSection';
import FAQ from './components/FAQ';
import Features from './components/Features';
import Newsletter from './components/Newsletter';
import Guide from './components/Guide';
import Footer from './components/Footer';
import './globals.css';
function App() {
  return (
    <div className="min-h-screen bg-[#f0f4fe]">
      <Navbar />
      <Hero />
      <TopCards />
      <CTABanner />
      <ReviewsSection />
      <FAQ />
      <Features />
      <CTABanner variant="secondary" />
      <Newsletter />
      <Guide />
      <Footer />
    </div>
  );
}
export default App;