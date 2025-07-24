// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Home/Navbar";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
// import AboutPage from "./pages/AboutPage";
// import LoginPage from "./pages/LoginPage";
// import SignupPage from "./pages/SignupPage";



function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product-details" element={<ProductDetailsPage />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
        {/* <Route path="/login" element={<LoginPage />} /> */}
        {/* <Route path="/signup" element={<SignupPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
