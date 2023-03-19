import Image from "next/image";
import Link from "next/link";
import React from "react";
import img1 from "../../assets/images/why-bitly/1.jpg";

const WhyBitly = () => {
  return (
    <div className="section">
      <div className="relative h-[650px] md:h-[500px]">
        <Image
          className="w-full md:w-8/12 right-4 top-[-20px] absolute"
          src={img1}
          alt=""
        />
        <div className="main-container">
          <div className="absolute top-[210px] md:top-[90px] md:w-4/6 w-full px-6 md:px-0">
            <h1 className="font-bold text-xl mb-4">Bitly 101</h1>
            <h1 className="text-[40px] md:text-[62px] font-bold leading-[56px] text-[#252628] mb-2">
              World-class link management
            </h1>
            <p className="text-2xl font-normal text-[#56575b] mb-2">
              Bitly helps businesses shine by transforming their links into
              powerful tools for marketers and customer support teams.
            </p>
            <button
              style={{ transition: "background 100ms linear" }}
              className="text-xl py-[18px] mt-10 px-[30px] w-full md:w-44 bg-[#2a5bd7] rounded-md text-[#fff]"
            >
              Start for Free
            </button>
            <Link className="block text-[#1468a0] hover:text-[#13285e] pl-10" href="/">
              Get a Quote
            </Link>
            </div>
            </div>
      </div>
    </div>
  );
};

export default WhyBitly;
