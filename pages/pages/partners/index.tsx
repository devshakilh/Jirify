import React from 'react';
import Image from 'next/image';
import { BsCheckLg } from "react-icons/bs";
import bannerTop from '../../../assets/partners/illo-mobile-810x480-1.jpg'

import img1 from '../../../assets/partners/social-publishing.svg'
import img2 from '../../../assets/partners/brand-advocacy.svg'
import img3 from '../../../assets/partners/tracking-and-analytics.svg'
const Partners = () => {
    return (
        <div className=''>
            <div className='lg:px-24 px-8 py-20 lg:flex items-center flex-col lg:flex-row'>
                <div className='lg:w-7/12'>
                    <p className='font-bold py-2 text-x'>Partners</p>
                    <h1 className='text-6xl font-bold'>Bitly Partner Program</h1>
                    <p className='text-2xl text-[#56575b] py-4'>Join our partnership program and accelerate your growth.</p>
                    <div className='pt-6'>
                        <button className='text-xl text-white px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-md'>Join Us</button>
                    </div>
                </div>
                <div className='lg:w-5/12 -p-42'>

                    <Image
                        className=''
                        src={bannerTop}
                        alt="Picture of the author"



                    />
                </div>
            </div>
            <div className='lg:px-24 px-8 py-16'>
                <h1 className='text-4xl font-bold py-3 text-center'>Join our Partner Program</h1>
                <p className='text-center text-[#56575b]'>At Bitly, we’re searching for partners who embrace our core value of Customer First. We are fiercely committed to our customer’s success and partner with best in class platforms that strive to optimize engagement across every digital touchpoint.</p>
                <div className='pt-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    <div className='text-center'>
                        <div className='flex justify-center'>
                            <Image
                                className=''
                                src={img1}
                                alt="Picture of the author"

                                height={60}
                                width={60}

                            />
                        </div>
                        <h1 className='text-xl font-bold py-[2px]'>Social Publishing</h1>
                        <p className=' text-[#56575b]'>Technology platforms for content marketing and social publishing.</p>
                    </div>
                    <div className='text-center'>
                        <div className='flex justify-center'>
                            <Image
                                className=''
                                src={img2}
                                alt="Picture of the author"

                                height={60}
                                width={60}

                            />
                        </div>
                        <h1 className='text-xl font-bold py-[2px]'>Brand Advocacy</h1>
                        <p className=' text-[#56575b]'>Tools that empower employees and customers to be brand advocates.</p>
                    </div>
                    <div className='text-center'>
                        <div className='flex justify-center'>
                            <Image
                                className=''
                                src={img3}
                                alt="Picture of the author"

                                height={60}
                                width={60}

                            />
                        </div>
                        <h1 className='text-xl font-bold py-[2px]'>Tracking & Analytics</h1>
                        <p className=' text-[#56575b]'>Solutions that provide in-depth reporting across social and web.</p>
                    </div>
                </div>
            </div>
            <div className='lg:px-24 px-8 lg:flex gap-56'>
                <div>
                    <h1 className='text-4xl font-bold pt-12'>Bitly Partner Benefits</h1>
                    <p className='flex pt-8  items-center gap-2 text-[#56575b]'><span className='text-orange-600 text-3xl font-bold'> <BsCheckLg /></span> Co-marketing opportunities </p>
                    <p className='flex py-2  items-center gap-2 text-[#56575b]'><span className='text-orange-600 text-3xl font-bold'> <BsCheckLg /></span> Co-marketing opportunities </p>
                    <p className='flex   items-center gap-2 text-[#56575b]'><span className='text-orange-600 text-3xl font-bold'> <BsCheckLg /></span> Co-marketing opportunities </p>
                    <p className='flex  py-2  items-center gap-2 text-[#56575b]'><span className='text-orange-600 text-3xl font-bold'> <BsCheckLg /></span> Co-marketing opportunities </p>

                </div>
                <div>
                    <h1 className='text-4xl font-bold pt-12'>Participation Criteria</h1>
                    <p className='flex pt-8  items-center gap-2 text-[#56575b]'><span className='text-orange-600 text-3xl font-bold'> <BsCheckLg /></span> Co-marketing opportunities </p>
                    <p className='flex py-2  items-center gap-2 text-[#56575b]'><span className='text-orange-600 text-3xl font-bold'> <BsCheckLg /></span> Co-marketing opportunities </p>
                    <p className='flex   items-center gap-2 text-[#56575b]'><span className='text-orange-600 text-3xl font-bold'> <BsCheckLg /></span> Co-marketing opportunities </p>
                    <p className='flex  py-2  items-center gap-2 text-[#56575b]'><span className='text-orange-600 text-3xl font-bold'> <BsCheckLg /></span> Co-marketing opportunities </p>

                </div>
            </div>
            <div className='lg:px-24 px-8 text-center pt-36 pb-12'>
                <h1 className='text-4xl font-bold'>Grow with Bitly</h1>
                <p className='text-[#56575b] text-xl py-3'>Apply today and discover new opportunities for success.</p>
            </div>
            <div className='lg:px-24 px-8 bg-[#f5f6f7]'>
                <h1 className='text-4xl text-center font-bold py-3'>Bitly Partner Program</h1>
                <div className='lg:px-72 items-center'>
                    <div className='flex gap-8 items-center'>
                        <div>
                            <label className="label">
                                <span className="label-text font-semibold">Name*</span>

                            </label>
                            <input type="text" className="input rounded-none input-bordered w-full max-w-xs" />
                            <label className="label">

                                <span className="label-text font-semibold">FirstName</span>
                            </label>
                        </div>
                        <div className='pt-8'>
                            <input type="text" className="input rounded-none input-bordered w-full max-w-xs" />
                            <label className="label">

                                <span className="label-text font-semibold">LastName</span>
                            </label>
                        </div>
                    </div>
                    <div className='pt-3'>
                        <label className="label">

                            <span className="label-text font-semibold ">EmailAddress*</span>
                        </label>
                        <input type="text" className="input rounded-none input-bordered w-full" />

                    </div>
                    <div className='pt-3'>
                        <label className="label">

                            <span className="label-text font-semibold ">CompanyName*</span>
                        </label>
                        <input type="text" className="input rounded-none input-bordered w-full" />

                    </div>
                    <div className='pt-3'>
                        <label className="label">

                            <span className="label-text font-semibold ">JobTitle*</span>
                        </label>
                        <input type="text" className="input rounded-none input-bordered w-full" />

                    </div>
                    <div className='pt-3'>
                        <label className="label">

                            <span className="label-text font-semibold ">Are you currently integrated with Bitly?*
                            </span>
                        </label>
                        <div className='flex items-center gap-1'>
                            <input type="radio" name="radio-1" className="radio " checked />
                            <span className="label-text font-semibold mr-6">Yes </span>
                            <input type="radio" name="radio-1" className="radio" />
                            <span className="label-text font-semibold ">No</span>
                        </div>

                    </div>
                    <div className='pt-3'>
                        <label className="label">

                            <span className="label-text font-semibold ">What does your platform do?*</span>
                        </label>
                        <input type="text" className="input rounded-none input-bordered w-full" />

                    </div>
                    <div className='pt-3'>
                        <label className="label">

                            <span className="label-text font-semibold ">Nature of integration / Other notes:*</span>
                        </label>
                        <input type="text" className="input rounded-none input-bordered w-full" />

                    </div>
                    <p className='text-[12px] py-4'>By clicking the Submit button below, you agree to the Bitly <span className='text-blue-500'>Terms of Service, Privacy Policy,</span> and <br /> <span className='text-blue-500'>Acceptable Use Policy.</span></p>
                    <button className='text-white text-xl font-semibold py-2 mb-32 w-full bg-blue-500 hover:bg-blue-600 rounded-md mt-4'>Apply Now</button>
                </div>
            </div>
            <div className='bg-[#0b1736] text-white pb-20 pt-8'>
                <h1 className='text-4xl font-bold text-center pt-10 pb-6'>Get closer to your audience and customers today</h1>
                <div className='flex justify-center pt-4'>
                    <button className='text-xl rounded-md bg-blue-500 py-3 px-5 hover:bg-blue-600 '>Start for Free</button>
                </div>
            </div>
        </div>
    );
};

export default Partners;