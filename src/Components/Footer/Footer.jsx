import React from "react";

const Footer = () => {
  return (
    <footer
      className="w-full py-4 md:py-6 lg:py-8 text-white min-h-[100vh]"
      style={{
        backgroundImage: `url('/Footer.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 font-[poppins] h-[70vh] flex flex-col justify-between   md:px-6 lg:px-8">
        <div className="flex justify-between items-center  pb-4 md:pb-6 lg:pb-8">
          <div className="flex items-center">
            <img
              src="/smart lights_logo.png"
              alt="Smart Lights Logo"
              className="h-8 md:h-10 lg:h-12 mr-2"
            />
          </div>
          <div className="flex space-x-8 md:space-x-12 lg:space-x-16 text-lg md:text-xl lg:text-2xl">
            <a href="#product" className="hover:text-gray-300">
              Product
            </a>
            <a href="#services" className="hover:text-gray-300">
              Software Services
            </a>
            <a href="#follow-us" className="hover:text-gray-300">
              Follow Us
            </a>
          </div>
        </div>
        <div className="flex justify-start space-x-8 md:space-x-12 lg:space-x-16 mt-4 md:mt-6 lg:mt-8 border-t-2 py-4 text-sm md:text-base lg:text-lg">
          <a href="#privacy-policy" className="hover:text-gray-300">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="#terms" className="hover:text-gray-300">
            Terms & Conditions
          </a>
          <span>|</span>

          <a href="#cookie-policy" className="hover:text-gray-300">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
