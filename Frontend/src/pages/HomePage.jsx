// pages/HomePage.jsx
import Hero from "../components/Home/Hero";
import MarqueeSection from "../components/Home/MarqueeSection";
import Intro from "../components/Home/Intro";
import LatestContent from "../components/Home/LatestContent";
import CTA from "../components/Home/CTA";
import Footer from "../components/Home/Footer";
import Navbar from "../components/Home/Navbar";
// import Navbar from "../components/Home/Navbar";
// import other sections if needed

function HomePage() {
  return (
    <div className="bg-gray-300 text-white">
      {/* Home Section */}
      <Navbar />
      <Hero />
      <MarqueeSection />
      <Intro />
      <LatestContent />
      <CTA variant="courses" />
      <CTA variant="book" />
      <CTA variant="youtube" />
      <Footer />
    </div>
  );
}

export default HomePage;
