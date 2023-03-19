import { interFontFamily } from '@/fonts/googleFonts';
import React from 'react';

const Pricing = () => {
    return (
        <div className='section'>
            <div className="main-container">
            <h2 className={`${interFontFamily.className} text-5xl leading-[56px] font-extrabold text-[#252628] mb-2`}>Pricing for brands and businesses of all sizes</h2>
            <h5 className='text-2xl leading-[1.4rem] font-normal text-[#56575b] mb-2'>Connect to your audience with branded links, QR Codes, and a Link-in-bio that will get their attention</h5>
            </div>
        </div>
    );
};

export default Pricing;