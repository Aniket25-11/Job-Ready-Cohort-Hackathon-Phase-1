import { motion } from "framer-motion";
import { FiArrowRight, FiYoutube, FiTwitter, FiInstagram } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile device
    setIsMobile(/Mobi|Android/i.test(navigator.userAgent));

    // Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const video = entry.target;
            video.src = video.dataset.src;
            video.load();
            observer.unobserve(video);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Fallback Image (Shows before video loads) */}
      {!isVideoLoaded && (
        <img
          src="https://i0.wp.com/ankurwarikoo.com/wp-content/uploads/2022/06/DSC00977-scaled-1.webp?fit=2560%2C1708&ssl=1"
        //   background Image 
          alt="Ankur Warikoo"
          className="mt-14 absolute inset-0 w-full h-full object-cover z-0"
          loading="lazy"
        />
      )}

      {/* Lazy-loaded Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className={`absolute inset-0 w-full h-full object-cover z-0 ${
          !isVideoLoaded ? "hidden" : ""
        }`}
        onLoadedData={() => setIsVideoLoaded(true)}
        onError={() => setIsVideoLoaded(false)} // Fallback if video fails
        data-src="https://assets.mixkit.co/videos/preview/mixkit-man-walking-under-neon-lights-1230-large.mp4"
        poster="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
      >
        <source
          type="video/mp4"
        />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/80 z-1" />

      {/* Sticky Navbar (Mobile-Friendly) */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-white/10 px-4 py-3">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold bg-gradient-to-r from-[#6C63FF] to-[#FF6B6B] bg-clip-text text-transparent">
            WARIKOO
          </h1>
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-white hover:text-[#6C63FF]">Home</a>
            <a href="#" className="text-white hover:text-[#6C63FF]">Courses</a>
            <a href="#" className="text-white hover:text-[#6C63FF]">About</a>
          </div>
        </div>
      </nav>

      {/* Hero Content (Centered + Mobile Padding) */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-4 text-white"
        >
          awareness is <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#FF6B6B]">EVERYTHING</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-white/80 mb-8 max-w-md"
        >
          Make sure all the choices you make in life come from a point of awareness and not ignorance.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
        >
          <button className="px-6 py-3 bg-gradient-to-r from-[#6C63FF] to-[#FF6B6B] rounded-full text-white hover:shadow-lg transition-all flex items-center justify-center">
            Explore Courses <FiArrowRight className="ml-2" />
          </button>
          <button className="px-6 py-3 border border-white/30 rounded-full text-white hover:bg-white/10 transition-all">
            Watch Latest
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;