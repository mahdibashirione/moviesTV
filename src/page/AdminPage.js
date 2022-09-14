import http from "../services/httpServices";
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { FiChevronDown, FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

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
      <article className="w-full items-center min-h-[calc(100vh-57px)] p-4 flex flex-col gap-y-5 relative">
        <div className="w-full container flex items-center justify-center animate-pulse gap-x-6">
          <div className="w-14 rounded-lg h-14 bg-gray-400 flex items-center justify-center">
            <span className="w-8 h-8 rounded-full border-4 border-zinc-800 border-l-transparent animate-spin"></span>
          </div>
          <span className="w-20 rounded-full h-4 bg-gray-400"></span>
          <span className="w-14 rounded-full h-4 bg-gray-400"></span>
          <span className="w-20 rounded-full h-4 bg-gray-400"></span>
          <span className="w-14 rounded-full h-4 bg-gray-400"></span>
          <span className="w-14 rounded-full h-4 bg-gray-400"></span>
          <span className="w-14 rounded-lg h-7 bg-gray-400 flex justify-end items-center"><FiChevronDown /></span>
        </div>
        <div className="w-full container flex items-center justify-center animate-pulse gap-x-6">
          <div className="w-14 rounded-lg h-14 bg-gray-400 flex items-center justify-center">
            <span className="w-8 h-8 rounded-full border-4 border-zinc-800 border-l-transparent animate-spin"></span>
          </div>
          <span className="w-20 rounded-full h-4 bg-gray-400"></span>
          <span className="w-14 rounded-full h-4 bg-gray-400"></span>
          <span className="w-20 rounded-full h-4 bg-gray-400"></span>
          <span className="w-14 rounded-full h-4 bg-gray-400"></span>
          <span className="w-14 rounded-full h-4 bg-gray-400"></span>
          <span className="w-14 rounded-lg h-7 bg-gray-400 flex justify-end items-center"><FiChevronDown /></span>
        </div>
        <div className="w-full container flex items-center justify-center animate-pulse gap-x-6">
          <div className="w-14 rounded-lg h-14 bg-gray-400 flex items-center justify-center">
            <span className="w-8 h-8 rounded-full border-4 border-zinc-800 border-l-transparent animate-spin"></span>
          </div>
          <span className="w-20 rounded-full h-4 bg-gray-400"></span>
          <span className="w-14 rounded-full h-4 bg-gray-400"></span>
          <span className="w-20 rounded-full h-4 bg-gray-400"></span>
          <span className="w-14 rounded-full h-4 bg-gray-400"></span>
          <span className="w-14 rounded-full h-4 bg-gray-400"></span>
          <span className="w-14 rounded-lg h-7 bg-gray-400 flex justify-end items-center"><FiChevronDown /></span>
        </div>
        <div className="w-full container flex items-center justify-center animate-pulse gap-x-6">
          <div className="w-14 rounded-lg h-14 bg-gray-400 flex items-center justify-center">
            <span className="w-8 h-8 rounded-full border-4 border-zinc-800 border-l-transparent animate-spin"></span>
          </div>
          <span className="w-20 rounded-full h-4 bg-gray-400"></span>
          <span className="w-14 rounded-full h-4 bg-gray-400"></span>
          <span className="w-20 rounded-full h-4 bg-gray-400"></span>
          <span className="w-14 rounded-full h-4 bg-gray-400"></span>
          <span className="w-14 rounded-full h-4 bg-gray-400"></span>
          <span className="w-14 rounded-lg h-7 bg-gray-400 flex justify-end items-center"><FiChevronDown /></span>
        </div>
        <div className="w-full container flex items-center justify-center animate-pulse gap-x-6">
          <div className="w-14 rounded-lg h-14 bg-gray-400 flex items-center justify-center">
            <span className="w-8 h-8 rounded-full border-4 border-zinc-800 border-l-transparent animate-spin"></span>
          </div>
          <span className="w-20 rounded-full h-4 bg-gray-400"></span>
          <span className="w-14 rounded-full h-4 bg-gray-400"></span>
          <span className="w-20 rounded-full h-4 bg-gray-400"></span>
          <span className="w-14 rounded-full h-4 bg-gray-400"></span>
          <span className="w-14 rounded-full h-4 bg-gray-400"></span>
          <span className="w-14 rounded-lg h-7 bg-gray-400 flex justify-end items-center"><FiChevronDown /></span>
        </div>
        <div className="w-full container flex items-center justify-center animate-pulse gap-x-6">
          <div className="w-14 rounded-lg h-14 bg-gray-400 flex items-center justify-center">
            <span className="w-8 h-8 rounded-full border-4 border-zinc-800 border-l-transparent animate-spin"></span>
          </div>
          <span className="w-20 rounded-full h-4 bg-gray-400"></span>
          <span className="w-14 rounded-full h-4 bg-gray-400"></span>
          <span className="w-20 rounded-full h-4 bg-gray-400"></span>
          <span className="w-14 rounded-full h-4 bg-gray-400"></span>
          <span className="w-14 rounded-full h-4 bg-gray-400"></span>
          <span className="w-14 rounded-lg h-7 bg-gray-400 flex justify-end items-center"><FiChevronDown /></span>
        </div>
        <div className="absolute top-0 right-0 bg-gradient-to-t from-zinc-800 z-30 w-full h-full"></div>
      </article>
    )
  }

  const options = [
    { id: 1, href: '/admin/detailMovie', label: 'اطلاعات بیشتر' },
    { id: 2, href: '/admin', label: 'بروزرسانی' },
  ]

  return (
    <section className="w-full">
      <article className="w-full flex flex-col items-start">
        <div className="bg-zinc-900 sticky top-0 border-b z-20 min-w-full select-none text-sm flex items-center justify-start md:justify-center gap-x-4 px-4">
          <span className="w-14 h-14 flex items-center justify-center">پوستر</span>
          <span className="w-20 h-14 flex items-center justify-center">نام fa</span>
          <span className="w-20 h-14 flex items-center justify-center">نام en</span>
          <span className="w-14 h-14 flex items-center justify-center">ساخت</span>
          <span className="w-20 h-full flex items-center justify-center">دسته بندی</span>
          <span className="w-14 h-14 flex items-center justify-center">اسلایدر</span>
          <span className="w-24 h-full flex items-center justify-center">Option</span>
        </div>
        <ul className="min-w-full overflow-x-scroll flex flex-col items-start justify-start ">
          {allMovies ? allMovies.map(movie => {
            return (
              <li key={movie.id} className="odd:bg-zinc-800 w-full select-none text-sm flex items-center justify-start md:justify-center gap-x-4 p-4">
                <div className="w-14 h-14 overflow-hidden rounded-lg"><img src={movie.cover} className="w-full h-full object-cover" alt="" /></div>
                <span className="w-20 h-full flex items-center justify-center">{movie.faName}</span>
                <span className="w-20 h-full flex items-center justify-center">{movie.enName}</span>
                <span className="w-14 h-full flex items-center justify-center">{movie.country}</span>
                <span className="w-20 h-full flex items-center justify-center">{movie.category}</span>
                <span className="w-14 h-full flex items-center justify-center">{movie.slider === true ? "روشن" : "خاموش"}</span>
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

                  </Menu.Items>

                </Menu>
              </li>
            )
          }) : <LoadingListMovies />}
        </ul>
      </article>
      <Link to={"/admin/add/newmoviedata"} className="group fixed bottom-4 overflow-hidden max-w-[50px] hover:max-w-full right-4 p-3  bg-gradient-to-tr from-blue-500 to-teal-500 rounded-full flex items-center justify-center gap-x-2 duration-500">
        <span className="-mr-[53px] opacity-0 group-hover:mr-0 group-hover:opacity-100 duration-500 whitespace-nowrap">افزودن</span>
        <FiPlus className="text-2xl" />
      </Link>
    </section >
  );
}

export default AdminPage;