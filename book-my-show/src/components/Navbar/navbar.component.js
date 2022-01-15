import React from "react";
import { BiChevronRight , BiSearch , BiChevronDown , BiMenu} from "react-icons/bi";

const NavSm = () =>{
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">It All Starts Here!</h3>
          <span className="text-gray-400 text-xs flex items-center">Palwal<BiChevronRight/></span>
        </div>
        <div className="w-8 h-8">
          <BiSearch className="w-full h-full"/>
        </div>
      </div>
    </>
  );
};

const NavMd = () =>{
  return(
    <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-sm">
    <BiSearch/>
      <input className="w-full focus:outline-none" type="search" placeholder="Search for Movies,Events,Plays,Sports and Activities"/>
    </div>
  );
};

const NavLg = () =>{
  return(
    <>
    <div className="container px-4 mx-auto flex items-center justify-between">
      <div className="flex items-center w-1/2 gap-3">
          <div className="w-18 h-12">
            <img src="https://www.vhv.rs/dpng/f/422-4222380_50-off-png.png" alt="logo" className="w-full h-full"/>
          </div>

          <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-sm">
          <BiSearch/>
            <input className="w-full focus:outline-none" type="search" placeholder="Search for Movies,Events,Plays,Sports and Activities"/>
          </div>
      </div>


      <div className="flex items-center gap-3">
        <span className="text-gray-400 text-xs flex items-center hover:text-white cursor-pointer">Palwal<BiChevronDown/></span>
        <button className="bg-red-600 text-white text-sm rounded px-2 py-1">Sign in</button>
        <div className="w-8 h-8 text-white">
          <BiMenu className="w-full h-full"/>
        </div>
      </div>
    </div>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <nav className="bg-navCol-800 px-4 py-2">
        <div className="md:hidden">
          <NavSm/>
        </div>

        <div className="hidden lg:hidden md:flex">
          <NavMd/>
        </div>

        <div className="hidden lg:flex">
          <NavLg/>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
