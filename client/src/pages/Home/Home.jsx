import React, { useState, useEffect } from "react";
import assets from "../../assets/assets";
import Hero from "../../components/Hero/Hero";
import Articles from "../../components/Articles/Articles";
import PhotoGallery from "../../components/Events/Events";
import Mission from "../../components/OurMission/Mission";
import Choose from "../../components/whyChooseUs/Choose";
import RatingComponent from "../../components/Rating/Rating";
import Testimonial from "../../components/Testimonials/Testimonials";
import ChatBot from "react-chatbotify"
const Home = () => {
  const images = [
    assets.ai,
    assets.trend,
    assets.robo,
    assets.chip,
    assets.pro,
    assets.robo2,
  ];
  const flow = {
    "start": {
      "message": "Welcome! We provide cutting-edge AI solutions. How can I assist you today?"
    }
  }
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full gap-3">
      <h1 className="text-2xl font-bold text-center opacity-0 -translate-x-10 transition-all duration-1000 ease-in-out animate-slide-in underline underline-offset-8">
        Innovating the Digital Employee Experience
      </h1>

      <div className="relative">
        <img
          className="rounded-2xl w-[1250px] h-[520px] object-cover"
          src={images[currentImageIndex]}
          alt="AI Solution"
        />

        <button
          onClick={prevImage}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-lg hover:bg-blue-500"
        >
          &#10094;
        </button>
        <button
          onClick={nextImage}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-lg hover:bg-blue-500"
        >
          &#10095;
        </button>
      </div>
      <ChatBot flow={flow}/>
      <Hero />
      <Articles />
      <PhotoGallery />
      <Mission />
      <Choose />
      <Testimonial />
      <RatingComponent />
    </div>
  );
};

export default Home;
