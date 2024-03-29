import React from 'react';
import img1 from "../../../assets/images/why-bitly/4.jpg";
import Image from "next/image";

const MaximizePerformance = () => {
    return (
        <div className="section overflow-hidden">
      <div className="main-container">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center pt-10 px-4 md:px-0">
          <div className="mr-4">
            <h3 className="text-[32px] font-bold leading-8 text-[#2a2e30] mb-4">
            Maximize your performance using real-time analytics
            </h3>
            <p className="text-lg leading-6 mb-4">
            Understand what content is resonating with your audience with comprehensive metrics on every link and campaign—like clicks, geographic data, and top referring channels. Bitly takes the guesswork out of your link performance so you can share more of what your audience wants.
            </p>
            <button className="bg-[#edf2fe] hover:bg-[#cbd5ee] text-[#2a5bd7] rounded-md py-2.5 px-4 mt-2">
              Learn More
            </button>
          </div>
          <Image className="w-full md:w-1/2" src={img1} alt="" />
        </div>
        <div className="h-[1px] bg-[#b3bbc140] mt-5"></div>
      </div>
    </div>
    );
};

export default MaximizePerformance;