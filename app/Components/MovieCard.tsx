import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

interface Movie {
    id: number;
    title?: string;
    name?: string;
    vote_average?: number;
    poster_path?: string;
    overview?: string;
    original_language?: string;
  }

const MovieCard = ({ title, vote_average, poster_path, overview, original_language }:Movie) => {
  return (
    <motion.div className="relative max-w-[243px] h-[300px] overflow-hidden shadow-lg block my-4 mx-2 bg-white dark:bg-slate-800" whileHover={{ zIndex: 1 }}>
      <motion.img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        className="absolute w-full h-full flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ opacity: 0.3, filter: "blur(5px)" }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className="relative top-0 left-0 w-full h-full flex flex-col justify-center items-start p-5 bg-[rgba(0,0,0,0.817)] text-white opacity-0 transition-opacity ease-linear font-sans"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-2xl">{title}</h3>
        <p className="mt-1 text-base"><span className="text-aquamarine text-lg mr-1">Language:</span> {original_language?.toUpperCase()}</p>
        <p className="mt-1 text-base">
          <span className="text-yellow-400 text-lg mr-1">Rating:</span>
          <span className="inline-block"><FaStar /></span>
          {vote_average?.toFixed(1)}
        </p>
        <p className="mt-1 overflow-hidden text-ellipsis text-sm -webkit-line-clamp-3 box-orient-vertical line-clamp-2 -webkit-box">
          <span className="text-red-500 text-lg mr-1">Overview:</span> {overview}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default MovieCard;