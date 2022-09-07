import { useState } from "react";
import { FiHeart } from "react-icons/fi"

const SingleMoviePage = () => {

  const [data, setData] = useState(
    { id: 1, permissibleAge: "13", actors: ["الهام اخوان", "باران کوثری", "آتیلا پسیانی"], director: "برزو نیک نژاد", productionYear: "1401", story: "در سریال آفتاب پرست مفسدین اقتصادی تصمیم می‌گیرند تا جمال پورشه را بدنام کنند اما باز دست تقدیر به کمک جمال می‌آید و او را رو سفید می‌کند! حالا جمال اعتبار بیشتری پیدا کرده و مجبورند با او کنار بیایند!", aboutTheMovie: "سریال محصول کشور ایران و در ژانر کمدی می‌باشد و به کارگردانی برزو نیک نژاد در سال 1401 ساخته شده است. در سریال آفتاب پرست بازیگرانی چون آتیلا پسیانی، باران کوثری، الهام اخوان، فرهاد آئیش، غلامرضا نیکخواه، گوهر خیراندیش، حمیدرضا آذرنگ، پژمان جمشیدی، و... به ایفای نقش پرداخته اند. داستان دو رفیق خفت‌گیر به نام‌های جمال و منوچ است که عشق لاتی و سطح یک شدن در خفت‌گیری را دارند اما از بی عرضه‌گی و بدشانسی گیر پلیس می‌افتند و به زندان می‌روند. جمال در زندان به همه می‌گوید که در سطح یک فقط پورشه‌سوار خفت کرده‌اند و به همین خاطر به جمال پورشه معروف می‌شود و…", time: "50 دقیقه", satisfaction: "84", broadcastDays: "دوشنبه ها", imdb: "6", genre: "کمدی", cover: "https://www.uptvs.com/wp-contents/uploads/2022/08/Aftab-Parast-6-207x290.jpg", faName: "افتاب پرست", episode: "1" },
  )

  return (
    <section className="w-full max-w-[1500px]">

      <article className="w-full h-[480px] relative">
        <div className="w-full h-full bg-gradient-to-t from-[#1C1C22]">
          <img src={data.cover} alt={data.faName} className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-0 right-0 w-full h-full bg-blur bg-gradient-to-t from-[#1C1C22] flex flex-col md:flex-row items-center justify-end">
          <div className="w-[200px] h-[280px] rounded-lg overflow-hidden">
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
              <div className="w-full md:border-b border-gray-600 md:border-gray-400">
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
      </article>

    </section>
  );
}

export default SingleMoviePage;