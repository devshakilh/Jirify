import React, { useLayoutEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Controller, A11y } from "swiper";
import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa";
import Link from "next/link";
import { feedbackData } from "@/Fake_data/home/feedbackData";

export default function MobileCustomer() {
    const swiper1Ref = useRef<any>();
    const swiper2Ref = useRef<any>();

    // useLayoutEffect(() => {
    //     swiper1Ref.current.controller.control = swiper2Ref.current;
    //     swiper2Ref.current.controller.control = swiper1Ref.current;
    // }, []);

    return (
        <div className="md:hidden mt-10" >
            <div className=" mx-1">
                <Swiper
                    onSwiper={(swiper) => {
                        swiper1Ref.current = swiper;
                    }}
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={false}
                    navigation={true}
                    modules={[Pagination, Navigation, Controller, A11y]}
                    style={{ boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.42)" }}
                >
                    {
                        feedbackData?.map(feeds =>
                            <SwiperSlide key={feeds.id} className="py-6">
                                <Image className="mx-auto" src={feeds.logoImg} height="40" alt="logo" />
                            </SwiperSlide>
                        )
                    }
                    <SwiperSlide className="text-center mt-8">ALL TESTIMONIALS</SwiperSlide>
                </Swiper>
            </div>
            <Swiper
                onSwiper={(swiper) => {
                    swiper2Ref.current = swiper;
                }}
                slidesPerView={1}
                spaceBetween={30}
                loop={false}
                modules={[Pagination, Navigation, Controller]}
                className="h-[560px] bg-slate-200 z-0"
            >
                {
                    feedbackData?.map((feeds) => <SwiperSlide virtualIndex={parseInt(feeds.id)} key={feeds.id} className='w-full z-40 text-center py-5 relative'>
                        <div className=" w-full py-8 lg:pt-10 pb-20 justify-start px-5">
                            <FaQuoteRight className='text-slate-300 text-[60px]' />
                            <p className="mt-8 text-[18px] text-justify "><i>{feeds.message}</i></p>
                            <div className="flex mt-5">
                                <div className="w-20 h-20 p-2 mr-5">
                                    <Image src={feeds.userImg} alt="img" className='rounded-full w-full h-full' />
                                </div>
                                <div className="font-bold text-left">
                                    <p className="">{feeds.userName}</p>
                                    <p className="font-semibold">{feeds.role}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
                <SwiperSlide className="text-center pt-40">
                    <p className="px-5">And that is not all. Follow the link for more stories from our customers.</p>
                    <Link href="/testimonials" className="text-blue-500 text-lg font-semibold">More</Link>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}