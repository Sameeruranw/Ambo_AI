import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import assets from '../../assets/assets';

const products = [
  { 
    id: 1, 
    title: 'AI-Powered Virtual Assistant', 
    price: 199, 
    description: 'Automate tasks and increase productivity with AI.',
    features: ['Instant response to user inquiries', 'Automates repetitive tasks', 'Increases team efficiency'],
    specifications: ['AI-driven chat responses', 'Customizable workflows', 'Integration with popular tools'],
    reviews: [
      { name: 'John Doe', rating: 5, comment: 'This product has greatly improved my team\'s productivity!' },
      { name: 'Jane Smith', rating: 4, comment: 'A useful tool, but could use some more customization options.' },
    ]
  },
  { 
    id: 2, 
    title: 'AI-Based Prototyping Solutions', 
    price: 149, 
    description: 'Quick prototyping with AI-driven feedback.',
    features: ['Rapid idea testing', 'Real-time feedback', 'Cost-effective prototyping'],
    specifications: ['AI-generated design iterations', 'Drag-and-drop interface', 'Export options for multiple formats'],
    reviews: [
      { name: 'Alex Johnson', rating: 5, comment: 'A game changer for our design process!' },
      { name: 'Emily Davis', rating: 4, comment: 'Helpful for rapid prototyping but needs more template options.' },
    ]
  },
  { 
    id: 3, 
    title: 'Custom Software Development', 
    price: 299, 
    description: 'Tailored software solutions for your business.',
    features: ['Fully customizable', 'Scalable for long-term growth', 'Expert development team'],
    specifications: ['Cloud-based solutions', 'Enterprise-grade security', 'Custom integrations'],
    reviews: [
      { name: 'Chris Brown', rating: 5, comment: 'Great custom solutions that fit perfectly with our needs.' },
      { name: 'Sophia Lee', rating: 4, comment: 'Solid development work, but a bit slow in the initial phases.' },
    ]
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((prod) => prod.id === parseInt(id));
  const [isPurchased, setIsPurchased] = useState(false);

  const handlePurchase = () => {
    setIsPurchased(true);
  };

  if (!product) return <p>Product not found!</p>;

  // Related products can be dynamically filtered or selected. In this case, it's just a subset of the product list.
  const relatedProducts = products.filter(prod => prod.id !== product.id);

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column (Image and Price) */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src={assets[product.id === 1 ? 'ai' : product.id === 2 ? 'ai2' : 'ew']}
            alt={product.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">{product.title}</h2>
          <p className="text-xl font-semibold text-gray-800 mb-6">${product.price}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>

          {isPurchased ? (
            <p className="text-green-500 font-semibold">Thank you for your purchase!</p>
          ) : (
            <button
              onClick={handlePurchase}
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg text-lg w-full"
            >
              Buy Now
            </button>
          )}
        </div>

        {/* Right Column (Features, Specifications, Reviews) */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Features</h3>
          <ul className="list-disc pl-5 mb-6 text-gray-600">
            {product.features.map((feature, index) => (
              <li key={index} className="mb-2">{feature}</li>
            ))}
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Specifications</h3>
          <ul className="list-disc pl-5 mb-6 text-gray-600">
            {product.specifications.map((spec, index) => (
              <li key={index} className="mb-2">{spec}</li>
            ))}
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Customer Reviews</h3>
          <div className="space-y-4">
            {product.reviews.map((review, index) => (
              <div key={index} className="border-b pb-4">
                <p className="font-semibold text-gray-800">{review.name} - {Array(review.rating).fill('★').join('')}</p>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-12">
        <h3 className="text-3xl font-semibold text-gray-800 mb-6">Related Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedProducts.map((relatedProduct) => (
            <div key={relatedProduct.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <img
                src={assets[relatedProduct.id === 1 ? 'ai' : relatedProduct.id === 2 ? 'ai2' : 'ew']}
                alt={relatedProduct.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800 mb-4">{relatedProduct.title}</h4>
              <p className="text-gray-600 mb-4">{relatedProduct.description}</p>
              <p className="text-xl font-semibold text-gray-800 mb-4">${relatedProduct.price}</p>
              <Link to={`/product/${relatedProduct.id}`}>
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg text-lg w-full">View Details</button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Frequently Asked Questions Section */}
      <div className="mt-12">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h4 className="font-semibold text-gray-800">What payment methods do you accept?</h4>
            <p className="text-gray-600">We accept all major credit cards and PayPal.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h4 className="font-semibold text-gray-800">Can I cancel my order after purchasing?</h4>
            <p className="text-gray-600">You can cancel your order within 24 hours of purchase. After that, it's non-refundable.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h4 className="font-semibold text-gray-800">Do you offer support for the products?</h4>
            <p className="text-gray-600">Yes, we offer 24/7 support for all of our products. Feel free to reach out anytime.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
