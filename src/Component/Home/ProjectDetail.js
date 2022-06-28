import React from 'react';

const ProjectDetail = () => {
    const menuItems = (
        <>

        </>
    )
    return (
        <div class="navbar fixed z-40 bg-base-200  px-12">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <div className='flex justify-center items-center'>
                    <div class="avatar ">
                        <div class="w-14 rounded-full ring ring-zinc-500 ring-offset-base-100 ring-offset-2">
                            <img src={sunjida} />
                        </div>
                    </div>
                    <div>
                        <a href='/home' class=" btn btn-ghost normal-case lg:text-5xl text-3xl font-caveat ">Sunjida</a>
                    </div>
                </div>
            </div>
            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal p-0 py-2">
                    {menuItems}
                </ul>
            </div>
        </div>


    );
};

export default ProjectDetail;