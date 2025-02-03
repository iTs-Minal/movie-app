import Image from "next/image";

import { FaChevronRight, FaChevronLeft, FaTwitterSquare, FaLinkedin, FaInstagramSquare, FaGithub, FaStar } from "react-icons/fa";

import { assets } from "@/assets/assets";

const Header2 = () => {
  return (
    <div className="flex flex-col md:flex-row mt-8 mx-4 bg-gradient-to-b from-gray-800 via-black to-black p-4">
      <div className="relative w-full md:w-3/4 flex flex-col items-center">
      <div className="relative w-full max-w-4xl">
          <Image className="w-full h-auto max-w-4xl mx-auto rounded-lg shadow-lg" src={assets.johnwick4} alt="John Wick 4" />
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 p-6 text-white text-center rounded-lg">
            <h2 className="text-4xl font-bold">John Wick 4</h2>
            <div className="flex items-center justify-center space-x-2 mt-2">
              <span className="text-yellow-400 flex items-center"><FaStar className="mr-1" /> 8.3</span>
              <span className="bg-gray-700 px-2 py-1 rounded">HD</span>
            </div>
            <p className="mt-4 text-sm text-gray-300 line-clamp-3">
              This movie is about a man who avenges the people who killed his dog given by his wife. In his journey of revenge, he faces great difficulties.
            </p>
          </div>
        </div>
        <button className="absolute left-2 top-1/2 transform -translate-y-1/2 text-black bg-gray-300 p-2 rounded hover:opacity-60">
          <FaChevronLeft />
        </button>
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black bg-gray-300 p-2 rounded hover:opacity-60">
          <FaChevronRight />
        </button>
      </div>

      <div className="w-full md:w-1/3 flex flex-col space-y-4 p-4">
        {[1, 2, 3].map((item) => (
          <div key={item} className="flex bg-gray-900 p-3 rounded-lg shadow-md">
            <Image className="w-20 h-24 object-cover rounded" src={assets.johnwick4} alt="Superman" />
            <div className="ml-4 text-white">
              <div className="flex items-center space-x-2">
                <span className="text-yellow-400 flex items-center"><FaStar className="mr-1" /> 8.3</span>
                <span className="bg-gray-700 px-2 py-1 rounded">HD</span>
              </div>
              <h3 className="text-lg font-semibold mt-1">Superman</h3>
              <p className="text-sm text-gray-300 line-clamp-2">A movie about Superman and his brave deeds of saving humanity.</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full md:w-1/4 flex flex-col space-y-3 p-4 text-white">
        {[{ icon: FaTwitterSquare, name: "Twitter" }, { icon: FaInstagramSquare, name: "Instagram" }, { icon: FaGithub, name: "GitHub" }, { icon: FaLinkedin, name: "LinkedIn" }].map((social, index) => (
          <button key={index} className="flex items-center space-x-2 bg-gray-900 p-2 rounded hover:bg-gray-700">
            <social.icon className="text-xl" />
            <span>{social.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header2;
