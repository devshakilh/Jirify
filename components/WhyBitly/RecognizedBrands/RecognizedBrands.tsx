import React from 'react';
import img1 from '../../../assets/images/why-bitly/7.svg'
import img2 from '../../../assets/images/why-bitly/8.svg'
import img3 from '../../../assets/images/why-bitly/9.svg'
import img4 from '../../../assets/images/why-bitly/10.svg'
import Image from 'next/image';

const RecognizedBrands = () => {
    return (
        <div className='section'>
            <div className="main-container">
            <h3 className="text-[32px] font-bold leading-8 text-[#2a2e30] mb-4 text-center">
            The most recognized brands in the world love Bitly
                </h3>
                <div className="flex w-full md:w-1/2 mx-auto justify-between">
                    <Image src={img1} alt=""/>
                    <Image src={img2} alt=""/>
                    <Image src={img3} alt=""/>
                    <Image src={img4} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default RecognizedBrands;