import { useState } from "react";
import { Link } from "react-router-dom";

const SliderCategory = ({ dataMovies, title }) => {
  const CardMovie = ({ movie }) => {
    return (
      <Link
        to={`/movie/${movie.id}/${movie.faName}`}
        state={movie}
        className="group flex flex-col justify-start items-start gap-y-1 mr-3 w-[140px] md:w-[195px]"
      >
        <div className="scrollbar-none w-[140px] md:w-[195px] h-[200px] md:h-[270px] overflow-hidden rounded-lg relative">
          <img
            src={movie.cover}
            alt="cover-movie"
            className="w-full h-full object-cover"
          />
          <div className="w-full h-full absolute top-0 right-0 bg-gradient-to-t from-zinc-900 bg-opacity-0 opacity-0 group-hover:opacity-100 duration-300 flex flex-col justify-end items-start gap-y-1 px-2 py-4">
            <p className="text-white text-sm md:text-base">{movie.genre}</p>
            <p className="text-white text-sm">
              {movie.imdb}
              <span className="ml-1 bg-yellow-500 rounded p-0.5 text-[11px]">
                IMDB
              </span>
            </p>
          </div>
        </div>
        <span className="line-clamp-1 text-base">
          {movie.type} {movie.faName}
        </span>
        <span className="line-clamp-1 text-gray-600 text-sm flex items-center gap-x-1">
          {movie.enName} {movie.productionYear}
        </span>
      </Link>
    );
  };

  return (
    <article className="w-full">
      <div className="w-full container">
        <div className="w-full flex items-center justify-between p-4">
          <span className="select-none font-bold lg:text-xl">{title}</span>
          <button className="text-sm text-gray-500 md:hover:scale-110 duration-300">
            مشاهده همه
          </button>
        </div>
        <div className="w-full max-w-full flex items-center justify-start flex-nowrap overflow-x-scroll scrollbar-none pb-8 rounded-lg">
          {dataMovies ? (
            dataMovies.map((item) => {
              return <CardMovie key={item.id} movie={item} />;
            })
          ) : (
            <span>Loading...</span>
          )}
        </div>
      </div>
    </article>
  );
};

export default SliderCategory;
