import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Card from './components/Card';
import ContactModal from './components/ContactModal';
import './styles/global.scss';

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!isModalOpen);

  return (
    <>
      <Header />
      <Hero />
      <section id="process" className="card-section">
        <Card title="Step 1" description="Learn about the process." onClick={toggleModal} />
        <Card title="Step 2" description="Implement it effectively." onClick={toggleModal} />
        <Card title="Step 3" description="Scale it sustainably." onClick={toggleModal} />
      </section>
      <ContactModal isOpen={isModalOpen} onClose={toggleModal} />
    </>
  );
};

export default App;
