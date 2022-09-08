import { useState } from "react";
import { FiHeart, FiYoutube, FiDownload } from "react-icons/fi"
import { useLocation } from 'react-router-dom';

const SingleMoviePage = () => {

  const location = useLocation()

  const data = location.state

  return (
    <section className="w-full max-w-[1600px] mx-auto">
      <article className="w-full h-[480px] relative">
        <div className="w-full h-full bg-gradient-to-t from-[#1C1C22] md:via-[#1C1C22]">
          <img src={data.cover} alt={data.faName} className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-0 right-0 w-full h-full bg-blur bg-gradient-to-t from-[#1C1C22]">
          <div className="md:container w-full h-full flex flex-col md:flex-row items-center justify-end">
            <div className="w-[200px] md:w-[250px] h-[280px] md:h-[320px] rounded-lg overflow-hidden">
              <img src={data.cover} alt={data.faName} className="w-full h-full object-cover" />
            </div>
            <div className="w-full flex flex-col items-center md:items-start select-none p-4">
              <h2 className="text-xl">{data.faName}</h2>
              <div className="w-full flex items-center justify-center md:justify-start py-4 gap-x-2 text-gray-400 text-sm border-b border-gray-600 md:border-gray-400">
                <span>{data.genre}</span>
                <span className="w-[1px] h-full bg-gray-600"></span>
                <span>{data.productionYear}</span>
                <span className="w-[1px] h-full bg-gray-600"></span>
                <span className="text-orange-500">بالای{data.permissibleAge}سال</span>
                <span className="w-[1px] h-full bg-gray-600"></span>
                <span>{data.time}</span>
              </div>
              <div className="w-full flex md:flex-col">
                <div className="w-full md:border-b border-gray-600 md:border-gray-400 md:pb-4">
                  <div className="w-full flex items-center justify-center md:justify-start gap-x-4 py-4">
                    <div>{data.imdb}<span className="bg-gray-700 p-1 rounded-md text-sm ml-2">imdb</span></div>
                    <div className="flex items-center"><FiHeart className="bg-gray-700 p-1 rounded-md text-2xl ml-2" />{data.satisfaction}</div>
                  </div>
                  <div className="hidden md:flex flex-col gap-y-2 py-2">
                    <div className="flex items-center gap-x-1 text-sm">
                      <span className="text-gray-400">بازیگران :</span>
                      <span>{data.actors.map(actor => actor + ",")}</span>
                    </div>
                    <div className="flex items-center gap-x-1 text-sm">
                      <span className="text-gray-400">کارگردان :</span>
                      <span>{data.director}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="md:container pb-8 w-full flex flex-col md:flex-row items-center px-4 border-b border-gray-500 mb-6">
        {data.demo && <div className="w-full">
          <video width="540" height="315" controls poster={data.poster}>
            <source src={data.demo} type="video/mp4" />
          </video>
        </div>}
        <div className="w-full">
          <span className="flex items-center gap-x-2 text-xl mt-6 md:mt-0"><FiYoutube className="text-xl" />داستان فیلم</span>
          <p className="text-sm text-justify mt-4 text-gray-400 leading-6">{data.story}</p>
          <span className="flex items-center gap-x-2 text-xl mt-6"><FiYoutube className="text-xl" />درباره فیلم</span>
          <p className="text-sm text-justify mt-4 text-gray-400 leading-6">{data.aboutTheMovie}</p>
        </div>
      </article>
      <article className="px-4 md:container flex flex-col items-center gap-y-3 py-4">
        <h2 className="text-xl mb-4 select-none">باکس دانلود</h2>
        {data.downloads.map(item => {
          return (
            <div className="w-full px-4 py-6 bg-zinc-900 border border-gray-700 rounded-lg flex flex-col md:flex-row items-center gap-4">
              <span className="whitespace-nowrap select-none">دانلود : {item.title}</span>
              <div className="flex items-center md:justify-end justify-center w-full gap-x-2">
                {item.linkDownload.map(link => {
                  return (
                    <button className="bg-green-500 text-white flex items-center gap-x-1 px-4 py-2 rounded-md">
                      {link.quality}
                      <FiDownload />
                    </button>
                  )
                })}
              </div>
            </div>
          )
        })}
      </article>
    </section>
  );
}

export default SingleMoviePage;