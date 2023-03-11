import React, { useState, useEffect } from "react";
import logo from "../assets/LOGO.png";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [NavVisible, setNavVisible] = useState(false);
  const [NavActive, setNavActive] = useState(
    window.location.pathname.includes("blog") ? "blog" : "home"
  );

  useEffect(() => {
    console.log(window.location.hash);
  }, [NavActive]);

  return (
    <nav className="z-30 sticky [background-color:rgba(0,0,0,0.8)] backdrop-blur-sm px-2 sm:px-4 py-2.5 w-screen top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex items-center">
          <Link onClick={() => setNavActive("home")} to={"/"}>
            <img src={logo} style={{ height: "50px" }} alt={"urban laundry"} />
          </Link>
        </div>
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
              <Link
                onClick={() => setNavActive("home")}
                to={"/"}
                className="block py-2 pl-3 pr-4  rounded"
                aria-current="page"
              >
                <span
                  className={
                    NavActive.match("home")
                      ? "text-white border-b"
                      : "text-slate-500"
                  }
                >
                  Home
                </span>
              </Link>
            </li>
            <li>
              <a
                onClick={() => setNavActive("Services")}
                href="#Services"
                className="block py-2 pl-3 pr-4  rounded "
              >
                <span
                  className={
                    NavActive.match("Services")
                      ? "text-white border-b"
                      : "text-slate-500"
                  }
                >
                  {" "}
                  Services
                </span>
              </a>
            </li>
            <li>
              <a
                onClick={() => setNavActive("Pricing")}
                href="/#Pricing"
                className="block py-2 pl-3 pr-4 rounded "
              >
                <span
                  className={
                    NavActive.match("Pricing")
                      ? "text-white border-b"
                      : "text-slate-500"
                  }
                >
                  {" "}
                  Pricing
                </span>
              </a>
            </li>
            <li>
              <a
                onClick={() => setNavActive("Get Franchises")}
                href="/#Get Franchises"
                className="block py-2 pl-3 pr-4 "
              >
                <span
                  className={
                    NavActive.match("Get Franchises")
                      ? "text-white border-b"
                      : "text-slate-500"
                  }
                >
                  Get Franchises
                </span>
              </a>
            </li>
            <li>
              <Link
                onClick={() => setNavActive("blog")}
                to="/blog"
                className="block py-2 pl-3 pr-4 "
              >
                <span
                  className={
                    window.location.pathname.includes("blog")
                      ? "text-white border-b"
                      : "text-slate-500"
                  }
                >
                  Blog
                </span>
              </Link>
            </li>
            <li>
              <a
                onClick={() => setNavActive("Locate")}
                href="/#Locate us"
                className="block py-2 pl-3 pr-4 "
              >
                <span
                  className={
                    NavActive.match("Locate")
                      ? "text-white border-b"
                      : "text-slate-500"
                  }
                >
                  Locate Us
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
