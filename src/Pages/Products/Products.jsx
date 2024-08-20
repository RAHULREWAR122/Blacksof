import React, { useState } from "react";
const productsData = {
  "Centralized Control & Monitoring System": {
    title: "Centralized Control & Monitoring System",
    description:
      "Designed indigenously for street lighting projects, the CCMS offers a complete feeder panel for a group of 30-50 street lights.",
    image: "/lights.jpeg",
  },
  "NEMA-Mounted VOLC 1160": {
    title: "NEMA-Mounted VOLC 1160",
    description: "Description for NEMA-Mounted VOLC 1160...",
    image: "/lights.jpeg",
  },
  "Retrofit Street Light Controller VOLC 2160": {
    title: "Retrofit Street Light Controller VOLC 2160",
    description:
      "Description for Retrofit Street Light Controller VOLC 2160...",
    image: "/lights.jpeg",
  },
  "Retrofit Street Light Controller VOLC 2180": {
    title: "Retrofit Street Light Controller VOLC 2180",
    description:
      "Description for Retrofit Street Light Controller VOLC 2180...",
    image: "/lights.jpeg",
  },
  "Retrofit Street Light Controller VOLC 2180": {
    title: "Retrofit Street Light Controller VOLC 2180",
    description:
      "Description for Retrofit Street Light Controller VOLC 2180...",
    image: "/lights.jpeg",
  },
};

const Product = () => {
  const [selectedProduct, setSelectedProduct] = useState(
    "Centralized Control & Monitoring System"
  );

  return (
    <div className="min-h-[100vh] bg-indigo-100 ">
      <div className="about min-h-[60vh] p-6 ">
        <button className="mt-10 bg-gradient-to-r from-white to-indigo-100 py-2 px-4 w-[120px] md:w-[150px] text-[16px] md:text-[24px] font-[poppins]">
          Products
        </button>
        <p className="font-[poppins] text-[24px] md:text-[42px] w-[90%] md:w-[65%] mt-6 mb-5">
          <span className="text-[24px] md:text-[42px] font-bold">
            Cutting-edge hardware
          </span>
          , offerings helping cities optimize resources and achieve smart
          development goals
        </p>
      </div>

      <div className="min-h-[100vh] p-4 md:p-8">
        <div className="flex justify-start mb-6 space-x-2 flex-wrap">
          {Object.keys(productsData).map((product) => (
            <button
              key={product}
              className={`py-2 px-4 mb-2  text-xs md:text-sm font-semibold rounded ${
                selectedProduct === product
                  ? "bg-gradient-to-r from-blue-200 via-white to-blue-200 border-blue-400 border-2 text-[#333]"
                  : "bg-white text-[#333] border border-gray-300"
              } hover:bg-[#dce5f5] transition duration-300 ease-in-out`}
              onClick={() => setSelectedProduct(product)}
            >
              {product}
            </button>
          ))}
        </div>

        <div className="bg-gradient-to-b from-white to-indigo-100 font-[inter] rounded-lg h-[60vh] md:h-[80vh] overflow-hidden flex flex-col md:flex-row justify-around items-center">
          <div className="w-full md:w-[50%] h-[50vh] md:h-full">
            <img
              src={productsData[selectedProduct].image}
              alt={productsData[selectedProduct].title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 md:p-8 w-full md:w-[50%] flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#333]">
              {productsData[selectedProduct].title}
            </h2>
            <p className="mt-2 md:mt-4 text-sm md:text-lg text-gray-600">
              {productsData[selectedProduct].description}
            </p>
            <button className="mt-6 inline-flex items-center text-[16px] md:text-[22px] py-2 md:py-3 rounded-full">
              <span className="text-[#0066cc] flex gap-1 items-center hover:underline transition-all duration-300 ease-in-out">
                Know More <img src="/icon_png.png" alt="knowMore" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
