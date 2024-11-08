import React, { useEffect, useState } from "react";
import "../Home/Home.css";
import sunjida from "../../Assets/Images/Untitled design (2).png";
import { Link as LinkS } from "react-scroll";
import Flip from "react-reveal/Flip";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 480) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = window.document.documentElement;
    html.classList.remove("light");
    html.classList.remove("dark");
    html.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const menuItems = (
    <>
      <li>
        <LinkS
          to="home"
          spy={true}
          smooth={true}
          offset={-60}
          delay={100}
          duration={1000}
          className="font-semibold  focus:underline"
        >
          Home
        </LinkS>
      </li>
      <li>
        <LinkS
          to="about"
          spy={true}
          smooth={true}
          offset={-60}
          delay={100}
          duration={1000}
          className="font-semibold  focus:underline"
        >
          About
        </LinkS>
      </li>
      <li>
        <LinkS
          to="work"
          spy={true}
          smooth={true}
          duration={1000}
          offset={-60}
          delay={100}
          className="font-semibold  focus:underline"
        >
          Work
        </LinkS>
      </li>
      <li>
        <LinkS
          to="blogs"
          spy={true}
          smooth={true}
          duration={1000}
          offset={-60}
          delay={100}
          className="font-semibold  focus:underline"
        >
          Blogs
        </LinkS>
      </li>
      <li>
        <LinkS
          to="contact"
          spy={true}
          smooth={true}
          duration={1000}
          offset={-40}
          delay={100}
          className="font-semibold  focus:underline"
        >
          Contact
        </LinkS>
      </li>
    </>
  );
  return (
    <div
      className={
        scrolled
          ? "navbar fixed z-50 top-0 left-0 text-zinc-900 bg-white dark:focus:bg-[#373e47] dark:bg-[#373e47] dark:text-white bg-opacity-10 backdrop-blur-2xl dark:bg-opacity-40 dark:backdrop-blur-2xl w-full shadow-md md:px-12 px-3 lg:px-12"
          : " navbar fixed z-40 bg-base-900 md:px-12 px-3 lg:px-12 text-white"
      }
    >
      {/*</div><div class="navbar fixed z-40 bg-base-300  px-12">*/}
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu dark:bg-[#373e47] dark:text-white text-black menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <div className="flex justify-center items-center">

          <Flip left cascade>
            <div>
              <a
                href="/"
                className=" btn btn-ghost normal-case lg:text-[40px] font-bold text-3xl font-caveat "
              >
                {"<"}Sunjida{"/>"}
              </a>
            </div>
          </Flip>
          <div className="py-2 px-3 mt-3 focus:bg-none">
            {theme === "dark" ? (
              <p onClick={() => setTheme("light")}>
                <SunIcon className="font-caveat mb-1 w-6 h-6 lg:ml-2 md:ml-2 ml-0 inline"></SunIcon>
              </p>
            ) : (
              <p onClick={() => setTheme("dark")}>
                <MoonIcon className="font-caveat mb-1 w-6 h-6 lg:ml-2 md:ml-2 ml-0 inline"></MoonIcon>
              </p>
            )}
          </div>
        </div>
      </div>
      <div class="navbar-end hidden lg:flex">
        <ul class="menu menu-horizontal p-0 py-2 focus:bg-slate-800">
          {menuItems}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
