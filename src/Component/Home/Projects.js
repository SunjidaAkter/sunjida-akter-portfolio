import React from 'react';
import Project from './Project';
import './Home.css'
import p1 from '../../Assets/Images/Electrix manufacturers.png'
import p2 from '../../Assets/Images/React App.png'
import p3 from '../../Assets/Images/INSHOT (1).png'

const Projects = () => {
    const projects = [
        {
            id: "1",
            name: "ELECTRIX",
            img: `${p1}`,
            des: "Electrix is a responsive SPA for electrics manufacturers.It is a user and client focused full stack website where electrics tools can be stored and orders can be managed by the admins and users can buy tools with a simple payment system. Additionally an admin can manage admin & user roles in the website",
            tech1: "ReactJS",
            tech2: "Bootstrap",
            tech3: "ExpressJS",
            tech4: "MongoDB",
            tech5: "Firebase",
            live: "https://assignment-twelfth.web.app/",
            gitC: "https://github.com/SunjidaAkter/electrix-manufacturing-client",
            gitS: "https://github.com/SunjidaAkter/electrix-manufacturing-server",
        },
        {
            id: "2",
            name: "IMPEL",
            img: `${p2}`,
            des: "Impel is a responsive SPA for car dealership. This is a user focused full stack website where user can keep and manage their car dealership warehouse.",
            tech1: "ReactJS",
            tech2: "Tailwind CSS",
            tech3: "ExpressJS",
            tech4: "MongoDB",
            tech5: "Firebase",
            live: "https://eleventh-assignment-5e03e.web.app/",
            gitC: "https://github.com/SunjidaAkter/impel-car-dealership-client",
            gitS: "https://github.com/SunjidaAkter/impel-car-dealership-server",
        },
        {
            id: "3",
            name: "INSHOT",
            img: `${p3}`,
            des: "Inshot is a simple responsive independent service provider website for a photographer where users can see the provided services by the photographer.",
            tech1: "ReactJS",
            tech2: "Bootstrap",
            tech5: "Firebase",
            live: "https://tenth-assignment-ee402.web.app/",
            gitC: "https://github.com/SunjidaAkter/photographer",
        },
    ];
    return (
        <div id='work' className='px-12 my-6'>
            <p className='my-heading font-extrabold inline lg:text-[60px] text-[30px]'>Recent Works.</p>
            <div className='services-container mb-5'>
                {
                    projects.map(project => <Project
                        project={project}
                        key={project.id}
                    ></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;