import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black font-[poppins] text-white p-6 md:px-20 border-b-[1px] border-[#b7b7c0bc]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/smart lights_logo.png"
            alt="Smart Lights logo"
            className="md:h-auto md:w-auto w-[100px] h-[20px]   mr-2"
          />
        </div>
        <div className="hidden md:flex md:w-[50%] max-w-[800px] justify-between items-center">
          <div className="hidden md:flex space-x-2 md:justify-around items-center py-2 min-w-[80%] mr-5 max-w-[600px] ">
            <a href="#home" className="hover:text-gray-300">
              Home
            </a>
            <a href="#products" className="hover:text-gray-300">
              Products
            </a>
            <a href="#services" className="hover:text-gray-300">
              SoftwareServices
            </a>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-4 rounded">
            Login
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a href="#home" className="block px-4 py-2 text-sm">
            Home
          </a>
          <a href="#products" className="block px-4 py-2 text-sm">
            Products
          </a>
          <a href="#services" className="block px-4 py-2 text-sm">
            Software Services
          </a>
          <a href="#login" className="block px-4 py-2 text-sm">
            Login
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
