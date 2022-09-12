import { useEffect, useState } from "react";
import http from "../services/httpServices";

const AdminPage = () => {

  const [allMovies, setAllMovies] = useState(null)

  useEffect(() => {
    GET_ALL_MOVIES("/movies", setAllMovies)
  }, [])

  async function GET_ALL_MOVIES(url, setState) {
    try {
      const { data } = await http.Get(url)
      setState(data)
    } catch (error) {
      console.log(error)
    }
  }

  const LoadingListMovies = () => {
    return (
      <div className="w-full container flex items-center justify-center">
        <span className="w-9 h-9 block border-4 rounded-full border-gray-500 border-l-transparent animate-spin"></span>
      </div>
    )
  }

  return (
    <section className="w-full mt-[65px]">
      <article className="w-full flex flex-col gap-y-4 items-center">
        <h2>لیست فیلم ها</h2>
        <ul className="w-full flex flex-col items-start justify-start ">
          <li className="odd:bg-zinc-800 w-full select-none text-sm flex items-center justify-start gap-x-4 p-4">
            <span className="w-14 h-14 flex items-center justify-center">پوستر</span>
            <span className="w-14 h-14 flex items-center justify-center">نام fa</span>
            <span className="w-14 h-14 flex items-center justify-center">نام en</span>
            <span className="w-14 h-14 flex items-center justify-center">ساخت</span>
            <span className="w-14 h-14 flex items-center justify-center">اسلایدر</span>
          </li>
          {allMovies ? allMovies.map(movie => {
            return (
              <li key={movie.id} className="odd:bg-zinc-800 w-full select-none text-sm flex items-center justify-start gap-x-4 p-4">
                <div className="w-14 h-14 overflow-hidden rounded-lg"><img src={movie.cover} className="w-full h-full object-cover" alt="" /></div>
                <span className="w-14 h-full flex items-center justify-center">{movie.faName}</span>
                <span className="w-14 h-full flex items-center justify-center">{movie.enName}</span>
                <span className="w-14 h-full flex items-center justify-center">{movie.country}</span>
                <span className="w-14 h-full flex items-center justify-center">{movie.slider === true ? "روشن" : "خاموش"}</span>
              </li>
            )
          }) : <LoadingListMovies />}
        </ul>
      </article>
    </section>
  );
}

export default AdminPage;