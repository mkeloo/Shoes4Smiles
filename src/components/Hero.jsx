import React from 'react';
import logo from '../assets/logo.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Hero = () => {
  const images = [
    {
      id: 1,
      src: 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
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
        <div className="flex flex-col justify-center  w-full p-2">
          <div className="flex items-center justify-center">
            <img
              src={logo}
              alt="/"
              className="flex items-center justify-center object-fit w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]  mb-2"
            />
          </div>
          <p className=" text-orange-600 font-rubik px-2 lg:text-2xl text-xl">
            Providing shoes and other necessities to people in local,
            disadvantaged communities.
          </p>
        </div>
        <div>
          <button className="m-2 text-xl p-4">Use Defi</button>
          <button className="m-2 text-xl p-4">FAQ</button>
        </div>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        className="object-cover absolute h-screen w-screen z-back opacity-80"
      >
        {images.map(({ id, src, alt }) => {
          return (
            <SwiperSlide key={id} className="z-back">
              <div className="z-back">
                <img
                  src={src}
                  alt={alt}
                  className="object-cover h-full w-full absolute -z-10"
                />
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
