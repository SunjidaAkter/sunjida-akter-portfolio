import React, { useRef } from 'react';
import './Home.css';
import emailjs from '@emailjs/browser';
import {

    MailIcon,
    HomeIcon,
    PhoneIcon,
    UserIcon,
} from "@heroicons/react/solid";
import Fade from 'react-reveal/Fade';
// service id : service_2fhzx4z

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2fhzx4z', 'template_ptp1jlo', e.target, 'bNrekY49Mgk0sMduD')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <div id='contact' className='px-12 py-12 bg-white dark:bg-[#2b2b2b] dark:text-white'>
            <Fade bottom cascade><p className='my-heading font-extrabold inline lg:text-[60px] text-[40px]'>Get In Touch.</p></Fade>
            <div className='mt-[50px] flex lg:flex-row flex-col justify-between items-start '>
                <div className='lg:w-[30%] w-full mb-5'>
                    <Fade left cascade><p className='text-left font-medium font-l2  text-4xl mb-7 underline-offset-4'>Contact Info.</p></Fade>
                    <Fade left cascade><p className='text-left font-medium text-2xl'>Full Name :</p></Fade>
                    <Fade left cascade><p className="flex lg:mb-4 mb-0">
                        {" "}
                        <UserIcon className=" w-6 h-6 mr-3 mt-1 "></UserIcon>
                        <span className='font-caveat lg:text-2xl font-semibold text-sm lg:mt-0 mt-2'>Sunjida Akter (Monika)</span>
                    </p></Fade>
                    <Fade left cascade><p className='text-left font-medium text-2xl'>Address :</p></Fade>
                    <Fade left cascade><p className="flex lg:mb-4 mb-0">
                        {" "}
                        <HomeIcon className=" w-6 h-6 mr-2 mt-1"></HomeIcon>
                        <span className='font-caveat lg:text-2xl font-semibold text-sm lg:mt-0 mt-2'>Keraniganj, Dhaka, Bangladesh</span>
                    </p></Fade>
                    <Fade left cascade><p className='text-left font-medium font-manrope text-2xl'>Email :</p></Fade>
                    <Fade left cascade><p className="flex lg:mb-4 mb-0">
                        {" "}
                        <MailIcon className=" w-6 h-6 mr-3 mt-1"></MailIcon>
                        <span className='font-caveat lg:text-2xl font-semibold text-sm lg:mt-0 mt-2'>sanjidabintesayid7@gmail.com</span>
                    </p></Fade>
                    <Fade left cascade><p className='text-left font-medium font-manrope text-2xl'>Phone :</p></Fade>
                    <Fade left cascade><p className="flex lg:mb-4 mb-0">
                        {" "}
                        <PhoneIcon className=" w-6 h-6 mr-3 mt-1"></PhoneIcon>
                        <span className='font-caveat lg:text-2xl font-semibold text-sm lg:mt-0 mt-2'>+8801786363757</span>
                    </p></Fade>

                </div>
                <div className='lg:w-[63%] w-full mb-5 bg-zinc-300 px-7'>
                    <Fade bottom cascade><p className='text-left font-medium font-l2  lg:text-4xl mb-7 md:text-4xl dark:text-black text-3xl underline-offset-4 '>Send Message.</p></Fade>
                    <form onSubmit={sendEmail}>
                        <div className='flex justify-between '>
                            <Fade bottom cascade><input type="text" name='name' placeholder="Name" className="input border-black input-bordered mb-3 w-[48%] rounded-none max-w-xs" required /></Fade>
                            <Fade bottom cascade><input type="email" name='email' placeholder="Email" className="input border-black input-bordered mb-3 w-[48%] rounded-none max-w-xs" required /></Fade>
                        </div>
                        <Fade bottom cascade><input type="text" name='subject' placeholder="Subject" className="input  border-black input-bordered mb-3 rounded-none w-full " required /></Fade>
                        <Fade bottom cascade><input type="textarea" name='message' placeholder="Message" className="input  border-black input-bordered mb-3 h-24 rounded-none w-full " required /></Fade>
                        <div className='px-0 mb-7'>
                            <Fade bottom cascade><input type='submit' className='btn bg-zinc-700 w-full  text-white rounded-sm' value='Send Message' /></Fade>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;