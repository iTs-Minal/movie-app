import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

interface Show {
    id: number;
    title?: string;
    name?: string;
    vote_average?: number;
    poster_path?: string;
    overview?: string;
    original_language?: string;
    first_air_date
    ?:string,
  }

const ShowCard = ({ name, vote_average, poster_path, overview, original_language,first_air_date
}:Show) => {
  return (
    <motion.div 
          className="relative w-[244px] h-96 overflow-hidden shadow-lg my-4 mx-2 bg-white dark:bg-slate-800 rounded-lg"
          whileHover={{
            scale: 1,
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
            rotateY: 15,
            transition:{duration:0.5}
          }}
        >
          <motion.img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={name}
            className="w-full h-full object-cover rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ opacity: 0.1, filter: "blur(3px)" }}
            transition={{ duration: 0.5 }}
          />
           <motion.img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={name}
            className="w-full h-2/3 object-cover rounded-t-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ opacity: 0.5, filter: "blur(5px)" }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="absolute inset-0 flex flex-col justify-center p-4 bg-slate-800 bg-opacity-30 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg backdrop-filter backdrop-blur-md"
          >
            <h3 className="text-2xl font-Kanit font-bold">{name}</h3>
            <p className="text-sm mt-1">
              <span className="font-bold">Language: </span>
              {original_language?.toUpperCase()}
            </p>
            <p className="text-sm mt-1">
          <span className="font-bold text-aquamarine">Date: </span>
          {first_air_date
          }
        </p>
            <p className="text-sm mt-1 flex items-center">
              <FaStar className="text-yellow-400 mr-1" />
              {vote_average?.toFixed(1)}
            </p>
            <p className="text-sm mt-1 line-clamp-3">
              <span className="font-bold">Overview: </span>
              {overview}
            </p>
          </motion.div>
        </motion.div>
  );
};

export default ShowCard;