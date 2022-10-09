import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMail, HiUserGroup } from 'react-icons/hi';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import logo from '../assets/Pics/logo2.png';
import { Link } from 'react-scroll';

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

  const socials = [
    {
      id: 1,
      url: 'https://www.instagram.com/ufshoes4smiles/?hl=en',
      icon: <FaInstagram size={30} />,
      text: 'Instagram',
    },
    {
      id: 2,
      url: 'https://www.facebook.com/ufshoes4smiles',
      icon: <FaFacebook size={30} />,
      text: 'Facebook',
    },
    {
      id: 3,
      url: 'mailto:ufshoes4smiles@gmail.com',
      icon: <HiOutlineMail size={30} />,
      text: 'Email',
    },
    {
      id: 4,
      url: 'https://web.groupme.com/join_group/89159667/TU2zA1rK',
      icon: <HiUserGroup size={30} />,
      text: 'GroupMe',
    },
  ];

  const links = [
    {
      id: 1,
      title: 'Home',
      url: 'home',
    },
    {
      id: 2,
      title: 'About',
      url: 'about',
    },
    {
      id: 3,
      title: 'Join Us',
      url: 'join',
    },
    {
      id: 4,
      title: 'Contact',
      url: 'contact',
    },
    {
      id: 5,
      title: 'Calendar',
      url: 'calendar',
    },
  ];

  const mobileLinks = [
    {
      id: 1,
      title: 'Home',
      url: 'home',
    },
    {
      id: 2,
      title: 'About',
      url: 'about',
    },
    {
      id: 3,
      title: 'Shoe Drive',
      url: 'shoedrive',
    },
    {
      id: 4,
      title: 'Join Us',
      url: 'join',
    },
    {
      id: 5,
      title: 'Contact',
      url: 'contact',
    },
    {
      id: 6,
      title: 'Calendar',
      url: 'calendar',
    },
  ];
  // bg-[#FFF5E4]

  return (
    // lg screen classes: md:rounded-none md:mt-0  border-[5px] border-orange-600
    <div
      className="fixed z-front bg-[#f7aa80] shadow-lg  h-[80px] flex justify-between w-screen items-center px-2 pr-4 
    text-blue-600 font-poppins "
    >
      <img
        src={logo}
        alt="logo"
        className="w-[220px] lg:ml-5 ml-2 h-[70px] hover:scale-110 duration-500"
      />

      {/* <img src={logo} alt="/" className="object-fit w-[120px] h-[120px]" /> */}
      <ul className="hidden md:flex">
        {links.map(({ id, url, title }) => {
          return (
            <Link
              to={url}
              smooth={true}
              duration={1100}
              spy={true}
              exact="true"
              offset={-80}
            >
              <li
                key={id}
                className="p-4 hover:text-[#ff3333] lg:text-[18px]  md:text-sm font-bold duration-300 link link-underline link-underline-black"
              >
                {title}
              </li>
            </Link>
          );
        })}
        <Link
          to={'shoedrive'}
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-90}
        >
          <button className="p-3 bg-orange-600 rounded-lg font-bold text-white shadow-md shadow-orange-900  hover:scale-110 hover:text-orange-200 duration-300">
            Shoe Drive
          </button>
        </Link>
      </ul>

      {/* Hamburger Menu */}
      <div
        onClick={() => setIsMenuOpen(true)}
        className="md:hidden z-[100] text-orange-800 cursor-pointer"
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
            {mobileLinks.map(({ id, title, url }) => (
              <Link
                to={url}
                smooth={true}
                duration={900}
                spy={true}
                exact="true"
                offset={-50}
              >
                <li
                  key={id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${
                    id === mobileLinks.length ? 'mr-0' : 'mb-4'
                  } text-[#FFF5E4]`}
                >
                  <span className="font-bold hover:text-blue-500 pb-2 ">
                    <a href={url}>{title}</a>
                  </span>
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>

      {/* Social icons */}
      {/* Fixed Media Query for Medium devices */}

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          {socials.map((social) => {
            const { id, url, icon, text } = social;
            return (
              <li
                key={id}
                className="w-[180px] h-[60px] flex justify-between items-center ml-[-125px] hover:ml-[-2px] duration-500 rounded-md  bg-orange-600"
                // bg-[#f7aa80]
              >
                <a
                  className="flex justify-between text-xl px-2 m-2 items-center w-full font-bold hover:text-blue-800 text-white"
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {text} {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NavbarSide;
