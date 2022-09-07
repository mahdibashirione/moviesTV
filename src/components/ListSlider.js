import { useState } from "react";
import SliderCategory from "./SliderCategory";

const ListSlider = () => {

  const [newMoviesPersian, setNewMoviesPersian] = useState([
    { id: 1, broadcastDays: "دوشنبه ها", imdb: "6", genre: "کمدی", cover: "https://www.uptvs.com/wp-contents/uploads/2022/08/Aftab-Parast-6-207x290.jpg", faName: "افتاب پرست", episode: "1" },
    { id: 2, broadcastDays: "دوشنبه ها", imdb: "8.5", genre: "درام فاتزی,رمانتیک", cover: "https://www.uptvs.com/wp-contents/uploads/2022/08/Nobate-Leyli-20-207x290.jpg", faName: "نوبت لیلی", episode: " 1" },
    { id: 3, broadcastDays: "یکشنبه ها", imdb: "6.5", genre: "درام,خوانوادگی", cover: "https://www.uptvs.com/wp-contents/uploads/2022/08/Bi-Gonah-1-2-207x290.jpg", faName: "بی گناه", episode: "1" },
    { id: 4, broadcastDays: "جمعه ها", imdb: "5.2", genre: "درام", cover: "https://www.uptvs.com/wp-contents/uploads/2022/08/Khoon-Sard-2-207x290.jpg", faName: "خون سرد", episode: "1 Blod" },
    { id: 5, broadcastDays: "پنجشنبه ها", imdb: "8.5", genre: "درام", cover: "https://www.uptvs.com/wp-contents/uploads/2022/08/Yaghi-16-207x290.jpg", faName: "یاغی", episode: "1" },
    { id: 6, broadcastDays: "جمعه ها", imdb: "5.2", genre: "تاریخی,کمدی,درام", cover: "https://www.uptvs.com/wp-contents/uploads/2022/08/Shabakeye-Makhfi-Zanan-5-207x290.jpg", faName: "شبکه مخفی زنان", episode: "1" },
  ])

  return (
    <section className="w-full">
      <SliderCategory title="سریال های ایرانی جدید" dataMovise={newMoviesPersian} />
    </section>
  );
}

export default ListSlider;