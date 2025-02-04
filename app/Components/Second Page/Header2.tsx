"use client";

import Image from "next/image";

import {
  FaChevronRight,
  FaChevronLeft,
  FaTwitterSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaGithub,
  FaStar,
} from "react-icons/fa";

// import { assets } from "@/assets/assets";
import { useEffect, useState } from "react";

const Header2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  //This is fall back image place holder if the movie image didn't get fetched
  const fallbackImage = "https://via.placeholder.com/150";

  interface Movie {
    id: number;
    title?: string;
    name?: string;
    vote_average?: number;
    poster_path?: string;
    overview?: string;
    original_language?: string;
  }

  ///For getting the same trending movies but for movie slider (all of the poular movie that have been fetched)

  const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([]);

  const getNowPlayingMovies = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        const moviesData = json.results.map((movie: Movie) => ({
          id: movie.id,
          title: movie.title || "Movie Title",
          vote_average: movie.vote_average,
          poster_path: movie.poster_path,
          overview: movie.overview,
          original_language: movie.original_language,
        }));
        setNowPlayingMovies(moviesData);
      })
      .catch((error) =>
        console.error("Error fetching now-playing movies:", error)
      );
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const nextMovie = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % nowPlayingMovies.length);
  };

  const prevMovie = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + nowPlayingMovies.length) % nowPlayingMovies.length
    );
  };

  ///For Getting Trending Movies (only 3 movies for the trending Movies Section)

  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);

  const getTrendingMovies = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        const moviesData = json.results.slice(0, 3).map((movie: Movie) => ({
          id: movie.id,
          title: movie.title || "Movie Title",
          vote_average: movie.vote_average,
          poster_path: movie.poster_path,
          overview: movie.overview,
          original_language: movie.original_language,
        }));
        setTrendingMovies(moviesData);
      })
      .catch((error) =>
        console.error("Error fetching trending movies:", error)
      );
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);

  return (
    <div className="flex flex-col md:flex-row mt-8 mx-4 bg-slate-300 dark:bg-gradient-to-b from-gray-800 via-black to-black p-4">
      <div className="relative w-full md:w-3/4 flex flex-col items-center">
        {/* ---Movie slider section--- */}

        <div className="relative w-full max-w-4xl rounded-lg bg-gradient-to-l from-gray-800 via-black to-slate-700 cursor-pointer ">
          {nowPlayingMovies.length > 0 && (
            <Image
              className="w-full h-[500px] max-w-4xl object-contain mx-auto rounded-lg shadow-lg"
              src={
                nowPlayingMovies[currentIndex]?.poster_path?.includes("http")
                  ? nowPlayingMovies[currentIndex].poster_path
                  : `https://image.tmdb.org/t/p/w500${nowPlayingMovies[currentIndex]?.poster_path}`
              }
              alt={nowPlayingMovies[currentIndex].title || "Movie title"}
              width={300}
              height={450}
            />
          )}
          {nowPlayingMovies.length > 0 && (
            <div className="flex flex-col justify-start absolute bottom-0.5 bg-slate-900/30 left-5.5 w-full transfo p-6 text-white rounded-lg">
              <h2 className="text-4xl font-bold text-left">
                {nowPlayingMovies[currentIndex].title || "Movie Title"}
              </h2>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-yellow-400 flex items-center">
                  <FaStar className="mr-1" />
                  {nowPlayingMovies[currentIndex].vote_average?.toFixed(1)}
                </span>
                <span className="bg-gray-700 px-2 py-1 rounded">
                  {nowPlayingMovies[currentIndex].original_language?.toUpperCase()}
                </span>
              </div>
              <p className="mt-4 text-sm text-white line-clamp-2 text-left">
                {nowPlayingMovies[currentIndex].overview}
              </p>
            </div>
          )}
        </div>
        <button
          onClick={prevMovie}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-black bg-gray-300 p-2 rounded hover:opacity-60"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextMovie}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black bg-gray-300 p-2 rounded hover:opacity-60"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* ---Trending Movies Section--- */}

      <div className="w-full md:w-1/3 flex flex-col space-y-6 p-4 cursor-pointer">
        {trendingMovies.map((movie) => (
          <div
            key={movie.id}
            className="flex bg-gray-900 p-3 rounded-lg shadow-md hover:bg-darkHover hover:scale-105 transition duration-100"
          >
            <Image
              className="w-20 h-24 object-cover rounded"
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : fallbackImage
              } // TMDB image URL
              alt={movie.title || "Movie title"}
              width={80}
              height={120}
            />
            <div className="ml-4 text-white">
              <div className="flex items-center space-x-2">
                <span className="text-yellow-400 flex items-center">
                  <FaStar className="mr-1" /> {movie.vote_average?.toFixed(1)}
                </span>
                <span className="bg-gray-700 px-2 py-1 rounded">
                  {movie.original_language?.toUpperCase()}
                </span>
              </div>
              <h3 className="text-[18px] font-semibold mt-1">
                {movie.title || "Movie Title"}
              </h3>
              <p className="text-[12px] text-gray-300 line-clamp-2">
                {movie.overview}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ---Social Section--- */}

      <div className="w-full md:w-1/4 flex flex-col space-y-4 p-4 text-white">
        {[
          { icon: FaTwitterSquare, name: "Twitter" },
          { icon: FaInstagramSquare, name: "Instagram" },
          { icon: FaGithub, name: "GitHub" },
          { icon: FaLinkedin, name: "LinkedIn" },
        ].map((social, index) => (
          <button
            key={index}
            className="flex items-center space-x-2 bg-gray-900 p-2 rounded hover:bg-darkHover"
          >
            <social.icon className="text-xl" />
            <span>{social.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header2;
