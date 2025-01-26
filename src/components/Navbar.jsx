import Link from "next/link";
import { useState } from "react";
import { FaArrowDown, FaArrowRight, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
                    <FaArrowDown className="w-3 ml-2 " />
                  ) : (
                    <FaArrowRight className="w-3 ml-2 " />
                  )}
                </Link>
                {dropdownOpen && (
                  <ul className="absolute mt-4 shadow-md w-[200px] bg-gray-800 rounded-md">
                    {dropDownList.map(({href, title}) => (
                        
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

  );
};

export default Navbar;
