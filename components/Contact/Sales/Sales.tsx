import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowRight, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { GrFacebook } from 'react-icons/gr';
import img1 from '../../../assets/images/contact/contact-page-map-desktop.png'
import img2 from '../../../assets/images/contact/contact-page-map-mobile.png'

const Sales = () => {
    return (
        <div className='section'>
            <div className="main-container">
                <div className="md:flex justify-between">
                    <div className='w-full px-4 md:px-0 md:w-1/4 text-center'>
                        <h2 className='text-[38px] font-bold leading-10 text-[#252628] mb-4'>Sales</h2>
                        <p className='text-[#2a5bd7] leading-[25px] text-center text-lg'>Contact a representative to get started with Bitly Enterprise. <BsArrowRight className="inline" /></p>
                    </div>
                    <div className='w-full px-4 md:px-0 md:w-1/4 text-center'>
                        <h2 className='text-[38px] font-bold leading-10 text-[#252628] mb-4'>Press inquiries</h2>
                        <p className='text-[#2a5bd7] leading-[15px] text-center text-lg'>Contact our press team. <BsArrowRight className="inline" /></p>
                    </div>
                </div>
                <div className='flex w-full items-center pt-[150px] pb-[20px] px-4 md:px-0 md:w-1/2 mx-auto'>
                    <h2 className='text-[38px] font-bold leading-10 text-[#252628] mb-4'>Follow us:</h2>
                    <Link href="/"><GrFacebook className='w-[30px] h-[30px] md:w-[50px] md:h-14 mx-[10px] text-[#3c5a99]' /></Link>
                    <Link href="/"><BsTwitter className='w-[30px] h-[30px] md:w-[50px] md:h-14 mx-[10px] text-[#3c5a99]' /></Link>
                    <Link href="/"><BsLinkedin className='w-[30px] h-[30px] md:w-[50px] md:h-14 mx-[10px] text-[#3c5a99]' /></Link>
                    <Link href="/"><BsInstagram className='w-[30px] h-[30px] md:w-[50px] md:h-14 mx-[10px] text-[#3c5a99]' /></Link>
                </div>
            </div>
            <Image className='hidden md:block' src={img1} alt="" />
            <Image className='block md:hidden' src={img2} alt="" />
        </div>
    );
};

export default Sales;