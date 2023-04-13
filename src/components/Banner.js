import { FiLoader } from "react-icons/fi";
import { Link } from "react-router-dom";
import useFetch from "../Hook/useFetch";

const Banner = () => {
  const { data, error, loading } = useFetch();

  return (
    <>
      {/* Title */}
      <div className="w-full py-4 text-sm flex items-center justify-between">
        <span className="font-bold text-base flex items-center gap-x-2">
          <FiLoader className="text-xl -mb-1" />
          به زودی
        </span>
        <Link
          to=""
          className="text-gray-500 hover:text-blue-500 hover:scale-95 duration-300"
        >
          مشاهده همه
        </Link>
      </div>
      {/* List coming Movies */}
      <div className="w-full sticky top-20 flex flex-col gap-y-4">
        {loading &&
          [1, 2, 3, 4].map((loading) => (
            <span className="w-full h-[95px] animate-pulse bg-zinc-700 rounded-lg"></span>
          ))}
        {data &&
          data
            .filter((movie) => movie.coming === true)
            .slice(0, 6)
            .map((banner) => {
              return (
                <aside
                  key={banner.id}
                  className="w-full h-24 rounded-lg relative overflow-hidden"
                >
                  <Link
                    to={`/movie/${banner.id}/${banner.faName}`}
                    state={banner}
                    className="block w-full h-full"
                  >
                    <img
                      src={banner.comingImage}
                      alt="newMovie"
                      className="w-full h-full object-cover"
                    />
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
              );
            })}
        {error && (
          <h2 className="selec-none text-red-500 w-full text-center">Error</h2>
        )}
      </div>
    </>
  );
};

export default Banner;
