import { useRouter } from 'next/router';
import React from 'react';

const GetCloser = () => {
    const router = useRouter()

    return (
        <div className="bg-[#0B1736] h-fit py-20">
            <h2 className='text-center font-extrabold text-[38px] text-[#fff]'>Get closer to your audience and customers today</h2>
            <div className="flex justify-center">
                <div onClick={() => router.push("/")} className="cursor-pointer mt-10 text-center bg-[#2a5bd7] hover:bg-[#1740a8] text-[#fff] py-[18px] px-[30px] text-[20px] rounded-md leading-[22px] w-[260px]">Start for Free</div>
            </div>
        </div>
    );
};

export default GetCloser;