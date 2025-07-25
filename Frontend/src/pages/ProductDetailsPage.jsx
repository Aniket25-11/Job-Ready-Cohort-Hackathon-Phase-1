import React from "react";
import ProductDetailsSection from "../components/ProductDetails/ProductDetailsSection";
import Navbar from "../components/Home/Navbar";

const ProductDetailsPage = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-red-200 h-screen w-full">
        {" "}
        <ProductDetailsSection />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
