import React, { useEffect, useState } from 'react';
import '../Home/Home.css'
import sunjida from '../../Assets/Images/Untitled design (2).png'
import { Link as LinkS } from "react-scroll";
import Flip from 'react-reveal/Flip';


const Nav = () => {
    const [scrolled, setScrolled] = useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 480) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    })

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
                    className="font-semibold hover:bg-zinc-400 hover:text-black focus:underline"
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
                    className="font-semibold hover:bg-zinc-400 hover:text-black focus:underline"
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
                    className="font-semibold hover:bg-zinc-400 hover:text-black focus:underline"
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
                    className="font-semibold hover:bg-zinc-400 hover:text-black focus:underline"
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
                    offset={-90}
                    delay={100}
                    className="font-semibold hover:bg-zinc-400 hover:text-black focus:underline"
                >
                    Contact
                </LinkS>
            </li>
            {/* <li>
                <LinkS
                    to="blogs"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-60}
                    delay={100}
                    className="font-semibold"
                >
                    Blogs
                </LinkS>
            </li> */}
        </>
    );
    return (

        <div className={scrolled ? 'navbar fixed z-50 top-0 left-0 text-zinc-900 bg-white w-full shadow-md px-12' : ' navbar fixed z-40 bg-base-900  px-12 text-white'}>{/*</div><div class="navbar fixed z-40 bg-base-300  px-12">*/}
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <div className='flex justify-center items-center'>
                    <div class="avatar ">
                        <div class="w-14 rounded-full ring ring-zinc-500 ring-offset-base-100 ring-offset-2">
                            <a href="/"><img src={sunjida} /></a>
                        </div>
                    </div>
                    <Flip left cascade>
                        <div>
                            <a href='/' className=" btn btn-ghost normal-case lg:text-5xl text-3xl font-caveat ">Sunjida</a>
                        </div>
                    </Flip>
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
