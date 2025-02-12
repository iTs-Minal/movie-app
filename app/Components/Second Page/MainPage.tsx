"use client";

import React, { useEffect, useState } from "react";
import { MdLocalMovies, MdTv } from "react-icons/md";
import ShowCard from "../ShowCard";
import MovieCard from "../MovieCard"; // Ensure this path is correct and the file exists
import { FaGripLinesVertical } from "react-icons/fa";

interface Movie {
  id: number;
  title?: string;
  name?: string;
  vote_average?: number;
  poster_path?: string;
  overview?: string;
  original_language?: string;
  release_date?:string;
}

interface Show {
  id: number;
  title?: string;
  name?: string;
  vote_average?: number;
  poster_path?: string;
  overview?: string;
  original_language?: string;
  first_air_date
?:string;
}

const MainPage = () => {
  //For latest movies

  const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([]);

  const getNowPlayingMovies = () => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
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
          release_date:movie.release_date,
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

  // For latest tv shows

  const [nowPlayingShows, setNowPlayingShows] = useState<Show[]>([]);

  const getNowPlayingShows = () => {
    fetch(
      `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        const ShowData = json.results.map((show: Show) => ({
          id: show.id,
          name: show.name || "Show Title",
          vote_average: show.vote_average,
          poster_path: show.poster_path,
          overview: show.overview,
          original_language: show.original_language,
          first_air_date
:show.first_air_date
,
        }));
        setNowPlayingShows(ShowData);
        console.log(setNowPlayingShows(ShowData));
      })
      .catch((error) =>
        console.error("Error fetching now-playing movies:", error)
      );
  };

  useEffect(() => {
    getNowPlayingShows();
  }, []);


  // ---for upcoming movies---

  const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);

  const getUpcomingMovies = () => {
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
          release_date:movie.release_date,
        }));
        setUpcomingMovies(moviesData);
      })
      .catch((error) =>
        console.error("Error fetching now-playing movies:", error)
      );
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);

  return (
    <>
      {/* ///-----for latest movies---- */}

      <div className="mt-4 mx-4 h-auto rounded-lg 
                bg-[linear-gradient(to_left,rgba(147,197,253,0.5),rgba(100,116,139,1),rgba(103,232,249,0.5))] 
                dark:bg-[linear-gradient(to_left,rgba(107,114,128,0.7),rgba(71,85,105,1),rgba(31,41,55,0.7))]">
        <div className="flex flex-wrap mt-8">
          <div className="flex justify-center items-center gap-2 ml-4 my-4">
            <FaGripLinesVertical className="text-3xl text-semibold text-yellow-500" />
            <div className="text-3xl text-semibold font-Ovo text-black dark:text-white">
              <strong>Latest Movies</strong>
            </div>
            <MdLocalMovies className="text-3xl text-semibold text-black dark:text-white" />{" "}
          </div>
          <div className="flex flex-wrap justify-center">
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
      </div>

      {/* //----For latest tv shows----- */}

      <div className="mt-4 mx-4 h-auto rounded-lg 
                bg-[linear-gradient(to_right,#93C5FD,#64748B,#67E8F9)] 
                dark:bg-[linear-gradient(to_right,#6B7280,#475569,#1F2937)]">
        <div className="flex flex-wrap mt-8">
          <div className="flex items-center gap-4 ml-4 my-4">
            <FaGripLinesVertical className="text-3xl text-semibold text-yellow-500" />{" "}
            <div className="text-3xl text-semibold font-Ovo text-black dark:text-white">
            <strong>Latest Tv Shows</strong>
            </div>
            <MdTv className="text-3xl text-semibold text-black dark:text-white" />{" "}
          </div>
          <div className="flex flex-wrap justify-center">
            {nowPlayingShows.map((show) => (
              <ShowCard
                key={show.id}
                id={show.id}
                name={show.name}
                vote_average={show.vote_average}
                poster_path={show.poster_path}
                overview={show.overview}
                original_language={show.original_language}
                first_air_date
={show.first_air_date
}
              />
            ))}
          </div>
        </div>
      </div>


      {/* ----Upcoming Movies---- */}
      <div className="mt-4 mx-4 h-auto rounded-lg 
                bg-[linear-gradient(to_left,rgba(147,197,253,0.5),rgba(100,116,139,1),rgba(103,232,249,0.5))] 
                dark:bg-[linear-gradient(to_left,rgba(107,114,128,0.7),rgba(71,85,105,1),rgba(31,41,55,0.7))]">
        <div className="flex flex-wrap mt-8">
          <div className="flex justify-center items-center gap-2 ml-4 my-4">
            <FaGripLinesVertical className="text-3xl text-semibold text-yellow-500" />
            <div className="text-3xl text-semibold font-Ovo text-black dark:text-white">
              <strong>Upcoming Movies</strong>
            </div>
            <MdLocalMovies className="text-3xl text-semibold text-black dark:text-white" />{" "}
          </div>
          <div className="flex flex-wrap justify-center">
            {upcomingMovies.map((movie) => (
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
      </div>


    </>
  );
};

export default MainPage;
