import React from 'react';
import Join from '../assets/Pics/join.jpg';
import { HiUserGroup } from 'react-icons/hi';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const JoinUs = () => {
  const socials = [
    {
      id: 1,
      url: 'https://www.instagram.com/ufshoes4smiles/?hl=en',
      icon: <FaInstagram size={35} />,
      text: 'Instagram',
    },
    {
      id: 2,
      url: 'https://www.facebook.com/ufshoes4smiles',
      icon: <FaFacebook size={35} />,
      text: 'Facebook',
    },
    {
      id: 3,
      url: 'https://web.groupme.com/join_group/89159667/TU2zA1rK',
      icon: <HiUserGroup size={35} />,
      text: 'GroupMe',
    },
  ];
  return (
    <div id="join" className="w-full h-screen py-20 px-20 mt-10">
      <div className="w-full items-center mx-auto flex justify-between m-5 p-12 gap-16">
        <div className="flex flex-col justify-between p-10">
          <h1 className="lg:text-6xl md:text-4xl text-blue-500 sm:text-3xl text-2xl font-bold py-2 mb-1">
            Join Us
          </h1>
          <p className="py-2 font-bold text-blue-500 text-3xl">
            Looking to get involved?
          </p>
          <p className="text-3xl">
            We are always looking for new and dedicated members to join our
            organization! If you are interested in giving back to the community
            then follow our socials to stay up to date on our events and
            fundraisers. There are no requirements to join, you are welcome to
            join at any time!
          </p>
          <div className="w-full flex items-center justify-center">
            <ul className="w-[250px] flex p-6 bg-[#f7aa80] mt-8 text-blue-700 rounded-full justify-between items-center">
              {socials.map(({ id, url, icon, text }) => {
                return (
                  <li key={id}>
                    <a href={url} target="_blank" rel="noreferrer">
                      {icon}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <img
          src={Join}
          alt="about1"
          className="w-[450px]  rounded-2xl shadow-lg shadow-black"
        />
      </div>
    </div>
  );
};

export default JoinUs;
