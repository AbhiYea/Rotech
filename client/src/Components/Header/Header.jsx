import logo from "../../Assets/logo-2.png"
import "./header.css"
export default function Header() {
  return (
    <header class="shadow-lg sticky z-50 top-0">
      <nav class="bg-gray-800 text-white border-gray-200 px-4 lg:px-6 py-3">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          
          {/*Logo*/}
          <a href="/" class="flex items-center">
            <img
              src={logo}
              class="mr-3 h-10 imageDa"
              alt="Logo"
            />
          </a>

          {/*Buttons*/}
          <div class="flex items-center lg:order-2 space-x-2">
            <a
              href="#"
              class="text-sm px-4 py-2 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
            >
              Log In
            </a>
            <a
              href="#"
              class="text-sm px-4 py-2 rounded-lg font-medium bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-300 shadow-md transition"
            >
              Sign Up
            </a>
          </div>

          {/*Nav links*/}
          <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="/"
                  class="block py-2 pr-4 pl-3 transition duration-200 border-b border-gray-700 hover:text-orange-400 lg:border-0 lg:p-0 text-white"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  class="block py-2 pr-4 pl-3 transition duration-200 border-b border-gray-700 hover:text-orange-400 lg:border-0 lg:p-0 text-white"
                >
                  About
                </a>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
}