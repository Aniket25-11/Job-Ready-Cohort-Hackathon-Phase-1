import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaYoutube, FaInstagram, FaTwitter, FaLinkedin, FaSpotify } from 'react-icons/fa';
import { FiArrowUp } from 'react-icons/fi';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Footer = () => {
  const footerRef = useRef(null);
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Explore",
      links: [
        { name: "Courses", url: "#" },
        { name: "Books", url: "#" },
        { name: "Videos", url: "#" },
        { name: "About", url: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "Privacy Policy", url: "#" },
        { name: "Terms of Service", url: "#" },
        { name: "Careers", url: "#" },
        { name: "Contact", url: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", url: "#" },
        { name: "Newsletter", url: "#" },
        { name: "FAQ", url: "#" },
        { name: "Testimonials", url: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FaYoutube />, name: "YouTube", url: "https://www.youtube.com/@warikoo", color: "hover:text-red-500" },
    { icon: <FaInstagram />, name: "Instagram", url: "https://www.instagram.com/ankurwarikoo/", color: "hover:text-pink-500" },
    { icon: <FaTwitter />, name: "Twitter", url: "https://x.com/warikoo", color: "hover:text-blue-400" },
    { icon: <FaLinkedin />, name: "LinkedIn", url: "http://linkedin.com/in/warikoo", color: "hover:text-blue-600" },
    { icon: <FaSpotify />, name: "podcast", url: "https://open.spotify.com/show/1g7wpoqydK6hszvi4DFywg", color: "hover:text-green-300" },
  ];

  const scrollToTop = () => {
    gsap.to(window, {
      scrollTo: { y: 0, autoKill: true },
      duration: 1,
      ease: "power2.inOut"
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Footer section reveal
      gsap.from(footerRef.current, {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true
        },
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out"
      });

      // Footer columns stagger
      gsap.utils.toArray(".footer-column").forEach((column, i) => {
        gsap.from(column, {
          scrollTrigger: {
            trigger: column,
            start: "top 90%",
            toggleActions: "play none none none",
            once: true
          },
          opacity: 0,
          y: 40,
          duration: 0.8,
          delay: i * 0.15,
          ease: "power3.out"
        });
      });

      // Social icons animation
      gsap.utils.toArray(".social-icon").forEach((icon, i) => {
        gsap.from(icon, {
          scrollTrigger: {
            trigger: icon,
            start: "top 95%",
            toggleActions: "play none none none",
            once: true
          },
          opacity: 0,
          y: 20,
          duration: 0.5,
          delay: i * 0.1,
          ease: "power2.out"
        });
      });

      // Back to top animation
      gsap.from(".back-to-top", {
        scrollTrigger: {
          trigger: ".back-to-top",
          start: "top 95%",
          toggleActions: "play none none none",
          once: true
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out"
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-gray-900 text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="footer-column opacity-100">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#6C63FF] to-[#FF6B6B] bg-clip-text text-transparent">
              ANKUR WARIKOO
            </h3>
            <p className="text-gray-400 mb-6">
              Empowering entrepreneurs and professionals with actionable insights.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className={`social-icon text-gray-400 ${social.color} transition-all duration-300 text-2xl relative group`}
                  aria-label={social.name}
                >
                  <span className="relative z-10">{social.icon}</span>
                  <span className="absolute inset-0 bg-current rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                  <span className="absolute -inset-1 rounded-full bg-current opacity-0 group-hover:opacity-5 blur-md transition-opacity duration-500"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((column, index) => (
            <div key={index} className="footer-column space-y-4 opacity-100">
              <h4 className="text-lg font-semibold text-white">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.url}
                      className="group relative text-gray-400 hover:text-white transition-colors duration-300 inline-block"
                    >
                      {link.name}
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-[#6C63FF] to-[#FF6B6B] transition-all duration-300 group-hover:w-full"></span>
                      <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#6C63FF]/10 to-[#FF6B6B]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="footer-column space-y-4 opacity-100">
            <h4 className="text-lg font-semibold text-white">Stay Updated</h4>
            <p className="text-gray-400">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 text-center">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C63FF] text-white transition-all duration-300 hover:border-gray-600 focus:border-[#6C63FF]"
                required
              />
              <button
                type="submit"
                className="relative overflow-hidden px-4 py-2 bg-gradient-to-r from-[#6C63FF] to-[#FF6B6B] text-white rounded-lg hover:shadow-lg transition-all duration-300 group"
              >
                <span className="relative z-10">Subs.</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B] to-[#6C63FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Ankur Warikoo. All rights reserved.
          </p>
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="group relative text-gray-500 hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
              <span className="absolute left-0 bottom-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="group relative text-gray-500 hover:text-white text-sm transition-colors duration-300">
              Terms of Service
              <span className="absolute left-0 bottom-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="group relative text-gray-500 hover:text-white text-sm transition-colors duration-300">
              Cookies
              <span className="absolute left-0 bottom-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          <button
            onClick={scrollToTop}
            className="back-to-top mt-4 md:mt-0 flex items-center bg-gray-800 rounded-full p-2 text-gray-400 hover:text-white transition-all group relative"
            aria-label="Back to top"
          >
            <FiArrowUp className="mr-1 group-hover:-translate-y-1 transition-transform" />
            Back to top
            <span className="absolute -inset-1 rounded-full bg-white opacity-0 group-hover:opacity-5 transition-opacity"></span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
