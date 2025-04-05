import logo from "../../Assets/logo-2.png"
import "./header.css"
import { Link, NavLink } from "react-router-dom";


export default function Header() {
  return (
    <header className="shadow-lg sticky z-50 top-0">
      <nav className="bg-gray-800 text-white border-gray-200 px-4 lg:px-6 py-3">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

          {/* Logo */}
          <Link to="/home" className="flex items-center">
            <img
              src={logo}
              className="mr-3 h-10 imageDa"
              alt="Logo"
            />
          </Link>

          {/* Buttons */}
          <div className="flex items-center lg:order-2 space-x-2">
            <Link
              to="/login"
              className="text-sm px-4 py-2 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="text-sm px-4 py-2 rounded-lg font-medium bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-300 shadow-md transition"
            >
              Sign Up
            </Link>
          </div>

          {/* Nav links */}
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 transition textDa duration-200 border-b border-gray-700 lg:border-0 lg:p-0 
                    ${isActive ? "text-cyan-400" : "text-white hover:text-orange-400"}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 transition textDa duration-200 border-b border-gray-700 lg:border-0 lg:p-0 
                    ${isActive ? "text-cyan-400" : "text-white hover:text-orange-400"}`
                  }
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
}

