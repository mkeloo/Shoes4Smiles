import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
// import { Link } from 'react-router-dom';
// import logo from '../assets/logo.png';

const NavbarSide = () => {
  // Navbar State
  const [nav] = useState(true);

  // navbar hide
  const ref = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [isMenuOpen]);

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
  // bg-[#FFF5E4]

  return (
    // lg screen classes: md:rounded-none md:mt-0  border-[5px] border-orange-600
    <div className="fixed z-front lg:bg-[#FFF5E4] bg-black-gradient-2 shadow-lg rounded-full  mt-4   h-[80px] flex justify-between w-screen items-center px-5 text-blue-600 font-poppins ">
      {/* text-[#3120E0] */}
      <h1 className="w-full text-3xl font-bold text-blue-600 logo ml-3 mb-2 duration-500">
        <span className="">
          Shoes
          <span className="text-5xl   text-orange-600">4</span>
          Smiles
        </span>
      </h1>

      {/* <img src={logo} alt="/" className="object-fit w-[120px] h-[120px]" /> */}
      <ul className="hidden md:flex">
        {links.map((link) => {
          const { id, title } = link;
          return (
            <li
              key={id}
              className="p-4 hover:text-white lg:text-[18px]  md:text-sm font-bold duration-300 link link-underline link-underline-black"
            >
              {title}
            </li>
          );
        })}
      </ul>

      {/* Hamburger Menu */}
      <div
        onClick={() => setIsMenuOpen(true)}
        className="md:hidden z-[100] text-[#3120E0] cursor-pointer"
      >
        {isMenuOpen && nav ? (
          <AiOutlineClose size={30} />
        ) : (
          <AiOutlineMenu size={30} />
        )}
      </div>

      {/* Mobile Menu */}
      {/* Floating Navbar Design */}
      <div
        className={`${nav ? 'flex' : 'hidden'} p-6 md:hidden z-front text-xl ${
          isMenuOpen && 'bg-black-gradient '
        }  absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        ref={ref}
      >
        {isMenuOpen && (
          <ul className="list-non flex flex-col justify-end items-center flex-1 ">
            {links.map(({ id, url, title }) => (
              //   <Link
              //     to={url}
              //     smooth={true}
              //     duration={500}
              //     spy={true}
              //     exact="true"
              //     offset={-80}
              //   >
              <li
                key={id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  id === links.length ? 'mr-0' : 'mb-4'
                } text-[#FFF5E4]`}
              >
                <span className=" font-bold hover:text-yellow-300 pb-2 ">
                  <a href={url}>{title}</a>
                </span>
              </li>
              //   </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavbarSide;
