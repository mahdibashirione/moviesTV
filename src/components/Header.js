import { FiMenu, FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <header className="w-full bg-[#fcfcfc] md:sticky top-0 z-40 text-white">
      <div className="container w-full p-4 flex justify-between items-center bg-zinc-900">
        <FiMenu />
        upTV
        <FiSearch />
      </div>
    </header>
  );
}

export default Header;