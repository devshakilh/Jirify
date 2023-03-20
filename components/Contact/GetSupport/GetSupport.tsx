import React from 'react';

const GetSupport = () => {
    return (
        <div className='section'>
            <div className="main-container">
                <div className='w-full md:w-1/2 mx-auto text-center px-4 md:px-0'>
                <h2 className='text-[38px] font-bold leading-10 text-[#252628] mb-2'>Get Support</h2>
                <p className='text-[#56575b] font-normal text-xl mb-2'>Browse our extensive knowledge base to find answers to all your questions and help you get the most out of Bitly.</p>
                <button className="bg-[#edf2fe] hover:bg-[#cbd5ee] text-[#2a5bd7] rounded-md py-[18px] text-xl px-[30px] mt-2 mb-4">
                Browse knowledge base
                </button>
                </div>
                <div className="h-[1px] bg-[#b3bbc140] mt-20"></div>
            </div>
        </div>
    );
};

export default GetSupport;