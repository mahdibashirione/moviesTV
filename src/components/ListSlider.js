import { useState } from "react";
import SliderCategory from "./SliderCategory";

const ListSlider = () => {

  const [data, setData] = useState(null)


  const CardLoadingSlider = () => {
    return (
      <article className="md:container p-4 w-full duration-400 animate-pulse">
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
      {data ? <SliderCategory title="سریال های ایرانی جدید" dataMovies={data} /> : <CardLoadingSlider />}
      {data ? <SliderCategory title="دوبله فارسی جدید" dataMovies={data} /> : <CardLoadingSlider />}
      {data ? <SliderCategory title="انیمیشن" dataMovies={data} /> : <CardLoadingSlider />}
    </section>
  );
}

export default ListSlider;