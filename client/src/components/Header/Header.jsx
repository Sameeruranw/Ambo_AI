import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-black h-[80px] text-white flex justify-between items-center px-12 md:px-32 shadow-lg">
        <Link to="/" className="flex items-center">
          <h1 className="text-white text-center text-3xl font-semibold tracking-wide">
            AI Solution
          </h1>
        </Link>
        <div className="flex">
          <ul className="flex gap-10 md:gap-16 text-lg font-medium">
            <li>
              <Link to="/" className="group text-white relative hover:text-gray-300">
                Home
                <span className="absolute bottom-0 left-0 block w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="group text-white relative hover:text-gray-300">
                Contact
                <span className="absolute bottom-0 left-0 block w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
            <Link to="/Products" className="group text-white relative hover:text-gray-300">
                Products
                <span className="absolute bottom-0 left-0 block w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <a href="/services" className="group text-white relative hover:text-gray-300">
                Services
                <span className="absolute bottom-0 left-0 block w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="/articles" className="group text-white relative hover:text-gray-300">
                Articles
                <span className="absolute bottom-0 left-0 block w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="/admin" className="group text-white relative hover:text-gray-300">
                Admin Dashboard
                <span className="absolute bottom-0 left-0 block w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
