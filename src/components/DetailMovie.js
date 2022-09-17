import { data } from "autoprefixer"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import GET_DATA from "../utils/getData"

const DetailMovie = () => {

  const location = useLocation()
  const idMovie = location.state.id
  const [dataMovie, setDataMovie] = useState(null)

  useEffect(() => {
    GET_DATA(`/movies/${idMovie}`, setDataMovie)
  }, [])


  const Loading = () => {
    return (
      <div className="w-[200px] h-[170px] bg-white rounded-lg flex flex-col items-center justify-center gap-y-3">
        <span className="block rounded-full h-10 w-10 border-4 border-gray-400 border-l-transparent animate-spin"></span>
        <span className="text-gray-600">loading ...</span>
      </div>
    )
  }

  return (
    <section className="select-none w-full min-h-screen flex flex-col items-center justify-center md:container p-4">
      {dataMovie ?
        <>
          <div className="w-full flex flex-col items-start gap-y-1 border-b border-gray-600 py-4">
            <span className="text-sm text-gray-500">نام فارسی :</span>
            <p>{dataMovie.faName}</p>
          </div>
          <div className="w-full flex flex-col items-start gap-y-1 border-b border-gray-600 py-4">
            <span className="text-sm text-gray-500">نام لاتین :</span>
            <p>{dataMovie.enName}</p>
          </div>
          <div className="w-full flex flex-col items-start gap-y-1 border-b border-gray-600 py-4">
            <span className="text-sm text-gray-500">دسته بندی :</span>
            <p>{dataMovie.category}</p>
          </div>
          <div className="w-full flex flex-col items-start gap-y-1 border-b border-gray-600 py-4">
            <span className="text-sm text-gray-500">سال ساخت :</span>
            <p>{dataMovie.productionYear}</p>
          </div>
          <div className="w-full flex flex-col items-start gap-y-1 border-b border-gray-600 py-4">
            <span className="text-sm text-gray-500">زمان فیلم :</span>
            <p>{dataMovie.time}</p>
          </div>
          <div className="w-full flex flex-col items-start gap-y-1 border-b border-gray-600 py-4">
            <span className="text-sm text-gray-500">سن مجاز برای تماشا :</span>
            <p>{dataMovie.permissibleAge}سال به بالا</p>
          </div>
          <div className="w-full flex flex-col items-start gap-y-1 border-b border-gray-600 py-4">
            <span className="text-sm text-gray-500"> سبک فیلم :</span>
            <p>{dataMovie.genre}</p>
          </div>
          <div className="w-full flex flex-col items-start gap-y-1 border-b border-gray-600 py-4">
            <span className="text-sm text-gray-500">  IMDB امتیاز فیلم :</span>
            <p>{dataMovie.imdb}</p>
          </div>
          <div className="w-full flex items-start gap-x-2 border-b border-gray-600 py-4">
            <span className="text-sm text-gray-500">کاور :</span>
            <img src={dataMovie.cover} className="w-40" />
          </div>
          <div className="w-full flex flex-col items-start gap-y-1 border-b border-gray-600 py-4">
            <span className="text-sm text-gray-500 text-justify">داستان فیلم :</span>
            <p>{dataMovie.story}</p>
          </div>
          <div className="w-full flex flex-col items-start gap-y-1 border-b border-gray-600 py-4">
            <span className="text-sm text-gray-500 text-justify">درباره فیلم :</span>
            <p>{dataMovie.aboutTheMovie}</p>
          </div>
          <div className="w-full flex flex-col items-start gap-y-1 border-b border-gray-600 py-4">
            <span className="text-sm text-gray-500">بازیگران :</span>
            <p>{dataMovie.actors.map(actor => actor + "---")}</p>
          </div>
          <div className="w-full flex flex-col items-start gap-y-1 border-b border-gray-600 py-4">
            <span className="text-sm text-gray-500">کارگردان :</span>
            <p>{dataMovie.director ? dataMovie.director : "نامشخص"}</p>
          </div>
          <div className="w-full flex flex-col items-start gap-y-1 border-b border-gray-600 py-4">
            <span className="text-sm text-gray-500">تیزر :</span>
            {dataMovie.demo ?
              <video width="540" height="315" className="mt-4" controls poster={dataMovie.poster}>
                <source src={dataMovie.demo} type="video/mp4" />
              </video>
              : <span>نامشخص</span>}
          </div>
          <div className="w-full flex flex-col items-start gap-y-1 border-b border-gray-600 py-4">
            <span className="text-sm text-gray-500">تاریخ انتشار :</span>
            <p>{dataMovie.coming ? dataMovie.date : "منتشر شده"}</p>
          </div>
        </> : <Loading />}
    </section>
  );
}

export default DetailMovie;