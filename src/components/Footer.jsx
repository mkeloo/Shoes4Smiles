import React from 'react';
import { HiOutlineMail, HiUserGroup } from 'react-icons/hi';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import FooterImage from '../assets/Pics/footer.png';
import Footer2 from './../assets/Pics/footer2.png';
import { Parallax } from 'react-scroll-parallax';

const Footer = () => {
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
  return (
    //
    <Parallax className="bg-orange-800 h-full w-full justify-between grid-cols-1 grid md:grid-cols-3 items-center  mx-auto py-4 px-3 md:py-16 md:px-4  text-gray-300">
      {/* <div className=""> */}
      {/* <h1 className="pt-1 pb-6 text-5xl lg:text-7xl font-bold logo">
          <span className="text-blue-500">
            Shoes<span className="text-6xl text-orange-500 ">4</span>Smiles
          </span>
        </h1> */}

      <Parallax
        translateX={['-100px', '200px']}
        className="md:flex hidden justify-center"
      >
        <img
          src={Footer2}
          alt=""
          className="w-[250px] h-[250px] justify-center object-contain"
        />
      </Parallax>

      <Parallax>
        <div className="flex justify-center">
          <img
            src={FooterImage}
            alt="footer"
            className="w-[250px] h-[250px] justify-center object-contain"
          />
        </div>
        <div className="flex justify-center">
          <div className="flex justify-between w-full md:w-[400px] my-6 mr-2">
            {socials.map((social) => {
              const { id, url, icon, text } = social;
              return (
                <a
                  key={id}
                  href={url}
                  className="duration-300 hover:scale-110 hover:text-blue-500 flex flex-col items-center"
                >
                  {icon}
                  <span className="text-sm">{text}</span>
                </a>
              );
            })}
          </div>
        </div>
      </Parallax>
      <Parallax
        translateX={['-100px', '200px']}
        className="md:flex hidden justify-center"
      >
        <img
          src={Footer2}
          alt="/"
          className="w-[250px] h-[250px] justify-center object-contain"
        />
      </Parallax>
    </Parallax>
    // </div>
  );
};

export default Footer;
