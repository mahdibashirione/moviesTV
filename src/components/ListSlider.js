import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { data } from "../server/data";
import GET_DATA_SLIDER from "../utils/getDataSlider";
import SliderCategory from "./SliderCategory";

const ListSlider = () => {
  const [dataSliderSerial, setDataSliderSerial] = useState(null);
  const [dataSliderAnimation, setDataSliderAnimation] = useState(null);
  const [dataSliderTranslate, setDataSliderTranslate] = useState(null);

  useEffect(() => {
    // GET_DATA_SLIDER("/movies", setDataSliderSerial, "سریال-ایرانی")
    // GET_DATA_SLIDER("/movies", setDataSliderAnimation, "انیمیشن")
    // GET_DATA_SLIDER("/movies", setDataSliderTranslate, "دوبله-فارسی")
    setDataSliderSerial(
      data
        .filter((movie) => movie.category === "سریال-ایرانی" && movie.slider)
        .slice(0, 8)
    );
    setDataSliderAnimation(
      data
        .filter((movie) => movie.category === "انیمیشن" && movie.slider)
        .slice(0, 8)
    );
    setDataSliderTranslate(
      data
        .filter((movie) => movie.category === "دوبله-فارسی" && movie.slider)
        .slice(0, 8)
    );
  }, []);

  const CardLoadingSlider = () => {
    const LayoutCard = () => {
      return (
        <div className="flex flex-col gap-y-1">
          <Skeleton
            variant="rounded"
            height={235}
            width={180}
            sx={{ bgcolor: "grey.800" }}
          />
          <Skeleton
            variant="text"
            width={130}
            sx={{ bgcolor: "grey.800", fontSize: "1rem" }}
          />
          <Skeleton
            variant="text"
            width={64}
            sx={{ bgcolor: "grey.800", fontSize: "0.75rem" }}
          />
        </div>
      );
    };

    return (
      <article className="md:container w-full duration-400 animate-pulse pr-2 mb-4">
        <div className="w-full flex items-center justify-between py-3">
          <Skeleton
            variant="text"
            height={40}
            width={130}
            sx={{ bgcolor: "grey.800" }}
          />
          <Skeleton
            variant="text"
            height={20}
            width={64}
            sx={{ bgcolor: "grey.800" }}
          />
        </div>
        <div className="w-full flex items-center justify-start gap-x-2 overflow-x-scroll">
          <LayoutCard />
          <LayoutCard />
          <LayoutCard />
          <LayoutCard />
          <LayoutCard />
        </div>
      </article>
    );
  };

  return (
    <section className="w-full">
      {dataSliderSerial ? (
        <SliderCategory
          title="سریال های ایرانی جدید"
          dataMovies={dataSliderSerial}
        />
      ) : (
        <CardLoadingSlider />
      )}
      {dataSliderSerial ? (
        <SliderCategory
          title="دوبله فارسی جدید"
          dataMovies={dataSliderTranslate}
        />
      ) : (
        <CardLoadingSlider />
      )}
      {dataSliderSerial ? (
        <SliderCategory title="انیمیشن" dataMovies={dataSliderAnimation} />
      ) : (
        <CardLoadingSlider />
      )}
    </section>
  );
};

export default ListSlider;
