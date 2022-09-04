import { useRef, useState } from "react";
import { FiMenu, FiSearch, FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Disclosure } from '@headlessui/react'

const Header = () => {

  const [navData, setNavData] = useState([
    {
      title: "فیلم خارجی",
      url: "",
      items: [
        { name: "اکشن", url: "" },
        { name: "ترسناک", url: "" },
        { name: "کمدی", url: "" },
        { name: "هندی", url: "" },
        { name: "تخیلی", url: "" },
        { name: "همه فیلم های خارجی", url: "" },
      ]
    },
    {
      title: "فیلم ایرانی",
      url: "",
      items: [
        { name: "کمدی", url: "" },
        { name: "ترسناک", url: "" },
        { name: "دفاع مقدس", url: "" },
        { name: "خوانوادگی", url: "" },
        { name: "رزمی", url: "" },
        { name: "همه فیلم های خارجی", url: "" },
      ]
    },
    { title: "انیمیشن", url: "" },
    { title: "دوبله فارسی", url: "" },
  ])

  const nav = useRef()

  const handleCloseNavbar = (e) => {
    e.target.className.startsWith("navbar") && nav.current.classList.replace("left-0", "left-full")
  }

  return (
    <header className="w-full sticky top-0 z-40 text-slate-800 bg-white">
      <div className="container w-full px-4 py-4 md:py-0 flex justify-between items-center border-b">
        <FiMenu className="text-xl outline-none cursor-pointer md:hidden" onClick={() => nav.current.classList.replace("left-full", "left-0")} />
        <div onClick={e => handleCloseNavbar(e)} ref={nav} className="navbar md:hidden md:left-full absolute top-0 left-full duration-300 w-screen h-screen z-40 bg-zinc-900/80" >
          <div className="w-[65%] h-full max-h-full bg-white overflow-y-scroll flex flex-col justify-start items-start">
            {navData.map(nav => {
              return (
                <Disclosure className="border-b">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full border-b justify-between items-center bg-gray-100 p-4 text-left text-slate-800 font-medium hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <span>{nav.title}</span>
                        <FiChevronDown />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 p-3 pr-10 text-sm text-gray-500">
                        mahdi
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              )
            })}
          </div>
        </div>
        upTV
        <nav className="h-full hidden md:block">
          <ul className="h-full flex items-center justify-center gap-x-2">
            {navData.map(nav => {
              return (
                <li className="h-full cursor-pointer flex items-center gap-x-2 py-4 hover:text-orange-500 duration-200">
                  {nav.title}
                  <FiChevronDown />
                </li>
              )
            })}
          </ul>
        </nav>
        <FiSearch className="text-xl" />
      </div>
    </header>
  );
}

export default Header;