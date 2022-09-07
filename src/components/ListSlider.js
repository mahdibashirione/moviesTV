import { useState } from "react";
import SliderCategory from "./SliderCategory";

const ListSlider = () => {

  const [newMoviesPersian, setNewMoviesPersian] = useState([
    { id: 1, permissibleAge: "13", actors: ["الهام اخوان", "باران کوثری", "آتیلا پسیانی"], director: "برزو نیک نژاد", productionYear: "1401", story: "در سریال آفتاب پرست مفسدین اقتصادی تصمیم می‌گیرند تا جمال پورشه را بدنام کنند اما باز دست تقدیر به کمک جمال می‌آید و او را رو سفید می‌کند! حالا جمال اعتبار بیشتری پیدا کرده و مجبورند با او کنار بیایند!", aboutTheMovie: "سریال محصول کشور ایران و در ژانر کمدی می‌باشد و به کارگردانی برزو نیک نژاد در سال 1401 ساخته شده است. در سریال آفتاب پرست بازیگرانی چون آتیلا پسیانی، باران کوثری، الهام اخوان، فرهاد آئیش، غلامرضا نیکخواه، گوهر خیراندیش، حمیدرضا آذرنگ، پژمان جمشیدی، و... به ایفای نقش پرداخته اند. داستان دو رفیق خفت‌گیر به نام‌های جمال و منوچ است که عشق لاتی و سطح یک شدن در خفت‌گیری را دارند اما از بی عرضه‌گی و بدشانسی گیر پلیس می‌افتند و به زندان می‌روند. جمال در زندان به همه می‌گوید که در سطح یک فقط پورشه‌سوار خفت کرده‌اند و به همین خاطر به جمال پورشه معروف می‌شود و…", time: "50 دقیقه", satisfaction: "84", broadcastDays: "دوشنبه ها", imdb: "6", genre: "کمدی", cover: "https://www.uptvs.com/wp-contents/uploads/2022/08/Aftab-Parast-6-207x290.jpg", faName: "افتاب پرست", episode: "1" },
    { id: 2, permissibleAge: "13", actors: ["Pardis Ahmadieh", "مریلا زارعی", "حمید فرخ نژاد"], director: "روح الله حجازی", productionYear: "1401", story: "در سریال نوبت لیلی : لیلی به این نتیجه می رسد که قرار نیست کتاب در یافتن معنای زندگی کمک اش کند و ایمانش به آن را از دست می دهد و...", aboutTheMovie: "سریال نوبت لیلی محصول کشور ایران و در ژانر درام ، رمانتیک می‌باشد و به کارگردانی روح الله حجازی در سال 1401 ساخته شده است. در سریال نوبت لیلی بازیگرانی چون حمید فرخ نژاد، مریلا زارعی، Pardis Ahmadieh، و... به ایفای نقش پرداخته اند. نوبت لیلی اولین سریال روح الله حجازی است که داستانی رازآلود و عاشقانه را در بستری خیال‌انگیز روایت می‌کند. ", time: "50 دقیقه", satisfaction: "84", broadcastDays: "دوشنبه ها", imdb: "8.5", genre: "درام فاتزی,رمانتیک", cover: "https://www.uptvs.com/wp-contents/uploads/2022/08/Nobate-Leyli-20-207x290.jpg", faName: "نوبت لیلی", episode: " 1" },
    { id: 3, permissibleAge: "13", actors: ["مهران احمدی", "ماهور الوند", "آتیلا پسیانی"], director: "Mehran Ahmadi", productionYear: "1401", story: "در سریال بی گناه : علت خروج بهمن مردانی از کشور در بیست و پنج سال پیش، رازی است که در زیرزمین خانه قدیمی پنهان است.", aboutTheMovie: "سریال بی گناه محصول کشور ایران و در ژانر خانوادگی ، درام می‌باشد و به کارگردانی Mehran Ahmadi در سال 1401 ساخته شده است. در سریال بی گناه بازیگرانی چون آتیلا پسیانی، ماهور الوند، مهران احمدی، محسن کیایی، شبنم مقدمی، ویشکا آسایش، و... به ایفای نقش پرداخته اند. ", time: "50 دقیقه", satisfaction: "86", broadcastDays: "یکشنبه ها", imdb: "6.5", genre: "درام,خوانوادگی", cover: "https://www.uptvs.com/wp-contents/uploads/2022/08/Bi-Gonah-1-2-207x290.jpg", faName: "بی گناه", episode: "1" },
    { id: 4, permissibleAge: "13", actors: ["لیندا کیانی", "امیر رضا دلاوری", "امیر آقایی"], director: "امیرحسین ترابی", productionYear: "1401", story: "در سریال خون سرد : كابوس هاى كسرى شروع شده و همزمان به دنبال ردپايى از قادر است تا او را به سزاى عملش برساند...", aboutTheMovie: "سریال Cold blood محصول کشور ایران و در ژانر جنایی می‌باشد و به کارگردانی امیرحسین ترابی در سال 1401 ساخته شده است. در سریال خون سرد بازیگرانی چون امیر آقایی، امیر رضا دلاوری، لیندا کیانی، شهرام حقیقت دوست، و... به ایفای نقش پرداخته اند. ", time: "50 دقیقه", satisfaction: "83", broadcastDays: "جمعه ها", imdb: "5.2", genre: "جنایی", cover: "https://www.uptvs.com/wp-contents/uploads/2022/08/Khoon-Sard-2-207x290.jpg", faName: "خون سرد", episode: "1 Blod" },
    { id: 5, permissibleAge: "13", actors: ["عباس اسکری", "عباس جمشیدی فر", "علی شادمان"], director: "محمد کارت", productionYear: "1401", story: "در سریال یاغی : تو واقعا یه دیوونه یاغی‌ هستی، چه جوری تونستی همه چیز رو عوض کنی؛ الان با لباس ملی برسی اینجا؟! ", aboutTheMovie: "سریال The Rebel محصول کشور ایران و در ژانر درام می‌باشد و به کارگردانی محمد کارت در سال 1401 ساخته شده است. در سریال یاغی بازیگرانی چون Aban Askari، عباس جمشیدی فر، علی شادمان، Amir Bay، امیر جعفری، بهرام ابراهیمی، Elika Naseri، فرهاد اصلانی، Javad Khaajavi، مه لقا باقری و... به ایفای نقش پرداخته اند. ", time: "90 دقیقه", satisfaction: "82", broadcastDays: "پنجشنبه ها", imdb: "8.5", genre: "درام", cover: "https://www.uptvs.com/wp-contents/uploads/2022/08/Yaghi-16-207x290.jpg", faName: "یاغی", episode: "1" },
    { id: 6, permissibleAge: "13", actors: ["باران کوثری", "حمید فرخ نژاد", "لیلا حاتمی"], director: "Afshin Hashemi", productionYear: "1401", story: "در سریال شبکه مخفی زنان : بالاخره دلبرجان اومد؛ خانومِ با کمالات و جمالات و با میرزا محمود همکار شدن. از اون‌طرف میرزامحمود با مساواتِ تمام به سه همسرش سر زد و حالا می‌ره که کانون بانوان تشکیل بشه. اما گویا یه رازی در یک دستکش پنهانه… مثلِ دستکشِ دِزدمونا.", aboutTheMovie: "سریال شبکه مخفی زنان محصول کشور ایران و در ژانر تاریخی ، درام می‌باشد و به کارگردانی Afshin Hashemi در سال 1401 ساخته شده است. در سریال شبکه مخفی زنان بازیگرانی چون باران کوثری، حمید فرخ نژاد، لیلا حاتمی، مهدی هاشمی، شبنم مقدمی، شقایق دهقان، سیامک انصاری، و... به ایفای نقش پرداخته اند. شبکه مخفی زنان داستانی کمدی و سرگرم کننده را در بستری تاریخی روایت می‌کند.وزارت فرهنگ و هنر در سال ۱۳۱۰ تصمیم به تشکیل کانون بانوان گرفته تا با تشکل‌های مشابه رقابت و سپس آن ها را حذف کند. میرزا محمود زنبورکچی کارمند عالی‌رتبه‌ اداره‌ سجل احوال، دعوت می شود تا در کنار دلبرجان تاجرباشی مسئولیت انتخاب اعضا و سپس فعالیت کانون را بر عهده بگیرد و … ", time: "50 دقیقه", satisfaction: "81", broadcastDays: "جمعه ها", imdb: "5.2", genre: "تاریخی,کمدی,درام", cover: "https://www.uptvs.com/wp-contents/uploads/2022/08/Shabakeye-Makhfi-Zanan-5-207x290.jpg", faName: "شبکه مخفی زنان", episode: "1" },
  ])

  return (
    <section className="w-full">
      <SliderCategory title="سریال های ایرانی جدید" dataMovies={newMoviesPersian} />
    </section>
  );
}

export default ListSlider;