import React from 'react';

const Denver = () => {
    return (
        <div className='section'>
            <div className="main-container">
                <div className="md:flex justify-between pl-4 md:pl-0">
                    <div className='mb-10 md:mb-0'>
                        <h3 className='text-[#2a2e30] font-bold text-[32px] leading-8'>Denver</h3>
                        <p className='leading-[1.4em] text-[#0a0a0a] font-normal'>1860 Blake St. <br />Suite 650 <br />Denver, CO 80202</p>
                    </div>
                    <div className='mb-10 md:mb-0'>
                        <h3 className='text-[#2a2e30] font-bold text-[32px] leading-8'>NYC (HQ)</h3>
                        <p className='leading-[1.4em] text-[#0a0a0a] font-normal'>DPT 5006 <br />601 W. 26th St. <br />Suite 357 (3rd Floor) <br />New York, NY 10001-1101</p>
                    </div>
                    <div className='mb-10 md:mb-0'>
                        <h3 className='text-[#2a2e30] font-bold text-[32px] leading-8'>Bielefeld</h3>
                        <p className='leading-[1.4em] text-[#0a0a0a] font-normal'>Am Lenkwerk 13 <br />33609 <br />Bielefeld, Germany</p>
                    </div>
                    <div className='mb-10 md:mb-0'>
                        <h3 className='text-[#2a2e30] font-bold text-[32px] leading-8'>Berlin</h3>
                        <p className='leading-[1.4em] text-[#0a0a0a] font-normal'>Zehdenicker Straße 1 <br />10119 <br />Berlin, Germany</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Denver;