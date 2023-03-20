import Image from "next/image";
import React from "react";
import img1 from "../../../assets/images/why-bitly/2.png";

const WorkSmarter = () => {
  return (
    <div className="section overflow-hidden">
      <div className="main-container">
        <div className="h-[1px] bg-[#b3bbc140]"></div>
        <div className="md:flex justify-between items-center pt-[80px] px-4 md:px-0">
          <div className="mr-4">
            <h3 className="text-[32px] font-bold leading-8 text-[#2a2e30] mb-4">
              Work smarter with Bitly’s all-in-one platform
            </h3>
            <p className="text-lg leading-6 mb-4">
              Creating, sharing and monitoring your links shouldn’t be a drag.
              Bitly helps you work faster and more intelligently—with features
              like branded links and the ability to redirect any link—so you can
              relish the sweet taste of hitting your performance goals.
            </p>
            <button className="bg-[#edf2fe] hover:bg-[#cbd5ee] text-[#2a5bd7] rounded-md py-2.5 px-4 mt-2">
              Learn More
            </button>
          </div>
          <Image className="w-full md:w-1/2" src={img1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WorkSmarter;
