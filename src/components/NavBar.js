import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
export default function NavBar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between lg:w-auto">
        <nav className="flex flex-col lg:inline-flex lg:flex-row ">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="lg:inline-flex items-center mr-4 p-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
          >
            Crooked Codes
          </NavLink>
          <div
            className={
              "flex flex-col lg:inline-flex lg:flex-row " +
              (navbarOpen ? "flex" : "hidden")
            }
          >
            <NavLink
              to="/post"
              activeClassName="text-red-100 lg:bg-red-700"
              className="lg:inline-flex items-center py-1 px-2 lg:py-3 lg:px-3 my-6 rounded text-red-200 hover:text-green-800 "
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              Blog Posts
            </NavLink>
            <NavLink
              to="/project"
              activeClassName="text-red-100 lg:bg-red-700"
              className="lg:inline-flex items-center  py-1 px-2 lg:py-3 lg:px-3 my-6 rounded text-red-200 hover:text-green-800 "
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              Projects
            </NavLink>
            <NavLink
              to="/about"
              activeClassName="text-red-100 lg:bg-red-700"
              className="lg:inline-flex items-center py-1 px-2 lg:py-3 lg:px-3 my-6 rounded text-red-200 hover:text-green-800 "
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              About Me
            </NavLink>
          </div>
        </nav>
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="text-white inline-flex p-6 hover:gb-gray-300 rounded lg:hidden ml-auto"
        >
          <img
            src="https://img.icons8.com/material-outlined/24/ffffff/menu--v1.png"
            alt="menu icon"
          />
        </button>
        <div className="hidden lg:inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://github.com/abylinjohnson"
            className="mr-4 "
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/abylin-johnson-bb0660150/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.instagram.com/_byl_n.j_hns_n/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
