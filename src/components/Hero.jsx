import React from 'react';
import logo from '../assets/logo.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const Hero = () => {
  const images = [
    {
      id: 1,
      src: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x2.jpg',
      alt: 'cat',
    },
    {
      id: 2,
      src: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x2.jpg',
      alt: 'cat',
    },
    {
      id: 3,
      src: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x2.jpg',
      alt: 'cat',
    },
    {
      id: 4,
      src: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x2.jpg',
      alt: 'cat',
    },
    {
      id: 5,
      src: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x2.jpg',
      alt: 'cat',
    },
  ];

  return (
    <div className="w-full h-screen ">
      <div className="w-full top-[80px] h-[90%] absolute z-middle flex flex-col font-bold justify-center items-center text-orange-600 px-4 text-center ">
        <h1 className="text-6xl link link-underline link-underline-black">
          Decentralized
        </h1>
        <h1 className="py-2 link link-underline link-underline-black">
          <span className="blue">Trading</span> Protocol
        </h1>
        <p className="text-3xl py-4">
          Guaranteed liquidity trading for millions of users and top Ethereum
          applications.
        </p>
        <div>
          <button className="m-2">Use Defi</button>
          <button className="m-2">FAQ</button>
        </div>
      </div>

      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="object-cover absolute h-screen w-screen z-back opacity-80"
        autoplay={{ delay: 2000 }}
      >
        {images.map(({ id, src, alt }) => {
          return (
            <SwiperSlide key={id} className="z-back">
              <div className="z-back">
                <img src={src} alt={alt} className="z-back" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* <div className="z-back flex flex-col justify-between w-full font-rubik h-screen text-blue-600 text-center md:text-left">
        Insert COde After this */}
      {/* <div>  */}
    </div>
  );
};

export default Hero;
