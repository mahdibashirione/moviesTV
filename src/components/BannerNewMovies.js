import { Skeleton } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// import { data } from "../server/data";
import useFetch from "../Hook/useFetch";

const BannerNewMovies = () => {
  const { data, error, loading } = useFetch("/movies");

  const CardLoadingBanner = () => {
    return (
      <>
        <Skeleton variant="rounded" height={176} sx={{ bgcolor: "grey.800" }} />
        <Skeleton variant="rounded" height={176} sx={{ bgcolor: "grey.800" }} />
        <Skeleton variant="rounded" height={176} sx={{ bgcolor: "grey.800" }} />
        <Skeleton variant="rounded" height={176} sx={{ bgcolor: "grey.800" }} />
        <Skeleton variant="rounded" height={176} sx={{ bgcolor: "grey.800" }} />
        <Skeleton variant="rounded" height={176} sx={{ bgcolor: "grey.800" }} />
        <Skeleton variant="rounded" height={176} sx={{ bgcolor: "grey.800" }} />
        <Skeleton variant="rounded" height={176} sx={{ bgcolor: "grey.800" }} />
      </>
    );
  };

  return (
    <section className="w-full bg-zinc-900/90">
      <div className="py-6 px-4 w-full container gap-2.5 grid grid-rows-2 grid-cols-[repeat(4,300px)] xl:grid-cols-4 overflow-x-scroll scrollbar-none">
        {/* loading */}
        {loading && <CardLoadingBanner />}
        {/* data */}
        {data &&
          data.map((movie) => {
            return (
              <Link
                key={movie.id}
                to={`/movie/${movie.id}/${movie.faName}`}
                state={movie}
                className="group relative w-full h-44 rounded-lg block overflow-hidden mr-3"
              >
                <img
                  src={movie.poster}
                  className="w-full h-full object-cover"
                />
                <div className="w-full h-full p-4 gap-y-2 absolute top-0 right-0 bg-gradient-to-t from-zinc-900 to-zinc-900/50 bg-opacity-0 opacity-0 group-hover:opacity-100 duration-300 flex flex-col justify-end items-start">
                  <div className="flex items-center gap-1">
                    <span>{movie.type}</span>
                    <h2>{movie.faName}</h2>
                    <span>{movie.productionYear}</span>
                    <span>{movie.enName}</span>
                  </div>
                  <div className="w-full flex justify-between items-center text-sm">
                    <div className="text-sm">
                      {movie.imdb}
                      <span className="text-yellow-500 p-1 rounded-md ml-1">
                        IMDB
                      </span>
                    </div>
                    <span className="border rounded text-yellow-600 border-yellow-600 p-2">
                      New جدید
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        {/* error */}
        {error && <h2 className="text-red-500 select-none">Error</h2>}
      </div>
    </section>
  );
};

export default BannerNewMovies;
