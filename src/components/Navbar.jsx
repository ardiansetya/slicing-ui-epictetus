import Link from "next/link";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="container mx-auto text-white">
      <nav className=" py-10">
        <div className="flex items-center ">
          <div className="w-2/12 flex items-center  gap-4">
            <div className=" flex justify-center items-center bg-gray-500 rounded-lg size-10">
              E
            </div>
            Epictetus
          </div>
          <div className="w-8/12 flex gap-14">
            <Link className="hover:underline" href={"/"}>
              UI Design
            </Link>
            <Link className="hover:underline" href={"/"}>
              Frontend
            </Link>
            <Link className="hover:underline" href={"/"}>
              Backend
            </Link>
            <Link className="hover:underline" href={"/"}>
              lainya{" "}
            </Link>
          </div>
          <div className="w-2/12 relative">
            <FaSearch className="absolute top-4 left-5 text-gray-400/20" />
            <input
              type="text"
              placeholder="Search"
              className=" py-3 px-14 rounded-full bg-gray-700 w-full"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
