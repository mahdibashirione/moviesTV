import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";


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
    <section className="w-full max-w-[1500px] px-3">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper md:h-[500px] h-[300px] rounded-lg overflow-hidden mx-auto"
      >

        {data && data.map(movie => {
          return (
            <SwiperSlide key={movie.id} className="group w-full h-full bg-blue-500 relative">
              <Link to="" className="w-full h-full block">
                <img src={movie.cover} alt="slider" className="w-full h-full object-cover" />
              </Link>
            </SwiperSlide>
          )
        })}

      </Swiper>
    </section>
  );
}

export default BigSlider;
