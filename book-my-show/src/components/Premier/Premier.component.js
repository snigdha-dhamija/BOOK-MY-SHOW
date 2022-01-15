import React from "react";
import Slider from "react-slick";
import Poster from "../Poster/poster.component";
import settings from "../../config/PosterCarousal.config";
import PremierImages from "../../config/TempPosters.config";

const Premier = () =>{
  return(
    <>
    <div className="flex flex-col justify-center items-center gap-2">
      <h3 className="text-white text-xl font-bold">Premiers</h3>
      <p className="text-white text-sm">Brand new release every Friday</p>
    </div>
        <Slider {...settings}>
            {PremierImages.map((image)=>
                <Poster {...image} isDark/>
              )}
        </Slider>
    </>
  );
};

export default Premier;
