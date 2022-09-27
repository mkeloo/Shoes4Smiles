import React from 'react';
import Join from '../assets/Pics/join.jpg';
import { HiUserGroup } from 'react-icons/hi';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Parallax } from 'react-scroll-parallax';

const JoinChange = () => {
  const socials = [
    {
      id: 1,
      url: 'https://www.instagram.com/ufshoes4smiles/?hl=en',
      icon: <FaInstagram size={33} />,
      text: 'Instagram',
    },
    {
      id: 2,
      url: 'https://www.facebook.com/ufshoes4smiles',
      icon: <FaFacebook size={33} />,
      text: 'Facebook',
    },
    {
      id: 3,
      url: 'https://web.groupme.com/join_group/89159667/TU2zA1rK',
      icon: <HiUserGroup size={33} />,
      text: 'GroupMe',
    },
  ];
  return (
    <Parallax
      translateX={['-100px', '100px']}
      id="join"
      className="w-full h-full flex justify-center items-center mb-8 md:mb-0 "
    >
      <div className="w-full md:flex md:grid-cols-2 md:p-8 md:m-6 p-0 m-0 grid-col-reverse">
        <div className="flex flex-col justify-center px-10 md:max-w-[65%] max-w-full pt-10 mt-5">
          <h1 className="lg:text-6xl md:text-4xl text-blue-500 text-3xl font-bold py-6 pb-4">
            Join Us
          </h1>
          <p className="md:py-3 py-1 font-bold text-blue-500 md:text-3xl text-xl">
            Looking to get involved?
          </p>
          <p className="text-sm md:text-lg lg:text-2xl">
            We are always looking for new and dedicated members to join our
            organization! If you are interested in giving back to the community
            then follow our socials to stay up to date on our events and
            fundraisers. There are no requirements to join, you are welcome to
            join at any time!
          </p>
          <div className="w-full flex items-center justify-center ">
            <ul className="md:w-[250px] w-[150px] flex md:p-6 p-4 bg-[#f7aa80] mt-4 md:mt-8 text-blue-700 rounded-full justify-between items-center duration-300 hover:scale-110">
              {socials.map(({ id, url, icon, text }) => {
                return (
                  <li
                    className="hover:scale-125 hover:text-orange-600 duration-500"
                    key={id}
                  >
                    <a href={url} target="_blank" rel="noreferrer">
                      {icon}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={Join}
            alt="about1"
            className="lg:w-[450px] lg:h-[500px] md:w-[260px] md:h-[310px] w-[175px] h-[210px] md:mt-8  m-5 object-cover rounded-2xl shadow-lg shadow-black"
          />
        </div>
      </div>
    </Parallax>
  );
};

export default JoinChange;
