import React from 'react';
import {
  FaAngleDoubleUp,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';

const Footer = () => {
  return (
    <footer
      className="bg-[linear-gradient(to_top,rgba(147,197,253,0.3),rgba(103,232,249,0.6))]
      dark:bg-[linear-gradient(to_top,rgba(107,114,128,0.9),rgba(71,85,105,0.3),rgba(31,41,55,0.9))]
      dark:text-white w-full text-black py-10 mx-auto"
    >
      <div className="container mx-auto px-4 flex flex-col items-center space-y-8">
        {/* Go to Top Button */}
        <div>
          <a href="#top">
            <button
              className="flex items-center gap-3 px-6 py-3 rounded-full
              bg-[linear-gradient(to_top,rgba(147,197,253,0.9),rgba(103,232,249,0.9))]
              dark:bg-[linear-gradient(to_bottom,rgba(107,114,128,0.7),rgba(71,85,105,0.4),rgba(31,41,55,0.8))]
              hover:scale-105 transition-transform duration-300 shadow-md"
            >
              <strong>Go to Top</strong>
              <FaAngleDoubleUp size={20} />
            </button>
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6">
          <a
            href="#"
            aria-label="Twitter"
            className="text-gray-900 dark:text-black hover:text-blue-500 transition-colors duration-300"
          >
            <FaTwitter size={28} />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="text-gray-900 dark:text-black hover:text-pink-500 transition-colors duration-300"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="#"
            aria-label="GitHub"
            className="text-gray-900 dark:text-black hover:text-gray-500 transition-colors duration-300"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="text-gray-900 dark:text-black hover:text-blue-700 transition-colors duration-300"
          >
            <FaLinkedin size={28} />
          </a>
        </div>

        {/* Logo and Copyright */}
        <div className="text-center space-y-2">
          <h3 className="flex items-center justify-center text-2xl font-bold dark:text-black">
            Movie App
            <GoDotFill className="text-red-400 ml-1" />
          </h3>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
