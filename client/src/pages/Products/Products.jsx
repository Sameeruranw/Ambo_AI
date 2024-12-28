import React from 'react';
import { Link } from 'react-router-dom';
import assets from '../../assets/assets'; // Add your product images here

const products = [
  { 
    id: 1, 
    title: 'AI-Powered Virtual Assistant', 
    price: 199, 
    image: assets.ai,
    rating: 4.5,
    description: 'Enhance productivity with our AI-powered virtual assistant that automates tasks seamlessly.'
  },
  { 
    id: 2, 
    title: 'AI-Based Prototyping Solutions', 
    price: 149, 
    image: assets.ai2,
    rating: 4.2,
    description: 'Accelerate your design process with AI-driven feedback and rapid prototyping.'
  },
  { 
    id: 3, 
    title: 'Custom Software Development', 
    price: 299, 
    image: assets.ew,
    rating: 4.8,
    description: 'Tailored software solutions for your business that drive long-term success.'
  },
];

const Products = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{product.title}</h2>
              <p className="text-sm text-gray-500 mb-4">{product.description}</p>
              <div className="flex justify-center items-center mb-4">
                <span className="text-yellow-400">{"★".repeat(Math.floor(product.rating))}</span>
                <span className="text-gray-500 ml-2">({product.rating.toFixed(1)})</span>
              </div>
              <p className="text-xl font-semibold text-gray-900 mb-4">${product.price}</p>
              <Link
                to={`/product/${product.id}`}
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg transition-all duration-300 ease-in-out"
              >
                View Product
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
