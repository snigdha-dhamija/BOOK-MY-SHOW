import React from "react";
import MovieHero from "../components/MovieHero/MovieHero.component";
import PosterSlider from "../components/PosterSlider/Posterslider.component";
import CastImages from "../config/moviePoster1.config";
import CrewImages from "../config/moviePoster2.config";

import { BiCameraMovie } from "react-icons/bi";

const Movie = () =>{
  return(
    <>
      <MovieHero/>
      <div className="container my-12 mx-auto px-4 lg:w-1/2 lg:ml-64">
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
          <p>Shang-Chi and The Legend of The Ten Rings features Simu Liu as Shang-Chi, who must confront the past he thought he left behind when
            he is drawn into the web of the mysterious Ten Rings organization. The film is directed by Destin Daniel Cretton and produced by Kevin
            Feige and Jonathan Schwartz.</p>
        </div>

        <div className="my-8">
          <hr/>
        </div>

        <div className="flex flex-col gap-3 items-start">
          <h1 className="text-gray-800 font-bold text-2xl">Applicable Offers</h1>
          <div className="flex items-start gap-2 bg-yellow-100 border-yellow-400 border-2 border-dashed rounded-md p-3 w-96">
            <div className="w-8 h-8"><BiCameraMovie className="w-full h-full"/></div>
            <div className="flex flex-col items-start">
              <h3 className="text-gray-900 text-lg">Filmy Pass</h3>
              <p className="text-gray-600 text-sm">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
          </div>
          </div>
        </div>

        <div className="my-8">
          <hr/>
        </div>

        <h1 className="font-bold text-2xl my-8 text-black">Cast</h1>
        
        <div className="container mx-auto p-4">
          <PosterSlider images={CastImages} isDark={false}/>
        </div>

        <div className="my-8">
          <hr/>
        </div>

        <h1 className="font-bold text-2xl my-8 text-black">Crew</h1>

        <div className="container mx-auto p-4">
          <PosterSlider images={CrewImages} isDark={false}/>
        </div>

      </div>

    </>
  );
};

export default Movie;
