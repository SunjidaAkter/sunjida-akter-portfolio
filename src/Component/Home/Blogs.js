import React from 'react';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

const Blogs = () => {
    return (
        <div id='blogs' className='px-12 my-5'>
            <Fade bottom cascade><p className='my-heading font-extrabold inline lg:text-[60px] text-[48px]'>Blogs.</p></Fade>
            <div className='mt-3 bg-zinc-600 text-white text-3xl font-bold font-congo rounded-sm h-[250px] flex justify-center items-center'>
                <Flip left cascade><p>Coming Soon...</p></Flip>
            </div>
        </div>
    );
};

export default Blogs;