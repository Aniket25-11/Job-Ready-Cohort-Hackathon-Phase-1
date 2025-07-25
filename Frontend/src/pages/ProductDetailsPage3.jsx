import React from "react";
import Navbar from "../components/Home/Navbar";
import ProductDetailsSection3 from "../components/ProductDetails/Book3/ProductDetailsSection3";

const ProductDetailsPage = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-red-200 h-screen w-full">
        {" "}
        {/* <ProductDetailsSection /> */}
        {/* <ProductDetailsSection2 /> */}
        <ProductDetailsSection3 />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
