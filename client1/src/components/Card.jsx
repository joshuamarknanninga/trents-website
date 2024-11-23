// Card.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Card.scss';

const Card = ({ title, description, onClick }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`card ${inView ? 'fade-in-up' : ''}`}
      onClick={onClick}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
