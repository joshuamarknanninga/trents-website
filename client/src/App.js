// client/src/App.js
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
// import Contact from './components/Contact'; // Import Contact component
import Footer from './components/Footer';
import './index.css'; // Tailwind CSS

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api') // Using proxy to avoid specifying full URL
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        {message && (
          <div className="text-center py-4">
            <p className="text-green-500 font-bold">{message}</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
