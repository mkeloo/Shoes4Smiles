import React from 'react';
import Shoe1 from '../assets/Pics/shoeDr1.jpg';
import Shoe2 from '../assets/Pics/shoeDr2.jpg';
import Shoe3 from '../assets/Pics/shoeDr3.jpg';

const Shoedrive = () => {
  return (
    <section id="shoedrive" className="w-full h-full bg-orange-300">
      <div className="container mx-auto p-10 min-h-[400px]">
        <div className="flex flex-col lg:space-x-20 lg:flex-row">
          <div className="grid grid-cols-2 space-x-6 max-w-2xl  items-center lg:space-x-12">
            {/* images */}
            <div
              className="self-start"
              data-aos="fade-down"
              data-aos-offset="400"
            >
              <img src={Shoe1} alt="Shoe 1" className="mb-20" />
            </div>

            <div className="self-end" data-aos="fade-up">
              <img src={Shoe2} alt="Shoe 2" className="mt-[300px]" />
            </div>
            <div className="self-end" data-aos="fade-up">
              <img src={Shoe3} alt="Pic 3" className="h-[350px]" />
            </div>
          </div>
          {/* text */}
          <div
            className="flex-1 flex flex-col items-start justify-center mt-6 lg:mt-0"
            data-aos="fade-left"
            data-aos-offset="400"
          >
            <h1 className="lg:text-6xl md:text-4xl text-blue-500 sm:text-3xl text-2xl font-bold py-2 mb-12">
              Shoe Drive
            </h1>
            <p className="text-3xl mb-6">
              We host annual shoe drives in the Gainesville community. We clean
              the collected shoes and distribute them to people in need. Our
              shoe drive starts on{' '}
              <span className="text-blue-500">October 17th</span> and ends on
              <span className="text-blue-500"> November 18th.</span> <br />
              <br />
              We will be collecting shoes at the following locations:
              <ul className="list-disc text-blue-500">
                <li>The Hub</li>
                <li>Reitz Union</li>
                <li>UF Bookstore.</li>
              </ul>
              <br />
              <br />
              If you are unable to reach the drop off locations, you can also
              message us on our social media pages to arrange a pickup.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shoedrive;
