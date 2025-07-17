import Hero from "./components/Home/Hero";
import VideoSection from "./components/Home/VideoSection";
import CoursesSection from "./components/Home/CoursesSection";
import NewsletterCTA from "./components/Home/NewsletterCTA";
import SocialFeed from "./components/Home/SocialFeed";

function App() {
  return (
    <div className="bg-black text-white">
      <Hero />
      {/* <NewsletterCTA /> */}
      {/* <SocialFeed /> */}
      <VideoSection />
      <CoursesSection />
    </div>
  );
}

export default App;