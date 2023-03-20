import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SocialDb } from "./fakeDb";

const SocialMarketers = () => {
  return (
    <div className="bg-[#eff0f2] pt-20 pb-20">
      <div className="main-container">
        <h3 className="text-[38px] font-bold md:font-extrabold leading-8 text-[#2a2e30] mb-[45px] text-center">
        More for social marketers
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 pt-[15px] px-4 md:px-0">
          {SocialDb?.map((d) => {
            return (
              <div
                style={{
                  boxShadow: "0 2px 15px 0 rgba(0,0,0,.1)",
                  borderRadius: "4px 4px 0 0",
                  border: "1px solid #e6e6e6",
                }}
                key={d?.id}
              >
                <div className="min-h-[330px] pb-4 bg-[#fefefe]">
                  <Image src={d?.image} alt="" />
                  <div className="px-5 pb-[30px] pt-5">
                    <h4 className="text-[#56575b] mb-[10px] text-base font-normal leading-[22px]">
                      {d?.title}
                    </h4>
                    <Link href="/">
                      <h2 className="text-[#1d1f21] text-xl font-extrabold leading-[22px]">
                        {d?.description}
                      </h2>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SocialMarketers;
