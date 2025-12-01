import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink className={({isActive})=>isActive? "bg-green-500 text-white" : " "} to="/">Home</NavLink>
      </li>
      <li>
        <NavLink className={({isActive})=>isActive? "bg-green-500 text-white" : " "} to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink className={({isActive})=>isActive? "bg-green-500 text-white" : " "} to={"/readlist"}>ReadList</NavLink>
      </li>
      <li>
        <NavLink className={({isActive})=>isActive? "bg-green-500 text-white" : " "} to={"/details"}>Details</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link
          to={"/"}
          className="text-xl md:text-2xl lg:text-3xl  font-bold"
        >
          Book Poka
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-lg font-medium px-1 space-x-2">
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <button className="rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative cursor-pointer hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative">Sign In</span>
        </button>
        <button className="rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative cursor-pointer hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative">Sign Up</span>
        </button>
        
      </div>
    </div>
  );
};

export default Navbar;
