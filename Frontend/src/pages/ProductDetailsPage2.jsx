import React from "react";
import Navbar from "../components/Home/Navbar";
import ProductDetailsSection2 from "../components/ProductDetails/Book2/ProductDetailsSection2";

const ProductDetailsPage = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-red-200 h-screen w-full">
        {" "}
        <ProductDetailsSection2 />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
