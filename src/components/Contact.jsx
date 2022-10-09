import React, { useState } from 'react';
import { BiSmile, BiWinkSmile } from 'react-icons/bi';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
  const [smile, setSmile] = useState(false);

  // email js functionality
  const form = useRef();
  const [value, setValue] = useState();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_w5a6z1g',
        'template_8tg0gme',
        form.current,
        'sEEZQsaQOx_rEz2MD'
      )
      .then(
        (result) => {
          console.log(result.text);
          setValue('');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // bg-[#f7aa80] rounded-2xl

  return (
    <div
      // translateX={['160px', '-200px']}
      id="contact"
      className="w-full h-full  flex justify-center items-center p-2  "
      data-aos="fade-down"
      data-aos-duration="600"
      data-aos-delay="300"
    >
      <div className="bg-[#f7aa80] rounded-2xl md:mx-0 md:p-0 mx-4 mt-8 flex">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col max-w-[600px] w-full my-5 px-8 "
        >
          <div className="pb-7 group">
            <h1 className="lg:text-6xl md:text-4xl text-blue-500  text-3xl font-bold py-6 pb-4">
              Contact Us
            </h1>
            <p className="text-md md:text-lg lg:text-2xl">
              If you have any questions or would like to get involved, please
              submit the form below or email us at{' '}
              <span className="text-md md:text-lg lg:text-2xl font-bold">
                ufshoes4smiles@gmail.com
              </span>
            </p>
          </div>
          <input
            className="border-2 rounded-lg p-3 flex bg-[#ccd6f6] mb-4"
            type="text"
            name="user_name"
            value={value}
            placeholder="Name"
            placeholderTextColor="black"
          />
          <input
            className="border-3 border-orange-500 rounded-lg p-3 flex bg-[#ccd6f6]  mb-4"
            type="email"
            name="user_email"
            value={value}
            placeholder="Email"
          />
          <textarea
            className="bg-[#ccd6f6] border-2 rounded-lg p-2 flex border-gray-300 mb-4"
            name="message"
            rows="8"
            value={value}
            placeholder="Message"
          ></textarea>
          <button
            // Change smile state on Hover
            onMouseEnter={() => setSmile(true)}
            onMouseLeave={() => setSmile(false)}
            type="submit"
            value="Send"
            className="text-black group md:text-lg border-4 px-3 py-2 md:px-3 md:py-4 border-black my-2 flex items-center justify-center hover:bg-orange-600 hover:font-bold hover:border-orange-900 duration-300 hover:scale-110 rounded-lg"
          >
            Let's Collaborate
            <span className="duration-300">
              {smile ? (
                <BiWinkSmile className="ml-3" size={35} />
              ) : (
                <BiSmile className="ml-3" size={35} />
              )}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
