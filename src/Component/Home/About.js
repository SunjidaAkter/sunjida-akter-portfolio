import React from "react";
import "./Home.css";
import Fade from "react-reveal/Fade";
import pic from "../../Assets/Images/IMG-20240216-WA00362.jpg"

const About = () => {
  return (
    <div
      id="about"
      className="px-12 py-12 bg-white dark:bg-[#22272e] dark:text-white"
    >
      <Fade bottom cascade>
        <p className="my-heading font-extrabold inline lg:text-[60px] text-[48px]">
          About Me.
        </p>
      </Fade>
      <div className="mt-[50px] flex lg:flex-row flex-col justify-between items-start ">
        <div className="lg:w-[48%] w-full mb-5 flex justify-center">
          <img src={pic} className="w-[40%] border-black z-30 mt-4" alt="" />
        </div>
        <div className="lg:w-[48%] w-full mb-5">
          <Fade bottom cascade>
            <p className="text-left font-medium font-l2  text-4xl mb-7 underline-offset-4">
              Hello.
            </p>
          </Fade>
          <Fade left cascade>
            <p className="w-[70%] text-left text-[19px] font-caveat font-bold lg:mb-6 mb-6">
              I am Sunjida Akter from Bangladesh. Highly passionate to work as a
              MERN Stack Web Developer for a software firm where I can leverage
              my talents in Web Development. <br /> I like to do web coding,
              fixing problem, and designing websites. I always learn new things
              about Web Dev regularly as trends go on. My heavy skills are HTML
              5, CSS 3, Bootstrap 5, JavaScript, ReactJS & GitHub. My coding is
              pixel perfect and also responsive, full, and fresh hand code. I
              focus on 3 things on every project: Communication, Quality, and
              Support.
            </p>
          </Fade>

          <Fade left cascade>
            <p className="font-medium text-black text-left tect-xl lg:mb-0 mb-14 dark:text-white">
              -THANKS & REGARDS <br />
              <span className="font-caveat font-bold text-3xl dark:text-white">
                Sunjida Akter{" "}
                <span className="text-xl dark:text-white ">🖤🖤 🤍🤍</span>
              </span>
            </p>
          </Fade>
        </div>
        {/* <div className="lg:w-[48%] w-full mb-5">
          <Fade left cascade>
            <p className="text-left font-medium font-l2  text-4xl mb-7 underline-offset-4">
              Experts In.
            </p>
          </Fade>
          <div>
            <Fade bottom cascade>
              <p className="text-left text-base  ">
                I have always been passionate about web development and I am
                constantly seeking out new technologies and staying up-to-date
                on trends. Building easy-to-use, up to date, practical websites
                is truly a passion of mine.
              </p>
            </Fade>
            <div className="lg:text-base md:text-base text-sm text-left w-[90%] mt-7 md:font-extrabold font-semibold lg:font-extrabold flex justify-between">
              <Fade left cascade>
                <p>Communication Skills</p>
              </Fade>
              <Fade left cascade>
                <p>90%</p>
              </Fade>
            </div>
            <progress
              class="progress dark:progress-[#e0dede] w-full dark:bg-stone-500"
              value="90"
              max="100"
            ></progress>{" "}
            <br />
            <div className="lg:text-base md:text-base text-sm text-left w-[90%] mt-3 md:font-extrabold font-semibold lg:font-extrabold flex justify-between">
              <Fade left cascade>
                <p>Front End Skills</p>
              </Fade>
              <Fade left cascade>
                <p>90%</p>
              </Fade>
            </div>
            <progress
              class="progress dark:progress-[#e0dede] w-full dark:bg-stone-500"
              value="90"
              max="100"
            ></progress>
            <br />
            <div className="lg:text-base md:text-base text-sm text-left w-[80%] mt-3 md:font-extrabold font-semibold lg:font-extrabold flex justify-between">
              <Fade left cascade>
                <p>Back End Skills</p>
              </Fade>
              <Fade left cascade>
                <p>80%</p>
              </Fade>
            </div>
            <progress
              class="progress dark:progress-[#e0dede] w-full dark:bg-stone-500 dark:text-"
              value="80"
              max="100"
            ></progress>
            <br />
            <div className="lg:text-base md:text-base text-sm text-left w-[70%] mt-3 md:font-extrabold font-semibold lg: font-extrabold flex justify-between items-end">
              <Fade left cascade>
                <p>Web Design Skills</p>
              </Fade>
              <Fade left cascade>
                <p className="">70%</p>
              </Fade>
            </div>
            <progress
              class="progress dark:progress-[#e0dede] w-full dark:bg-stone-500"
              value="70"
              max="100"
            ></progress>
            <br />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
