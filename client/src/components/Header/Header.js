import React from "react";
import { Link } from "react-router-dom";
import ImageSite from "../../images/logo.png";
import ImageBtn from "../../images/menu.svg";

const HeaderRight = ({ isConnected }) => {
  return isConnected ? (
    <ul
      id="toggled-menu"
      className="w-full absolute top-full left-0 -translate-y-full -z-10 text-gray-800 border-b border-gray-200 flex flex-col items-center md:static md:z-10 md:w-min md:transform-none md:border-none md:flex-row"
    >
      <li className="py-4 md:py-0 md:mr-6">
        <Link to="/notes">
          <div className="text-sm uppercase font-semibold w-full hover:text-rose-600">
            <span>Notes</span>
            <span className="text-danger text-lg">.</span>
          </div>
        </Link>
      </li>
      <li className="py-4 md:py-0 md:mr-6">
        <Link to="/profile">
          <div className="text-sm uppercase font-semibold w-full hover:text-rose-600">
            <span>Profile</span>
            <span className="text-danger text-lg">.</span>
          </div>
        </Link>
      </li>
    </ul>
  ) : (
    <ul
      id="toggled-menu"
      className="w-full absolute top-full left-0 -translate-y-full -z-10 text-gray-800 border-b border-gray-200 flex flex-col items-center md:static md:z-10 md:w-min md:transform-none md:border-none md:flex-row"
    >
      <li className="py-4 md:py-0 md:mr-6">
        <Link to="/signup">
          <div className="text-sm uppercase font-semibold w-full hover:text-rose-600">
            <span>Inscription</span>
            <span className="text-danger text-lg">.</span>
          </div>
        </Link>
      </li>
      <li className="py-4 md:py-0 md:mr-6">
        <Link to="/login">
          <div className="text-sm uppercase font-semibold w-full hover:text-rose-600">
            <span>Connection</span>
            <span className="text-danger text-lg">.</span>
          </div>
        </Link>
      </li>
    </ul>
  );
};

export const Header = () => {
  let isConnected = true;

  return (
    <header className="bg-white z-50 sticky top-0 w-full shadow">
      <nav className="bg-white max-w-5xl mx-auto font-primary p-6 flex items-center justify-between">
        <Link to="/">
          <div className="flex">
            <img
              src={ImageSite}
              alt=""
              className="hidden md:w-7 md:inline md:mr-4"
            />
            <span
              className="text-lg lg:text-xl font-primary"
              aria-hidden="true"
            >
              Ur<strong>Notes</strong>
              <span className="text-danger text-lg">.</span>
            </span>
          </div>
        </Link>
        <button
          aria-label="toggle button"
          aria-expanded="false"
          id="menu-btn"
          className="cursor-pointer w-7 md:hidden"
        >
          <img src={ImageBtn} alt="" />
        </button>
        <HeaderRight isConnected={isConnected} />
      </nav>
    </header>
  );
};
