import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

function Footer() {
  return (
    <>
    
    <footer className="w-full bg-gray-900 text-white py-6 ">
        <div><h1 className="font-bold text-6xl ml-18 mt-8 mb-2 text-yellow-400">OptiHire</h1>
        <span className='text-l ml-18 mt-16'>Find the perfect candidate effortlessly. </span></div>
      <div>
      <div className="flex justify-center space-x-6">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-yellow-400 transition duration-300">
          <Facebook className="w-5 h-5 text-white" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-yellow-400 transition duration-300">
          <Instagram className="w-5 h-5 text-white" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-yellow-400 transition duration-300">
          <Twitter className="w-5 h-5 text-white" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-yellow-400 transition duration-300">
          <Linkedin className="w-5 h-5 text-white" />
        </a>
      </div>
      <p className="text-center text-gray-400 mt-6 text-sm">
        © {new Date().getFullYear()} OptiHire. All rights reserved.
      </p>
      </div>
    </footer>
    </>
  );
}

export default Footer;
