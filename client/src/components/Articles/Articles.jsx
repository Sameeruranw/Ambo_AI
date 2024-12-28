import React from "react";
import { Link } from "react-router-dom";
import assets from "../../assets/assets"; // Importing the assets

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: "The Future of Digital Employee Experience",
      description:
        "Discover how AI-powered tools are reshaping the way employees engage with technology, boosting productivity, and satisfaction.",
      content: "Full article content for Digital Employee Experience...",
      image: assets.chip, // Using image from assets
    },
    {
      id: 2,
      title: "AI Solutions: Revolutionizing Business Prototyping",
      description:
        "Learn how our innovative AI solutions reduce costs and speed up development for businesses of all sizes.",
      content: "Full article content for Business Prototyping...",
      image: assets.robo, // Using image from assets
    },
    {
      id: 3,
      title: "Top Trends in AI for 2024",
      
      description:
        "Stay ahead of the curve with our in-depth analysis of the top AI trends set to dominate the industry in 2024.Emerging trends include ethical AI",
      content: "Full article content for AI Trends 2024...",
      image: assets.trend, // Using image from assets
    },
    {
      id: 4,
      title: "AI-Powered Automation: The Future of Work",
      description:
        "AI automation is revolutionizing workplaces across the world. Learn how businesses can implement these systems for greater efficiency.",
      content: "Full article content for AI-Powered Automation...",
      image: assets.ai, // Using image from assets
    },
    {
      id: 5,
      title: "Innovation Through AI: A New Era of Problem Solving",
      description:
        "AI is transforming how we solve complex problems. This article explores the role of AI in problem-solving across industries.",
      content: "Full article content for AI Innovation...",
      image: assets.ai2, // Using image from assets
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Articles Promoting Our Company
      </h1>

      {/* Flex container to display articles in a row */}
      <div className="flex gap-8 overflow-x-auto">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-80"
          >
            {/* Adjusted image size */}
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-32 object-cover rounded-t-lg"
            />

            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                {article.title}
              </h2>
              <p className="text-gray-600 mb-4">{article.description}</p>

              {/* Adjusted Read More button */}
              <div className="flex justify-between items-center">
                <Link
                  to={`/articles/${article.id}`}
                  className="text-blue-600 font-semibold hover:underline text-sm"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
