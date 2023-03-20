import Image from 'next/image';
import React from 'react';
import img1 from '../../assets/images/reviews/grey_wave_desktop_winter_2023.png'

const Reviews = () => {
    return (
        <div className='section'>
                <div className="relative md:h-[300px] h-[400px]">
                    <Image src={ img1 } alt="" />
                <div className="main-container">
                <div className='py-8 px-4 md:px-0 absolute top-10'>
                <h2 className='md:text-[62px] text-[40px] text-[#252628] font-bold leading-[56px]mb-2'>Bitly Reviews</h2>
                <p className='text-[#56575b] text-2xl font-normal mb-2 md:w-4/5 w-full'>Interested in seeing what our customers are saying? See reviews on Bitly below.</p>
                <button className='mt-5 bg-[#2a5bd7] text-[#edf2fe] rounded-[6px] px-[30px] py-[18px] text-xl w-full md:w-[220px]'>Get a Quote</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;