import React from 'react';
import img1 from "../../../assets/images/why-bitly/6.jpg";
import Image from "next/image";

const RestAssured = () => {
    return (
        <div className="section overflow-hidden">
      <div className="main-container">
        <div className="md:flex justify-between px-4 md:px-0">
          <div className="mr-4">
            <h3 className="text-[32px] font-bold leading-8 text-[#2a2e30] mb-4">
            Rest assured knowing your links are secure
            </h3>
            <p className="text-lg leading-6 mb-4">
            Bitly is dedicated to ensuring your links are safe and reliable. Every link you create using Bitly is encrypted with HTTPS to maximize protection against eavesdropping or tampering by third parties, keeping your content safe from the bad guys.
            </p>
            <button className="bg-[#edf2fe] hover:bg-[#cbd5ee] text-[#2a5bd7] rounded-md py-2.5 px-4 mt-2">
              Learn More
            </button>
          </div>
          <Image className="w-full md:w-1/2 h-[420px] px-14" src={img1} alt="" />
        </div>
        <div className="h-[1px] bg-[#b3bbc140] mt-5"></div>
      </div>
    </div>
    );
};

export default RestAssured;