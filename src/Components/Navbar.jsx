import React, { useState } from "react";
import logo from "../assets/LOGO.png";
export default function Navbar() {
  const [NavVisible, setNavVisible] = useState(false);
  return (
    <nav className="sticky [background-color:rgba(0,0,0,0.6)] backdrop-blur-sm px-2 sm:px-4 py-2.5 w-screen z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="container flex items-center justify-between mx-auto">
        <a href="https://flowbite.com/" className="flex items-center">
          <img src={logo} style={{ height: "50px" }} alt={"urban laundry"} />
        </a>
        <div className="flex md:order-md2">
          <button
            onClick={() => {
              setNavVisible(!NavVisible);
            }}
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={
            NavVisible
              ? "display absolute left-0  [background-color:rgba(0,0,0,0.9)] backdrop-blur-sm w-screen top-[4.2rem] border-b border-gray-200 md:flex md:w-auto md:order-1"
              : "items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          }
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4   rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium ">
            <li>
              <a
                href="/"
                className="block py-2 pl-3 pr-4 rounded md:p-0 text-white"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/#Services"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/#Pricing"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="/#Get Franchises"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Get Franchises
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/#Locate us"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Locate Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
