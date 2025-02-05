"use client"

import React, { useEffect, useState } from 'react'
import { MdLocalMovies, MdTv } from 'react-icons/md'
import { RxAlignBottom } from 'react-icons/rx'
import ShowCard from "../ShowCard"
import MovieCard from '../MovieCard'; // Ensure this path is correct and the file exists

interface Movie {
  id: number;
  title?: string;
  name?: string;
  vote_average?: number;
  poster_path?: string;
  overview?: string;
  original_language?: string;
}

interface Show {
  id: number;
  title?: string;
  name?: string;
  vote_average?: number;
  poster_path?: string;
  overview?: string;
  original_language?: string;
}

const MainPage = () => {

  //For latest movies

  const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([]);

  const getNowPlayingMovies = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        const moviesData = json.results.map((movie:Movie) => ({
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


  // For latest tv shows

  const [nowPlayingShows, setNowPlayingShows] = useState<Show[]>([]);

  const getNowPlayingShows = () => {
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        const ShowData = json.results.map((show:Show) => ({
          id: show.id,
          name: show.name || "Show Title",
          vote_average: show.vote_average,
          poster_path: show.poster_path,
          overview: show.overview,
          original_language: show.original_language,
        }));
        setNowPlayingShows(ShowData);
        console.log(setNowPlayingShows(ShowData))
      })
      .catch((error) =>
        console.error("Error fetching now-playing movies:", error)
      );
  };

  useEffect(() => {
 
    getNowPlayingShows();
  }, []);



  return (
    <>
   
{/* ///-----for latest movies---- */}

    <div className="mt-8 mx-4 h-auto bg-slate-400 dark:bg-slate-900 ">
       <div className="flex flex-wrap mt-8">
        <div className='flex items-center gap-4 ml-4 my-6'>
        <RxAlignBottom className='text-3xl text-semibold text-yellow-500' /> <MdLocalMovies className='text-3xl text-semibold text-black dark:text-white' /> <div className='text-3xl text-semibold text-black dark:text-white'>Latest Movies</div>
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
            />
          ))}
        </div>
       </div>
    </div>


{/* //----For latest tv shows----- */}

    <div className="mt-8 mx-4 h-auto bg-slate-400 dark:bg-slate-900 ">
       <div className="flex flex-wrap mt-8">
        <div className='flex items-center gap-4 ml-4 my-6'>
        <RxAlignBottom className='text-3xl text-semibold text-yellow-500' /> <MdTv className='text-3xl text-semibold text-black dark:text-white' /> <div className='text-3xl text-semibold text-black dark:text-white'>Latest Tv Shows</div>
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
            />
          ))}
        </div>
       </div>
    </div>




    </>
  )
}

export default MainPage
