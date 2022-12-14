import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ListSlider from "./ListSlider";
import { FiLoader } from "react-icons/fi"
import GET_BANNER from "../utils/getBanner";
import { Skeleton } from "@mui/material";

const LayoutSliderAndBanner = () => {

  const [dataBanner, setDataBanner] = useState(null)

  useEffect(() => {
    GET_BANNER("/movies", setDataBanner)
  }, [])

  const CardLoadingBanner = () => {
    return (
      <>
        <Skeleton variant="rounded" height={95} sx={{ bgcolor: "grey.800" }} />
        <Skeleton variant="rounded" height={95} sx={{ bgcolor: "grey.800" }} />
        <Skeleton variant="rounded" height={95} sx={{ bgcolor: "grey.800" }} />
        <Skeleton variant="rounded" height={95} sx={{ bgcolor: "grey.800" }} />
      </>
    )
  }

  return (
    <section className="md:container w-full flex flex-col gap-4 h-full md:flex-row p-4">
      <div className="w-full md:w-[65%] lg:w-[75%]">
        <ListSlider />
      </div>
      <article className="w-full md:w-[35%] lg:w-[25%] min-h-full">
        {/* Title */}
        <div className="w-full py-4 text-sm flex items-center justify-between">
          <span className="font-bold text-base flex items-center gap-x-2">
            <FiLoader className="text-xl -mb-1" />
            به زودی
          </span>
          <Link to="" className="text-gray-500">مشاهده همه</Link>
        </div>
        {/* List coming Movies */}
        <div className="w-full sticky top-20 flex flex-col gap-y-4">
          {dataBanner ? dataBanner.map(banner => {
            return (
              <aside key={banner.id} className="w-full h-24 rounded-lg relative overflow-hidden">
                <Link to={`/movie/${banner.id}/${banner.faName}`} state={banner} className="block w-full h-full">
                  <img src={banner.comingImage} alt="newMovie" className="w-full h-full object-cover" />
                  <div className="w-full h-9 bg-zinc-900/80 bg-blur bottom-0 right-0 absolute text-sm flex items-center justify-between">
                    <div className="flex items-center gap-x-2">
                      <span>{banner.type}</span>
                      <span>{banner.faName}</span>
                      <span>{banner.productionYear}</span>
                      <span>{banner.enName}</span>
                    </div>
                    <p className="p-1">{banner.date}</p>
                  </div>
                </Link>
              </aside>
            )
          }) : <CardLoadingBanner />}
        </div>
      </article>
    </section>
  );
}

export default LayoutSliderAndBanner;