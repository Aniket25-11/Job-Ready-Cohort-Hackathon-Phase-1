import React from "react";
import Navbar from "../components/Home/Navbar";
import ProductDetailsSection4 from "../components/ProductDetails/Book4/ProductDetailsSection4";

const ProductDetailsPage = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-red-200 h-screen w-full">
        {" "}
        <ProductDetailsSection4 />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
