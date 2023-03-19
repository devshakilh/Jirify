import Layout from '@/layouts/Layout/Layout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { dynamicData } from '../../Fake_data/hc/HcFakeData';

const HcRoute = () => {
    const router = useRouter();
    const slug = router.query.HcRoute;

    const filteredData = dynamicData.filter(item => item.slug === slug)
    console.log(filteredData);


    return (
        <Layout addContainer>
            <div className="mt-5 flex flex-col items-start md:flex-row md:justify-between md:items-center mx-5 md:mx-0 gap-3">
                <div className="text-sm breadcrumbs">
                    <ul>
                        <li>Jirily Support</li>
                        <li>{filteredData?.map(jj => <div key={jj.id}>{jj.title}</div>)}</li>
                    </ul>
                </div>
                <div className="">
                    <form className='relative'>
                        <input className='input input-bordered rounded-[30px] pl-[40px] pr-[20px] h-[40px]' type="search" placeholder='Search' autoComplete='off' />
                        <IoSearchOutline className='absolute top-[12px] text-[20px] left-3 text-[#85888d]' />
                    </form>
                </div>
            </div>

            <section className='my-20 flex mx-5 md:mx-0'>
                <div className="lg:w-1/5"></div>
                {
                    filteredData.map(item =>
                        <div key={item.id} className="lg:w-4/5">
                            <h2 className="text-[32px] font-bold leading-10">{item.title}</h2>
                            <p className="italic text-[#36383b] mt-2">{item.detail}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 py-5">
                                {
                                    item.points && item.points.map(subItem =>
                                        <div key={subItem.id} className="my-5 mr-10">
                                            <h4 className="text-[18px] font-semibold my-5">{subItem.subTitle}</h4>
                                            {
                                                subItem.subPoints && subItem.subPoints.map(insideItem =>
                                                    <div key={insideItem.id} className="my-4">
                                                        <div className="border-b border-[#c2c4c7] py-2">
                                                            <Link href={insideItem.subLink} className="hover:border-b hover:border-blue-400">{insideItem.subTitle}</Link>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    )
                }
            </section>
        </Layout>
    );
};

export default HcRoute;