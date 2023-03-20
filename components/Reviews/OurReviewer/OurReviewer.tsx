import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";
import { reviewerData } from "./OurReviewerData";

const OurReviewer = () => {
  return (
    <div className="section">
      <div className="main-container">
        <div className="">
          <div className="overflow-y-auto h-[500px] bg-[#eeeeee]">
            {reviewerData?.map((r) => {
              return (
                <div
                  className="bg-white py-6 px-5 mx-10 border-[#cacaca] border-x-[1px]"
                  key={r?.id}
                >
                  <div className="md:flex">
                    <div className="w-full md:flex-1 px-4 md:px-0">
                      {r?.customer.map((c) => {
                        return (
                          <div key={c?.id}>
                            <Image
                              className="rounded-full w-[76px] h-[76px]"
                              src={c?.img}
                              alt=""
                            />
                            <p className="mt-3 font-bold text-sm text-[#505a5a]">
                              {c?.name}
                            </p>
                            <p className="text-xs font-normal leading-4">
                              {c?.profession}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                    <div className="w-full md:w-5/6 pl-3">
                      <h1 className="text-[#000000] text-[21px] font-semibold">
                        {r?.title}
                      </h1>
                      <div className="flex items-center">
                        <AiFillStar className="text-[#ff492c]" />
                        <AiFillStar className="text-[#ff492c]" />
                        <AiFillStar className="text-[#ff492c]" />
                        <AiFillStar className="text-[#ff492c]" />
                        <FaStarHalfAlt className="text-[#ff492c]" />
                        <p className="text-xs font-normal leading-[18px] ml-3">
                          {r?.date}
                        </p>
                      </div>
                      <p className="my-3 text-[#505a5a] leading-5 font-light text-sm">
                        {r?.description}
                      </p>
                      <Link
                        href="/"
                        className="block font-semibold text-[#2690ce] text-sm"
                      >
                        Read the full Bitly review
                      </Link>
                    </div>
                  </div>
                  <div className="h-[1px] bg-[#e5e7eb] mx-4 my-10"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurReviewer;
