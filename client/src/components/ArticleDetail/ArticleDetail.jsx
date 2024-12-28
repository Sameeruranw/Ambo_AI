import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import assets from "../../assets/assets"; // Importing the assets

const ArticleDetail = () => {
  const { id } = useParams();

  const articles = [
    {
      id: 1,
      title: "The Future of Digital Employee Experience",
      content: `
        Digital employee experience is transforming at an unprecedented pace, thanks to the advancements in AI. 
        Companies are now leveraging AI-powered tools to improve productivity, enhance collaboration, and drive 
        employee satisfaction. Key highlights include personalized dashboards, automated workflows, and seamless 
        integration of virtual assistants in daily operations. This shift not only empowers employees but also 
        fosters a culture of innovation. Businesses that adapt to these changes are bound to see significant 
        improvements in employee engagement and overall efficiency.`,
      image: assets.chip,
      author: "John Smith",
      date: "December 21, 2024",
    },
    {
      id: 2,
      title: "AI Solutions: Revolutionizing Business Prototyping",
      content: `
        Prototyping has always been a critical phase in product development, and AI solutions are redefining the game. 
        By automating repetitive tasks, reducing errors, and speeding up design iterations, AI tools have made prototyping 
        faster and more affordable than ever. Companies can now use generative AI to visualize complex ideas, simulate real-world 
        applications, and test prototypes before bringing them to life. This revolution ensures businesses stay competitive 
        while minimizing costs.`,
      image: assets.robo,
      author: "Jane Doe",
      date: "December 20, 2024",
    },
    {
      id: 3,
      title: "Top Trends in AI for 2024",
      content: `
        2024 is set to be a landmark year for AI innovations. From generative AI models that write code and create art, 
        to advancements in natural language processing, the potential of AI is boundless. Emerging trends include 
        ethical AI frameworks, AI-driven cybersecurity solutions, and the rise of edge AI for faster decision-making 
        in IoT devices. Additionally, the integration of AI in healthcare, finance, and education continues to 
        reshape industries worldwide. Keeping up with these trends will be crucial for businesses aiming to lead 
        in the AI-driven era.`,
      image: assets.trend,
      author: "Michael Lee",
      date: "December 19, 2024",
    },
    {
      id: 4,
      title: "AI in Healthcare: Transforming Patient Care",
      content: `
        The integration of AI in healthcare is revolutionizing how patient care is delivered. AI-powered systems are now being 
        used for early detection of diseases, personalized treatment plans, and real-time patient monitoring. Technologies 
        like AI-based diagnostic tools, predictive analytics, and machine learning algorithms are enabling healthcare providers 
        to make faster, more accurate decisions. This not only improves patient outcomes but also helps reduce healthcare costs 
        and operational inefficiencies. In the near future, AI will play an even larger role in creating a more efficient, accessible 
        healthcare system.`,
      image: assets.human,
      author: "Sarah Johnson",
      date: "December 18, 2024",
    },
    {
      id: 5,
      title: "AI and the Future of Autonomous Vehicles",
      content: `
        Autonomous vehicles are no longer just a futuristic concept but a rapidly developing reality, thanks to AI advancements. 
        Self-driving cars, trucks, and drones powered by AI are set to revolutionize transportation by reducing traffic accidents, 
        improving efficiency, and lowering environmental impact. The AI algorithms driving autonomous vehicles rely on machine 
        learning and real-time data from sensors to make quick decisions, navigate traffic, and avoid obstacles. As these vehicles 
        continue to evolve, they will pave the way for safer, more sustainable transportation solutions across the globe.`,
      image: assets.solution,
      author: "David Turner",
      date: "December 17, 2024",
    },
  ];

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchedArticle = articles.find((article) => article.id === parseInt(id));
    setArticle(fetchedArticle);
    setLoading(false);
  }, [id]);

  if (loading) {
    return <p className="text-center text-gray-700">Loading...</p>;
  }

  if (!article) {
    return <p className="text-center text-gray-700">Article not found.</p>;
  }

  const relatedArticles = articles.filter((a) => a.id !== article.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Text Section */}
        <div className="p-8 md:w-1/2">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{article.title}</h1>
          <p className="text-sm text-gray-500 mb-4">
            By <span className="font-semibold">{article.author}</span> | {article.date}
          </p>
          <p className="text-gray-700 leading-relaxed">{article.content}</p>
        </div>
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center items-center p-8">
          <img
            src={article.image}
            alt={article.title}
            className="w-3/4 h-auto rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Social Media Sharing Section */}
      <div className="flex justify-center mt-6">
        <a
          href={`https://twitter.com/share?url=${window.location.href}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 px-4 py-2 border border-blue-500 rounded-lg mr-4"
        >
          Share on Twitter
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 px-4 py-2 border border-blue-500 rounded-lg"
        >
          Share on Facebook
        </a>
      </div>

      {/* Related Articles Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Articles</h2>
        <div className="flex gap-8 overflow-x-auto">
          {relatedArticles.map((relatedArticle) => (
            <div
              key={relatedArticle.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden w-80 flex flex-col"
            >
              <img
                src={relatedArticle.image}
                alt={relatedArticle.title}
                className="w-full h-32 object-cover rounded-t-lg"
              />
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {relatedArticle.title}
                </h3>
                <p className="text-gray-600 mb-4">{relatedArticle.content.substring(0, 100)}...</p>
                <Link
                  to={`/articles/${relatedArticle.id}`}
                  className="text-blue-600 font-semibold hover:underline mt-auto"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Back Button */}
      <div className="mt-6 text-center">
        <Link
          to="/"
          className="text-blue-600 font-semibold hover:underline text-lg"
        >
          ← Back to Articles
        </Link>
      </div>
    </div>
  );
};

export default ArticleDetail;
