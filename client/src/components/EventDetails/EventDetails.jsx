import React from "react";
import { useParams } from "react-router-dom";
import assets from "../../assets/assets";

const eventDetails = {
  1: {
    title: "AI Innovation Conference 2024",
    description:
      "The AI Innovation Conference 2024 brought together industry leaders, researchers, and innovators to explore the transformative potential of artificial intelligence. The event emphasized ethical AI, future innovations, and practical applications in various industries.",
    image: assets.robo,
    additionalImages: [assets.ai, assets.robo2, assets.th],
    additionalInfo: "Venue: Sunderland Hall | Date: 12th March 2024",
    purpose:
      "This conference aimed to foster collaboration and knowledge-sharing among experts and organizations shaping the future of AI. Key focus areas included AI for good, automation, and addressing societal challenges.",
    keynoteSpeakers: [
      "Dr. Jane Smith – AI for Sustainable Development",
      "Prof. Alan Richards – The Ethics of Machine Learning",
      "Ms. Emily Carter – Leveraging AI for Business Transformation",
    ],
    sponsors: [
      { name: "TechCorp Innovations", logo: assets.chip },
      { name: "AI Solutions Ltd.", logo: assets.solution },
      { name: "FutureMind AI", logo: assets.trend },
    ],
    highlights: [
      "Interactive workshops on AI ethics and innovation",
      "Panel discussion with global AI leaders",
      "Live demonstrations of cutting-edge AI tools",
    ],
  },
  2: {
    title: "Product Launch Event 2024",
    description:
      "Our latest AI-powered solutions were unveiled, focusing on improving productivity and efficiency across various industries. Watch our launch videos and customer testimonials.",
    image: assets.chip,
    additionalImages: [assets.solution, assets.ai, assets.trend],
    additionalInfo: "Venue: Tech Innovation Center | Date: 20th May 2024",
    purpose:
      "The Product Launch Event aimed to introduce innovative AI-powered tools designed to enhance business performance. The event featured live demos, client success stories, and hands-on workshops.",
    keynoteSpeakers: [
      "Mr. John Doe – AI in Modern Business",
      "Dr. Sarah Lee – Revolutionizing Industries with AI",
    ],
    sponsors: [
      { name: "TechInnovators", logo: assets.chip },
      { name: "AI Solutions", logo: assets.solution },
    ],
    highlights: [
      "Product demonstrations with real-time examples",
      "Client success stories and testimonials",
      "Exclusive access to early product trials",
    ],
  },
  3: {
    title: "Employee Engagement Meetup",
    description:
      "This meetup celebrated the collaborative spirit of our employees. It featured team-building activities, awards, and networking opportunities.",
    image: assets.oreo,
    additionalImages: [assets.trend, assets.pro],
    additionalInfo: "Venue: Main Conference Hall | Date: 15th February 2024",
    purpose:
      "The Employee Engagement Meetup aimed to recognize and reward team achievements, while also fostering a sense of unity and collaboration among employees. Activities included team-building exercises, a keynote speech, and a networking dinner.",
    keynoteSpeakers: [
      "Ms. Rachel Adams – Leading with Empathy",
      "Mr. Peter Brown – Cultivating a Collaborative Work Culture",
    ],
    sponsors: [
      { name: "Employee Excellence Group", logo: assets.solution },
    ],
    highlights: [
      "Team-building activities and group challenges",
      "Awards ceremony recognizing top performers",
      "Networking opportunities with company leaders",
    ],
  },
  4: {
    title: "AI Summit 2023",
    description:
      "The AI Summit 2023 explored cutting-edge trends in AI with experts from around the globe. The event featured live demonstrations and interactive Q&A sessions.",
    image: assets.ai,
    additionalImages: [assets.pro, assets.solution],
    additionalInfo: "Venue: Innovation Center | Date: 10th June 2023",
    purpose:
      "This summit aimed to educate and inspire participants about the transformative power of AI in business and society. It included expert-led discussions and innovative solutions for AI integration in multiple sectors.",
    keynoteSpeakers: [
      "Mr. Lee Wong – Future of AI in Manufacturing",
      "Dr. Olivia Carter – AI and Sustainability",
    ],
    sponsors: [
      { name: "NextGen Robotics", logo: assets.trend },
      { name: "InnovaTech", logo: assets.ew },
    ],
    highlights: [
      "Interactive AI workshops",
      "Live coding sessions with experts",
      "Exclusive access to emerging AI technologies",
    ],
  },
  5: {
    title: "Tech Expo 2022",
    description:
      "Tech Expo 2022 showcased the latest advancements in AI, robotics, and IoT. Attendees experienced hands-on demonstrations and keynote talks from tech pioneers.",
    image: assets.ew,
    additionalImages: [assets.chip, assets.robo],
    additionalInfo: "Venue: Tech Expo Hall | Date: 22nd November 2022",
    purpose:
      "The Tech Expo 2022 highlighted breakthrough innovations in AI and technology. Attendees had the opportunity to network with industry leaders, watch live demonstrations, and engage in tech showcases.",
    keynoteSpeakers: [
      "Ms. Lucy Thompson – Future Trends in AI and IoT",
      "Dr. Henry James – Robotics in Manufacturing",
    ],
    sponsors: [
      { name: "TechWorld Innovations", logo: assets.trend },
      { name: "AI Partners", logo: assets.solution },
    ],
    highlights: [
      "Robotic demonstrations",
      "AI-powered solutions for various industries",
      "Networking and collaboration opportunities with tech leaders",
    ],
  },
  6: {
    title: "Leadership Workshop 2021",
    description:
      "This workshop focused on empowering business leaders with the knowledge to integrate AI into their strategies effectively. It featured practical exercises and case studies.",
    image: assets.ai,
    additionalImages: [assets.trend, assets.robo2],
    additionalInfo: "Venue: Executive Conference Room | Date: 5th October 2021",
    purpose:
      "The Leadership Workshop 2021 aimed to equip business leaders with AI-driven insights, helping them to integrate AI tools and strategies into their operations. It featured interactive exercises, case studies, and expert presentations.",
    keynoteSpeakers: [
      "Dr. Michael Reed – Leveraging AI for Strategic Decision-Making",
      "Ms. Laura Smith – Transforming Leadership through AI",
    ],
    sponsors: [
      { name: "AI Innovators Hub", logo: assets.chip },
      { name: "NextGen Enterprises", logo: assets.trend },
    ],
    highlights: [
      "Hands-on AI integration workshops",
      "Interactive case studies and real-world applications",
      "Leadership strategies for AI-driven organizations",
    ],
  },
};

const EventDetails = () => {
  const { id } = useParams();
  const event = eventDetails[id];

  if (!event) {
    return (
      <div className="container mx-auto px-6 py-16">
        <p className="text-center text-lg text-gray-700">Event not found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-16">
      {/* Main Event Section */}
      <div className="bg-white shadow-xl rounded-xl overflow-hidden mb-12">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-300"
        />
        <div className="p-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">{event.title}</h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            {event.description}
          </p>
          <div className="bg-gray-100 p-4 rounded-lg text-gray-700 font-medium mb-8">
            <span className="block">
              <strong>Venue:</strong> {event.additionalInfo.split("|")[0]}
            </span>
            <span className="block">
              <strong>Date:</strong> {event.additionalInfo.split("|")[1]}
            </span>
          </div>
        </div>
      </div>

      {/* Purpose Section */}
      <div className="bg-gray-50 p-8 mb-12 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Purpose of the Event</h2>
        <p className="text-gray-700">{event.purpose}</p>
      </div>

      {/* Highlights and Gallery Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Event Highlights</h2>
          <ul className="list-disc list-inside text-gray-700">
            {event.highlights.map((highlight, index) => (
              <li key={index} className="mb-2">{highlight}</li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {event.additionalImages.map((image, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={image}
                alt={`Highlight ${index + 1}`}
                className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Keynote Speakers Section */}
      <div className="bg-gray-50 p-8 mb-12 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Keynote Speakers</h2>
        <ul className="list-disc list-inside text-gray-700">
          {event.keynoteSpeakers.map((speaker, index) => (
            <li key={index} className="mb-2">{speaker}</li>
          ))}
        </ul>
      </div>

      {/* Sponsors Section */}
      <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Event Sponsors</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {event.sponsors.map((sponsor, index) => (
            <div key={index} className="text-center">
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="mx-auto h-24 mb-4 transform hover:scale-110 transition-transform duration-300"
              />
              <p className="text-gray-700">{sponsor.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
