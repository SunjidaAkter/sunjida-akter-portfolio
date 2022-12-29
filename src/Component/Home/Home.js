import React from 'react';
import Nav from '../Shared/Nav';
import About from './About';
import Banner from './Banner';
import Blogs from './Blogs';
import Contact from './Contact';
import Projects from './Projects';
import "./Home.css"

const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <Banner></Banner>
            <About></About>
            <Projects></Projects>
            <Blogs></Blogs>
            <Contact></Contact>
        </div>
    );
};

export default Home;