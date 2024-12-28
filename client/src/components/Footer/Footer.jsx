

import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Social icons

const Footer = () => {
  return (
    <footer className=" bg-black text-white py-12 mt-16">
      <div className="container mx-auto px-6 lg:px-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">AI-Solutions</h3>
            <p className="text-gray-400">
              Innovating digital experiences with AI-powered solutions for businesses across the globe. Our mission is to enhance the digital employee experience and boost productivity.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          
          <div>
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="#services" className="hover:text-white">Services</a>
              </li>
              <li className="mb-2">
                <a href="#about" className="hover:text-white">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="hover:text-white">Contact</a>
              </li>
              <li className="mb-2">
                <a href="#careers" className="hover:text-white">Careers</a>
              </li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Stay updated with the latest news and trends in AI-powered solutions.
            </p>
            <div className="flex items-center bg-gray-800 p-2 rounded-lg">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 text-gray-800 rounded-lg focus:outline-none"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg ml-4 hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </div>

        
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">Email: support@aisolutions.com</p>
            <p className="text-gray-400">Phone: +1 234 567 890</p>
            <p className="text-gray-400">Address: 123 AI St., Sunderland, UK</p>
          </div>
        </div>
      </div>

      
      <div className="bg-gray-800 py-4 mt-12">
        <div className="container mx-auto text-center text-gray-400">
          <p>© 2024 AI-Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
