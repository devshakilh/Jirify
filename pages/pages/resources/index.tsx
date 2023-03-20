import Layout from '@/layouts/Layout/Layout';
import Image from 'next/image';
import Link from 'next/link';
import bannerTop from '../../../assets/resource/bannerTop.png'
import { Fake_data_resources } from './fake_data_resources';
const Resource = () => {
    return (
        <Layout>
            <div className='lg:px-28 pt-28 px-8'>
                <div className=' lg:flex gap-12 items-center pb-28 '>
                    <div>
                        <Image
                            className=''
                            src={bannerTop}
                            alt="Picture of the author"
                            height={1400}
                            width={1400}


                        />
                    </div>
                    <div>

                        <h1 className='text-xl text-[#56575b]'>  Featured Video</h1>
                        <h1 className='text-4xl font-bold  py-2'> Bitly Works Anywhere You Do</h1>

                        <p className='pb-4'> Watch this webinar for a step-by-step instruction on the different ways you can save time and be more productive by shortening, branding, sharing and tracking your links from the various places and ways you work. </p>

                        <button className='text-blue-500 px-8 py-4 bg-[#edf2fe] rounded-md'>Watch No</button></div>
                </div>
                <div className='lg:flex gap-4 pt-16 border-t-[1px] border-gray-200'>
                    <div className='w-3/12'>
                        <h1 className='text-[20px] text-[#707a80] border-b-[1px] border-gray-200'>Filter Resources</h1>
                        <div className='pt-3'>
                            <Link href='/' className='text-[20px] mt-  text-[#252628] rounded-2xl py-2 px-4 hover:text-blue-500 hover:border-[1px]  border-blue-500 bg-[#f5f6f7]'>All Types</Link>
                            <br />
                            <button className='text-[20px] mt-4 text-[#252628] rounded-2xl py-2 px-4 hover:text-blue-500 hover:border-[1px]  border-blue-500 bg-[#f5f6f7]'>Case Types</button>
                            <br />
                            <button className='text-[20px] mt-4 text-[#252628] rounded-2xl py-2 px-4 hover:text-blue-500 hover:border-[1px]  border-blue-500 bg-[#f5f6f7]'>Case Studies</button>
                            <br />
                            <button className='text-[20px] mt-4 text-[#252628] rounded-2xl py-2 px-4 hover:text-blue-500 hover:border-[1px]  border-blue-500 bg-[#f5f6f7]'>Ebooks</button>
                            <br />
                            <button className='text-[20px] mt-4 text-[#252628] rounded-2xl py-2 px-4 hover:text-blue-500 hover:border-[1px]  border-blue-500 bg-[#f5f6f7]'>Webinars</button>
                            <br />
                            <button className='text-[20px] mt-4 text-[#252628] rounded-2xl py-2 px-4 hover:text-blue-500 hover:border-[1px]  border-blue-500 bg-[#f5f6f7]'>Infographic</button>
                        </div>
                    </div>
                    <div className='w-9/12'>
                        <div className=' pb-20'>
                            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  justify-center'>

                                {
                                    Fake_data_resources?.map((data, i) => (
                                        <div key={i} className='border-[1px] border-gray-200 shadow-md pb-6'>
                                            <Image

                                                src={data.img}
                                                alt="Picture of the author"
                                                width={300}
                                                height={300}
                                            />
                                            <div className='px-4'>
                                                <p className='py-2 text-[#707a80] text-[18px]'>{data.name}</p>
                                                <h1 className='text-2xl font-bold py-2'>{data.title}</h1>


                                            </div>

                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#0b1736] text-white pb-20 pt-8'>
                <h1 className='text-4xl font-bold text-center pt-10 pb-6'>Get closer to your audience and customers today</h1>
                <div className='flex justify-center pt-4'>
                    <button className='text-xl rounded-md bg-blue-500 py-3 px-5 hover:bg-blue-600 '>Start for Free</button>
                </div>
            </div>
        </Layout>
    );
};

export default Resource;