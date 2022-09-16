import { useEffect, useState } from "react";
import GET_DATA_FILTER from "../utils/getDataFilter";
import SliderCategory from "./SliderCategory";

const ListSlider = () => {

  const [dataSliderSerial, setDataSliderSerial] = useState(null)
  const [dataSliderAnimation, setDataSliderAnimation] = useState(null)
  const [dataSliderTranslate, setDataSliderTranslate] = useState(null)

  useEffect(() => {
    GET_DATA_FILTER("/movies", setDataSliderSerial, "سریال-ایرانی")
    GET_DATA_FILTER("/movies", setDataSliderAnimation, "انیمیشن")
    GET_DATA_FILTER("/movies", setDataSliderTranslate, "دوبله-فارسی")
  }, [])


  const CardLoadingSlider = () => {
    return (
      <article className="md:container w-full duration-400 animate-pulse">
        <div className="w-full flex items-center justify-between py-4">
          <span className="bg-gray-600 block rounded-full w-40 h-5"></span>
          <span className="bg-gray-600 block rounded-full w-16 h-3"></span>
        </div>
        <div className="w-full flex items-center justify-start gap-x-2 overflow-x-scroll">
          <div>
            <span className="bg-gray-600 block rounded-lg w-[180px] h-[235px]"></span>
            <span className="bg-gray-600 block rounded-full w-28 h-3 my-4"></span>
            <span className="bg-gray-600 block rounded-full w-16 h-3"></span>
          </div>
          <div>
            <span className="bg-gray-600 block rounded-lg w-[180px] h-[235px]"></span>
            <span className="bg-gray-600 block rounded-full w-28 h-3 my-4"></span>
            <span className="bg-gray-600 block rounded-full w-16 h-3"></span>
          </div>
          <div>
            <span className="bg-gray-600 block rounded-lg w-[180px] h-[235px]"></span>
            <span className="bg-gray-600 block rounded-full w-28 h-3 my-4"></span>
            <span className="bg-gray-600 block rounded-full w-16 h-3"></span>
          </div>
          <div>
            <span className="bg-gray-600 block rounded-lg w-[180px] h-[235px]"></span>
            <span className="bg-gray-600 block rounded-full w-28 h-3 my-4"></span>
            <span className="bg-gray-600 block rounded-full w-16 h-3"></span>
          </div>
          <div>
            <span className="bg-gray-600 block rounded-lg w-[180px] h-[235px]"></span>
            <span className="bg-gray-600 block rounded-full w-28 h-3 my-4"></span>
            <span className="bg-gray-600 block rounded-full w-16 h-3"></span>
          </div>
          <div>
            <span className="bg-gray-600 block rounded-lg w-[180px] h-[235px]"></span>
            <span className="bg-gray-600 block rounded-full w-28 h-3 my-4"></span>
            <span className="bg-gray-600 block rounded-full w-16 h-3"></span>
          </div>
          <div>
            <span className="bg-gray-600 block rounded-lg w-[180px] h-[235px]"></span>
            <span className="bg-gray-600 block rounded-full w-28 h-3 my-4"></span>
            <span className="bg-gray-600 block rounded-full w-16 h-3"></span>
          </div>
          <div>
            <span className="bg-gray-600 block rounded-lg w-[180px] h-[235px]"></span>
            <span className="bg-gray-600 block rounded-full w-28 h-3 my-4"></span>
            <span className="bg-gray-600 block rounded-full w-16 h-3"></span>
          </div>
        </div>
      </article>
    )
  }

  return (
    <section className="w-full">
      {dataSliderSerial ? <SliderCategory title="سریال های ایرانی جدید" dataMovies={dataSliderSerial} /> : <CardLoadingSlider />}
      {dataSliderSerial ? <SliderCategory title="دوبله فارسی جدید" dataMovies={dataSliderTranslate} /> : <CardLoadingSlider />}
      {dataSliderSerial ? <SliderCategory title="انیمیشن" dataMovies={dataSliderAnimation} /> : <CardLoadingSlider />}
    </section>
  );
}

export default ListSlider;