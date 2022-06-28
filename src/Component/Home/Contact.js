import React, { useRef } from 'react';
import './Home.css';
import emailjs from '@emailjs/browser';
import {

    MailIcon,
    HomeIcon,
    PhoneIcon,
    UserIcon,
} from "@heroicons/react/solid";
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
        <div id='contact' className='px-12 my-12'>
            <p className='my-heading font-extrabold inline lg:text-[60px] text-[40px]'>Get In Touch.</p>
            <div className='mt-[50px] flex lg:flex-row flex-col justify-between items-start '>
                <div className='lg:w-[30%] w-full mb-5'>
                    <p className='text-left font-medium font-l2  text-4xl mb-7 underline-offset-4'>Contact Info.</p>
                    <p className='text-left font-medium text-2xl'>Full Name :</p>
                    <p className="flex lg:mb-4 mb-0">
                        {" "}
                        <UserIcon className=" w-6 h-6 mr-3 mt-1 "></UserIcon>
                        <span className='lg:text-xl text-sm lg:mt-0 mt-2'>Sunjida Akter (Monika)</span>
                    </p>
                    <p className='text-left font-medium text-2xl'>Address :</p>
                    <p className="flex lg:mb-4 mb-0">
                        {" "}
                        <HomeIcon className=" w-6 h-6 mr-2 mt-1"></HomeIcon>
                        <span className='lg:text-xl text-sm lg:mt-0 mt-2'>Keraniganj, Dhaka, Bangladesh</span>
                    </p>
                    <p className='text-left font-medium font-manrope text-2xl'>Email :</p>
                    <p className="flex lg:mb-4 mb-0">
                        {" "}
                        <MailIcon className=" w-6 h-6 mr-3 mt-1"></MailIcon>
                        <span className='lg:text-xl text-sm lg:mt-0 mt-2'>sanjidabintesayid7@gmail.com</span>
                    </p>
                    <p className='text-left font-medium font-manrope text-2xl'>Phone :</p>
                    <p className="flex lg:mb-4 mb-0">
                        {" "}
                        <PhoneIcon className=" w-6 h-6 mr-3 mt-1"></PhoneIcon>
                        <span className='lg:text-xl text-sm lg:mt-0 mt-2'>+8801786363757</span>
                    </p>

                </div>
                <div className='lg:w-[63%] w-full mb-5 bg-zinc-100 px-7'>
                    <p className='text-left font-medium font-l2  text-4xl mb-7  underline-offset-4 '>Send Message.</p>
                    <form onSubmit={sendEmail}>
                        <div className='flex justify-between '>
                            <input type="text" name='name' placeholder="Name" class="input border-black input-bordered mb-3 w-[48%] rounded-none max-w-xs" required />
                            <input type="email" name='email' placeholder="Email" class="input border-black input-bordered mb-3 w-[48%] rounded-none max-w-xs" required />
                        </div>
                        <input type="text" name='subject' placeholder="Subject" class="input  border-black input-bordered mb-3 rounded-none w-full " required />
                        <input type="textarea" name='message' placeholder="Message" class="input  border-black input-bordered mb-3 h-24 rounded-none w-full " required />
                        <div className='px-0 mb-7'>
                            <input type='submit' className='btn bg-zinc-700 w-full  text-white rounded-sm' value='Send Message' />

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;