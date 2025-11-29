import React from "react";
import BannerImg from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="flex justify-between items-center gap-10 p-28 bg-base-300 my-10 rounded-2xl">
      <div className="space-y-8">
        <h2 className="text-5xl md:text-6xl font-semibold">
          Books to freshen up <br /> your bookshelf
        </h2>
        <button
          className=" rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative  hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative">View The List</span>
        </button>
      </div>
      <div>
        <img className="w-[370px] rounded-2xl h-[300px]" src={BannerImg} alt="BookImg Not Found" />
      </div>
    </div>
  );
};

export default Banner;
