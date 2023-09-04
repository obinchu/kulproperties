import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp,BsTelephone,BsLinkedin } from "react-icons/bs";
import {PiEnvelopeSimpleThin} from 'react-icons/pi'
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";


const Footer = () => {
  return (
    <div className="w-full bottom-0 left-0 max-h-[95vh] md:h-[50vh] text-sm bg-primary text-white flex flex-col ">
    <div className='block md:flex md:max-w-7xl w-full mmax-h-[85%] md:h-[75%] m-auto  p-2 border-b-2 border-white'>
      <div className="flex flex-col w-full mx-1 ">
        <div className="flex flex-col max-h-[30%]">
        <span className="text-xl font-medium">KUL PROPERTIES</span>
        <p className="mt-2">Let us guide you every step of the way in making your dream home a reality.</p>
        </div>
        <div className="flex flex-col max-h-[50%] justify-center">
        <span className="flex my-2"><CiLocationOn className="me-1" size={20}/> East Wing Court, Kenyatta Road, Kenya.</span>
        <span className="flex my-2"><BsTelephone  className="me-1" size={20}/>+254-7-46-895-735</span>
        <span className="flex my-2"><PiEnvelopeSimpleThin className="me-1" size={20}/>info@kulproperties.com</span>
      </div>

      </div>
     
      <div className="flex flex-col mt-3 md:mt-0 mx-1  w-full">
        <span className="text-xl font-medium">Quick Links</span>
      <div className="flex  w-full ">
      <div className="flex flex-col w-full mx-2">
        <span className="py-2  hover:font-semibold hover:cursor-pointer">About</span>
        <span className="py-2  hover:font-semibold hover:cursor-pointer">Blog</span>
        <span className="py-2  hover:font-semibold hover:cursor-pointer">All Products</span>
        <span className="py-2 hover:font-semibold cursor-pointer">Locations</span>
      </div>
      <div className="flex flex-col w-full ">
        <span className="py-2  hover:font-semibold cursor-pointer">Order Tracking</span>
        <span className="py-2  hover:font-semibold cursor-pointer">Wish List</span>
        <span className="py-2  hover:font-semibold cursor-pointer">Login</span>
        <span className="py-2 hover:font-semibold cursor-pointer">My Account</span>
      </div>
      </div>
     
      </div>
   
      <div className="flex flex-col w-full mx-1 mt-2 md:mt-0">
        <span className="text-xl font-medium">News Letter</span>
        <p>Sign Up for Our Newsletter to get Latest Updates and Offers. Subscribe to receive news in your inbox.</p>
        <input
              className="md:w-[70%] text-center p-4 my-2 mx-1 md:p-2 bg-secondary/50 text-other outline-none"
              type="email"
              placeholder="email address"
            />
            <button
              type="submit"
              className=" md:w-[70%] p-2 bg-secondary/70 font-medium mx-1 text-base text-white hover:bg-secondary"
            >
              Subscribe
            </button>
      </div>
    </div>
    <div className="flex flex-col my-1 md:my-6 mx-auto">
            <ul className="flex mt-2 mx-auto ">
              <li className="m-1 hover:text-blue-600">
                <a href="">
                  <BsFacebook size={25} />
                </a>
              </li>
              <li className="m-1 hover:text-pink-400 ">
                <a href="">
                  <BsInstagram size={25} />
                </a>
              </li>
              <li className="m-1 hover:text-blue-400">
                <a href="">
                  <BsTwitter size={25} />
                </a>
              </li>
              <li className="m-1 hover:text-blue-500 ">
                <a href="">
                  <BsLinkedin size={25} />
                </a>
              </li>
              <li className="m-1 hover:text-green-600 ">
                <a href="">
                  <BsWhatsapp size={25} />
                </a>
              </li>
            </ul>
            <span className=" mx-auto text-sm flex">
              <AiOutlineCopyrightCircle size={20} /> 2023 markmuga. All Rights Reserved
            </span>
          </div>
  </div>
  
  );
};

export default Footer;
