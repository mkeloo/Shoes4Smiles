import React, { useEffect } from 'react';
import NavbarSide from './components/NavbarSide';
import Hero from './components/Hero';
import About from './components/About';
import CalendarFeature from './components/CalendarFeature';
import Contact from './components/Contact';
import JoinChange from './components/JoinChange';
import Footer from './components/Footer';
import ShoeDriveChange from './components/ShoeDriveChange';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  // bg-[#FFF5E4]
  // bg-[#FFF1D8]

  // aos initialization
  useEffect(() => {
    Aos.init({
      duration: 1500,
      delay: 400,
    });
  });

  return (
    <div className="bg-[#ffd5b4]">
      <NavbarSide />
      <Hero />
      <About />
      <ShoeDriveChange />
      <JoinChange />
      <Contact />
      <CalendarFeature />
      <Footer />
    </div>
  );
}

export default App;
