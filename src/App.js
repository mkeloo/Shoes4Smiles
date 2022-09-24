import React from 'react';
// import Navbar from './components/Navbar';
import NavbarSide from './components/NavbarSide';
import Hero from './components/Hero';
import About from './components/About';

function App() {
  // bg-[#FFF5E4]
  // bg-[#FFF1D8]
  return (
    <div className="bg-[#ffd5b4]">
      <NavbarSide />
      <Hero />
      <About />
    </div>
  );
}

export default App;
