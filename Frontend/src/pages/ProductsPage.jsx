// pages/ProductsPage.jsx
import Footer from "../components/Home/Footer";
import Navbar from "../components/Home/Navbar";
import ProductHome from "../components/Product/ProductHome";

function ProductsPage() {
  return (
    <div className="bg-gray-300 text-white">
        <Navbar />
      {/* Product Section */}
      <ProductHome />
      <Footer />
    </div>
  );
}

export default ProductsPage;
