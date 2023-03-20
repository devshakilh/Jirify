import Image from "next/image";
import React from "react";
import { bestInData } from "./fakeDb";

const BestInClass = () => {
  return (
    <div className="section">
      <div className="main-container">
        <div className="h-[1px] bg-[#b3bbc140] mb-20"></div>
        <div className="mx-4 md:mx-0 mb-[45px]">
          <h3 className="text-[38px] font-extrabold leading-8 text-[#2a2e30] mb-4 text-center">
            Best-in class experience, reliability, and security
          </h3>
          <p className="text-xl leading-6 mb-4 text-center text-[#56575b]">
            Bitly is the world’s leading link management platform for digital
            marketers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mx-4 md:mx-0 gap-8">
          {bestInData?.map((d) => {
            return (
              <div key={d?.id}>
                <div>
                  <Image className="mb-4" src={d?.image} alt="" />
                  <h3 className="font-bold text-xl">{d?.title}</h3>
                  <p>{d?.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BestInClass;
