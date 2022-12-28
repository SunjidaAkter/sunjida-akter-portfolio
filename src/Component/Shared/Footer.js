import React from 'react';
import '../Home/Home.css'
import facebookIcon from "../../Assets/icons/facebookIcon.png";
import twitterIcon from "../../Assets/icons/twitterIcon.png";
import instagramIcon from "../../Assets/icons/instagramIcon.png";
import githubIcon from "../../Assets/icons/icons8-github-100.png";
import linkedinIcon from "../../Assets/icons/icons8-linkedin-48.png";



const Footer = () => {
    return (

        <div className='bg dark:bg-[#373e47] dark:text-white mb-0 pb-5'>
            <div className='pt-5'>

                <div className='pt-3 contaner dark:bg-[#373e47] dark:text-white bg mb-0 '>
                    <p className='text-center  pb-3 mb-0 line p'>Copyright &copy; 2022 SUNJIDA.<br />
                        All rights reserved.</p>
                    <p className=' mb-5 p'>Connect with me on <br />
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

                </div>
            </div>
        </div>
    );
};

export default Footer;