import React from 'react';
import img1 from "../../../assets/images/why-bitly/5.jpg";
import Image from "next/image";

const IntegrateSeamlessly = () => {
    return (
        <div className="section overflow-hidden">
      <div className="main-container">
        <div className="md:flex justify-between items-center pt-10">
            <Image className="w-full md:w-1/2" src={img1} alt="" />
          <div className="ml-4">
            <h3 className="text-[32px] font-bold leading-8 text-[#2a2e30] mb-4">
            Integrate seamlessly with the tools you love
            </h3>
            <p className="text-lg leading-6 mb-4">
            Bitly integrates with nearly every social media and digital marketing tool, saving you time and hassle. Need to create links at scale? Bitly’s got you covered. Whether you need 100 links or 100,000, the open and flexible Bitly API makes it simple and seamless.
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

export default IntegrateSeamlessly;