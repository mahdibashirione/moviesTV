import http from "../services/httpServices";
import { Menu } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import { FiChevronDown, FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button"
import Backdrop from "@mui/material/Backdrop";
import { Skeleton } from "@mui/material";
import Filter from "../components/Filter";

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

    const ResultItem = () => {
      return (
        <div className="w-full container flex items-center justify-center animate-pulse gap-x-5">
          <Skeleton variant="rounded" height={55} width={55} animation="wave" />
          <Skeleton variant="text" width={80} animation="wave" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" width={80} animation="wave" sx={{ fontSize: "1rem" }} />
          <div className="md:block hidden">
            <Skeleton variant="text" width={55} animation="wave" sx={{ fontSize: "1rem" }} />
          </div>
          <div className="md:block hidden">
            <Skeleton variant="text" width={55} animation="wave" sx={{ fontSize: "1rem" }} />
          </div>
          <div className="md:block hidden">
            <Skeleton variant="text" width={55} animation="wave" sx={{ fontSize: "1rem" }} />
          </div>
          <Skeleton variant="text" width={55} animation="wave" sx={{ fontSize: "1rem" }} />
        </div>
      )
    }

    return (
      <article className="w-full items-center p-4 flex flex-col gap-y-5 relative">
        <ResultItem />
        <ResultItem />
        <ResultItem />
        <ResultItem />
        <ResultItem />
        <ResultItem />
        <ResultItem />
        <div className="absolute top-0 right-0 bg-gradient-to-t from-white z-30 w-full h-full"></div>
      </article>
    )
  }

  const options = [
    { id: 1, href: '/admin/detailMovie', label: '?????????????? ??????????' },
    { id: 2, href: '/admin', label: '??????????????????' },
  ]

  const handleDeleteMovie = (id) => {
    http.Delete(`/movies/${id}`)
      .then(res => GET_ALL_MOVIES("/movies", setAllMovies))
      .catch(error => console.log(error))
  }

  return (
    <>
      <Filter />
      <section className="w-screen min-h-screen bg-white text-slate-800">
        <article className="flex flex-col mx-auto">
          <div className="bg-white border-b border-gray-400 sticky top-0 z-30 max-w-full select-none text-sm flex items-center justify-center gap-x-4 px-4">
            <span className="w-14 h-14 flex items-center justify-center">??????????</span>
            <span className="w-20 h-14 flex items-center justify-center">?????? fa</span>
            <span className="w-20 h-14 md:flex items-center justify-center hidden">?????? en</span>
            <span className="w-14 h-14 md:flex items-center justify-center hidden">????????</span>
            <span className="w-20 h-full flex items-center justify-center">???????? ????????</span>
            <span className="w-14 h-14 md:flex items-center justify-center hidden">??????????????</span>
            <span className="w-24 h-full flex items-center justify-center">Option</span>
          </div>
          <ul className="max-w-full whitespace-nowrap overflow-hidden flex flex-col items-start justify-start ">
            {allMovies ? allMovies.map(movie => {
              return (
                <li key={movie.id} className="odd:bg-gray-200 w-full select-none text-sm flex items-center justify-center md:justify-start md:justify-center gap-x-4 p-4">
                  <div className="w-14 h-14 overflow-hidden rounded-lg"><img src={movie.cover} className="w-full h-full object-cover" alt="" /></div>
                  <span className="w-20 h-full flex items-center justify-center">{movie.faName}</span>
                  <span className="w-20 h-full md:flex items-center justify-center hidden">{movie.enName}</span>
                  <span className="w-14 h-full md:flex items-center justify-center hidden">{movie.country}</span>
                  <span className="w-20 h-full flex items-center justify-center">{movie.category}</span>
                  <span className="w-14 h-full md:flex items-center justify-center hidden">{movie.slider === true ? "????????" : "??????????"}</span>
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="text-sm inline-flex items-center w-full justify-center rounded-md bg-black bg-opacity-20 pr-4 pl-2 py-2  font-medium text-white hover:bg-opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        Option
                        <FiChevronDown className="text-lg mr-2" />
                      </Menu.Button>
                    </div>
                    <Menu.Items className="absolute left-0 top-full mt-2 z-30 text-sm origin-top-right divide-y divide-gray-500 rounded-md overflow-hidden bg-zinc-900 flex flex-col shadow-lg focus:outline-none border border-gray-600">
                      {options.map((link) => (
                        <Menu.Item key={link.id} as={Fragment}>
                          {({ active }) => (
                            <Link
                              to={`${link.href}/${movie.id}`}
                              state={{ id: movie.id }}
                              className={`${active ? 'bg-blue-500' : 'text-white'} whitespace-nowrap p-4`}
                            >
                              {link.label}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                      <Menu.Item as={Fragment}>
                        <div className="w-full border-t p-1 ">
                          <Button fullWidth color={"error"} onClick={e => handleDeleteMovie(movie.id)}>??????</Button>
                        </div>
                      </Menu.Item>
                    </Menu.Items>
                  </Menu>
                </li>
              )
            }) : <LoadingListMovies />}
          </ul>
        </article>
        {/* btn Add New Movie */}
        <Link to={"/admin/add/newmoviedata"} className="fixed bottom-4 right-4 w-14 h-14 hover:scale-90 duration-300 bg-gradient-to-tr from-blue-500 to-teal-500 rounded-full flex items-center justify-center  z-40">
          <FiPlus className="text-2xl text-white" />
        </Link>
      </section >
    </>
  );
}

export default AdminPage;