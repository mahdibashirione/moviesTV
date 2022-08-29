import { useState } from "react";
import { Link } from "react-router-dom";






const SliderCategory = () => {

  const [data, setData] = useState([
    { id: 1, cover: "https://www.uptvs.com/wp-contents/uploads/2022/08/Aftab-Parast-6-207x290.jpg", faName: "افتاب پرست", enName: "Chameleons" },
    { id: 2, cover: "https://www.uptvs.com/wp-contents/uploads/2022/08/Nobate-Leyli-20-207x290.jpg", faName: "نوبت لیلی", enName: " lily" },
    { id: 3, cover: "https://www.uptvs.com/wp-contents/uploads/2022/08/Bi-Gonah-1-2-207x290.jpg", faName: "بی گناه", enName: "Bigonah" },
    { id: 4, cover: "https://www.uptvs.com/wp-contents/uploads/2022/08/Khoon-Sard-2-207x290.jpg", faName: "خون سرد", enName: "Ice Blod" },
    { id: 5, cover: "https://www.uptvs.com/wp-contents/uploads/2022/08/Yaghi-16-207x290.jpg", faName: "یاغی", enName: "Yaghi" },
  ])

  const CardMovie = ({ movie }) => {
    return (
      <Link to="#" className="flex flex-col justify-start items-start gap-y-1 mr-4">
        <div className="w-[140px] md:w-[200px] h-[200px] md:h-[270px] overflow-hidden rounded-lg">
          <img src={movie.cover} alt="cover-movie" className="w-full h-full object-cover" />
        </div>
        <span className="text-base">سریال {movie.faName}</span>
        <span className="text-gray-600 text-sm">{movie.enName}</span>
      </Link>
    )
  }


  return (
    <section className="w-full">
      <div className="w-full container">
        <div className="w-full flex items-center justify-between px-4 py-6">
          <span className="select-none text-sm md:text-base text-gray-600">سریال های ایرانی جدید</span>
          <button className="text-sm md:text-base text-orange-500 md:hover:scale-110 duration-300">مشاهده همه</button>
        </div>
        <div className="w-full max-w-full flex items-center justify-start flex-nowrap overflow-scroll">

          {data && data.map(item => {
            return (
              <CardMovie movie={item} />
            )
          })}

        </div>
      </div>
    </section>
  );
}

export default SliderCategory;