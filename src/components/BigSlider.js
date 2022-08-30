import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


const BigSlider = () => {

  const [data, setData] = useState([
    {
      id: 1, cover: "/image/bigSlider/1.jpg",
      detale: {
        name: "سریال See",
        sizen: "فصل سوم",
      }
    },
    {
      id: 2, cover: "/image/bigSlider/2.jpg",
      detale: {
        name: "سریال Snopircer",
        sizen: "فصل دوم",
      }
    },
  ])


  return (
    <section className="w-full max-w-[1500px]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay, Navigation]}
        className="mySwiper md:h-[500px] h-[300px] mb-8 md:mb-0"
      >

        {data && data.map(movie => {
          return (
            <SwiperSlide key={movie.id} className="group w-full h-full bg-blue-500 relative">
              <div className="w-full h-full">
                <img src={movie.cover} alt="slider" className="w-full h-full object-cover" />
              </div>
              <div className="duration-400 text-sm opacity-0 group-hover:opacity-100 md:text-base select-none w-full h-full absolute top-0 right-0 bg-gradient-to-t from-[#fcfcfc]">
                <div className="w-full h-full container flex flex-col justify-end items-end px-4 md:py-20">
                  <span className="md:text-2xl lg:text-3xl text-xl font-bold">{movie.detale.name}</span>
                  <p className="mt-3 mb-6 text-gray-600">{movie.detale.sizen}</p>
                  <button className="border border-orange-500 text-orange-500 px-4 py-2.5 rounded-lg hover:bg-orange-500 hover:text-white duration-300">تماشا کردن/دانلود</button>
                </div>
              </div>
            </SwiperSlide>
          )
        })}

      </Swiper>
    </section>
  );
}

export default BigSlider;
