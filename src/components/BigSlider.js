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
      id: 1,
      cover: "https://www.uptvs.com/wp-contents/uploads/2022/08/Dc-League-of-Super-Pets-Header.jpg",
    },
    {
      id: 2,
      cover: "https://www.uptvs.com/wp-contents/uploads/2022/08/Samaritan-2022-Header.jpg",
    },
    {
      id: 3,
      cover: "https://www.uptvs.com/wp-contents/uploads/2022/08/Bigonah-1.jpg",
    },
    {
      id: 4,
      cover: "https://www.uptvs.com/wp-contents/uploads/2021/10/House-of-the-Dragon-s1-Header.jpg",
    },
    {
      id: 5,
      cover: "https://www.uptvs.com/wp-contents/uploads/2022/08/See-s3-Header.jpg",
    },
    {
      id: 6,
      cover: "https://www.uptvs.com/wp-contents/uploads/2022/08/Dead-Zone-2022-Header-1.jpg",
    },
    {
      id: 7,
      cover: "https://www.uptvs.com/wp-contents/uploads/2022/08/Shamshera-2022-Header-1.jpg",
    },
    {
      id: 8,
      cover: "https://www.uptvs.com/wp-contents/uploads/2022/08/luck-Header.jpg",
    },
  ])


  return (
    <section className="container w-full flex items-start justify-start gap-y-3 md:flex-wrap overflow-x-scroll">
      {data && data.map(movies => {
        return (
          <Link to={"#"} className="min-w-[290px] md:max-w-[48%] lg:max-w-[32%] xl:max-w-[305px] max-w-[300px] w-full h-44 rounded-lg block overflow-hidden shadow-sm border mr-3">
            <img src={movies.cover} className="w-full h-full object-cover" />
          </Link>
        )
      })}
    </section>
  );
}

export default BigSlider;
