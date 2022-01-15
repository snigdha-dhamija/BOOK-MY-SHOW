import React from "react";
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import Premier from "../components/Premier/Premier.component";
import PosterSlider from "../components/PosterSlider/Posterslider.component";
import TempPosters from "../config/TempPosters.config";

const HomePage=()=>{
  return(
    <>
    <div className="flex flex-col gap-10 justify-center">
    <div className="container px-4 mx-auto">
      <h1 className="font-bold text-2xl text-gray-800 py-2">The Best of Entertainment</h1>
      <EntertainmentCardSlider/>
    </div>

    <div className=" bg-navCol-200 py-16">
        <div className="container mx-auto px-4">
        <div className="flex">
            <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
            alt="Rupay" className="w-full h-full"/>
        </div>
          <PosterSlider images={TempPosters} isDark title="Premiers" subtitle="Brand New Releases Every Friday" />
        </div>
    </div>
    </div>

    <div className="container mx-auto p-4">
      <PosterSlider images={TempPosters} title="Online Streaming Events" isDark={false}/>
    </div>

    <div className="container mx-auto p-4">
      <PosterSlider images={TempPosters} title="Outdoors Events" isDark={false}/>
    </div>

    <div className="container mx-auto p-4">
      <PosterSlider images={TempPosters} title="Laughter Therapy" isDark={false}/>
    </div>

    <div className="container mx-auto p-4">
      <PosterSlider images={TempPosters} title="Popular Events" isDark={false}/>
    </div>

    <div className="container mx-auto p-4">
      <PosterSlider images={TempPosters} title="Top Games and Sports Events" isDark={false}/>
    </div>
    </>
  );
}

export default HomePage;
