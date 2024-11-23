// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-20"
    >
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4 animate-fade-in-down">
          Welcome to Our Website
        </h1>
        <p className="text-xl mb-8 animate-fade-in-up">
          We provide sustainable solutions for your business.
        </p>
        <a
          href="#services"
          className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;
