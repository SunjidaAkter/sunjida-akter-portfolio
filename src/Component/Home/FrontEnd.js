import React from 'react';
import { Link } from 'react-router-dom';
import lives from '../../Assets/icons/live.png'
import live2 from '../../Assets/icons/github2.png'
import {

    ArrowRightIcon,
    HomeIcon,
    PhoneIcon,
    UserIcon,
} from "@heroicons/react/solid";
const FrontEnd = ({ project }) => {
    const { name, img, des, tech1, tech2, tech3, tech4, tech5, live, gitC, gitS } = project;

    return (
        <div className='container border-gray-200 hover:shadow-2xl hover:translate-x-[2px] hover:translate-y-[-2px] transition-all border'>
            <div className="photo "><img className='border-gray-200 border' src={img} alt="" /></div>
            <div className=" px-6">
                <div className="flex flex-col items-center justify-between h-full">
                    <div>
                        <h2 className="justify-center uppercase font-extrabold font-balsamq text-4xl mt-6">{name}</h2>
                        <p className=' italic justify-center text-base text-sm mt-3 font-[400] px-3 font-balsamq'>{des}</p>
                    </div>

                    <div className=''>
                        {/* <p className='font-extrabold text-3xl'>USED TECHNOLOGIES</p> */}
                        <div className="font-bold justify-between items-center py-3 ">
                            <div className="badge border-[rgba(0, 0, 0, 0.815)] font-bold mr-5 border-x-2 border-y-2 badge-outline  border-0 text-[12px]">
                                {project.tech1}
                            </div>
                            <div className="badge border-[rgba(0, 0, 0, 0.815)] font-bold mr-5 border-x-2 border-y-2 badge-outline text-[12px] border-0">
                                {project.tech2}
                            </div>
                            {project.tech3 && project.tech5 && (
                                <>
                                    <div className="badge border-[rgba(0, 0, 0, 0.815)] font-bold mr-5 border-x-2 border-y-2 badge-outline text-[12px] border-0">
                                        {project.tech3}
                                    </div>

                                    <div className="badge border-[rgba(0, 0, 0, 0.815)] font-bold mr-5 border-x-2 border-y-2 badge-outline text-[12px] border-0">
                                        {project.tech4}
                                    </div>
                                </>
                            )}
                            <div className="badge border-[rgba(0, 0, 0, 0.815)] font-bold mr-5 border-x-2 border-y-2 badge-outline text-[12px] border-0">
                                {project.tech5}
                            </div>
                            <div className="badge border-[rgba(0, 0, 0, 0.815)] font-bold mr-5 border-x-2 border-y-2 badge-outline text-[12px] border-0">
                                {project.tech6}
                            </div>
                            {/* <div className="badge border-[rgba(0, 0, 0, 0.815)] font-bold mr-2 border-x-2 border-y-2 badge-outline  border-0">
                                Toast
                            </div> */}
                        </div>
                        <div>
                            {/* <p className="justify-center uppercase font-extrabold text-3xl mt-6">Links: </p> */}
                            <div className="font-bold justify-center items-center py-3">

                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="badge bg-[#000000d0] mr-1 badge-outline border-0 text-white text-[15px] p-4 font-bold "
                                >
                                    <img className='w-[15px] mr-1' src={lives} alt="" /> Live
                                </a>
                                <a
                                    href={project.gitC}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="badge bg-[#000000d0] mr-1 badge-outline border-0 text-white text-[15px] p-4 font-bold"
                                >
                                    <img className='w-[15px] mr-1' src={live2} alt="" /> Client
                                </a>
                                {project.gitS && (
                                    <a
                                        href={project.gitS}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="badge bg-[#000000d0] mr-1 badge-outline border-0 text-white text-[15px] p-4 font-bold"
                                    >
                                        <img className='w-[15px] mr-1' src={live2} alt="" /> Server
                                    </a>
                                )}
                            </div>
                        </div>
                        <Link to="/checkOut">
                            <button className='font-caveat font-extrabold butn px-4 rounded-lg mt-5'>Check Out<ArrowRightIcon className="font-caveat mb-1 w-6 h-6 ml-2 inline"></ArrowRightIcon></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default FrontEnd;