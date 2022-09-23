import React from 'react';
import Skydiving from '../assets/Skydiving.svg';
import logo from '../assets/logo.png';

const Hero = () => {
  return (
    <div className="z-middle flex flex-col justify-between w-full font-rubik h-screen text-blue-600 text-center md:text-left">
      {/* <img src={HeroBackground} alt="/" /> */}

      <div className="grid md:grid-cols-2 max-w-screen-xl m-auto pt-24 pb-12 ">
        <div className="flex flex-col justify-center  w-full p-2">
          <div className="flex items-center justify-center">
            {/* <h1 className="pt-1 pb-6 text-7xl lg:text-8xl font-bold">
              <span className="text-lightColor">UF</span>
            </h1> */}
            <img
              src={logo}
              alt="/"
              className="flex items-center justify-center object-fit w-[300px] h-[300px]  mb-2"
            />
          </div>

          {/* <h1 className="pt-1 pb-6 text-5xl lg:text-7xl font-bold logo">
            <span className="">
              Shoes
              <span className="lg:text-8xl text-7xl text-orange-500 ">4</span>
              Smiles
            </span>
          </h1> */}

          <p className=" text-gray-400 font-rubik  lg:text-2xl text-xl">
            Providing shoes and other necessities to people in local,
            disadvantaged communities 🐊 👟
          </p>
        </div>

        <div className="lg:flex items-center hidden justify-center">
          <img
            src={Skydiving}
            alt="hero"
            className="w-[85%] rounded-full duration-500 hover:ring-orange-500 hover:ring-8 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
