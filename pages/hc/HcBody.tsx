import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import styles from './HcBody.module.css'
import { articlesData, HcCards } from '../../Fake_data/hc/HcFakeData';

const HcBody = () => {
    const router = useRouter();

    
    return (
        <div>
            <section className={`${styles.hero} ${styles.newStyle}`}>
                <div className={`${styles.hero_inner}`}>
                    <form>
                        <input className='input input-none rounded-[30px] pl-[40px] pr-[20px] h-[40px] w-full relative' type="search" placeholder='Search' autoComplete='off' />
                        <IoSearchOutline className='absolute top-[11px] text-[20px] left-3 text-[#85888d]' />
                    </form>
                </div>
            </section>
            <section>
                <div className="bg-[#f5f6f7] mt-16">
                    <div className="">
                        <p className="text-[#2A5BD7] py-4 text-center border cursor-pointer ">
                            <Link href="/" className='hover:border-b hover:border-blue-400'>How to check a links destination</Link>
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {
                        HcCards.map(card =>
                            <div onClick={() => router.push(`hc/${card.slug}`)} key={card.id} className="text-[#2a5bd7] border border-[#2a5bd7] py-8 px-10 text-center cursor-pointer hover:bg-[#2a5bd7] hover:text-[#fff] transition-all ease-in">
                                <h4 className="text-[18px] font-bold">{card.title}</h4>
                                <p className="mt-3">{card.detail}</p>
                            </div>
                        )
                    }
                </div>
            </section>
            <section className='py-20'>
                <h3 className="text-[18px] font-semibold">Promoted articles</h3>
                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {
                        articlesData.map(item =>
                            <div key={item.id} className=''>
                                <div className="">
                                    <p className="w-fit cursor-pointer hover:border-b hover:border-blue-400">{item.name}</p>
                                </div>
                            </div>)
                    }
                </div>
                <div className="bg-[#f5f6f7] mt-16 mx-32 text-[15px]">
                    <p className=" py-4 text-center border cursor-pointer">Get more from your links.
                        <Link href="/" className='text-[#2A5BD7] hover:border-b hover:border-blue-400'> Check out our plans and features.</Link>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default HcBody;