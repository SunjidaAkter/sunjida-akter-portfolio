import React from 'react';
import { Link } from 'react-router-dom';


const Project = ({ project }) => {
    const { name, img, des, tech1, tech2, tech3, tech4, tech5, live, gitC, gitS } = project;
    return (
        <div className='container photo-frame '>
            <div className="photo "><img src={img} alt="" /></div>
            <div className="photo-element px-0">
                <div className="flex flex-col items-center justify-between h-full">
                    <div>
                        <h2 className="justify-center uppercase font-extrabold text-3xl mt-6">{name}</h2>
                    </div>
                    <div>
                        <p className="justify-center uppercase font-extrabold text-3xl mt-6">Links: </p>
                        <div className="font-bold justify-center items-center py-3">

                            <a
                                href={project.live}
                                target="_blank"
                                rel="noreferrer"
                                className="badge badge-outline  border-0"
                            >
                                Live
                            </a>
                            <a
                                href={project.gitC}
                                target="_blank"
                                rel="noreferrer"
                                className="badge badge-outline  border-0"
                            >
                                Git Client
                            </a>
                            {project.gitS && (
                                <a
                                    href={project.gitS}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="badge badge-outline  border-0"
                                >
                                    Git Server
                                </a>
                            )}
                        </div>
                    </div>
                    <div className=''>
                        <p className='font-extrabold text-3xl'>USED TECHNOLOGIES</p>
                        <div className="font-bold justify-center items-center py-3">
                            <div className="badge badge-outline  border-0">
                                {project.tech1}
                            </div>
                            <div className="badge badge-outline  border-0">
                                {project.tech2}
                            </div>
                            {project.tech3 && project.tech5 && (
                                <>
                                    <div className="badge badge-outline  border-0">
                                        {project.tech3}
                                    </div>

                                    <div className="badge badge-outline  border-0">
                                        {project.tech4}
                                    </div>
                                </>
                            )}
                            <div className="badge badge-outline  border-0">
                                {project.tech5}
                            </div>
                        </div>
                        <Link to="/checkOut">
                            <button className='butn px-4 rounded-lg mt-5'>Check Out</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Project;
{/* <div> */ }
{/* <h2 className='text-center mt-lg-2 mt-sm-5 mt-xs-5' >{name}</h2>
    <h5 className='ms-4 mt-4'>PHOTOS</h5>
    <p className='ms-4 mb-3'>Package of {_package}</p>
    <h5 className='ms-4 mt-3'>PROCESSING</h5>
    <p className='ms-4 mb-3'>{processing}</p>
    <h5 className='ms-4 mt-3'>TYPE OF CAMERA</h5>
    <p className='ms-4 mb-3'>{cameraType}</p>
    <h5 className='ms-4 mt-3'>RESOLUTION</h5>
    <p className='ms-4 mb-3'>{resolution}</p>
    <h5 className='ms-4 mt-3'>TERM</h5>
    <p className='ms-4 mb-3'>{term}</p>
</div>
<div className='d-flex justify-content-between'>
    <h2 className='ms-4'>${price}</h2>
    <Link to="/checkOut">
        <button className='butn me-2'>Check Out</button>
    </Link>
</div> */}