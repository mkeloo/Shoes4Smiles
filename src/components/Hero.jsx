import React from 'react';
import Skydiving from '../assets/Skydiving.svg';
import logo from '../assets/logo.png';

const Hero = () => {
  return (
    <div className="flex flex-col justify-between w-full h-[75vh] text-orange-600 text-center md:text-left">
      {/* <img src={HeroBackground} alt="/" /> */}

      <div className="grid md:grid-cols-2 max-w-screen-xl m-auto px-3">
        <div className="flex flex-col justify-center md:items-start w-full px-10 py-8">
          {/* <img src={logo} alt="/" className="object-fit w-[120px] h-[120px]" /> */}

          {/* <p className="text-2xl text-orange-600 mt-11">
            Cheapest Hosting on Planet Earth
          </p> */}
          <div className="flex items-center flex-col-2 justify-center">
            <h1 className="pt-1 pb-6 text-7xl md:text-7xl font-bold">
              <span className="text-lightColor">UF</span>
            </h1>
            <img
              src={logo}
              alt="/"
              className="flex items-center justify-center object-fit w-[150px] h-[150px] mb-4"
            />
          </div>

          <h1 className="pt-1 pb-6 text-5xl md:text-5xl font-bold logo">
            <span className="">
              Shoes<span className="text-6xl text-blue-500">4</span>Smiles
            </span>
          </h1>

          <p className="font-light text-gray-400 text-xl">
            Providing shoes and other necessities to people in local,
            disadvantaged communities 🐊 👟
          </p>
        </div>

        <div className="flex items-center justify-center">
          <img
            src={Skydiving}
            alt="hero"
            className="w-3/4 rounded-full duration-500 hover:ring-orange-500 hover:ring-8 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
