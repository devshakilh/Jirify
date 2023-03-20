import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import bodyImg from '../../../assets/DashBoard/qrc-list-empty.png'


const QRBody = () => {
    return (
        <div>
            <Image src={bodyImg} alt="img" className='w-2/5 mx-auto' />

            <div className="flex flex-col items-center justify-center my-12">
                <h2 className="text-[32px] font-bold my-2">Connect your audience with a simple scan</h2>
                <p className="text-[24px]">Create a QR Code from any short link. Then edit, customize, and track your QR Codes here.</p>
                <div className="mt-6 bg-[#2853b6] hover:bg-[#102c72] text-[#fff] w-[200px] flex justify-center py-2 rounded-md">
                    <p className={` transition-all ease-in`}>Create a QR Code</p>
                </div>
                <Link href="/" className='text-[#2853b6] mt-3'>Learn more</Link>
            </div>
        </div>
    );
};

export default QRBody;