import React, { useState } from 'react';
import { allFeature, detailsData, linkInBio, qrCodesDb } from './detailedFakeDb';
import { BsCheck2 } from 'react-icons/bs';
import Image from 'next/image';
// import ToggleButton from 'react-toggle-button';

const DetailedFeature = () => {
    const [toggle, setToggle] = useState(false);
    console.log(toggle);

    return (
        <div className='section'>
            <div className="main-container">
                <h2 className='text-[#1d1f21] text-xl font-extrabold leading-[22px] text-center mb-2 pb-[30px]'>Detailed Feature Comparison</h2>
                <div className='md:flex justify-between px-8'>
                    <div>
                    <h5>Save up to 34% when you pay annually</h5>
                        <div className='flex items-center pt-3'>
                            <p>Pay annually</p>
                            <input onClick={() => setToggle(!toggle)} type="checkbox" className="toggle toggle-primary mx-4" />
                            <p>Pay monthly</p>
                    </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-5 w-full mt-2 md:mt-0 md:w-8/12 gap-2'>
                    {
                        detailsData?.map(s => {
                            return (
                                <div className='odd:bg-slate-50 md:block flex justify-between p-2 md:p-0' key={s?.id}>
                                    <h2 className='text-[#464c50] uppercase text-center font-medium'>{s?.title}</h2>
                                    <div>
                                    {
                                        s?.amount === "null" ? <h2 className='text-[#56575b] text-[30px] pb-[10px] font-normal text-center'>Custom</h2> : 
                                        <h3 className='text-[#56575b] text-[30px] pb-[10px] font-normal text-center'>${s?.amount}<span className='text-base'>/mo</span></h3>
                                    }
                                    <button className='w-[90%] px-4 bg-[#2a5bd7] rounded-md text-[#fff] py-[0.6rem] mx-2'>Get Started</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
                <div className=''>
                <div className=''>
                    <h2 className='pl-8 text-[#252628] text-xl font-bold py-2'>Link Management</h2>
                    <div className='mx-10 h-[1px] bg-[#b3bbc140]'></div>
                    <div className=''>
                    {
                        allFeature?.map(s => {
                            return (
                                <div className='' key={s?.id}>
                                    <div tabIndex={0} className='md:flex justify-between px-8'>
                                    <h2 className=''>{s?.title}</h2>
                                    <div className='grid grid-cols-1 md:grid-cols-5 gap-2 w-full md:w-8/12'>
                                    {
                                        s?.prices.map(p => {
                                            return (
                                                <div className='odd:bg-slate-50 py-2 md:block flex justify-between' key={p?.id}>
                                                    <h2 className='md:hidden'>{p?.title}</h2>
                                                    {
                                                        p?.price === "ok" ? 
                                                            <BsCheck2 className='md:mx-auto' /> : 
                                                            <p className='text-center'>{p?.price}</p>
                                                    }
                                                </div>
                                            )
                                        })
                                    }
                                    </div>
                                    </div>
                                    <div className='mx-10 h-[1px] bg-[#b3bbc140]'></div>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
                <div className='none md:block'>
                    <h2 className='pl-8 text-[#252628] text-xl font-bold py-2'>QR Codes</h2>
                    <div className='mx-10 h-[1px] bg-[#b3bbc140]'></div>
                    <div className=''>
                    {
                        qrCodesDb?.map(s => {
                            return (
                                <div className='' key={s?.id}>
                                    <div tabIndex={0} className='md:flex justify-between px-8'>
                                    <h2 className=''>{s?.title}</h2>
                                    <div className='grid grid-cols-1 md:grid-cols-5 gap-2 w-full md:w-8/12'>
                                    {
                                        s?.prices.map(p => {
                                            return (
                                                <div className='odd:bg-slate-50 py-2 md:block flex justify-between' key={p?.id}>
                                                    <h2 className='md:hidden'>{p?.title}</h2>
                                                    {
                                                        p?.price === "ok" ? 
                                                            <BsCheck2 className='md:mx-auto' /> : 
                                                            <p className='text-center'>{p?.price}</p>
                                                    }
                                                </div>
                                            )
                                        })
                                    }
                                    </div>
                                    </div>
                                    <div className='mx-10 h-[1px] bg-[#b3bbc140]'></div>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
                <div className='none md:block'>
                    <h2 className='pl-8 text-[#252628] text-xl font-bold py-2'>Link-in-bio <span>NEW</span></h2>
                    <div className='mx-10 h-[1px] bg-[#b3bbc140]'></div>
                    <div className=''>
                    {
                        linkInBio?.map(s => {
                            return (
                                <div className='' key={s?.id}>
                                    <div tabIndex={0} className='md:flex justify-between px-8'>
                                    <h2 className=''>{s?.title}</h2>
                                    <div className='grid grid-cols-1 md:grid-cols-5 gap-2 w-full md:w-8/12'>
                                    {
                                        s?.prices.map(p => {
                                            return (
                                                <div className='odd:bg-slate-50 py-2 md:block flex justify-between' key={p?.id}>
                                                    <h2 className='md:hidden'>{p?.title}</h2>
                                                    {
                                                        p?.price === "ok" ? 
                                                            <BsCheck2 className='md:mx-auto' /> : 
                                                            <p className='text-center'>{p?.price}</p>
                                                    }
                                                </div>
                                            )
                                        })
                                    }
                                    </div>
                                    </div>
                                    <div className='mx-10 h-[1px] bg-[#b3bbc140]'></div>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default DetailedFeature;