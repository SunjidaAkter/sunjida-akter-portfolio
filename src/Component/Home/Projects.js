import React from 'react';
import Project from './Project';
import './Home.css'
import p1 from '../../Assets/Images/Electrix manufacturers - Copy.png'
import p2 from '../../Assets/Images/React App - Copy.png'
import p3 from '../../Assets/Images/INSHOT (1) - Copy.png'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import All from './All';
import FrontEnd from './FrontEnd';
import Fade from 'react-reveal/Fade';

const Projects = () => {
    const projects = [
        {
            id: "1",
            name: "ELECTRIX",
            img: `${p1}`,
            img1: `${p1}`,
            img2: `${p1}`,
            img3: `${p1}`,
            des: "Electrix is a responsive SPA for electrics manufacturers.",
            des1: "Authentication & Authorization developed with Firebase & JWT.",
            des2: "Admin dashboard where he/she can add products, make other users admin, manage user’s orders.",
            des3: "User dashboard allowing users to manage their products and provide feedback on the website. User also can update his/her profile.",
            des4: "Authentication & Authorization developed with Firebase & JWT.",
            des5: "Admin dashboard where he/she can add products, make other users admin, manage user’s orders.",
            des6: "Payment System for users to purchase any parts.",
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
            img1: `${p2}`,
            img2: `${p2}`,
            img3: `${p2}`,
            des: "Impel is a responsive SPA for car dealership warehouse.",
            des1: "Authentication & Authorization developed with Firebase & JWT.",
            des2: "Admin dashboard where he/she can add products, make other users admin, manage user’s orders.",
            des3: "User dashboard allowing users to manage their products and provide feedback on the website. User also can update his/her profile.",
            des4: "Authentication & Authorization developed with Firebase & JWT.",
            des5: "Admin dashboard where he/she can add products, make other users admin, manage user’s orders.",
            des6: "Payment System for users to purchase any parts.",
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
            img1: `${p3}`,
            img2: `${p3}`,
            img3: `${p3}`,
            des: "Inshot is a simple responsive website for a photographer.",
            des1: "Authentication & Authorization developed with Firebase & JWT.",
            des2: "Admin dashboard where he/she can add products, make other users admin, manage user’s orders.",
            des3: "User dashboard allowing users to manage their products and provide feedback on the website. User also can update his/her profile.",
            des4: "Authentication & Authorization developed with Firebase & JWT.",
            des5: "Admin dashboard where he/she can add products, make other users admin, manage user’s orders.",
            des6: "Payment System for users to purchase any parts.",
            tech1: "ReactJS",
            tech2: "Bootstrap",
            tech5: "Firebase",
            tech6: "Routing",
            live: "https://tenth-assignment-ee402.web.app/",
            gitC: "https://github.com/SunjidaAkter/photographer",
        },
    ];
    const projects1 = [
        {
            id: "1",
            name: "ELECTRIX",
            img: `${p1}`,
            img1: `${p1}`,
            img2: `${p1}`,
            img3: `${p1}`,
            des: "Electrix is a responsive SPA for electrics manufacturers.",
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
            id: "3",
            name: "INSHOT",
            img: `${p3}`,
            img1: `${p3}`,
            img2: `${p3}`,
            img3: `${p3}`,
            des: "Inshot is a simple responsive website for a photographer.",
            tech1: "ReactJS",
            tech2: "Bootstrap",
            tech5: "Firebase",
            tech6: "Routing",
            live: "https://tenth-assignment-ee402.web.app/",
            gitC: "https://github.com/SunjidaAkter/photographer",
        },
        {
            id: "2",
            name: "IMPEL",
            img: `${p2}`,
            img1: `${p2}`,
            img2: `${p2}`,
            img3: `${p2}`,
            des: "Impel is a responsive SPA for car dealership warehouse.",
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
    ];
    const projects2 = [
        {
            id: "2",
            name: "IMPEL",
            img: `${p2}`,
            img1: `${p2}`,
            img2: `${p2}`,
            img3: `${p2}`,
            des: "Impel is a responsive SPA for car dealership warehouse.",
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
            id: "1",
            name: "ELECTRIX",
            img: `${p1}`,
            img1: `${p1}`,
            img2: `${p1}`,
            img3: `${p1}`,
            des: "Electrix is a responsive SPA for electrics manufacturers.",
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
            id: "3",
            name: "INSHOT",
            img: `${p3}`,
            img1: `${p3}`,
            img2: `${p3}`,
            img3: `${p3}`,
            des: "Inshot is a simple responsive website for a photographer.",
            tech1: "ReactJS",
            tech2: "Bootstrap",
            tech5: "Firebase",
            tech6: "Routing",
            live: "https://tenth-assignment-ee402.web.app/",
            gitC: "https://github.com/SunjidaAkter/photographer",
        },
    ];
    return (
        <div id='work' className='px-12 py-6 bg-white dark:bg-[#2b2b2b] dark:text-white'>
            <Fade bottom cascade><p className='my-heading font-extrabold inline lg:text-[60px] text-[30px]'>Recent Works.</p></Fade >
            <div className="border-0 mt-5">
                <Tabs>
                    <TabList className="flex justify-center ">
                        <Tab className="border border-zinc-200 rounded-md bg-white focus:text-white text-zinc-900 focus:border focus:border-zinc-600 font-semibold font-congo focus:bg-zinc-500 px-5 py-2 bg"> All</Tab>
                        <Tab className="border border-zinc-200 rounded-md bg-white focus:text-white text-zinc-900 focus:border focus:border-zinc-600 font-semibold font-congo focus:bg-zinc-500 px-5 py-2 bg"> Full Stack Project</Tab>
                        <Tab className="border border-zinc-200 rounded-md bg-white focus:text-white text-zinc-900 focus:border focus:border-zinc-600 font-semibold font-congo focus:bg-zinc-500 px-5 py-2 bg"> React App</Tab>
                    </TabList>

                    <TabPanel>
                        <div>
                            <div className='services-container mb-5'>
                                {
                                    projects.map(project => <Project
                                        project={project}
                                        key={project.id}
                                    ></Project>)
                                }
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div>
                            <div className='services-container mb-5'>
                                {
                                    projects1.map(project => <All
                                        project={project}
                                        key={project.id}
                                    ></All>)
                                }
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div>
                            <div className='services-container mb-5'>
                                {
                                    projects2.map(project => <FrontEnd
                                        project={project}
                                        key={project.id}
                                    ></FrontEnd>)
                                }
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>


        </div>
    );
};

export default Projects;