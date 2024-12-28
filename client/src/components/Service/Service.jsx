import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import assets from '../../assets/assets';

const Service = () => {
  const navigate = useNavigate();
  
  const [showMore, setShowMore] = useState(false);

  const handleContactClick = () => {
    navigate('/contact');
  };

  const handleShowMoreClick = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8">Our Services</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* First set of services (always visible) */}
        <div className="service-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <img
            src={assets.ai}
            alt="AI-Powered Virtual Assistant"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">AI-Powered Virtual Assistant</h2>
          <p className="text-gray-600 mb-4">
            Our AI-powered virtual assistant enhances team productivity by automating tasks and answering inquiries in real-time.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Instant response to user inquiries</li>
            <li>Automates repetitive tasks</li>
            <li>Increases team efficiency</li>
          </ul>
        </div>

        <div className="service-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <img
            src={assets.ai2}
            alt="AI-Based Prototyping Solutions"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">AI-Based Prototyping Solutions</h2>
          <p className="text-gray-600 mb-4">
            Rapidly prototype and test your ideas with our AI-driven prototyping platform, providing real-time feedback and insights.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Faster time-to-market</li>
            <li>Cost-effective solutions</li>
            <li>Data-driven design insights</li>
          </ul>
        </div>

        <div className="service-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <img
            src={assets.ew}
            alt="Custom Software Development"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Custom Software Development</h2>
          <p className="text-gray-600 mb-4">
            We offer custom software development tailored to your unique business needs, from AI applications to data-driven platforms.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Tailored solutions that fit your exact needs</li>
            <li>Expert development team</li>
            <li>Scalable solutions for long-term growth</li>
          </ul>
        </div>

        {/* More services (conditionally visible) */}
        {showMore && (
          <>
            <div className="service-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <img
                src={assets.solution}
                alt="Digital Employee Experience Enhancement"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Digital Employee Experience Enhancement</h2>
              <p className="text-gray-600 mb-4">
                We help businesses improve their digital employee experience through AI and automation to boost engagement and productivity.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Streamlined processes for employee satisfaction</li>
                <li>Tools that enhance collaboration</li>
                <li>Solutions for remote and hybrid teams</li>
              </ul>
            </div>

            <div className="service-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <img
                src={assets.ew}
                alt="Data Analytics and Reporting"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Analytics and Reporting</h2>
              <p className="text-gray-600 mb-4">
                Make informed decisions with AI-driven data analytics, turning data into actionable insights that drive business growth.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Real-time data analysis</li>
                <li>Custom reports for your business goals</li>
                <li>Scalable big data solutions</li>
              </ul>
            </div>

            <div className="service-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <img
                src={assets.solution}
                alt="Additional Service"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Additional Service</h2>
              <p className="text-gray-600 mb-4">
                Custom description of the additional service to be included here.
              </p>
            </div>
          </>
        )}
      </div>

      {/* Show More Button */}
      <div className="text-center mt-6">
        <button
          onClick={handleShowMoreClick}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-8 rounded-lg transition duration-300 ease-in-out"
        >
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      </div>

      {/* Call to Action Section */}
      <div className="cta bg-blue-900 text-white py-8 text-center rounded-lg mt-8">
        <h2 className="text-3xl font-semibold mb-4">Ready to Transform Your Digital Employee Experience?</h2>
        <button
          onClick={handleContactClick}
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg text-lg"
        >
          Contact Us for a Free Consultation
        </button>
      </div>
    </div>
  );
};

export default Service;
