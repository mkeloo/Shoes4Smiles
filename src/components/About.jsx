import React from 'react';
import about1 from '../assets/Pics/about1.jpg';

const About = () => {
  return (
    //  md:mt-6 mt-4 issue

    <div
      id="about"
      // translateX={['-100px', '100px']}
      data-aos="fade-down"
      data-aos-duration="600"
      data-aos-delay="300"
      className="w-full h-full mt-16 mb-0 py-5 flex justify-center items-center "
    >
      <div className="w-full md:flex md:grid-cols-2 md:p-8 md:m-16 m-0 grid-col-reverse bg-blue-200 rounded-2xl   mx-4 p-2">
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
          data-aos="fade-up"
          data-aos-duration="400"
          data-aos-delay="300"
        >
          <img
            src={about1}
            alt="about1"
            className="lg:w-[450px] lg:h-[500px] md:w-[260px] md:h-[310px] w-[175px] h-[210px] md:mt-8 m-5 object-cover rounded-2xl shadow-lg shadow-black"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
