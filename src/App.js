import React from 'react';
// import Navbar from './components/Navbar';
import NavbarSide from './components/NavbarSide';
import Hero from './components/Hero';
import About from './components/About';

function App() {
  return (
    <div className="bg-pattern">
      <NavbarSide />
      <Hero />
      <About />
    </div>
  );
}

export default App;
