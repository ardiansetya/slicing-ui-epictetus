import Link from "next/link";
import { useState } from "react";
import { FaAlignJustify, FaArrowDown, FaArrowRight, FaCross, FaHamburger, FaRegMinusSquare, FaSearch, FaXing } from "react-icons/fa";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [offCanvas, setOffCanvas] = useState(false);

  const dropDownList = [
    {
      href: "/internet",
      title: "Internet",
    },
    {
      href: "/books",
      title: "Books",
    },
    {
      href: "/open-source",
      title: "Open Source",
    },
  ];
  return (
    <nav className=" py-10 container">
      <div className="flex items-center ">
        <div className="w-3/12 lg:hidden">
          <button onClick={() => setOffCanvas(!offCanvas)}>
            <FaAlignJustify />
          </button>
        </div>
        <div className="lg:w-2/12 w-5/12 flex items-center lg:justify-start justify-center gap-4">
          <div className=" flex justify-center items-center bg-gray-500 rounded-lg size-10">
            E
          </div>
          Epictetus
        </div>
        <div className="w-4/12 lg:hidden text-end">
          <FaSearch className="inline-block text-gray-400 " />
        </div>
        <div
          className={`lg:w-7/12 w-full bg-gradient-to-b from-gray-600 to bg-gray-900 fixed h-full top-0 p-10 ${
            offCanvas ? "left-0" : "-left-full"
          }`}>
          <div className="absolute top-10 right-10">
            <button onClick={() => setOffCanvas(false)} className="text-2xl">
              X
            </button>
          </div>
          <ul className=" flex lg:gap-14 lg:items-center flex-col space-y-4 ">
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
                  <FaArrowDown className="w-3 ml-2 " />
                ) : (
                  <FaArrowRight className="w-3 ml-2 " />
                )}
              </Link>
              {dropdownOpen && (
                <ul className="absolute mt-4 shadow-md w-[200px] bg-gray-800 rounded-md">
                  {dropDownList.map(({ href, title }) => (
                    <Link
                      key={title}
                      className="px-4 py-3 flex hover:bg-gray-400 border-b rounded-md border-white/5 hover:underline hover:text-gray-800 transition duration-300"
                      href={href}>
                      {title}
                    </Link>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>
        <div className="lg:w-3/12 relative hidden lg:block">
          <FaSearch className="absolute top-4 left-5 text-gray-400/20" />
          <input
            type="text"
            placeholder="Search"
            className=" py-3 px-14 rounded-full bg-gray-700 w-full focus:outline-none focus:ring-2 focus:ring-gray-400/20"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
