import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from "../assets/logo.png";

const Navbar = () => {
  
  return (
    <>
  <nav className='top-0 right-0 w-full p-8 mr-8 z-50'>
  <div className='flex justify-between items-center px-12'>
    {/* Logo on the left */}
    <div className="text-white text-3xl font-bold w-32 h-28">
      <img src={logo} alt="logo" />
    </div>

    {/* Nav Links on the right */}
    <ul className="flex space-x-16 items-center font-bold text-2xl text-white">
      <li className="hover:text-gray-300 cursor-pointer"><a href="/">Home</a></li>
      <li className="hover:text-gray-300 cursor-pointer"><a href="/about-us">About Us</a></li>
      <li className="hover:text-gray-300 cursor-pointer"><a href="/upload">Demo</a></li>
      <li className="hover:text-gray-300 cursor-pointer"><a href="/contact-us">Contact Us</a></li>
    </ul>
  </div>
</nav>

    </>
  );
};

export default Navbar;