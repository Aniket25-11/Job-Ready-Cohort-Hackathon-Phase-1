// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

// Book detail pages
import Book1Page from "./pages/ProductDetailsPage";    // Previously: ProductDetailsPage
import Book2Page from "./pages/ProductDetailsPage2";
import Book3Page from "./pages/ProductDetailsPage3";
import Book4Page from "./pages/ProductDetailsPage4";

// Navbar
import Navbar from "./components/Home/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product-details" element={<Book1Page />} />
        <Route path="/product-details-2" element={<Book2Page />} />
        <Route path="/product-details-3" element={<Book3Page />} />
        <Route path="/product-details-4" element={<Book4Page />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
