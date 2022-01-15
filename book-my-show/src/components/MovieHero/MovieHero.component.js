import React from "react";
import {FaHeart} from "react-icons/fa";
import {BiChevronRight} from "react-icons/bi";

const MovieHero = (props) =>{
  return(
    <>
        <div className="md:hidden" style={{height:"calc(180vw)"}}>
            <img src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg" alt="poster"/>
        </div>

        <div className="hidden md:block lg:hidden">
            <img src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg" alt="poster"/>
        </div>

        <div className="relative hidden lg:block flex justify-between" style={{height: "40rem"}}>
            <div className="absolute h-full w-full z-10"
              style={{ backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}}
              />

              <div className="flex justify-around absolute z-30 top-20 left-20 w-1/2">
                <div className="z-30 w-full h-96 mr-5">
                  <img src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
                  alt="poster" className="h-full w-full rounded-xl"
                />
                </div>

                <div className="z-30 m-5">
                  <h1 className="text-4xl text-white font-bold">Shang-Chi and the Legend of the Ten Rings</h1>
                  <div className="text-white mt-5 flex gap-4 block">
                    <span className="text-red-500 text-2xl cursor-pointer"><FaHeart/></span>
                    <span className="text-2xl cursor-pointer">91%</span>
                     <span className="text-xl cursor-pointer">46.6k ratings</span>
                     <span className="text-2xl text-white mt-1 cursor-pointer"><BiChevronRight/></span>
                  </div>

                  <div className="flex justify-around bg-current p-3 rounded mt-4 mb-4">
                    <div>
                      <h2 className="text-white text-lg cursor-pointer">Add your rating & review</h2>
                      <h3 className="text-gray-500 cursor-pointer text-base">Your ratings matter</h3>
                    </div>

                    <button className="rounded text-black bg-white font-medium px-4 py-1 text-base cursor-pointer">Rate now</button>
                  </div>

                  <div className="bg-white text-black p-2 space-x-1 text-base font-medium inline-flex rounded">
                    < button className="hover:underline">2D,</button>
                    < button className="hover:underline"> MX4D, </button>
                    < button className="hover:underline"> 3D, </button>
                    < button className="hover:underline"> IMAX 3D, </button>
                    < button className="hover:underline"> IMAX 2D, </button>
                    < button className="hover:underline"> 4DX</button>
                  </div>

                  <div className="bg-white text-black p-2 space-x-1 text-base font- medium inline-flex rounded mt-4">
                    < button className="hover:underline">English, </button>
                    < button className="hover:underline"> Hindi, </button>
                    < button className="hover:underline"> Tamil, </button>
                    < button className="hover:underline"> Kannada, </button>
                    < button className="hover:underline"> Telugu, </button>
                    <button href="#" className="hover:underline">Malyalam</button>
                  </div>

                  <ul className="inline-flex space-x-5 text-white mt-5 list-disc gap-2">
                    <li className="list-none"><a href="#">2h 12m</a></li>
                    <li><a href="#"><span className="hover:underline">Action</span>,<span className="hover:underline"> Adventure</span>,<span className="hover:underline"> Fantasy</span></a></li>
                    <li><a href="#">UA</a></li>
                    <li><a href="#">3 Sep,2021</a></li>
                  </ul>

                  <button className="text-white bg-red-500 px-10 py-2 mt-5 text-xl rounded">Book tickets</button>
                </div>


              </div>

                <img src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
                  alt="poster" className="w-full h-full"
                  />
              </div>
      </>
  );
};

export default MovieHero;
