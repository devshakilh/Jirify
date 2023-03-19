import React, { useState } from 'react';
import Link from 'next/link';
// import { interFontFamily, openSansFontFamily } from "@/fonts/googleFont";
// import styles from "./DeskCustomer.module.css";
import Image from 'next/image';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { FaQuoteRight } from 'react-icons/fa';
import { feedbackData } from '@/Fake_data/home/feedbackData';


const DeskCustomer = () => {
    const [sliderID, setSliderID] = useState("1")
    return (
        <div className="hidden md:block relative w-full h-fit bg-slate-100 mt-20 mb-32 ">
            <div className="w-[50%] lg:w-[65%] md:mx-14 lg:mx-[5%]">
                <div className={`carousel w-full`}>
                    {
                        feedbackData?.map((feeds) => {
                            return (
                                <div id={`${feeds.id}`} key={feeds.id} className="carousel-item w-full py-8 lg:pt-10 pb-24 justify-start">
                                    <div className="">
                                        {/* <Image className='text-slate-200' src={quataimg} alt="quota" width="60" /> */}
                                        <FaQuoteRight className='text-slate-300 text-[35px]' />
                                        <p className="mt-6 text-[18px] text-justify leading-8"><i>{feeds.message}</i></p>
                                        <div className="flex mt-8">
                                            <Image src={feeds.userImg} alt="img" width='50' className='rounded-full mr-4' />
                                            <div className="font-bold text-[18px]">
                                                <p className="">{feeds.userName}</p>
                                                <p className="font-semibold">{feeds.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="absolute top-[-35px] md:h-[410px] lg:h-[480px] w-[310px] bg-[#FFFFFF] right-0 px-10 pt-12" style={{ boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.12)" }}>
                {
                    feedbackData?.slice(0, 6).map((feeds) => <div className='pb-8' key={feeds.id}>
                        <a onClick={() => setSliderID(feeds.id)} href={`#${feeds.id}`} ><Image className={`${sliderID === feeds.id ? "grayscale-0" : "grayscale" } hover:grayscale-0`} src={feeds.logoImg} alt="logoimg" height="32"  /></a>
                    </div>)
                }
                <div className={`absolute w-1  h-10 left-0 ${sliderID === "1" && "block top-10 bg-blue-500"} ${sliderID === "2" && "block top-[110px] bg-blue-500"} ${sliderID === "3" && "block top-[176px] bg-blue-500"} ${sliderID === "4" && "block top-[235px] bg-blue-500"} ${sliderID === "5" && "block top-[300px] bg-blue-500"} ${sliderID === "6" && "block top-[365px] bg-blue-500"}`} ></div>
                <div className="absolute bottom-3 flex justify-evenly items-center">
                    <Link className='mr-10 text-[#3B7DED] font-semibold text-[18px] text-center' href="/testimoninals" >All Testimonials</Link>
                    <HiOutlineArrowRight className='text-[#3B7DED] animate-pulse' />
                </div>
            </div>
        </div>
    );
};

export default DeskCustomer;