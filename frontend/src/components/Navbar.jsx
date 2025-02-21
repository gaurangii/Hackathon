import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  
  return (
    <>
  <nav className='top-0 right-0 w-full p-8 mr-8 z-50'>
  <div className='flex justify-end items-center px-12'>
    <ul className="flex space-x-16 items-center font-bold text-2xl text-white">
      <li className="hover:text-gray-300 cursor-pointer"><a href="/">Home</a></li>
      <li className="hover:text-gray-300 cursor-pointer"><a href="/about">About Us</a></li>
      <li className="hover:text-gray-300 cursor-pointer"><a href="/upload">Demo</a></li>
      <li className="hover:text-gray-300 cursor-pointer"><a href="/contact-us">Contact Us</a></li>
    </ul>
  </div>
</nav>
    </>
  );
};

export default Navbar;