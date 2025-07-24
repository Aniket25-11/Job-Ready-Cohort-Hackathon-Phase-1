import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { FiArrowRight, FiYoutube, FiTwitter, FiLinkedin, FiInstagram, FiBookOpen, FiMic, FiAward, FiUsers, FiStar } from "react-icons/fi";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  // Refs for GSAP animations
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const achievementsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const mediaRef = useRef(null);

  // GSAP animations on component mount
useEffect(() => {
  // Create GSAP context for cleanup
  const ctx = gsap.context(() => {

    // Hero section animation (only on load)
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out"
    });

    // Mission Section (animates on scroll)
// First, set the initial (from) state
gsap.set(missionRef.current.querySelectorAll('.mission-item'), {
  opacity: 0,
  y: 30
});

// Then animate "to" the visible state
gsap.to(missionRef.current.querySelectorAll('.mission-item'), {
  opacity: 1,
  y: 0,
  stagger: 0.2,
  duration: 0.8,
  scrollTrigger: {
    trigger: missionRef.current,
    start: "top 80%",
    toggleActions: "play none none reverse",
  }
});


    // Achievements Section
// Set the initial state (from state)
gsap.set(achievementsRef.current.querySelectorAll('.achievement-card'), {
  opacity: 0,
  y: 40
});

// Animate to the final state
gsap.to(achievementsRef.current.querySelectorAll('.achievement-card'), {
  opacity: 1,
  y: 0,
  stagger: 0.15,
  duration: 0.8,
  scrollTrigger: {
    trigger: achievementsRef.current,
    start: "top 80%",
    toggleActions: "play none none reverse",
  }
});


    // Testimonials Section
// Set the initial "from" state
gsap.set(testimonialsRef.current.querySelectorAll('.testimonial'), {
  opacity: 0,
  x: -50
});

// Animate "to" the final state
gsap.to(testimonialsRef.current.querySelectorAll('.testimonial'), {
  opacity: 1,
  x: 0,
  stagger: 0.2,
  duration: 0.8,
  scrollTrigger: {
    trigger: testimonialsRef.current,
    start: "top 80%",
    toggleActions: "play none none reverse",
  }
});


    // Media Logos Section
   // Set the initial state
gsap.set(mediaRef.current.querySelectorAll('.media-logo'), {
  opacity: 0,
  scale: 0.8
});

// Animate to the final state
gsap.to(mediaRef.current.querySelectorAll('.media-logo'), {
  opacity: 1,
  scale: 1,
  stagger: 0.1,
  duration: 0.6,
  scrollTrigger: {
    trigger: mediaRef.current,
    start: "top 80%",
    toggleActions: "play none none reverse",
  }
});

  });

  // Cleanup
  return () => ctx.revert();
}, []);


  return (
    <div className="bg-white">
      {/* 1️⃣ Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-indigo-800 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.svg')] opacity-10"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-radial-gradient from-white/5 to-transparent"></div>
        </div>
        
        <div ref={heroRef} className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:w-1/2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl opacity-20 blur-xl"></div>
              <img 
                src="public\Images\Ankur5.avif" 
                alt="Ankur Warikoo" 
                className="relative ml-5 rounded-2xl w-full max-w-xl shadow-2xl border-4 border-white/10"
              />
            </div>
          </motion.div>
          
          <div className="md:w-1/2 text-center md:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-4"
            >
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-amber-400">Ankur Warikoo</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-white/90 mb-8"
            >
              Entrepreneur • Author • Content Creator • Mentor
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg md:text-xl text-white/80 mb-8 max-w-lg"
            >
              I help people make better decisions in life, career, and finance through honest, practical advice.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <a 
                href="#timeline" 
                className="px-8 py-3 bg-white text-purple-900 rounded-full font-bold hover:bg-gray-100 transition-all flex items-center gap-2"
              >
                My Journey <FiArrowRight />
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-all"
              >
                Connect With Me
              </a>
            </motion.div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* 2️⃣ Timeline Section */}
      <section id="timeline" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Journey</span>
          </motion.h2>
          
          <VerticalTimeline lineColor="#e5e7eb">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'white', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)', borderRadius: '12px' }}
              contentArrowStyle={{ borderRight: '7px solid white' }}
              date="2004"
              iconStyle={{ background: 'rgb(124, 58, 237)', color: '#fff' }}
              icon={<FiBookOpen />}
            >
              <h3 className="vertical-timeline-element-title font-bold text-lg">ISB Hyderabad</h3>
              <p className="text-gray-600">
                Completed MBA from Indian School of Business, one of India's premier B-schools
              </p>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'white', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)', borderRadius: '12px' }}
              date="2011"
              iconStyle={{ background: 'rgb(124, 58, 237)', color: '#fff' }}
              icon={<FiAward />}
            >
              <h3 className="vertical-timeline-element-title font-bold text-lg">Founded Nearbuy</h3>
              <p className="text-gray-600">
                Co-founded Nearbuy (formerly Groupon India), growing it to 500+ employees
              </p>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'white', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)', borderRadius: '12px' }}
              date="2019"
              iconStyle={{ background: 'rgb(124, 58, 237)', color: '#fff' }}
              icon={<FiMic />}
            >
              <h3 className="vertical-timeline-element-title font-bold text-lg">YouTube Journey</h3>
              <p className="text-gray-600">
                Started creating content on YouTube about career, finance, and personal growth
              </p>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'white', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)', borderRadius: '12px' }}
              date="2021"
              iconStyle={{ background: 'rgb(124, 58, 237)', color: '#fff' }}
              icon={<FiBookOpen />}
            >
              <h3 className="vertical-timeline-element-title font-bold text-lg">Published "Do Epic Shit"</h3>
              <p className="text-gray-600">
                First book became an instant bestseller, selling over 500,000 copies
              </p>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'white', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)', borderRadius: '12px' }}
              date="2022"
              iconStyle={{ background: 'rgb(124, 58, 237)', color: '#fff' }}
              icon={<FiUsers />}
            >
              <h3 className="vertical-timeline-element-title font-bold text-lg">Online Courses</h3>
              <p className="text-gray-600">
                Launched multiple online courses helping 100,000+ students with life skills
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </section>

      {/* 3️⃣ Mission & Vision */}
      <section ref={missionRef} className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}

            
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Purpose</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div 
              className="mission-item p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-sm hover:shadow-md transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                <FiAward className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
              <p className="text-gray-700">
                To make young Indians financially, emotionally, and professionally aware through honest, practical advice that cuts through the noise.
              </p>
            </motion.div>
            
            <motion.div 
              className="mission-item p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-sm hover:shadow-md transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <FiUsers className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
              <p className="text-gray-700">
                Empower millions to make intentional life choices with clarity, confidence, and compassion - creating a generation that thrives personally and professionally.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4️⃣ Achievements */}
<section ref={achievementsRef} className="relative py-24 bg-gray-50 overflow-hidden">
  {/* Background Decoration */}
  <div className="absolute top-0 left-0 w-40 h-40 bg-purple-100 rounded-full mix-blend-multiply blur-2xl opacity-40 animate-pulse"></div>
  <div className="absolute bottom-10 right-10 w-56 h-56 bg-pink-100 rounded-full mix-blend-multiply blur-3xl opacity-40 animate-pulse"></div>

  <div className="container mx-auto px-6 relative z-10">
    {/* Section Intro */}
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center text-purple-600 font-medium uppercase tracking-wide mb-3"
    >
      Highlights of My Journey
    </motion.p>

    {/* Heading */}
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900"
    >
      My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Achievements</span>
    </motion.h2>
    
    
  {/* 4️⃣ Achievements Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {[
    { icon: <FiBookOpen size={32} />, title: "Books Published", value: "3", bg: "from-purple-50 to-pink-50", color: "from-purple-600 to-pink-600" },
    { icon: <FiYoutube size={32} />, title: "YouTube Subscribers", value: "4M+", bg: "from-red-50 to-orange-50", color: "from-red-600 to-orange-500" },
    { icon: <FiMic size={32} />, title: "Podcasts & Talks", value: "100+", bg: "from-blue-50 to-indigo-50", color: "from-blue-600 to-indigo-600" },
    { icon: <FiUsers size={32} />, title: "Students Impacted", value: "500K+", bg: "from-green-50 to-teal-50", color: "from-green-600 to-teal-500" },
  ].map((item, index) => (
    <motion.div 
      key={index}
      className={`achievement-card p-8 bg-gradient-to-br ${item.bg} rounded-2xl shadow-sm hover:shadow-xl transition-all group border border-gray-100`}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white transform group-hover:rotate-3 transition-transform duration-300`}>
        {item.icon}
      </div>
      {/* Animated Counter (Optional) */}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.value}</h3>
      <p className="text-gray-600">{item.title}</p>
    </motion.div>
  ))}
</div>


  </div>
</section>


      {/* 5️⃣ Testimonials */}
      <section ref={testimonialsRef} className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900"
          >
            What People <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Say</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "Ankur's book 'Do Epic Shit' completely changed my approach to decision making. His practical advice helped me land my dream job!",
                name: "Riya Sharma",
                role: "Product Manager",
                image: "public/Images/testimonial-1.webp"
              },
              {
                quote: "The financial literacy course was a game-changer. I went from zero savings to investing 30% of my income within 6 months.",
                name: "Arjun Patel",
                role: "Software Engineer",
                image: "public/Images/testimonial-2.webp"
              },
              {
                quote: "His YouTube videos helped me navigate career transitions with confidence. The most authentic voice in the self-help space.",
                name: "Priya Mehta",
                role: "Marketing Consultant",
                image: "public/Images/testimonial-3.webp"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="testimonial p-8 bg-gray-50 rounded-2xl hover:shadow-md transition-all"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                <div className="flex mt-4 text-amber-400">
                  <FiStar /><FiStar /><FiStar /><FiStar /><FiStar />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6️⃣ Media */}
      <section ref={mediaRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900"
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">In</span>
          </motion.h2>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {[
              { name: "TEDx", logo: "public/logos/tedx.webp" },
              { name: "Josh Talks", logo: "public/logos/josh-talks.webp" },
              { name: "India Today", logo: "public/logos/india-today.webp" },
              { name: "Brut India", logo: "public/logos/brut.webp" },
              { name: "YourStory", logo: "public/logos/yourstory.webp" },
            ].map((media, index) => (
              <motion.div 
                key={index}
                className="media-logo bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
                whileHover={{ scale: 1.1 }} 
              >
                <img src={media.logo} alt={media.name} className="h-12 object-contain grayscale hover:grayscale-0 transition-all" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7️⃣ CTA */}
      <section id="contact" className="py-20 bg-gradient-to-br from-purple-900 to-indigo-800">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Want to Grow With Me?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 mb-10 max-w-2xl mx-auto"
          >
            Join my newsletter for exclusive content, or connect with me on social media.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-12"
          >
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-6 py-3 rounded-full border-0 focus:ring-2 focus:ring-purple-300"
            />
            <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-amber-500 text-white rounded-full font-bold hover:shadow-lg transition-all">
              Subscribe
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center gap-6"
          >
            <a href="#" className="text-white hover:text-pink-300 transition-colors">
              <FiYoutube size={24} />
            </a>
            <a href="#" className="text-white hover:text-pink-300 transition-colors">
              <FiTwitter size={24} />
            </a>
            <a href="#" className="text-white hover:text-pink-300 transition-colors">
              <FiLinkedin size={24} />
            </a>
            <a href="#" className="text-white hover:text-pink-300 transition-colors">
              <FiInstagram size={24} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;