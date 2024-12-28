import React from "react";
import assets from "../../assets/assets";

const testimonials = [
  {
    name: "John Doe",
    title: "CEO of TechCorp",
    image: assets.th,
    feedback:
      "This is the best service I have ever used. The team is amazing and always goes above and beyond to deliver quality work.",
  },
  {
    name: "Jane Smith",
    title: "Marketing Specialist",
    image: assets.th2,
    feedback:
      "I am so impressed with the level of professionalism and quality. I would recommend this service to anyone!",
  },
  {
    name: "Emily Johnson",
    title: "Freelance Designer",
    image: assets.th3,
    feedback:
      "Working with this team has been an absolute pleasure. They understood my vision and executed it perfectly.",
  },
 
];

const Testimonial = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-800">
          What Our Clients Say
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-6 rounded-xl transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 ease-in-out animate-fade-in"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full border border-gray-300"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
