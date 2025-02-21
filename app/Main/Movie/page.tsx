"use client";

import React, { useEffect, useState } from "react";
import {
  DarkModeProvider,
} from "../../ThemeToggle/themeToggle";
import MainNavbar from "@/app/Components/MainNavbar";
import { FaGripLinesVertical } from "react-icons/fa";
import { RiMovie2AiFill } from "react-icons/ri";
import MovieCard from "@/app/Components/Card/MovieCard";
import Footer from "@/app/Components/Footer";

interface Movie {
  id: number;
  title?: string;
  name?: string;
  vote_average?: number;
  poster_path?: string;
  overview?: string;
  original_language?: string;
  release_date?: string;
}

const Movie = () => {
  // const darkModeContext = useContext(DarkModeContext);
  // const { isDarkMode, setIsDarkMode } = DarkModeContext;

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([]);

  const getNowPlayingMovies = (page: number) => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=${page}`
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
          release_date: movie.release_date,
        }));
        setNowPlayingMovies(moviesData);
        setTotalPages(json.total_pages);
      })
      .catch((error) =>
        console.error("Error fetching now-playing movies:", error)
      );
  };

  useEffect(() => {
    window.scrollTo({top:0, behavior:"smooth"});
    getNowPlayingMovies(currentPage);
  }, [currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="bg-[linear-gradient(to_left,rgba(147,197,253,0.3),rgba(100,116,139,0.3),rgba(103,232,249,0.3))]  dark:bg-darkTheme/70 overflow-hidden">
      <DarkModeProvider>
        <MainNavbar />
        <div
          className="mt-4 mx-4 h-auto rounded-lg 
                bg-[linear-gradient(to_left,rgba(147,197,253,0.9),rgba(100,116,139,0.5),rgba(103,232,249,0.9))] 
                dark:bg-[linear-gradient(to_left,rgba(107,114,128,0.7),rgba(71,85,105,1),rgba(31,41,55,0.7))]"
        >
          <div className="flex flex-wrap mt-8">
            <div className="flex justify-center items-center gap-2 ml-4 my-4">
              <FaGripLinesVertical className="text-3xl text-semibold text-yellow-500" />
              <div className="text-3xl text-semibold font-Ovo text-black dark:text-white">
                <strong>Latest Movies</strong>
              </div>
              <RiMovie2AiFill className="text-3xl text-semibold text-black dark:text-white" />{" "}
            </div>
            <div className="flex flex-wrap justify-center cursor-pointer">
              {nowPlayingMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  vote_average={movie.vote_average}
                  poster_path={movie.poster_path}
                  overview={movie.overview}
                  original_language={movie.original_language}
                  release_date={movie.release_date}
                />
              ))}
            </div>
            
          </div>
          <div className="flex justify-center items-center">
              <div className="flex justify-center items-center gap-4 mt-6 mb-6">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-md ${
                    currentPage === 1
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-500 hover:bg-blue-600 text-white"
                  }`}
                >
                  Prev
                </button>

                <span className="text-lg text-black dark:text-white">
                  Page {currentPage} of {totalPages}
                </span>

                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-md ${
                    currentPage === totalPages
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-500 hover:bg-blue-600 text-white"
                  }`}
                >
                  Next
                </button>
              </div>
            </div>
        </div>
        <Footer/>
      </DarkModeProvider>
    </div>
  );
};

export default Movie;
