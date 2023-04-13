import {
  FiChevronLeft,
  FiSettings,
  FiVolume2,
  FiInstagram,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  const options = [
    {
      id: 1,
      title: "مورد نیاز",
      desc: "نرم افزارهای پخش فیلم",
      url: "/",
      icon: <FiSettings className="text-3xl text-yellow-500" />,
    },
    {
      id: 2,
      title: "پخش دوبله",
      desc: "راهنمای تنظیم صدا",
      url: "/",
      icon: <FiVolume2 className="text-3xl text-blue-500" />,
    },
    {
      id: 2,
      title: "مورد نیاز",
      desc: "راهنمای فرمت ها",
      url: "/",
      icon: <FiSettings className="text-3xl text-green-500" />,
    },
  ];

  return (
    <footer className="w-full bg-zinc-900 mt-6">
      <section className="p-4 pt-20 md:container flex flex-col md:flex-row gap-4">
        <article className="w-full md:w-[65%] bg-zinc-800 p-4 flex flex-col md:flex-row gap-4 rounded-lg">
          {options.map((item) => {
            return (
              <div className="w-full flex items-center justify-start gap-x-4 text-sm">
                <div className="bg-[#323e31] w-16 h-16 flex items-center justify-center rounded-lg">
                  {item.icon}
                </div>
                <div className="flex flex-col justify-between items-start gap-2">
                  <span className="text-gray-500 select-none">
                    {item.title}
                  </span>
                  <Link
                    to={item.url}
                    className="flex items-center hover:scale-95 duration-300"
                  >
                    {item.desc}
                    <FiChevronLeft className="text-xl text-gray-500" />
                  </Link>
                </div>
              </div>
            );
          })}
        </article>
        <article className="w-full md:w-[35%] flex flex-col gap-y-4">
          <Link
            to=""
            className="w-full p-4 rounded-lg hover:scale-[0.99] duration-300 flex items-center justify-between bg-gradient-to-l from-[#FA6B7C] to-[#FA9771]"
          >
            <div className="text-zinc-700 flex items-center justify-center gap-x-2">
              <FiInstagram className="text-xl -mb-1" />
              <span>صفحه اینستاگرام</span>
            </div>
            <div className="bg-zinc-600 w-5 h-5  flex items-center justify-center rounded-full">
              <FiChevronLeft />
            </div>
          </Link>
          <Link
            to=""
            className="w-full p-4 rounded-lg hover:scale-[0.99] duration-300 flex items-center justify-between bg-gradient-to-l from-[#62BCE9] to-[#92D3F4]"
          >
            <div className="text-zinc-700 flex items-center justify-center gap-x-2">
              <FiInstagram className="text-xl -mb-1" />
              <span>چنل تلگرام</span>
            </div>
            <div className="bg-zinc-600 w-5 h-5  flex items-center justify-center rounded-full">
              <FiChevronLeft />
            </div>
          </Link>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
