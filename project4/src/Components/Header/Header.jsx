import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import d from "../../assets/night.png";
import l from "../../assets/sun.png";
import useTheme from "../Contexts/context";


export default function Header() {
  const {themeMode, lightTheme, darkTheme} = useTheme()

  const context = useTheme();
  const onChangeBtn = (e) => {
      const darkModeStatus = e.currentTarget.checked
      if (darkModeStatus) {
          darkTheme()
      } else {
          lightTheme()
      }
  }

  return (
    <header className="shadow sticky z-50 top-0 ">
      <nav className="bg-white border-gray-200 dark:shadow-sm dark:shadow-gray-900 dark:bg-black dark:text-white px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img src={logo} className="mr-3 h-12" alt="Logo" />
          </Link>
          <div className="flex items-center lg:order-2 pr-20">
            <Link
              to="#"
              className="text-black bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 rounded-lg text-sm font-semibold px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none dark:text-white "
            >
              Get in touch
            </Link>
          </div>


          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 "
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700 dark:text-orange-700"  : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 dark:text-white dark:hover:text-orange-700`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700 dark:text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0
                    dark:text-white dark:hover:text-orange-700`
                    
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700 dark:hover:text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0
                    dark:text-white dark:hover:text-orange-700`
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700 dark:hover:text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0
                    dark:text-white dark:hover:text-orange-700`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        
      </nav>
      <div className="flex justify-end -mt-12 gap-3 m-4">
            <span className="">
                <img className=" h-8" src={l} alt="" />
              </span>
              <label className="relative  items-center cursor-pointer ">
                <input
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                  onChange={onChangeBtn}
                  checked={themeMode=== "dark"}
                />
                <div className="w-11 h-6 mt-1  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:bg-black bg-black after:content-[''] after:absolute after:top-[5.5px] after:left-[2px] after:bg-white  after:border-black after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-white"></div>
              </label>
              <span className="">
                <img className=" h-8" src={d} alt="" />
              </span>
        </div>
    </header>
  );
}
