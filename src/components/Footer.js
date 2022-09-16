import { FiChevronLeft, FiSettings, FiVolume2, FiInstagram } from "react-icons/fi"
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="w-full bg-zinc-900 mt-6">
      <section className="p-4 pt-20 md:container flex flex-col md:flex-row gap-4">
        <article className="w-full md:w-[65%] bg-zinc-800 p-4 flex flex-col md:flex-row gap-4 rounded-lg">
          <div className="w-full flex items-center justify-start gap-x-4 text-sm">
            <div className="bg-[#463c25] w-16 h-16 flex items-center justify-center rounded-lg">
              <FiSettings className="text-3xl text-yellow-500" />
            </div>
            <div className="flex flex-col justify-between items-start gap-2">
              <span className="text-gray-500">مورد نیاز</span>
              <Link to="" className="flex items-center">
                نرم افزارهای پخش فیلم
                <FiChevronLeft className="text-xl text-gray-500 -mb-2" />
              </Link>
            </div>
          </div>
          <div className="w-full flex items-center justify-start gap-x-4 text-sm">
            <div className="bg-[#2D3348] w-16 h-16 flex items-center justify-center rounded-lg">
              <FiVolume2 className="text-3xl text-blue-500" />
            </div>
            <div className="flex flex-col justify-between items-start gap-2">
              <span className="text-gray-500">پخش دوبله</span>
              <Link to="" className="flex items-center">
                راهنمای تنظیم صدا
                <FiChevronLeft className="text-xl text-gray-500 -mb-2" />
              </Link>
            </div>
          </div>
          <div className="w-full flex items-center justify-start gap-x-4 text-sm">
            <div className="bg-[#323e31] w-16 h-16 flex items-center justify-center rounded-lg">
              <FiSettings className="text-3xl text-green-500" />
            </div>
            <div className="flex flex-col justify-between items-start gap-2">
              <span className="text-gray-500">مورد نیاز</span>
              <Link to="" className="flex items-center">
                راهنمای فرمت ها
                <FiChevronLeft className="text-xl text-gray-500 -mb-2" />
              </Link>
            </div>
          </div>
        </article>
        <article className="w-full md:w-[35%] flex flex-col gap-y-4">
          <Link to="" className="w-full p-4 rounded-lg flex items-center justify-between bg-gradient-to-l from-[#FA6B7C] to-[#FA9771]">
            <div className="flex items-center justify-center gap-x-2">
              <FiInstagram className="text-xlg -mb-1" />
              <span>صفحه اینستاگرام</span>
            </div>
            <div className="bg-gray-100/40 w-5 h-5  flex items-center justify-center rounded-full"><FiChevronLeft /></div>
          </Link>
          <Link to="" className="w-full p-4 rounded-lg flex items-center justify-between bg-gradient-to-l from-[#62BCE9] to-[#92D3F4]">
            <div className="flex items-center justify-center gap-x-2">
              <FiInstagram className="text-xlg -mb-1" />
              <span>چنل تلگرام</span>
            </div>
            <div className="bg-gray-100/40 w-5 h-5  flex items-center justify-center rounded-full"><FiChevronLeft /></div>
          </Link>
        </article>
      </section>
    </footer>
  );
}

export default Footer;