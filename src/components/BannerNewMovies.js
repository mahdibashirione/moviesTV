import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
import GET_DATA from "../utils/getData";


const BannerNewMovies = () => {

  const [dataBanner, setDataBanner] = useState(null)

  useEffect(() => {
    GET_DATA("/bannernewmovies", setDataBanner)
  }, [])

  const CardLoadingBanner = () => {
    return (
      <>
        <span className="animate-pulse duration-300 w-full h-44 rounded-lg overflow-hidden mr-3 bg-gray-400 flex items-center justify-center">
          <span className="border-4 border-gray-300 border-l-transparent w-10 h-10 rounded-full block animate-spin"></span>
        </span>
        <span className="animate-pulse duration-300 w-full h-44 rounded-lg overflow-hidden mr-3 bg-gray-400 flex items-center justify-center">
          <span className="border-4 border-gray-300 border-l-transparent w-10 h-10 rounded-full block animate-spin"></span>
        </span>
        <span className="animate-pulse duration-300 w-full h-44 rounded-lg overflow-hidden mr-3 bg-gray-400 flex items-center justify-center">
          <span className="border-4 border-gray-300 border-l-transparent w-10 h-10 rounded-full block animate-spin"></span>
        </span>
        <span className="animate-pulse duration-300 w-full h-44 rounded-lg overflow-hidden mr-3 bg-gray-400 flex items-center justify-center">
          <span className="border-4 border-gray-300 border-l-transparent w-10 h-10 rounded-full block animate-spin"></span>
        </span>
        <span className="animate-pulse duration-300 w-full h-44 rounded-lg overflow-hidden mr-3 bg-gray-400 flex items-center justify-center">
          <span className="border-4 border-gray-300 border-l-transparent w-10 h-10 rounded-full block animate-spin"></span>
        </span>
        <span className="animate-pulse duration-300 w-full h-44 rounded-lg overflow-hidden mr-3 bg-gray-400 flex items-center justify-center">
          <span className="border-4 border-gray-300 border-l-transparent w-10 h-10 rounded-full block animate-spin"></span>
        </span>
        <span className="animate-pulse duration-300 w-full h-44 rounded-lg overflow-hidden mr-3 bg-gray-400 flex items-center justify-center">
          <span className="border-4 border-gray-300 border-l-transparent w-10 h-10 rounded-full block animate-spin"></span>
        </span>
        <span className="animate-pulse duration-300 w-full h-44 rounded-lg overflow-hidden mr-3 bg-gray-400 flex items-center justify-center">
          <span className="border-4 border-gray-300 border-l-transparent w-10 h-10 rounded-full block animate-spin"></span>
        </span>
      </>
    )
  }

  return (
    <section className="w-full bg-zinc-900/90">
      <div className="py-6 px-2 w-full container gap-2.5 grid grid-rows-2 grid-cols-[repeat(4,300px)] xl:grid-cols-4 overflow-x-scroll">
        {dataBanner ? dataBanner.map(movies => {
          return (
            <Link key={movies.id} to={"#"} className="w-full h-44 rounded-lg block overflow-hidden mr-3">
              <img src={movies.cover} className="w-full h-full object-cover" />
            </Link>
          )
        }) : <CardLoadingBanner />}
      </div>
    </section>
  );
}

export default BannerNewMovies;
