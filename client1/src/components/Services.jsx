// src/components/Services.jsx
import React from 'react';

const services = [
  {
    title: 'Consulting',
    description: 'Expert advice to improve your business.',
    icon: '💼',
  },
  {
    title: 'Sustainability',
    description: 'Implement eco-friendly practices.',
    icon: '🌱',
  },
  {
    title: 'Innovation',
    description: 'Stay ahead with the latest technologies.',
    icon: '🚀',
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
                <div className="text-5xl mb-4">{service.icon}</div>
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
