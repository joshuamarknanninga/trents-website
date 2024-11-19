import React from 'react';
import './Card.scss';

const Card = ({ title, description, onClick }) => (
  <div className="card" onClick={onClick}>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default Card;
