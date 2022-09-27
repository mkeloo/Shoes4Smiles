import React from 'react';
import logo from '../assets/Pics/Untitled_Artwork.png';

import { HiOutlineMail, HiUserGroup } from 'react-icons/hi';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import { Parallax } from 'react-scroll-parallax';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import pic5 from '../assets/Pics/pic5.jpg';
import pic4 from '../assets/Pics/pic4.jpg';
import pic2 from '../assets/Pics/pic2.jpg';
import pic3 from '../assets/Pics/pic3.jpg';

const Hero = () => {
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
      url: 'mailto:ufshoes4smiles@gmail.com',
      icon: <HiOutlineMail size={35} />,
      text: 'Email',
    },
    {
      id: 4,
      url: 'https://web.groupme.com/join_group/89159667/TU2zA1rK',
      icon: <HiUserGroup size={35} />,
      text: 'GroupMe',
    },
  ];

  const images = [
    {
      id: 1,
      src: pic5,
      alt: 'pic5',
    },
    {
      id: 2,
      src: pic2,
      alt: 'pic2',
    },
    {
      id: 3,
      src: pic3,
      alt: 'pic3',
    },
    {
      id: 4,
      src: pic4,
      alt: 'pic4',
    },
  ];

  return (
    <Parallax
      // translateY={['-20px', '20px']}
      id="home"
      className="w-full h-screen z-back "
    >
      <Parallax
        id="home"
        className="w-full top-[-8.5%]  md:top-[-9.5%] 2xl:top-[-10.9%] h-[114%] lg:h-[115.5%] absolute z-middle flex flex-col font-bold justify-center items-center text-orange-600 px-4 text-center bg-black/50"
      >
        <Parallax
          translateY={['-40px', '70px']}
          className="flex flex-col justify-center mt-8 md:mt-0  w-full py-2"
        >
          <div className="flex items-center justify-center">
            <img
              src={logo}
              alt="/"
              className="opacity-60 flex items-center justify-center object-fit w-[500px] h-[300px] lg:w-[700px] lg:h-[500px]  mb-2"
            />
          </div>
          <p className=" text-white font-rubik px-2 mt-0 lg:text-2xl text-xl">
            Providing shoes and other necessities to people in local,
            disadvantaged communities.
          </p>
        </Parallax>
        <Parallax
          translateY={['-40px', '110px']}
          className="w-[250px] lg:hidden"
        >
          <ul className="flex p-6 bg-[#f7aa80] mt-8 rounded-full justify-between items-center">
            {socials.map(({ id, url, icon }) => {
              return (
                <li key={id} className="duration-300 hover:scale-110">
                  <a href={url} target="_blank" rel="noreferrer">
                    {icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </Parallax>
      </Parallax>

      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        // top-[70px]
        className="object-cover  absolute h-screen  top-[63px] w-screen z-back "
      >
        {images.map(({ id, src, alt }) => {
          return (
            <SwiperSlide key={id} className="">
              <div className="">
                <img
                  src={src}
                  alt={alt}
                  className="object-cover top-[-2.3%] md:top-[2.3%] lg:top-[-2%]	h-full w-full fixed -z-10"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Parallax>
  );
};

export default Hero;
