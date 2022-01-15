import React from "react";
import Poster from "../Poster/poster.component";
import settings from "../../config/PosterCarousal.config";
import Slider from "react-slick";

const PosterSlider = (props) =>{
  return(
    <>
    <div className="flex flex-col items-start gap-2">
      <h3 className={`text-2xl font-bold sm:text-center
      ${props.isDark ? "text-white" : "text-gray-800"}`}>{props.title}</h3>

      <p className={`text-xl font-bold
      ${props.isDark ? "text-white" : "text-gray-800"}`}>{props.subtitle}</p>
    </div>
        <Slider {...settings}>
            {props.images.map((image)=>
                <Poster {...image} isDark={props.isDark}/>
              )}
        </Slider>
    </>
  );
};

export default PosterSlider;
