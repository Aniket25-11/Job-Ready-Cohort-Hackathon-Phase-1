import Hero from "./components/Home/Hero";
// import VideoSection from "./components/Home/VideoSection";
// import CoursesSection from "./components/Home/CoursesSection";
// import NewsletterCTA from "./components/Home/NewsletterCTA";
// import SocialFeed from "./components/Home/SocialFeed";
import MarqueeSection from "./components/Home/MarqueeSection";
import Intro from "./components/Home/Intro";
import LatestContent from "./components/Home/LatestContent";
// import ScrollVelocity from "./components/Home/ScrollVelocity";
import CTA from "./components/Home/CTA";
import Footer from "./components/Home/Footer";


function App() {
  return (
    <div className="bg-gray-300 text-white">
      {/* Home Section  */}
      <Hero />
      <MarqueeSection />
      <Intro />
      <LatestContent />
      <CTA variant="courses" />  {/* For courses CTA */}
      <CTA variant="book" />     {/* For book promotion */}
      <CTA variant="youtube" />  {/* For YouTube channel */}
      <Footer />
      
       {/* <CoursesSection /> */}
      {/* <NewsletterCTA /> */}
      {/* <ScrollVelocity />  */}
      {/* <SocialFeed /> */}
      {/* <VideoSection /> */}

      {/* Home Section Completed  */}

     
    </div>
  );
}

export default App;