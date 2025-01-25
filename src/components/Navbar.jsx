import Link from "next/link";
import { useState } from "react";
import { FaArrowDown, FaArrowRight, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
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
          <div className="w-8/12">
            <ul className=" flex gap-14">
              <li>
                <Link className="hover:underline" href={"/"}>
                  UI Design
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href={"/"}>
                  Frontend
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href={"/"}>
                  Backend
                </Link>
              </li>
              <li className="relative">
                <Link
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="hover:underline flex items-center"
                  href={"/"}>
                  lainya{" "}
                  {dropdownOpen ? (
                    <FaArrowRight className="w-3 ml-2 " />
                  ) : (
                    <FaArrowDown className="w-3 ml-2 " />
                  )}
                </Link>
                <ul className="absolute mt-4 shadow-md w-[200px] bg-gray-800 rounded-md">
                  {dropdownOpen && (
                    <li>
                      <Link
                        className="px-4 py-3 flex hover:bg-gray-400 border-b rounded-md border-white/5 hover:underline hover:text-gray-800 transition duration-300"
                        href={"/"}>
                        Internet
                      </Link>
                      <Link
                        className="px-4 py-3 flex hover:bg-gray-400 border-b rounded-md border-white/5 hover:underline hover:text-gray-800 transition duration-300"
                        href={"/"}>
                        Books
                      </Link>
                      <Link
                        className="px-4 py-3 flex hover:bg-gray-400 border-b rounded-md border-white/5 hover:underline hover:text-gray-800 transition duration-300"
                        href={"/"}>
                        Open Source
                      </Link>
                    </li>
                  )}
                </ul>
              </li>
            </ul>
          </div>
          <div className="w-2/12 relative">
            <FaSearch className="absolute top-4 left-5 text-gray-400/20" />
            <input
              type="text"
              placeholder="Search"
              className=" py-3 px-14 rounded-full bg-gray-700 w-full focus:outline-none focus:ring-2 focus:ring-gray-400/20"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
