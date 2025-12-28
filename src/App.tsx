import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Contact from './components/Contact';
import Productos from './components/Productos';

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    const handleHashScroll = () => {
      if (location.hash) {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        
        if (element) {
          requestAnimationFrame(() => {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          });
        }
      } else {
        window.scrollTo(0, 0);
      }
    };

    handleHashScroll();
  }, [location]);

  return null;
};

function HomePage() {
  return (
    <>
      <Hero />
      <Gallery />
      <Services />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <ScrollToHash />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/productos" element={<Productos />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;