import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import { Link } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';

import {
  FiShoppingCart,
  FiBookOpen,
  FiArrowRight,
  FiFilter,
  FiStar,
  FiChevronRight
} from 'react-icons/fi';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

const scaleVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const ProductHome = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [hoveredBook, setHoveredBook] = useState(null);
  const navigate = useNavigate();


  const books = [
    {
      id: 1,
      title: "Do Epic Shit",
      description: "Ankur's first bestseller about mindset, habits, and decision-making",
      price: 399,
      category: "mindset",
      image: "/Images/do-epic-shit.webp",
      rating: 4.8,
      link: "https://ankurwarikoo.com/do-epic-shit",
      features: ["30+ powerful lessons", "Personal anecdotes", "Actionable frameworks"],
      accentColor: "#6C63FF",
       route: "/product-details"
    },
    {
      id: 2,
      title: "Get Epic Shit Done",
      description: "The ultimate productivity guide for ambitious professionals",
      price: 449,
      category: "productivity",
      image: "/Images/get-epic-shit-done.webp",
      rating: 4.7,
      link: "https://ankurwarikoo.com/get-epic-shit-done",
      features: ["Time management hacks", "Focus techniques", "Work-life balance"],
      accentColor: "#4F46E5",
       route: "/product-details-2"
    },
    {
      id: 3,
      title: "Make Epic Money",
      description: "Everything about personal finance and wealth creation",
      price: 499,
      category: "finance",
      image: "/Images/make-epic-money.webp",
      rating: 4.9,
      link: "https://ankurwarikoo.com/make-epic-money",
      features: ["Investing fundamentals", "Tax optimization", "Wealth mindset"],
      accentColor: "#10B981",
       route: "/product-details-3"
    },
    {
      id: 4,
      title: "Build an Epic Career",
      description: "The modern professional's guide to career growth",
      price: 449,
      category: "career",
      image: "/Images/build-epic-career.webp",
      rating: 4.6,
      link: "https://ankurwarikoo.com/build-epic-career",
      features: ["Career pivoting", "Skill development", "Networking strategies"],
      accentColor: "#F59E0B",
       route: "/product-details-4"
    }
  ];

  const filteredBooks = activeFilter === 'all'
    ? books
    : books.filter(book => book.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto relative">
        {/* Background blobs */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 right-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

        {/* Heading */}
        <div className="relative z-10 text-center mb-20 pt-12">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Epic Knowledge
            </span>
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium"
          >
            Transform your life with Ankur Warikoo's <span className="text-purple-600 font-semibold">bestselling books</span>
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="mt-10"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold hover:shadow-xl transition-all flex items-center gap-2 mx-auto group">
              <span>Explore the Collection</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 mb-12 sm:mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0"
          >
            <div className="flex space-x-2 min-w-max sm:min-w-0">
              {["all", "mindset", "productivity", "finance", "career"].map(category => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-3 sm:px-5 py-1.5 sm:py-2 text-black rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                    activeFilter === category 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md' 
                      : 'bg-white border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {category === 'all' ? 'All Books' : category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="w-full sm:w-auto flex justify-end"
          >
            <button
              onClick={() => navigate(book.route)}
              className="flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-all text-xs sm:text-sm"
            >
              <FiFilter className="text-purple-600 text-sm sm:text-base" />
              <span>Sort</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Book Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {filteredBooks.map((book, index) => (
          <motion.div
            key={book.id}
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            onMouseEnter={() => setHoveredBook(book.id)}
            onMouseLeave={() => setHoveredBook(null)}
            className="relative group"
          >
            {/* Book card */}
            <div className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100 ${hoveredBook === book.id ? 'scale-105' : ''}`}>
              <div className="relative h-72 overflow-hidden">
                <img
                  src={book.image}
                  alt={book.title}
                  className={`w-full h-full object-cover transition-transform duration-500 ${hoveredBook === book.id ? 'scale-110' : ''}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">{book.title}</h3>
                    <div className="flex items-center gap-1">
                      <FiStar className="text-yellow-300" />
                      <span className="text-sm">{book.rating}/5</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3" style={{ backgroundColor: `${book.accentColor}20`, color: book.accentColor }}>
                    {book.category.charAt(0).toUpperCase() + book.category.slice(1)}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{book.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{book.description}</p>
                </div>

                <div className="mt-auto">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">₹{book.price}</span>
                    <div className="flex gap-2">
                      <a
                        href={book.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white border border-gray-200 text-gray-700 rounded-full hover:bg-gray-50 transition-colors"
                      >
                        <FiBookOpen />
                      </a>
                      
                      <Link 
                      to={book.route}
                      className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-md transition-all">
                        <FiShoppingCart />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hovered features */}
            <AnimatePresence>
              {hoveredBook === book.id && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute -bottom-4 left-0 right-0 mx-auto w-11/12 bg-white rounded-xl shadow-2xl border border-gray-100 p-6 z-10"
                >
                  <h4 className="font-bold text-gray-900 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {book.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-purple-600 mt-2 mr-2"></span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button  
                  onClick={() => navigate(book.route)}
                  className="mt-4 w-full py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:shadow-md transition-all flex items-center justify-center gap-2">
                    <span>Add to Cart</span>
                    <FiChevronRight />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={scaleVariant}
        className="max-w-7xl mx-auto mt-32 relative"
      >
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>

        <div className="relative bg-gradient-to-br from-purple-900 to-pink-700 rounded-3xl p-8 md:p-12 text-white overflow-hidden shadow-xl">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-white/5 rounded-full animate-ping"></div>

          <div className="relative z-10">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get the Complete Epic Collection</h2>
              <p className="text-lg text-white/90 mb-8">
                Save 20% when you buy all four books together. Transform every aspect of your life with Ankur's wisdom.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative px-8 py-4 bg-white text-purple-900 rounded-full font-bold flex items-center gap-2 overflow-hidden transition-all shadow-lg hover:shadow-2xl group"
                >
                  <span className="absolute -inset-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-md opacity-25 group-hover:opacity-75 transition-all duration-300 animate-pulse"></span>
                  <span className="relative z-10 flex items-center gap-2">
                    Buy Complete Set (₹1,596)
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </motion.button>

                <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-all">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto mt-32 px-4">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="text-3xl font-extrabold text-center mb-12 text-gray-700"
        >
          What Readers Are Saying
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote: "These books completely transformed my approach to work and life. Worth every penny!",
              author: "Rahul Sharma",
              role: "Entrepreneur"
            },
            {
              quote: "Ankur's practical advice helped me double my income in just 6 months. Incredible!",
              author: "Priya Patel",
              role: "Marketing Manager"
            },
            {
              quote: "The best investment I've made in myself. The productivity tips alone were game-changing.",
              author: "Arjun Mehta",
              role: "Software Engineer"
            }
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-[#8e2de2]/30 relative"
            >
              <div className="text-amber-400 text-2xl mb-4 transition duration-300 group-hover:scale-105 group-hover:text-amber-500">
                ★★★★★
              </div>
              <p className="text-gray-700 text-lg mb-6 italic transition-colors duration-300 group-hover:text-gray-900">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-bold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#8e2de2] group-hover:opacity-30 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductHome;
