import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    "/Images/Ankur_main.webp",
    "/Images/Ankur3.webp",
    "/Images/Ankur2.webp",
    "/Images/Ankur1.webp",
    "/Images/Ankur4.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === backgroundImages.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 w-full h-full">
        {backgroundImages.map((image, index) => (
          <motion.div
            key={image}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImageIndex ? 1 : 0, transition: { duration: 1.5 } }}
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/80 z-1" />

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
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
