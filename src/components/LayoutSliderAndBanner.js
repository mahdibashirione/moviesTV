import { Link } from "react-router-dom";
import { FiLoader } from "react-icons/fi";
import { Skeleton } from "@mui/material";
// import { data } from "../server/data";
import SliderCategory from "./SliderCategory";
import useFetch from "../Hook/useFetch";
import Banner from "./Banner";

const LayoutSliderAndBanner = () => {
  return (
    <section className="md:container w-full flex flex-col gap-4 h-full md:flex-row p-4">
      <article className="w-full md:w-[65%] lg:w-[75%]">
        <SliderCategory filter="serial-iran" title="سریال های ایرانی جدید" />
        <SliderCategory filter="doble" title="دوبله فارسی" />
        <SliderCategory filter="animation" title="انیمیشن" />
      </article>
      <article className="w-full md:w-[35%] lg:w-[25%] min-h-full">
        <Banner />
      </article>
    </section>
  );
};

export default LayoutSliderAndBanner;
