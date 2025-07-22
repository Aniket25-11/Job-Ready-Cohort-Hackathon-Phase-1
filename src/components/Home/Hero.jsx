import { motion } from "framer-motion";
import { FiArrowRight, FiUser } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Image paths from your public/Images folder
  const backgroundImages = [
    '/Images/Ankur_main.webp',
    '/Images/Ankur3.webp',
    '/Images/Ankur2.webp',
    '/Images/Ankur1.webp',
    '/Images/Ankur4.jpg'
  ];

  useEffect(() => {
    // Check if mobile device
    setIsMobile(/Mobi|Android/i.test(navigator.userAgent));

    // Set up the image rotation interval
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 w-full h-full">
        {backgroundImages.map((image, index) => (
          <motion.div
            key={image}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentImageIndex ? 1 : 0,
              transition: { duration: 1.5 }
            }}
          >
            <img
              src={image}
              alt={`Ankur Warikoo ${index + 1}`}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </motion.div>
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/80 z-1" />

      {/* Sticky Navbar (Mobile-Friendly) */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-white/10 px-4 py-3">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold bg-gradient-to-r from-[#6C63FF] to-[#FF6B6B] bg-clip-text text-transparent">
            WARIKOO
          </h1>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={toggleMobileMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-[#6C63FF] transition-colors duration-300 relative group">
              Home
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#6C63FF] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-white hover:text-[#6C63FF] transition-colors duration-300 relative group">
              Products
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#6C63FF] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-white hover:text-[#6C63FF] transition-colors duration-300 relative group">
              Product Details
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#6C63FF] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-white hover:text-[#6C63FF] transition-colors duration-300 relative group">
              About
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#6C63FF] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-[#6C63FF] to-[#FF6B6B] rounded-full text-white hover:shadow-lg transition-all">
              <FiUser className="w-4 h-4" />
              Login/Signup
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 space-y-4 pb-4"
          >
            <a href="#" className="block text-white hover:text-[#6C63FF] transition-colors py-2">Home</a>
            <a href="#" className="block text-white hover:text-[#6C63FF] transition-colors py-2">Products</a>
            <a href="#" className="block text-white hover:text-[#6C63FF] transition-colors py-2">Product Details</a>
            <a href="#" className="block text-white hover:text-[#6C63FF] transition-colors py-2">About</a>
            <a href="#" className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#6C63FF] to-[#FF6B6B] rounded-full text-white w-max">
              <FiUser className="w-4 h-4" />
              Login/Signup
            </a>
          </motion.div>
        )}
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
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-white/80 mb-8 max-w-md"
        >
          Make sure all the choices you make in life come from a point of awareness and not ignorance.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
        >
          <button className="group px-6 py-3 bg-gradient-to-r from-[#6C63FF] to-[#FF6B6B] rounded-full text-white hover:shadow-xl transition-all flex items-center justify-center hover:from-[#FF6B6B] hover:to-[#6C63FF]">
            Explore Courses 
            <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-6 py-3 border border-white/30 rounded-full text-white hover:bg-white/10 transition-all hover:border-[#6C63FF]">
            Watch Latest
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;