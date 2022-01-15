import React from "react";

const MoviePoster = (props) =>{
  return(
    <>
        <div className="flex flex-col items-center gap-2 px-3 my-5">
          <div className="h-40 block text-center">
              <img src={props.src} alt={props.title} className="w-full h-full rounded-full"/>
          </div>
          <h3 className={`text-md font-bold
          ${props.isDark ? "text-white":"text-gray-700"}`}>{props.title}</h3>

          <p className={`text-sm font-bold
          ${props.isDark ? "text-white":"text-gray-200"}`}>{props.subtitle}</p>
        </div>
    </>
  );
};

export default MoviePoster;
