import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import sunjida from "../../Assets/Images/Untitled design (2).png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import p1 from "../../Assets/Images/Electrix manufacturers - Copy.png";
import p2 from "../../Assets/Images/React App - Copy.png";
import p3 from "../../Assets/Images/INSHOT (1) - Copy.png";
import car1 from "../../Assets/Images/car-2.png";
import car2 from "../../Assets/Images/car-3.png";
import car3 from "../../Assets/Images/car-4.png";
import car4 from "../../Assets/Images/car-5.png";
import tool1 from "../../Assets/Images/tool-1.png";
import tool2 from "../../Assets/Images/tool-2.pn.png";
import tool3 from "../../Assets/Images/tool-3.png";
import tool4 from "../../Assets/Images/tool-4.png";
import photo1 from "../../Assets/Images/photo-1.png";
import photo2 from "../../Assets/Images/photo-2.png";
import photo3 from "../../Assets/Images/photo-3.png";
import photo4 from "../../Assets/Images/photo-4.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./Home.css";
import lives from "../../Assets/icons/live.png";
import live2 from "../../Assets/icons/github2.png";

// import Project from './Project';

const ProjectDetail = () => {
  const { id } = useParams();
  const projects = [
    {
      id: "1",
      name: "ELECTRIX",
      img: `${p1}`,
      img1: `${tool1}`,
      img2: `${tool2}`,
      img3: `${tool3}`,
      img4: `${tool4}`,
      img5: `${tool4}`,
      img6: `${tool4}`,
      des: "Electrix is a responsive SPA for electrics manufacturers.",
      des1: "Authentication & Authorization developed with Firebase & JWT.",
      des2: "Admin dashboard where he/she can add products, make other users admin, manage user’s orders.",
      des3: "User dashboard allowing users to manage their products and provide feedback on the website. User also can update his/her profile.",
      des4: "Authentication & Authorization developed with Firebase & JWT.",
      des5: "Admin dashboard where he/she can add products, make other users admin, manage user’s orders.",
      des6: "Payment System for users to purchase any parts.",
      des7: "User dashboard allowing users to manage their products and provide feedback on the website. User also can update his/her profile.",
      tech1: "ReactJS",
      tech2: "Bootstrap",
      tech3: "ExpressJS",
      tech4: "MongoDB",
      tech5: "Firebase",
      tech6: "Routing",
      live: "https://assignment-twelfth.web.app/",
      gitC: "https://github.com/SunjidaAkter/electrix-manufacturing-client",
      gitS: "https://github.com/SunjidaAkter/electrix-manufacturing-server",
    },
    {
      id: "2",
      name: "IMPEL",
      img: `${p2}`,
      img1: `${car1}`,
      img2: `${car2}`,
      img3: `${car3}`,
      img4: `${car4}`,
      img5: `${car4}`,
      img6: `${car4}`,
      des: "Impel is a responsive SPA for car dealership warehouse.",
      des1: "Authentication & Authorization developed with Firebase & JWT.",
      des2: "Admin dashboard where he/she can add products, make other users admin, manage user’s orders.",
      des3: "User dashboard allowing users to manage their products and provide feedback on the website. User also can update his/her profile.",
      des4: "Authentication & Authorization developed with Firebase & JWT.",
      des5: "Admin dashboard where he/she can add products, make other users admin, manage user’s orders.",
      des6: "Payment System for users to purchase any parts.",
      des7: "User dashboard allowing users to manage their products and provide feedback on the website. User also can update his/her profile.",
      tech1: "ReactJS",
      tech2: "Tailwind CSS",
      tech3: "ExpressJS",
      tech4: "MongoDB",
      tech5: "Firebase",
      tech6: "Routing",
      live: "https://eleventh-assignment-5e03e.web.app/",
      gitC: "https://github.com/SunjidaAkter/impel-car-dealership-client",
      gitS: "https://github.com/SunjidaAkter/impel-car-dealership-server",
    },
    {
      id: "3",
      name: "INSHOT",
      img: `${p3}`,
      img1: `${photo1}`,
      img2: `${photo2}`,
      img3: `${photo3}`,
      img4: `${photo4}`,
      img5: `${photo4}`,
      img6: `${photo4}`,
      des: "Inshot is a simple responsive website for a photographer.",
      des1: "Authentication & Authorization developed with Firebase & JWT.",
      des2: "Admin dashboard where he/she can add products, make other users admin, manage user’s orders.",
      des3: "User dashboard allowing users to manage their products and provide feedback on the website. User also can update his/her profile.",
      des4: "Authentication & Authorization developed with Firebase & JWT.",
      des5: "Admin dashboard where he/she can add products, make other users admin, manage user’s orders.",
      des6: "Payment System for users to purchase any parts.",
      des7: "User dashboard allowing users to manage their products and provide feedback on the website. User also can update his/her profile.",
      tech1: "ReactJS",
      tech2: "Bootstrap",
      tech5: "Firebase",
      tech6: "Routing",
      live: "https://tenth-assignment-ee402.web.app/",
      gitC: "https://github.com/SunjidaAkter/photographer",
    },
  ];
  const match = projects.find((project) => project.id == id);
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

  // const { name, img, img1, img2, img3, des, tech1, tech2, tech3, tech4, tech5, live, gitC, gitS } = project;
  const data = [match.img1, match.img2, match.img3, match.img4];
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <div className=" lg:w-[153px] md:w-[123px] w-[55px]   lg:ml-[0px] md:ml-[0px] ml-[-10px] ">
            <img
              className="lg:w-full lg:h-full md:w-[50%] md:w-[50%] xs:w-[20%]"
              style={{ width: "100%", height: "100%" }}
              src={data[i]}
            />
          </div>
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const menuItems2 = (
    <>
      <li>
        <Link
          to="/"
          // spy={true}
          // smooth={true}
          // offset={-60}
          // delay={100}
          // duration={1000}
          className="font-semibold dark:text-white"
        >
          Back To Home
        </Link>
      </li>
    </>
  );
  return (
    <div>
      <div
        className={
          scrolled
            ? "navbar fixed z-40 bg-base-200 dark:bg-[#373e47] px-12 "
            : " navbar fixed z-40 bg-base-200 dark:bg-[#373e47] px-12 "
        }
      >
        {/*</div><div class="navbar  z-40 bg-base-300  px-12">*/}

        {/* <div class="navbar  z-40 bg-base-200  px-12 "> */}
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="1" class="btn btn-ghost lg:hidden">
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
              tabindex="1"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 dark:text-white dark:bg-[#2b2b2b] rounded-box w-52"
            >
              <li>
                <div className="py-2 px-3 text-white lg:text-black dark:text-white bg-white dark:bg-black shadow-xl">
                  {theme === "dark" ? (
                    <p onClick={() => setTheme("light")}>Light</p>
                  ) : (
                    <p onClick={() => setTheme("dark")}>Dark</p>
                  )}
                </div>
              </li>
              {menuItems2}
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <div class="avatar ">
              <div class="w-14 rounded-full ring ring-zinc-500 ring-offset-base-100 ring-offset-2">
                <a href="/">
                  <img src={sunjida} />
                </a>
              </div>
            </div>
            <div>
              <a
                href="/"
                class=" btn btn-ghost normal-case dark:text-white lg:text-5xl hover:bg-base-200 text-3xl font-caveat font-semibold "
              >
                Sunjida
              </a>
            </div>
          </div>
        </div>
        <div class="navbar-end hidden lg:flex">
          <ul class="menu menu-horizontal p-0 py-2">
          <li>
            <div className="py-2 px-3 text-white lg:text-black dark:text-white bg-white dark:bg-black shadow-xl ">
                {theme === "dark" ? <p onClick={() => setTheme("light")} >Light</p> : <p onClick={() => setTheme("dark")} >Dark</p>}
            </div>
          </li>
            {menuItems2}
            </ul>
        </div>
      </div>
      <div class="hero min-h-screen bg-white dark:bg-[#22272e] dark:text-white mb-[0px] lg:px-0">
        <div class="hero-content flex-col ">
          <div className="lg:w-[999px] md:w-[600px] w-[250px]  flex-col flex lg:justify-between mt-20">
            <div className="w-full rounded-lg shadow-2xl">
              <Slider {...settings}>
                <div className="lg:h-[400px] h-[full]">
                  <img
                    className="w-full border border-[10px] border-gray-200 rounded-md"
                    src={match.img1}
                    alt=""
                  />
                </div>
                <div className="lg:h-[400px] h-[full]">
                  <img
                    className="w-full border border-[10px] border-gray-200 rounded-md"
                    src={match.img2}
                    alt=""
                  />
                </div>
                <div className="lg:h-[400px] h-[full]">
                  <img
                    className="w-full border border-[10px] border-gray-200 rounded-md"
                    src={match.img3}
                    alt=""
                  />
                </div>
                <div className="lg:h-[400px] h-[full]">
                  <img
                    className="w-full border border-[10px] border-gray-200 rounded-md"
                    src={match.img4}
                    alt=""
                  />
                </div>
              </Slider>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="w-full md:w-full lg:mt-36 md:mt-36 mt-[60px]">
              <p className="my-heading font-extrabold inline lg:text-[35px] text-left text-[30px]">
                Used Technologies.
              </p>
              <div className="font-bold justify-between items-center py-3 ">
                <div className="badge border-[rgba(0, 0, 0, 0.815)] font-bold mr-5 border-x-2 border-y-2 badge-outline  border-0 text-[12px]">
                  {match.tech1}
                </div>
                <div className="badge border-[rgba(0, 0, 0, 0.815)] font-bold mr-5 border-x-2 border-y-2 badge-outline text-[12px] border-0">
                  {match.tech2}
                </div>
                {match.tech3 && match.tech5 && (
                  <>
                    <div className="badge border-[rgba(0, 0, 0, 0.815)] font-bold mr-5 border-x-2 border-y-2 badge-outline text-[12px] border-0">
                      {match.tech3}
                    </div>

                    <div className="badge border-[rgba(0, 0, 0, 0.815)] font-bold mr-5 border-x-2 border-y-2 badge-outline text-[12px] border-0">
                      {match.tech4}
                    </div>
                  </>
                )}
                <div className="badge border-[rgba(0, 0, 0, 0.815)] font-bold mr-5 border-x-2 border-y-2 badge-outline text-[12px] border-0">
                  {match.tech5}
                </div>
                <div className="badge border-[rgba(0, 0, 0, 0.815)] font-bold mr-5 border-x-2 border-y-2 badge-outline text-[12px] border-0">
                  {match.tech6}
                </div>
              </div>

              <p className="my-heading font-extrabold inline lg:text-[36px] text-left text-[30px]">
                Descriptions.
              </p>
              <p className="pl-10 text-left font-balsamq font-normal italic text-base">
                {match.des}
              </p>
              <p className="pl-10 text-left mt-3 font-extrabold font-l2 text-2xl">
                Features :
              </p>
              <ol>
                <li className="pl-10 text-left font-balsamq font-normal italic text-sm">
                  •<span className="pl-2">{match.des1}</span>
                </li>
                <li className="pl-10 text-left font-balsamq font-normal italic text-sm">
                  •<span className="pl-2">{match.des2}</span>
                </li>
                <li className="pl-10 text-left font-balsamq font-normal italic text-sm">
                  •<span className="pl-2">{match.des3}</span>
                </li>
                <li className="pl-10 text-left font-balsamq font-normal italic text-sm">
                  •<span className="pl-2">{match.des4}</span>
                </li>
                {/* <li className='pl-10 text-left font-caveat font-semibold text-xl'>•<span className='pl-2'>{match.des5}</span></li> */}
                {/* <li className='pl-10 text-left font-caveat font-semibold text-xl'>•<span className='pl-2'>{match.des6}</span></li> */}
                {/* <li className='text-left pl-10'>•<span className='pl-2'>{match.des7}</span></li> */}
                {/* <li className='text-left pl-10'>•<span className='pl-2'>{match.des8}</span></li> */}
              </ol>
              <div className="font-bold justify-center items-center py-3">
                <a
                  href={match.live}
                  target="_blank"
                  rel="noreferrer"
                  className="badge bg-[#000000d0] mr-1 badge-outline border-0 text-white text-[15px] p-4 font-bold "
                >
                  <img className="w-[15px] mr-1" src={lives} alt="" /> Live
                </a>
                <a
                  href={match.gitC}
                  target="_blank"
                  rel="noreferrer"
                  className="badge bg-[#000000d0] mr-1 badge-outline border-0 text-white text-[15px] p-4 font-bold"
                >
                  <img className="w-[15px] mr-1" src={live2} alt="" /> Client
                </a>
                {match.gitS && (
                  <a
                    href={match.gitS}
                    target="_blank"
                    rel="noreferrer"
                    className="badge bg-[#000000d0] mr-1 badge-outline border-0 text-white text-[15px] p-4 font-bold"
                  >
                    <img className="w-[15px] mr-1" src={live2} alt="" /> Server
                  </a>
                )}
              </div>
            </div>
          </div>
          {/* <div className='lg:w-1/2  w-full lg:ml-10 ml-0 text-left'>

                        <h1 class="text-3xl font-[500]">{product.Mname}</h1>
                        <p className='text-primary text-[28px] font-[400] pt-2'> <span className='text-[#868686]'><del>$100.00</del></span>  $60.00</p>
                        <p class="pt-10 pb-5 text-[#868686] text-[14px]">Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. non, velit. Etiam rhoncus. Nunc interdum lacus sit amet orci
                        </p>
                        <p className='pb-5 text-[#868686] text-[14px]'>Stock 5</p>
                        <div className='flex justify-between items-center'>
                            <div className='flex justify-center items-center border-[2px] border-[#868686] bg-white w-[129px]'>
                                <button onClick={handleIncrement} className='bg-white text-[#868686] text-[24px] font-[700] py-1 pr-3'>+</button>
                                <input type="text" className='border-none w-[50px] text-[24px] font-[500] px-3 focus-within:border-none' onChange={onCountsChanged} value={count} />
                                <button onClick={handleDecrement} className='bg-white text-[#868686] text-[24px] font-[700] py-1 pr-3'>-</button>
                            </div>
                            <div><button className='bg-[rgba(0,0,0,.75)] uppercase lg:px-16 md:px-5 px-5 py-3 text-white hover:bg-primary' onClick={handleSubmit}>Add to cart</button></div>
                            <div className='group'><button onClick={handleSubmit2} className='group-hover:text-primary border-[2px] border-[#868686] px-10 py-2'><FontAwesomeIcon icon={faHeart} className='group-hover:text-primary text-[rgba(0,0,0,.75)] text-[1.5rem] font-[300]' /></button></div>
                        </div>
                        <div>
                            <button onClick={onSaveOrderClicked} className='uppercase text-white w-full py-3 bg-primary hover:bg-black my-7'>buy it now</button>
                        </div>
                    </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
