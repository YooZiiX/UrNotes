import React from "react";
import ImageSite from "../../images/logo.png";
import ImageBtn from "../../images/menu.svg";

export const Header = () => {
  return (
    <header className="bg-white z-50 fixed top-0 w-full shadow">
      <nav className="bg-white max-w-5xl mx-auto font-primary p-6 flex items-center justify-between">
        <a href="top" className="flex" aria-label="Page d'acceuil">
          <img
            src={ImageSite}
            alt=""
            className="hidden md:w-7 md:inline md:mr-4"
          />
          <span className="text-lg lg:text-xl font-primary" aria-hidden="true">
            Ur<strong>Notes</strong>
            <span className="text-rose-600">.</span>
          </span>
        </a>
        <button
          aria-label="toggle button"
          aria-expanded="false"
          id="menu-btn"
          className="cursor-pointer w-7 md:hidden"
        >
          <img src={ImageBtn} alt="" />
        </button>
        <ul
          id="toggled-menu"
          className="w-full absolute top-full left-0 -translate-y-full -z-10 text-gray-800 border-b border-gray-200 flex flex-col items-center md:static md:z-10 md:w-min md:transform-none md:border-none md:flex-row"
        >
          <li className="py-4 md:py-0 md:mr-6">
            <a
              href="#notes"
              className="text-sm uppercase font-semibold w-full hover:text-rose-600"
            >
              Notes
            </a>
          </li>
          <li className="py-4 md:py-0 md:mr-6">
            <a
              href="#competences"
              className="text-sm uppercase font-semibold w-full hover:text-rose-600"
            >
              Profile
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
