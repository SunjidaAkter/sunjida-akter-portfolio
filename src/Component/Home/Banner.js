import React from 'react';
import sunjida from '../../Assets/Images/19642759_471406453202074_6971292231771204662_n.jpg'
import TypeAnimation from "react-type-animation";
import facebookIcon from "../../Assets/icons/facebookIcon.png";
import twitterIcon from "../../Assets/icons/twitterIcon.png";
import instagramIcon from "../../Assets/icons/instagramIcon.png";
import githubIcon from "../../Assets/icons/icons8-github-100.png";
import linkedinIcon from "../../Assets/icons/icons8-linkedin-48.png";



const Banner = () => {
    return (
        <div id='home' class="hero h-[500px]" style={{ "background-image": "url(https://i.ibb.co/HByrc1h/Margarita-Perez-4-Copy.png)" }}>
            <div class="hero-overlay bg-opacity-80"></div>
            <div class=" text-center text-neutral-content">
                <div class="max-w-md">
                    <p class="mb-5 lg:text-5xl text-2xl font-bold">
                        <TypeAnimation
                            cursor={true}
                            sequence={[
                                "Designer.",
                                1000,
                                "Programmer.",
                                1000,
                                "Developer.",
                                1000,
                                "Blogger.",
                                1000,
                            ]}
                            wrapper="b"
                            repeat={Infinity}
                        />
                    </p>
                    <p className='my-5 text-xl font-semibold'>Connect with me on <br />
                        <div className='flex justify-center items-center w-full'>
                            <a
                                href="https://www.linkedin.com/in/sanjida-akter-6804bb215/"
                                target="blank"
                            >
                                <img
                                    className="me-2"
                                    style={{ width: "30px" }}
                                    src={linkedinIcon}
                                    alt=""
                                />
                            </a>


                            <a href="https://github.com/SunjidaAkter" target="blank">
                                <img
                                    className="me-2"
                                    style={{ width: "39px" }}
                                    src={githubIcon}
                                    alt=""
                                />
                            </a>

                            <a
                                href="https://www.instagram.com/"
                                target="blank"
                            >
                                <img
                                    className="me-2"
                                    style={{ width: "35px" }}
                                    src={instagramIcon}
                                    alt=""
                                />
                            </a>

                            <a href="https://facebook.com/" target="blank">
                                <img
                                    className="me-2"
                                    style={{ width: "32px" }}
                                    src={facebookIcon}
                                    alt=""
                                />
                            </a>




                            <a href="https://twitter.com/" target="blank">
                                <img
                                    className="me-2"
                                    style={{ width: "32px" }}
                                    src={twitterIcon}
                                    alt=""
                                />
                            </a>
                        </div>
                    </p>
                    {/* https://drive.google.com/uc?export=download&id=1Wr27kaqMzTyntleo2XSVpGZVhrFgZcCh */}
                    <a
                        href="https://drive.google.com/uc?export=download&id=1qivmigV54reB9zKbu7Yqa8nuVylBNEyR"
                        className="btn btn-outline btn-primary "
                    >
                        Resume
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;