import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaYoutube, FaInstagram, FaTwitter, FaLinkedin, FaSpotify } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const socialRef = useRef(null);

  useEffect(() => {
    // Heading animation
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none'
        },
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out'
      }
    );

    // Key points animation
    gsap.fromTo(
      contentRef.current.children,
      { opacity: 0, y: 30 },
      {
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none'
        },
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: 'power2.out'
      }
    );

    // Social icons animation
    gsap.fromTo(
      socialRef.current.children,
      { opacity: 0, y: 20 },
      {
        scrollTrigger: {
          trigger: socialRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power2.out'
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const keyPoints = [
    {
      icon: '🚀',
      title: 'Entrepreneur',
      description: "Founded Nearbuy, India's largest local experiences platform"
    },
    {
      icon: '🎤',
      title: 'Content Creator',
      description: '5M+ followers across platforms sharing business wisdom'
    },
    {
      icon: '📚',
      title: 'Educator',
      description: 'Bestselling courses on entrepreneurship and personal growth'
    }
  ];

  const socialLinks = [
    { icon: <FaYoutube className="w-5 h-5" />, name: 'YouTube', url: 'https://www.youtube.com/@warikoo', color: 'text-red-600' },
    { icon: <FaInstagram className="w-5 h-5" />, name: 'Instagram', url: 'https://www.instagram.com/ankurwarikoo/', color: 'text-pink-600' },
    { icon: <FaTwitter className="w-5 h-5" />, name: 'Twitter', url: 'https://x.com/warikoo', color: 'text-blue-400' },
    { icon: <FaLinkedin className="w-5 h-5" />, name: 'LinkedIn', url: 'https://x.com/warikoo', color: 'text-blue-700' },
    { icon: <FaSpotify className="w-5 h-5" />, name: 'Podcast', url: 'https://open.spotify.com/show/1g7wpoqydK6hszvi4DFywg', color: 'text-green-500' }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* 🎥 YouTube Video Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          className="w-full h-full object-cover"
          src="https://www.youtube.com/embed/UwmCdx5Q5QU?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&modestbranding=1&playlist=UwmCdx5Q5QU"
          title="Ankur Warikoo Background"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* ✨ Foreground Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <h2
          ref={headingRef}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#6C63FF] to-[#FF6B6B] bg-clip-text text-transparent"
        >
          WHO IS ANKUR WARIKOO?
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Left: Description */}
          <div className="space-y-6">
            <p className="text-xl text-gray-100 leading-relaxed">
              Ankur Warikoo is an Indian entrepreneur, content creator, and educator known for his
              practical wisdom on startups, personal finance, and productivity. With over 5 million
              followers across platforms, he's become one of India's most trusted voices in business
              and self-improvement.
            </p>
            <button
              onClick={() => navigate('/about')}
              className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#6C63FF] to-[#FF6B6B] rounded-full text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <span>Read Full Bio</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right: Key Points */}
          <div ref={contentRef} className="space-y-6">
            {keyPoints.map((point, index) => (
              <div
                key={index}
                className="p-6 bg-white/90 backdrop-blur-md rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{point.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{point.title}</h3>
                    <p className="text-gray-600">{point.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-white mb-8">Connect With Ankur</h3>
          <div
            ref={socialRef}
            className="flex flex-wrap justify-center gap-4 sm:gap-8"
          >
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className={`flex flex-col items-center group p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 ${social.color}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="p-3 rounded-full bg-white group-hover:bg-gray-50 shadow-sm group-hover:shadow-md transition-all duration-300 mb-2">
                  {social.icon}
                </div>
                <span className="text-sm font-medium text-white group-hover:text-gray-900 transition-colors">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
