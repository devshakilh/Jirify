import CustomerSay from '@/components/CommonCompo/CustomerSaysSlider/CustomerSay';
import GetCloser from '@/components/CommonCompo/GetCloser';
import MarqueeSliderComp from '@/components/CommonCompo/MarqueeSliderComp';
import { LinkManagementData } from '@/Fake_data/products/LinkManagement';
import Layout from '@/layouts/Layout/Layout';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import bannerimg from '../../../assets/products/link_management/link-management_mobile.png'

const LinkManagementLayout = () => {
    const [styleId, setStyleId] = useState("")
    const router = useRouter()

    return (
        <div className="">
            <Layout addContainer>
                <div className=''>
                    <div className="flex flex-col-reverse lg:flex-row items-center mb-20">
                        <div className="lg:w-[55%] mx-5 md:mx-0 mt-16">
                            <p><strong>Link Management</strong></p>
                            <h1 className="text-[28px] lg:text-[40px] leading-8 lg:leading-[48px] mb-[24px] test-[#252628] font-extrabold">Connect and ignite <br /> action with every link</h1>
                            <p className="text-[24px] text-[#56575b]">Whether you’re sharing one link or millions, Bitly lets you personalize, share, and track your content links, while capturing data with every click.</p>
                            <div onClick={() => router.push("/")} className="cursor-pointer mt-10 lg:w-[250px] text-center bg-[#2a5bd7] hover:bg-[#1740a8] text-[#fff] py-[18px] px-[30px] text-[20px] rounded-md leading-[22px]">Start for Free</div> <br />

                        </div>
                        <div className="lg:w-[45%]">
                            <Image src={bannerimg} alt="desktop-hero" width={650} />
                        </div>
                    </div>

                    <div className="mx-5 md:mx-0">
                        {
                            LinkManagementData.map((item) =>
                                <div key={item.id} className="my-20">
                                    <div className="">
                                        <p><strong>{item.smallTitle}</strong></p>
                                        <h3 className='text-[38px] font-extrabold leading-10 mt-5 mb-4'>{item.title}</h3>
                                        <p className="text-[20px] text-[#56575b]">{item.detail}</p>
                                    </div>
                                    <div className={`flex flex-col-reverse md:flex-row mt-14 items-center gap-5 ${parseInt(item.id) % 2 === 0 && "md:flex-row-reverse"}`}>
                                        <div className="lg:w-[50%]">
                                            <ul className="text-[20px] text-[#56575b]">
                                                {
                                                    item.points.map((point) =>
                                                        <li key={point.id} className="leading-5 my-5 flex  items-center gap-3">
                                                            <div className="w-[5%]"><AiOutlineCheckCircle className="inline-block text-[20px] text-[#2a5bd7]" /></div>
                                                            <div className="w-[95%]">{point.point}</div>
                                                        </li>)
                                                }
                                            </ul>
                                        </div>
                                        <div className="lg:lg-[50%]">
                                            <Image src={item.img} alt="img" width={500} />
                                        </div>
                                    </div>
                                </div>)
                        }

                    </div>

                    <div className="mx-5 md:mx-0">
                        <CustomerSay />
                    </div>

                    <div className="mx-5 mb-20 md:mx-0">
                        <h4 className="text-[32px] font-extrabold leading-8 text-center">Loved by big and small brands everywhere</h4>
                        <MarqueeSliderComp />
                    </div>
                </div>
            </Layout>
            <GetCloser />
        </div>
    );
};

export default LinkManagementLayout;