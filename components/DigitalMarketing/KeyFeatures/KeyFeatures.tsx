import Image from 'next/image';
import React from 'react';
import { BiLinkAlt } from 'react-icons/bi';
import { BsSpeedometer2 } from 'react-icons/bs';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { MdDatasetLinked } from 'react-icons/md';

const KeyFeatures = () => {
    return (
        <div className='section'>
            <div className="main-container">
            <div className="h-[1px] bg-[#b3bbc140] mb-20"></div>
                <h1 className="font-bold text-xl mb-4 pl-4 md:pl-0">Key Features</h1>
                <div className='w-full md:w-8/12'>
                <div className='flex hover:bg-[#f5f5f7] p-[15px]'>
                    <BiLinkAlt className='w-[30px] h-[30px] mr-[15px] mb-6' />
                    <div>
                    <h3 className='font-bold text-base leading-[22px]'>Links that work in all your channels</h3>
                    <p className='text-base font-normal leading-[22px]'>Deploy branded links to lift results across every touchpoint. <br /> <span className=''>Learn more about link management <HiOutlineArrowNarrowRight className="inline" /></span></p>
                    </div>
                </div>
                <div className='flex hover:bg-[#f5f5f7] p-[15px]'>
                    <MdDatasetLinked className='w-[30px] h-[30px] mr-[15px] mb-6' />
                    <div>
                    <h3 className='font-bold text-base leading-[22px]'>Brand-building built into every click</h3>
                    <p className='text-base font-normal leading-[22px]'>Improve click-through’s and amplify your brand at the same time. <br /> <span>Learn more about branded links<HiOutlineArrowNarrowRight className="inline" /></span></p>
                    </div>
                </div>
                <div className='flex hover:bg-[#f5f5f7] p-[15px]'>
                    <BsSpeedometer2 className='w-[30px] h-[30px] mr-[15px] mb-6' />
                    <div>
                    <h3 className='font-bold text-base leading-[22px]'>Fully understand engagement</h3>
                        <p className='text-base font-normal leading-[22px]'>Identify and promote your top-performing content. <br /> <span>Learn more about campaign management and analytics<HiOutlineArrowNarrowRight className="inline" /></span></p>
                    </div>
                </div>
                </div>
                <div className="h-[1px] bg-[#b3bbc140] mt-20"></div>
            </div>
        </div>
    );
};

export default KeyFeatures;