import React from 'react';
import NavbarSide from './components/NavbarSide';
import Hero from './components/Hero';
import About from './components/About';
import CalendarFeature from './components/CalendarFeature';
import Contact from './components/Contact';
import JoinChange from './components/JoinChange';
import Footer from './components/Footer';
import ShoeDriveChange from './components/ShoeDriveChange';

function App() {
  // bg-[#FFF5E4]
  // bg-[#FFF1D8]
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
