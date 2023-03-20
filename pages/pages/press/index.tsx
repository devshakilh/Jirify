import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Press_data } from "../../../Fake_data/press/fake_data";
import { Bottom_data } from "../../../Fake_data/press/bottom_data";
import logo1 from "../../../assets/press/imageBottom1.png";
import logo2 from "../../../assets/press/bannerBottom2.png";
const Press = () => {
  return (
    <div className="lg:px-24 px-8 pt-24">
      <p className="font-bold py-2 text-x">Bitly News</p>
      <h1 className="text-6xl font-bold">
        There is always something <br /> happening here.
      </h1>
      <div className="bg-[#f5f6f7] pt-28 pb-20">
        {Press_data?.map((data, i) => (
          <div key={i}>
            <div className="lg:flex py-3 gap-4 justify-between">
              <div>
                <p className="py-1 text-[#707a80] text-[18px]">{data.date}</p>
                <h1 className="text-4xl font-bold pb-2">{data.title}</h1>
                <Link className="text-[#2a5bd7]" href="/">
                  Read More
                </Link>
              </div>
              <Image
                src={data.img}
                alt="Picture of the author"
                width={300}
                height={300}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-16">
        <p className=" py-2text-xl font-bold">Media Kit</p>
        <h1 className="text-4xl font-bold">Brand Assets</h1>
        <div className="lg:flex gap-16 bg-[#f5f6f7] justify-center">
          <div className="mt-6 border-[1px] border-gray-300 bg-white">
            <div className="px-4">
              <Image
                src={logo1}
                alt="Picture of the author"
                width={300}
                height={300}
              />
              <h1 className="font-bold text-xl py-4">Bltly Logo</h1>
              <div className="lg:flex gap-4 text-[#2a5bd7] pb-2">
                <button className="bg-[#edf2fe] py-2 px-4 rounded-md">
                  Download .png
                </button>
                <button className="bg-[#edf2fe] px-4 py-2 rounded-md">
                  Download .png
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6 border-[1px] border-gray-300 bg-white">
            <div className="px-4">
              <Image
                src={logo2}
                alt="Picture of the author"
                width={300}
                height={300}
              />
              <h1 className="font-bold text-xl py-4">Bltly Logo</h1>
              <div className="lg:flex gap-4 text-[#2a5bd7] pb-2">
                <a download="custom-filename.jpg" href="">
                  <button className="bg-[#edf2fe] py-2 px-4 rounded-md">
                    Download .png
                  </button>
                </a>
                <button className="bg-[#edf2fe] px-4 py-2 rounded-md">
                  Download .png
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-20 bg-[#f5f6f7]">
        <h1 className="text-4xl font-bold py-4">Product Images</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {Bottom_data?.map((data, i) => (
            <div key={i}>
              <div className="mt-6 border-[1px] border-gray-300 bg-white">
                <div className="">
                  <Image
                    src={data.img}
                    alt="Picture of the author"
                    width={350}
                    height={350}
                  />
                  <h1 className="font-bold text-xl px-4 py-4">{data.title}</h1>
                  <div className="text-[#2a5bd7] pb-2 px-4">
                    <a download="custom-filename.jpg" href="">
                      <button className="bg-[#edf2fe] py-2 px-4 rounded-md">
                        Download .png
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-24">
        <h1 className="text-4xl font-bold text-center">
          For press related inquiries, please contact us.
        </h1>
      </div>
      <div className="bg-[#0b1736] text-white pb-20 pt-8">
        <h1 className="text-4xl font-bold text-center pt-10 pb-6">
          Get closer to your audience and customers today
        </h1>
        <div className="flex justify-center pt-4">
          <button className="text-xl rounded-md bg-blue-500 py-3 px-5 hover:bg-blue-600 ">
            Start for Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Press;
