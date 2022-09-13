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
            <span className="text-sm text-gray-500">کاور :</span>
            <p>{dataMovie.cover}</p>
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
            <p>{dataMovie.director}</p>
          </div>
          <div className="w-full flex flex-col items-start gap-y-1 border-b border-gray-600 py-4">
            <span className="text-sm text-gray-500">تیزر :</span>
            <p>{dataMovie.demo}</p>
          </div>
        </> : <Loading />}
    </section>
  );
}

export default DetailMovie;