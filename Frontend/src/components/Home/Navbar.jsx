import { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const AuthButton = () => {
    return isLoggedIn ? (
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-gradient-to-r from-[#6C63FF] to-[#FF6B6B] rounded-full text-white hover:shadow-lg transition-all"
      >
        Logout
      </button>
    ) : (
      <Link
        to="/login"
        className="flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-[#6C63FF] to-[#FF6B6B] rounded-full text-white hover:shadow-lg transition-all"
      >
        <FiUser className="w-4 h-4" />
        Login/Signup 
      </Link>
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-white/10 px-4 py-3">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-xl font-bold bg-gradient-to-r from-[#6C63FF] to-[#FF6B6B] bg-clip-text text-transparent">
          WARIKOO
        </Link>

        <button className="md:hidden text-white" onClick={toggleMobileMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-[#6C63FF] transition-colors duration-300 relative group">
            Home
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#6C63FF] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/products" className="text-white hover:text-[#6C63FF] transition-colors duration-300 relative group">
            Products
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#6C63FF] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/product-details" className="text-white hover:text-[#6C63FF] transition-colors duration-300 relative group">
            Book 1
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#6C63FF] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/product-details-2" className="text-white hover:text-[#6C63FF] transition-colors duration-300 relative group">
            Book 2
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#6C63FF] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/product-details-3" className="text-white hover:text-[#6C63FF] transition-colors duration-300 relative group">
            Book 3
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#6C63FF] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/product-details-4" className="text-white hover:text-[#6C63FF] transition-colors duration-300 relative group">
            Book 4
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#6C63FF] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <AuthButton />
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden mt-4 space-y-4 pb-4"
        >
          <Link to="/" className="block text-white hover:text-[#6C63FF] transition-colors py-2">Home</Link>
          <Link to="/products" className="block text-white hover:text-[#6C63FF] transition-colors py-2">Products</Link>
          <Link to="/product-details" className="block text-white hover:text-[#6C63FF] transition-colors py-2">Book 1</Link>
          <Link to="/product-details-2" className="block text-white hover:text-[#6C63FF] transition-colors py-2">Book 2</Link>
          <Link to="/product-details-3" className="block text-white hover:text-[#6C63FF] transition-colors py-2">Book 3</Link>
          <Link to="/product-details-4" className="block text-white hover:text-[#6C63FF] transition-colors py-2">Book 4</Link>
          <div className="w-max">
            <AuthButton />
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
