import { useRef, useState } from "react";
import { FiMenu, FiSearch, FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [navData, setNavData] = useState([
    {
      id: 1,
      title: "فیلم خارجی",
      url: "",
      items: [
        { name: "اکشن", url: "" },
        { name: "ترسناک", url: "" },
        { name: "کمدی", url: "" },
        { name: "هندی", url: "" },
        { name: "تخیلی", url: "" },
        { name: "همه فیلم های خارجی", url: "" },
      ],
    },
    {
      id: 2,
      title: "فیلم ایرانی",
      url: "",
      items: [
        { name: "کمدی", url: "" },
        { name: "ترسناک", url: "" },
        { name: "دفاع مقدس", url: "" },
        { name: "خوانوادگی", url: "" },
        { name: "رزمی", url: "" },
        { name: "همه فیلم های خارجی", url: "" },
      ],
    },
    {
      id: 3,
      title: "انیمیشن",
      url: "",
      items: [
        { name: "دوبله فارسی", url: "" },
        { name: "زبان اصلی", url: "" },
      ],
    },
  ]);

  const nav = useRef();
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const handleCloseNavbar = (e) => {
    e.target.className.includes("navbar") &&
      nav.current.classList.replace("left-0", "left-full");
  };

  return (
    <header
      className={`${
        isHomePage ? "sticky to-zinc-900/90" : "fixed"
      } w-full top-0 z-40 bg-gradient-to-b from-zinc-900/90 text-white bg-blur`}
    >
      <div className="container w-full px-4 py-4 md:py-0 flex justify-between items-center">
        <FiMenu
          className="text-xl outline-none cursor-pointer md:hidden"
          onClick={() => nav.current.classList.replace("left-full", "left-0")}
        />
        {/* navMobile */}
        <div
          onClick={(e) => handleCloseNavbar(e)}
          ref={nav}
          className="bg-blur navbar md:hidden md:left-full absolute top-0 left-full duration-300 w-screen h-screen z-40 bg-zinc-900/80"
        >
          <div className="border-l border-gray-500 w-[65%] h-full max-h-full bg-zinc-900 text-white overflow-y-scroll scrollbar-none flex flex-col justify-start items-start">
            {navData.map((nav) => {
              return (
                <Disclosure key={nav.id} className="border-b">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full border-b border-gray-500 justify-between items-center p-4 text-left font-medium focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <span>{nav.title}</span>
                        <FiChevronDown />
                      </Disclosure.Button>
                      <Disclosure.Panel className="w-full px-6 text-sm text-gray-300">
                        {nav.items && (
                          <ul className="w-full py-2">
                            {nav.items.map((navItem, index) => {
                              return (
                                <li key={index}>
                                  <Link
                                    to={navItem.url}
                                    className="rounded whitespace-nowrap p-2.5 hover:bg-gray-200 hover:text-gray-700 flex w-full h-full"
                                  >
                                    {navItem.name}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              );
            })}
          </div>
        </div>
        <span className="select-none">online TV</span>
        {/*navPc*/}
        <nav className="h-full hidden md:block text-sm lg:text-base">
          <ul className="h-full flex items-center justify-center gap-x-2">
            {navData.map((nav) => {
              return (
                //navTitle
                <li
                  key={nav.id}
                  className="group relative h-full cursor-pointer flex items-center justify-start gap-x-2 py-5 hover:text-orange-500 duration-200"
                >
                  {nav.title}
                  <FiChevronDown className="ml-2" />
                  {nav.items && (
                    <ul className="group-hover:block hidden rounded-lg p-2 absolute min-w-full shadow border border-gray-400 bg-zinc-900/90 bg-blur top-[90%] right-0 text-white">
                      {nav.items.map((navItem, index) => {
                        return (
                          <li key={index}>
                            <Link
                              to={navItem.url}
                              className="rounded whitespace-nowrap p-2 hover:text-orange-500 flex w-full h-full"
                            >
                              {navItem.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
        <Link to="/" className="w-8 h-8">
          <img
            className="w-full object-cover"
            src="/image/logoGPT.png"
            alt="logo"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
