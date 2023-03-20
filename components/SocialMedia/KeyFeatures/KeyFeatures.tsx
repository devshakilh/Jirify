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
                    <h3 className='font-bold text-base leading-[22px]'>Links built for social</h3>
                    <p className='text-base font-normal leading-[22px]'>Share and manage links your followers will want to click. <br /> <span className=''>Learn more about link management<HiOutlineArrowNarrowRight className="inline" /></span></p>
                    </div>
                </div>
                <div className='flex hover:bg-[#f5f5f7] p-[15px]'>
                    <MdDatasetLinked className='w-[30px] h-[30px] mr-[15px] mb-6' />
                    <div>
                    <h3 className='font-bold text-base leading-[22px]'>Brand-building in every link</h3>
                    <p className='text-base font-normal leading-[22px]'>Amplify and further expand your brand with each share. <br /> <span>Learn more about branded links<HiOutlineArrowNarrowRight className="inline" /></span></p>
                    </div>
                </div>
                <div className='flex hover:bg-[#f5f5f7] p-[15px]'>
                    <BsSpeedometer2 className='w-[30px] h-[30px] mr-[15px] mb-6' />
                    <div>
                    <h3 className='font-bold text-base leading-[22px]'>Clearer insights, less guesswork</h3>
                        <p className='text-base font-normal leading-[22px]'>Identify your best content across social channels. <br /> <span>Learn more about campaign management and analytics<HiOutlineArrowNarrowRight className="inline" /></span></p>
                    </div>
                </div>
                </div>
                <div className="h-[1px] bg-[#b3bbc140] mt-20"></div>
            </div>
        </div>
    );
};

export default KeyFeatures;