// client/src/components/Services.jsx
import React from 'react';
import { FaBusinessTime, FaLeaf, FaRocket } from 'react-icons/fa';

const services = [
  {
    title: 'Consulting',
    description: 'Expert advice to improve your business.',
    icon: <FaBusinessTime size={40} />,
  },
  {
    title: 'Sustainability',
    description: 'Implement eco-friendly practices.',
    icon: <FaLeaf size={40} />,
  },
  {
    title: 'Innovation',
    description: 'Stay ahead with the latest technologies.',
    icon: <FaRocket size={40} />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="flex flex-wrap justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full md:w-1/3 p-4 text-center animate-fade-in-up"
            >
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <div className="text-5xl mb-4 text-blue-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
