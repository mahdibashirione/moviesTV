import { useState } from "react";
import { Link } from "react-router-dom";






const SliderCategory = ({ dataMovise, title }) => {



  const CardMovie = ({ movie }) => {
    return (
      <Link to="#" className="group flex flex-col justify-start items-start gap-y-1 mr-2">
        <div className="w-[140px] md:w-[195px] h-[200px] md:h-[270px] overflow-hidden rounded-lg relative">
          <img src={movie.cover} alt="cover-movie" className="w-full h-full object-cover" />
          <div className="w-full h-full absolute top-0 right-0 bg-gradient-to-t from-zinc-900 bg-opacity-0 opacity-0 group-hover:opacity-100 duration-300 flex flex-col justify-end items-start gap-y-1 px-2 py-4">
            <p className="text-white text-sm md:text-base">{movie.genre}</p>
            <p className="text-white text-sm">
              {movie.imdb}
              <span className="ml-1 bg-yellow-500 rounded p-0.5 text-[11px]">IMDB</span>
            </p>
          </div>
          <span className="absolute bottom-2 left-2 text-[11px] bg-yellow-500 p-1 rounded-md group-hover:opacity-0 duration-300 ">{movie.broadcastDays}</span>
        </div>
        <span className="text-base">سریال {movie.faName}</span>
        {movie.broadcastDays && <span className="text-gray-600 text-sm">{movie.episode ? ("قسمت" + movie.episode) : movie.enName}</span>}
      </Link>
    )
  }

  return (
    <article className="w-full">
      <div className="w-full container">
        <div className="w-full flex items-center justify-between p-4 pb-6">
          <span className="select-none font-bold">{title}</span>
          <button className="text-sm text-gray-500 md:hover:scale-110 duration-300">مشاهده همه</button>
        </div>
        <div className="w-full max-w-full flex items-center justify-start flex-nowrap overflow-scroll pb-8">

          {dataMovise ? dataMovise.map(item => {
            return (
              <CardMovie movie={item} />
            )
          }) : <span>Loading...</span>}

        </div>
      </div>
    </article>
  );
}

export default SliderCategory;