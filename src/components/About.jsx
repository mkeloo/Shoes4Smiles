import React from 'react';
import about1 from '../assets/Pics/about1.jpg';
import { Parallax } from 'react-scroll-parallax';

const About = () => {
  return (
    //  md:mt-6 mt-4 issue

    <Parallax
      id="about"
      translateX={['-100px', '100px']}
      className="w-full h-full mt-20 mb-10 py-10 flex justify-center items-center "
    >
      <Parallax className="w-full md:flex md:grid-cols-2 md:p-8 md:m-6 p-0 m-0 grid-col-reverse">
        <div className="flex flex-col justify-center px-10 md:max-w-[65%] max-w-full ">
          <h1 className="lg:text-6xl md:text-4xl text-blue-500  text-3xl font-bold py-6 pb-4">
            About Us
          </h1>
          <p className="text-sm md:text-lg lg:text-2xl">
            Shoes 4 Smiles is a student organization dedicated to fundraising
            and providing shoes and other basic necessities to people in local,
            disadvantaged communities. We were founded in 2018 and have donated
            over 500 pairs of shoes and thousands of dollars to people in the
            Gainesville community.
          </p>
        </div>
        <div
          className="flex justify-center items-center"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="600"
        >
          <img
            src={about1}
            alt="about1"
            className="lg:w-[450px] lg:h-[500px] md:w-[260px] md:h-[310px] w-[175px] h-[210px] md:mt-8 m-5 object-cover rounded-2xl shadow-lg shadow-black"
          />
        </div>
      </Parallax>
    </Parallax>
  );
};

export default About;
