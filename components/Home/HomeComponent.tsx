import { platformCard } from "@/Fake_data/home/platformFake";
import Layout from "@/layouts/Layout/Layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import bannerimg from '../../assets/home/home-hero-mobile-v2.png'
import earthimg from '../../assets/home/earth-mobile-v2.png'
import { AiOutlineCheckCircle } from "react-icons/ai";
import CustomerSay from "../CommonCompo/CustomerSaysSlider/CustomerSay";
import Faq from "./Faq";
import MarqueeSliderComp from "../CommonCompo/MarqueeSliderComp";
import { countData } from "@/Fake_data/home/CountData";
import { useRouter } from 'next/router'



const HomeComponent = () => {
  const router = useRouter()

  const handleBannerBtn = () => router.push("/")
  const handleGetQuote = () => router.push("/")
  // const handleStartFree = (item: any) =>  console.log(item);


  return (
    <Layout addContainer>
      <div className="flex flex-col-reverse lg:flex-row gap-8 items-center">
        <div className="lg:w-3/5 mx-5 md:mx-0 mt-24">
          <h1 className="text-[28px] lg:text-[40px] leading-8 lg:leading-[48px] mb-[24px] test-[#252628] font-extrabold">We’ve expanded! <br />
            Shorten URLs. Generate QR Codes. <br />
            And now, create Link-in-bios.</h1>
          <div className="py-4">
            <div onClick={() => handleBannerBtn()} className="cursor-pointer lg:w-[250px] text-center bg-[#2a5bd7] hover:bg-[#1740a8] text-[#fff] py-[18px] px-[30px] text-[20px] rounded-md leading-[22px]">Get started for Free</div> <br />
            <div onClick={() => handleGetQuote()} className="cursor-pointer text-[20px] text-[#2a5bd7] text-center lg:text-left lg:ml-14">Get a Quote</div>
          </div>
        </div>
        <div className="lg:w-2/5">
          <Image src={bannerimg} alt="desktop-hero" />
        </div>
      </div>

      {/* Connections platform */}
      <div className="mt-20">
        <h3 className="text-[32px] font-extrabold text-center mb-3">Jirily’s Connections Platform</h3>
        <h4 className="text-[#56575b] text-[20px] w-[60%] mx-auto text-center">All the products you need to build brand connections, manage links and QR Codes, and connect with audiences everywhere, in a single unified platform.</h4>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-20 gap-6">
          {
            platformCard.map((item) =>
              <div key={item.id} className="p-5 border pt-14 border-black rounded-lg mx-2">
                <div className="flex gap-6 items-center">
                  <Image src={item.img} alt="cardimg" width={40} height={40} />
                  <h5 className="text-[#1d1f21] text-[20px] font-extrabold" >{item.title}</h5>
                </div>
                <div className="h-[120px] flex items-start mt-12">
                  <p className="text-[#56575b] font-[16px]">{item.details}</p>
                </div>
                <p className="text-[#1d1f21] font-bold">{item.featureTitle}</p>
                <ul className="text-[16px] text-[#56575b]">
                  {
                    item.point.map((points) =>
                      <li key={points.id} className="leading-5 my-5 flex items-center gap-3">
                        <AiOutlineCheckCircle className="inline-block text-xl text-[#2a5bd7]" /> {points.point}
                      </li>)
                  }
                </ul>
                <div className="py-4">
                  <div onClick={() => router.push(`${item.startLink}`)} className="cursor-pointer my-2 text-center bg-[#2a5bd7] hover:bg-[#1740a8] text-[#fff] py-[12px] text-[20px] rounded-md leading-[22px]">Get started for Free</div> <br />
                  <div onClick={() => router.push(`${item.startLink}`)} className="cursor-pointer text-[20px] text-[#2a5bd7] text-center">Learn More</div>
                </div>
              </div>)
          }
          <div className="">

          </div>
        </div>
      </div>

      <div className="mt-20 mb-36 gap-5 flex flex-col lg:flex-row md:mx-auto items-center mx-2">
        <div className="">
          <Image src={earthimg} alt="earthImg" width={550} height={420} />
        </div>
        <div className="">
          {
            countData.map((item) =>
              <div key="item.id" className="flex gap-6 items-center border-b-2 w-full">
                <p className="text-[40px] text-right text-[#252628] font-extrabold w-2/5">{item.main}</p>
                <p className="text-[20px] w-3/5">{item.body}</p>
              </div>)
          }

        </div>
      </div>

      <CustomerSay />

      <div className="my-20">
        <h4 className="text-[32px] font-extrabold leading-8 text-center py-5 mx-2">Loved by big and small brands everywhere</h4>
        <MarqueeSliderComp />
      </div>

      <Faq />
    </Layout>
  );
};

export default HomeComponent;
