import Layout from '@/layouts/Layout/Layout';
import Image from 'next/image';
import bannerTop from '../../assets/blog/00-hero2x-1.png'
import { Blog_data } from './fake_data_blog';

const Blog = () => {
    return (
        <Layout>
            <div className='lg:px-24 px-8'>
                <h1 className='text-6xl font-bold py-12'>Bitly Blog</h1>
                <div className=' lg:flex gap-12 items-center '>
                    <div>
                        <Image
                            className=''
                            src={bannerTop}
                            alt="Picture of the author"
                            height={700}
                            width={700}


                        />
                    </div>
                    <div>
                        <h1 className='text-[18px] text-[#56575b]'>  Featured Article</h1>
                        <h1 className='text-4xl font-bold  py-2'> 2022 Q4 Product Features: Quarterly Blog</h1>

                        <p className='text-[18px]  text-[#56575b]'> We closed out 2022 with a ton of new features. Read to find out more!</p>
                    </div>
                </div>
                <div className='pt-28 pb-20'>
                    <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center'>

                        {
                            Blog_data?.map((data, i) => (
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
                                        <p className=''>{data.short_des}</p>

                                    </div>

                                </div>
                            ))}
                    </div>
                </div>

            </div>
            <div className='lg:flex lg:px-28 px-8 gap-8 py-12 bg-[#eeeeee]'>
                <div>

                    <h1 className='text-xl font-bold '>About Bitly</h1>

                    <p className='text-xl py-2'>Bitly is a leading global SaaS company offering a comprehensive platform designed to enable every piece of information shared online to connect with key audiences and ignite action.</p>

                    <button className='text-white bg-blue-500 rounded-md hover:bg-blue-600 py-2 px-4'>Learn more about Bitly</button>

                </div>
                <div>
                    <h1 className='text-xl font-bold'>Sign up for our newsletter</h1>

                    <p className='text-xl py-2'>Get our most popular content sent straight to your inbox from the team behind the scenes.</p>
                    <p className='text-xl pb-2'>Email</p>
                    <input type="text" className="input  input-bordered w-full max-w-xs" /><button className='bg-blue-500  text-white py-2 px-4'>Sign Up</button>

                    <p className='pt-2'>By submitting my email, I consent to Bitly emailing me marketing communications. I may opt out at any time. By signing up, I agree to Bitlys <span className='text-blue-400'>Terms of Service, Privacy Policy,</span>  and <span className='text-blue-400'>Acceptable Use Policy.</span></p></div>
            </div>
        </Layout>
    );
};

export default Blog;