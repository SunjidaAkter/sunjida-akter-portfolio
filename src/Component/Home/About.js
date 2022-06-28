import React from 'react';
import './Home.css'

const About = () => {
    return (
        <div id='about' className='px-12 my-12'>
            <p className='my-heading font-extrabold inline lg:text-[60px] text-[48px]'>About Me.</p>
            <div className='mt-[50px] flex lg:flex-row flex-col justify-between items-start '>
                <div className='lg:w-[48%]  w-full mb-5'>
                    <p className='text-left font-medium font-l2  text-4xl mb-7 underline-offset-4'>Hello.</p>
                    <p className='text-left text-base  lg:mb-14 mb-6'>I am Sunjida Akter from Bangladesh. Highly passionate to work as a MERN Stack Web Developer for a software firm where I can leverage my talents in Web Development. <br /> <br />I like to do web coding, fixing problem, and designing websites. I always learn new things about Web Dev regularly as trends go on. My heavy skills are HTML 5, CSS 3, Bootstrap 5, JavaScript, ReactJS & GitHub. My coding is pixel perfect and also responsive, full, and fresh hand code. I focus on 3 things on every project: Communication, Quality, and Support.</p>

                    <p className='font-medium text-black text-left tect-xl lg:mb-0 mb-14'>-THANKS & REGARDS <br /><span className='font-caveat font-bold text-3xl'>Sunjida Akter <span className='text-xl'>🖤🖤</span></span></p>
                </div>
                <div className='lg:w-[48%] w-full mb-5'>
                    <p className='text-left font-medium font-l2  text-4xl mb-7 underline-offset-4'>Experts In.</p>
                    <div>
                        <p className='text-left text-base  '>I have always been passionate about web development and I am constantly seeking out new technologies and staying up-to-date on trends. Building easy-to-use, up to date, practical websites is truly a passion of mine.</p>
                        <div className='text-base text-left mt-7 font-extrabold flex justify-between'>
                            <p>Communication Skills</p>
                            <p>90%</p>
                        </div>
                        <progress class="progress w-full" value="90" max="100"></progress> <br />
                        <div className='text-base text-left mt-3 font-extrabold flex justify-between'>
                            <p>Front End Skills</p>
                            <p>90%</p>
                        </div>
                        <progress class="progress w-full" value="90" max="100"></progress><br />
                        <div className='text-base text-left mt-3 font-extrabold flex justify-between'>
                            <p>Back End Skills</p>
                            <p>80%</p>
                        </div>
                        <progress class="progress w-full" value="80" max="100"></progress><br />
                        <div className='text-base text-left mt-3 font-extrabold flex justify-between'>
                            <p>Web Design Skills</p>
                            <p>70%</p>
                        </div>
                        <progress class="progress w-full" value="70" max="100"></progress><br />


                    </div>
                </div>

            </div>

        </div>
    );
};

export default About;