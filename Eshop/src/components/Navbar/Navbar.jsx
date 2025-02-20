import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "../DarkMode/DarkMode";

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Shop",
    link: "/#shop",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
  {
    id: 4,
    name: "Blogs",
    link: "/#blog",
  },
];

const DropDownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Related",
    link: "/#",
  },
];

const Navbar = ({handleOrderPopup}) => {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
        <div className="py-4">
          <div className="container flex justify-between">
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
              >
                Eshop
              </a>
              <div className="hidden lg:block">
                <ul className="flex items-center gap-4">
                  {MenuLinks.map((data) => (
                    <li key={data.id}>
                      <a
                        className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                        href={data.link}
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                  {/* Dropdown */}
                  <li className="relative group">
                    <a
                      className="flex items-center gap-2 font-semibold text-gray-500 dark:hover:text-white"
                      href="#"
                    >
                      Quick Links <FaCaretDown className="text-xs" />
                    </a>
                    <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white">

                    <ul className="space-y-2">
                      {DropDownLinks.map((data,index) => (
                        <li key={data.id}>
                          <a
                            className="text-gray-500 dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold "
                            href={data.link}
                            >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                      </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative group hidden sm:block">
                <input
                  type="text"
                  placeholder="Search"
                  className="search-bar"
                />
                <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
              </div>
              <div className="flex items-center gap-4">
                <button className="relative p-3" onClick={handleOrderPopup}>
                  <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
                  <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                    4
                  </div>
                </button>
                <DarkMode />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
