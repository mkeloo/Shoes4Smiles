import React from 'react';
import about1 from '../assets/Pics/about1.jpg';

const About = () => {
  return (
    <div id="about" className="w-full h-screen py-16 px-20 mt-10">
      <div className="w-full items-center mx-auto flex justify-between m-5 p-12 gap-16">
        <div className="flex flex-col justify-center p-10">
          <h1 className="lg:text-6xl md:text-4xl text-blue-500 sm:text-3xl text-2xl font-bold py-2 mb-12">
            About Us
          </h1>
          <p className="text-3xl ">
            Shoes 4 Smiles is a student organization dedicated to fundraising
            and providing shoes and other basic necessities to people in local,
            disadvantaged communities. We were founded in 2018 and have donated
            over 500 pairs of shoes and thousands of dollars to people in the
            Gainesville community.
          </p>
        </div>
        <img
          src={about1}
          alt="about1"
          className="w-[450px]  rounded-2xl shadow-lg shadow-black"
        />
      </div>
    </div>
  );
};

export default About;
