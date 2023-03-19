import Image from 'next/image';
import React from 'react';
import { cartData } from './CoursesCartData';
import { BsCheck2, BsDatabaseFillCheck } from 'react-icons/bs';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { MdOutlineFactCheck } from 'react-icons/md';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { BiSupport } from 'react-icons/bi';
import Link from 'next/link';

const CoursesCart = () => {
    return (
        <div className='section bg-[#eee] py-10'>
            <div className="main-container">
                <div className='text-center'>
                <h2 className='text-3xl leading-10 font-bold text-[#42494f]'>MongoDB Atlas</h2>
                <p className='text-lg leading-7 text-[#1a1a1a] mt-[10px]'>Fully managed, global cloud database on AWS, Azure, and GCP</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3'>
                    {
                        cartData?.map(cart => {
                            return (
                                <div style={{boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 4px 0px"}} className='max-w-[360px] mt-[70px] mx-4 border-[1px] active:border-[#13aa52] hover:border-[#13aa52] bg-white rounded' key={cart?.id}>
                                    <div className='flex items-start px-10 pt-10 pb-[30px] flex-col justify-between'>
                                    <div className="flex mb-1">
                                    <Image className='mr-[10px]' src={cart?.image} alt="" />
                                    <h3 className='text-2xl leading-9 font-bold text-[#42494f]'>{cart?.type}</h3>
                                    </div>
                                    <h4 className='text-xl leading-[30px] mb-1'>from <span className='border-b-[1px] border-[#13a850] pb-[3px] cursor-pointer text-[21px]'>{cart?.fee}</span></h4>
                                    <button style={{boxShadow: "0 2px 4px 0 rgba(0,0,0,0.1)"}} className='py-[10px] px-[30px] bg-[#fff] hover:bg-[#13aa52] text-[#13aa52] hover:text-[#fff] border-[1px] border-[#13aa52]font-bold text-base rounded cursor-pointer mt-5'>Sign Up</button>
                                    <p className='text-sm leading-[22px] text-[#42494f]'>{cart?.limit}</p>
                                    </div>
                                    <div className='mx-10 h-[1px] bg-[#b3bbc140]'></div>
                                    <div className='pt-[15px] pr-[38px] pb-[47px] pl-10 relative'>
                                    <p className='text-base leading-6 text-[#1a1a1a] text-left mb-[30px] mt-[15px]'>{cart?.description}</p>
                                    {
                                        cart?.service.map(s => {
                                            return (
                                                <div className='flex text-left items-start' key={s?.id}>
                                                    <BsCheck2 className='mt-1 mr-[13px] min-w-[15px] text-[#13aa52]' />
                                                    <p className='mb-4 text-base leading-6 text-[#1a1a1a]'>{s?.title}</p>
                                                </div>
                                            )
                                        })
                                    }
                                    <Link className='hover:underline text-base leading-6 bottom-3 absolute font-bold text-[#13aa52]' href="/">View pricing</Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='bg-white mx-4 mt-[25px]'>
                    <div className='p-[30px]'>
                    <div className="md:flex justify-between mx-[15px] px-[15px] ">
                        <h3 className='text-base text-[#56575b] font-medium uppercase leading-10 mb-2'>Bitly for Enterprise</h3>
                        <div>
                        <h2 className='text-[#56575B] text-[34px] leading-10 font-bold mb-2'>Custom pricing</h2>
                        <p className='text-base '>10,000+ branded links/month</p>
                        </div>
                    </div>
                        <hr className='mx-6 mt-1 text-[#eff0f2] mb-5' />
                        <div className='md:flex pr-10 pl-5'>
                            <div className='md:w-[30%]'>
                            <p className='text-base text-[#56575B] mr-5 pr-[30px]'>The trusted, unrivaled enterprise-grade solution. One platform for all your link and QR Code needs.</p>
                            </div>
                            <div>
                                <h4 className="text-[15px] text-[#56575B] font-bold">Everything in Premium, plus:</h4>
                                <div className="flex">
                                <div className='pr-[30px]'>
                                <p className='mt-[15px]'><HiOutlineUserGroup className="inline mb-1 text-[#4e77de]" /> Multiple user seats</p>
                                <p className='mt-[15px]'><MdOutlineFactCheck className="inline mb-1 text-[#4e77de]" /> Group permissions</p>
                                </div>
                                <div className='pr-[30px]'>
                                <p className='mt-[15px]'><AiOutlineFieldTime className="inline mb-1 text-[#4e77de]" /> At scale link generation</p>
                                <p className='mt-[15px]'><BsDatabaseFillCheck className="inline mb-1 text-[#4e77de]" /> 99.9% SLA uptime</p>
                                </div>
                                <p className='pr-[30px] mt-[15px]'><BiSupport className="inline mb-1 text-[#4e77de]" /> Account manager support</p>
                                </div>
                            </div>
                        </div>
                        <div className='pl-5'>
                            <button className='mt-5 text-[#2a5bd7] bg-[#edf2fe] rounded-[6px] px-4 py-2 w-[220px]'>Get a Quote</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursesCart;