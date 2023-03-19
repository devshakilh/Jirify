import React from 'react';
import img1 from "../../../assets/images/why-bitly/3.jpg";
import Image from "next/image";

const GetMore = () => {
    return (
        <div className="section overflow-hidden">
      <div className="main-container">
        <div className="md:flex justify-between items-center pt-10">
            <Image className="w-1/2" src={img1} alt="" />
          <div className="ml-4">
            <h3 className="text-[32px] font-bold leading-8 text-[#2a2e30] mb-4">
              Get more clicks with custom links
            </h3>
            <p className="text-lg leading-6 mb-4">
            Make your links powerful marketing assets. Custom links replace “bit.ly” with your chosen domain name, making your links consistently recognizable across channels. They’re so powerful, businesses that use them get more clicks.
            </p>
            <button className="bg-[#edf2fe] hover:bg-[#cbd5ee] text-[#2a5bd7] rounded-md py-2.5 px-4 mt-2">
              Learn More
            </button>
          </div>
        </div>
        <div className="h-[1px] bg-[#b3bbc140] mt-5"></div>
      </div>
    </div>
    );
};

export default GetMore;