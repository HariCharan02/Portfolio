import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
      offset: 100,
    });
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Charan Kanna. All rights reserved.</p>
        <p className="footer-tagline">Designed with precision. Built with passion.</p>
      </footer>
    </div>
  );
}

export default App;