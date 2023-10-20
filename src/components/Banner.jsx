import React from "react";
import img from "../assets/met_marble.jpeg";

// Generate a random color
const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
// let randColor = "hover:bg-["+randomColor+"]";


function Banner() {
  return (
    <>
      <div className="grid grid-cols-5 lg:ms-10">
        <div className="col-span-1 grid grid-row-3  items-center">
          <p className="font-thin sm:text-6xl md:text-7xl lg:text-9xl rounded-full" >
            M
          </p>
          <p className="font-thin sm:text-6xl md:text-7xl lg:text-9xl rounded-full ">
            E
          </p>
          <p className="font-thin sm:text-6xl md:text-7xl lg:text-9xl rounded-full ">
            T
          </p>
        </div>
        <div className="col-span-1 grid grid-row-3  items-center">
          <p className="font-thin sm:text-6xl md:text-7xl lg:text-9xl rounded-full ">
            A
          </p>
          <p className="font-thin sm:text-6xl md:text-7xl lg:text-9xl rounded-full">
            R
          </p>
          <p className="font-thin sm:text-6xl md:text-7xl lg:text-9xl rounded-full hover:bg-yellow-500">
            T
          </p>
        </div>

        <div className="col-span-3 mt-5 max-auto">
          <img
            src={img}
            alt="art"
            className="w-11/12 border-8 border-gray-800"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
