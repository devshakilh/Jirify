import { marqueData } from '@/Fake_data/CommonCompo/MarqueeSliderData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Marquee from 'react-fast-marquee';


const MarqueeSliderComp = () => {
    return (
        <div>
            <div className='mt-12'>
                <Marquee >
                    { 
                        marqueData?.map((item: any) => <div key={item._id}>
                            <figure><div className='px-10'>
                                <Link href={`/partnership/${item.slug}`}>
                                    <Image
                                        className='cursor-pointer'
                                        src={item.img}
                                        alt="Picture of the author"
                                        width={130}
                                        height={130}
                                    />
                                </Link>
                            </div>
                            </figure>
                        </div>)
                    }

                </Marquee>
                <Marquee direction='right'>
                    { 
                        marqueData?.map((item: any) => <div key={item._id}>
                            <figure><div className='px-10'>
                                <Link href={`/partnership/${item.slug}`}>
                                    <Image
                                        className='cursor-pointer'
                                        src={item.img}
                                        alt="Picture of the author"
                                        width={130}
                                        height={130}
                                    />
                                </Link>
                            </div>
                            </figure>
                        </div>)
                    }

                </Marquee>
            </div>
        </div>
    );
};

export default MarqueeSliderComp;