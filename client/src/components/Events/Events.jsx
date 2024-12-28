import React from "react";
import { Link } from "react-router-dom";
import onion from "../../assets/o.jpg";
import assets from "../../assets/assets";

const PhotoGallery = () => {
  const promotionalEvents = [
    {
      id: 1,
      title: "AI Innovation Conference 2024",
      description: "Highlights from our successful AI innovation event.",
      image: onion,
      details:
        "The AI Innovation Conference 2024 brought together industry leaders to discuss the future of AI. Sessions included keynote speeches, panel discussions, and hands-on workshops.",
    },
    {
      id: 2,
      title: "Product Launch Event",
      description: "Our new AI-powered solutions unveiled.",
      image: assets.chip,
      details:
        "Our latest AI-powered solutions were unveiled, focusing on improving productivity and efficiency across various industries. Watch our launch videos and customer testimonials.",
    },
    {
      id: 3,
      title: "Employee Engagement Meetup",
      description: "Celebrating teamwork and collaboration.",
      image: assets.oreo,
      details:
        "This meetup celebrated the collaborative spirit of our employees. It featured team-building activities, awards, and networking opportunities.",
    },
  ];

  const pastEvents = [
    {
      id: 4,
      title: "AI Summit 2023",
      description: "A deep dive into AI trends and technologies.",
      image: assets.ai,
      details:
        "The AI Summit 2023 explored cutting-edge trends in AI with experts from around the globe. The event featured live demonstrations and interactive Q&A sessions.",
    },
    {
      id: 5,
      title: "Tech Expo 2022",
      description: "Showcasing groundbreaking tech innovations.",
      image: assets.pro,
      details:
        "Tech Expo 2022 highlighted the latest advancements in AI, robotics, and IoT. Attendees experienced hands-on demonstrations and keynote talks from tech pioneers.",
    },
    {
      id: 6,
      title: "Leadership Workshop 2021",
      description: "Empowering leaders with AI-driven insights.",
      image: assets.trend,
      details:
        "This workshop focused on empowering business leaders with the knowledge to integrate AI into their strategies effectively. It featured practical exercises and case studies.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Photo Galleries
      </h1>

      {/* Promotional Events Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Promotional Events
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promotionalEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600">{event.description}</p>
                <Link
                  to={`/event/${event.id}`}
                  className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700"
                >
                  See More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Past Events Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Past Events
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600">{event.description}</p>
                <Link
                  to={`/event/${event.id}`}
                  className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700"
                >
                  See More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
