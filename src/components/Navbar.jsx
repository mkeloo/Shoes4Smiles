import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
// import logo from '../assets/logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  const links = [
    {
      id: 1,
      title: 'Home',
      url: '#',
    },
    {
      id: 2,
      title: 'About',
      url: '#',
    },
    {
      id: 3,
      title: 'Resources',
      url: '#',
    },
    {
      id: 4,
      title: 'Pictures',
      url: '#',
    },
    {
      id: 5,
      title: 'Contact',
      url: '#',
    },
  ];

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto lg:px-0 px-4 text-orange-600">
      <h1 className="w-full text-3xl font-bold text-orange-600 logo duration-500">
        <span className="">
          Shoes<span className="text-5xl text-blue-500">4</span>Smiles
        </span>
      </h1>

      {/* <img src={logo} alt="/" className="object-fit w-[120px] h-[120px]" /> */}
      <ul className="hidden md:flex">
        {links.map((link) => {
          const { id, title } = link;
          return (
            <li
              key={id}
              className="p-4 hover:text-[#ff3535] lg:text-[18px]  md:text-sm font-bold duration-300 link link-underline link-underline-black"
            >
              {title}
            </li>
          );
        })}
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      {/* Mobile Menu */}

      <div
        className={
          !nav
            ? 'md:hidden fixed left-0 top-0 w-[70%] h-full shadow-2xl shadow-orange-600 bg-[#FFF5E4] duration-300 ease-in-out'
            : 'fixed left-[-100%]'
        }
      >
        <p className="w-full text-4xl font-bold text-orange-600 logo pt-16 pb-16 pr-8 pl-8 duration-300">
          <span className="">
            Shoes<span className="text-5xl text-blue-500">4</span>Smiles
          </span>
        </p>
        <ul className=" uppercase p-4">
          {links.map((link) => {
            const { id, title } = link;
            return (
              <li
                key={id}
                className="p-4 hover:text-[#ff3c3c] text-[17px] md:text-sm font-bold duration-300 link link-underline link-underline-black"
              >
                {title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
