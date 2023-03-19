import Image from 'next/image';
import bannerTop from '../../../../assets/link-in-bio/lib_mobile.png'
import image1 from '../../../../assets/link-in-bio/link-in-bio-drive-traffic.png'
import image2 from '../../../../assets/link-in-bio/bitly-branding-LIB.png'
import image3 from '../../../../assets/link-in-bio/Bitly_Manage-Links_LIB.png'
import image4 from '../../../../assets/link-in-bio/custom-domain-4-1.svg'
import image5 from '../../../../assets/link-in-bio/chart-inspect-2.svg'
import image6 from '../../../../assets/link-in-bio/redirect-link-1.svg'
import image10 from '../../../../assets/qr-code/novasol.svg'
import image11 from '../../../../assets/qr-code/new-york-times.svg'
import image12 from '../../../../assets/qr-code/marriott.svg'
import image13 from '../../../../assets/qr-code/electronic-arts.svg'
import image14 from '../../../../assets/qr-code/big-fish.svg'
import { AiOutlineCheck } from "react-icons/ai";
const LinkInBio = () => {
    return (
        <div >
            <div className='lg:px-24 px-8'>
                <div className='py-20 lg:flex items-center'>
                    <div className='lg:w-2/4'>
                        <p className='font-bold py-4 text-x'>Link-in-bios</p>
                        <h1 className='text-6xl font-bold'>Make your social media profiles work harder </h1>
                        <p className='text-2xl text-[#56575b] py-4'>Curate, organize, and track all your best links, so audiences can discover and engage with more of your content.
                            Start for Free</p>
                        <div className='pt-6'>
                            <button className='text-xl text-white px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-md'>Start fot Free</button>
                        </div>
                    </div>
                    <div className='lg:w-2/4'>

                        <Image
                            className=''
                            src={bannerTop}
                            alt="Picture of the author"

                        />
                    </div>
                </div>
                <div className=''>
                    <p className='font-semibold text-xl py-4'>Drive Traffic</p>
                    <h1 className='text-5xl text-[#252628] font-bold '>Drive more views, sales, subscribers and leads</h1>
                    <p className='text-xl py-2 text-[#56575b]'>Make it easy for your audience to discover your best, most relevant content and take action that leads to bigger results and deeper engagement.
                    </p>
                    <div className='lg:flex gap-8 pt-10'>
                        <div>
                            <Image

                                src={image1}
                                alt="Picture of the author"

                            />
                        </div>
                        <div>
                            <div className='flex gap-4 items-start'>
                                <span className='border-[1px] mt-4 rounded-full border-[#2a5bd7] text-[#2a5bd7]'> <AiOutlineCheck /></span>
                                <p className='text-xl py-2 text-[#56575b]'>Create and share clickable URLs from any social media profile</p>
                            </div>
                            <div className='flex gap-4 items-start '>
                                <span className='border-[1px] mt-4 rounded-full border-[#2a5bd7] text-[#2a5bd7]'> <AiOutlineCheck /></span>
                                <p className='text-xl py-2 text-[#56575b]'>Extend your reach and use your personalized Bitly Link-in-bio and landing page everywhere you want to share your most important links</p>
                            </div>
                            <div className='flex gap-4 items-start'>
                                <span className='border-[1px] mt-4 rounded-full border-[#2a5bd7] text-[#2a5bd7]'> <AiOutlineCheck /></span>
                                <p className='text-xl pt-2 pb-6 text-[#56575b]'>Create a QR Code for your Bitly Link-in-bio and let followers scan to experience your customized landing page</p>
                            </div>

                            <button className='rounded-sm text-xl py-2 px-4 hover:bg-zinc-300 bg-[#edf2fe] text-[#2a5bd7]'>Start for Free</button>
                        </div>
                    </div>
                </div>
                <div className='pt-28'>
                    <p className='font-semibold text-xl py-4'>Branding</p>
                    <h1 className='text-5xl text-[#252628] font-bold '>Build personalized experiences without coding</h1>
                    <p className='text-xl py-2 text-[#56575b]'>Our user-friendly interface makes it easy to quickly design your landing page to match your brand’s signature elements, no technical skills required.
                    </p>
                    <div className='lg:flex gap-8 pt-10'>

                        <div>
                            <div className='flex gap-4 items-start'>
                                <span className='border-[1px] mt-4 rounded-full border-[#2a5bd7] text-[#2a5bd7]'> <AiOutlineCheck /></span>
                                <p className='text-xl py-2 text-[#56575b]'>Upload an image or logo, choose preset font types and colors, or choose custom colors for your background</p>
                            </div>
                            <div className='flex gap-4 items-start '>
                                <span className='border-[1px] mt-4 rounded-full border-[#2a5bd7] text-[#2a5bd7]'> <AiOutlineCheck /></span>
                                <p className='text-xl py-2 text-[#56575b]'>Choose preset shapes and shadows for your link buttons</p>
                            </div>
                            <div className='flex gap-4 items-start'>
                                <span className='border-[1px] mt-4 rounded-full border-[#2a5bd7] text-[#2a5bd7]'> <AiOutlineCheck /></span>
                                <p className='text-xl pt-2 pb-6 text-[#56575b]'>Add and edit social profile icons without sacrificing link space</p>
                            </div>
                            <div className='flex gap-4 items-start'>
                                <span className='border-[1px] mt-4 rounded-full border-[#2a5bd7] text-[#2a5bd7]'> <AiOutlineCheck /></span>
                                <p className='text-xl pt-2 pb-6 text-[#56575b]'>Edit and manage your links on your phone with the Bitly mobile app</p>
                            </div>

                            <button className='rounded-sm text-xl py-2 px-4 hover:bg-zinc-300 bg-[#edf2fe] text-[#2a5bd7]'>Start for Free</button>
                        </div>
                        <div>
                            <Image

                                src={image2}
                                alt="Picture of the author"

                            />
                        </div>
                    </div>
                </div>
                <div className='pt-28'>
                    <p className='font-semibold text-xl py-4'>Manage Links & Pages</p>
                    <h1 className='text-5xl text-[#252628] font-bold '>Everything in one place</h1>
                    <p className='text-xl py-2 text-[#56575b]'>Aggregate, manage, and track all of your Bitly Link-in-bio links from a single, centralized location.
                    </p>
                    <div className='lg:flex gap-8 pt-10'>
                        <div>
                            <Image

                                src={image3}
                                alt="Picture of the author"

                            />
                        </div>
                        <div>
                            <div className='flex gap-4 items-start'>
                                <span className='border-[1px] mt-4 rounded-full border-[#2a5bd7] text-[#2a5bd7]'> <AiOutlineCheck /></span>
                                <p className='text-xl py-2 text-[#56575b]'>Search, find, and add your existing Bitly links to your landing page without having to copy and paste</p>
                            </div>
                            <div className='flex gap-4 items-start '>
                                <span className='border-[1px] mt-4 rounded-full border-[#2a5bd7] text-[#2a5bd7]'> <AiOutlineCheck /></span>
                                <p className='text-xl py-2 text-[#56575b]'>Track total views and clicks, as well as devices, referrals and geos driving the most traffic</p>
                            </div>
                            <div className='flex gap-4 items-start'>
                                <span className='border-[1px] mt-4 rounded-full border-[#2a5bd7] text-[#2a5bd7]'> <AiOutlineCheck /></span>
                                <p className='text-xl pt-2 pb-6 text-[#56575b]'>Easily update and change links if content expires or is incorrect</p>
                            </div>
                            <div className='flex gap-4 items-start'>
                                <span className='border-[1px] mt-4 rounded-full border-[#2a5bd7] text-[#2a5bd7]'> <AiOutlineCheck /></span>
                                <p className='text-xl pt-2 pb-6 text-[#56575b]'>Schedule links to appear and stop on specific dates and times for advanced event and promotion planning</p>
                            </div>

                            <button className='rounded-sm text-xl py-2 px-4 hover:bg-zinc-300 bg-[#edf2fe] text-[#2a5bd7]'>Start for Free</button>
                        </div>

                    </div>
                </div>

                <div className='pt-28 lg:hidden'>
                    <p className='font-semibold text-xl text-center py-4'>Advanced Link-in-bio</p>
                    <h1 className='text-4xl text-[#252628] font-bold text-center'>Make your Bitly Link-in-bio even more powerful</h1>
                    <p className='text-xl py-4 text-[#56575b] text-center'>Access advanced Bitly Link Management features and the ability to analyze all of your links from a single dashboard.
                    </p>
                    <div className='lg:flex justify-center gap-8 pt-10'>
                        <div className=''>
                            <div className='flex justify-center'>
                                <Image

                                    src={image4}
                                    alt="Picture of the author"

                                />
                            </div>
                            <div>
                                <p className='text-xl py-2 text-[#56575b]'>Create a custom domain for your Bitly Link-in-bio with your own name or brand</p>
                            </div>
                        </div>
                        <div className='py-4'>
                            <div className='flex justify-center'>
                                <Image

                                    src={image5}
                                    alt="Picture of the author"

                                />
                            </div>
                            <div>
                                <p className='text-xl py-2 text-[#56575b]'>Analyze the performance of your existing Bitly links across all channels, beyond your Bitly Link-in-bio landing page</p>
                            </div>

                        </div>
                        <div>
                            <div className='flex justify-center'>
                                <Image

                                    src={image6}
                                    alt="Picture of the author"

                                />
                            </div>
                            <div>
                                <p className='text-xl py-2 text-[#56575b]'>Redirect links to different content if something changes or becomes outdated</p>
                            </div>

                        </div>


                    </div>
                    <div className='flex justify-center py-8'>
                        <button className=' rounded-sm text-xl py-4  px-8 hover:bg-blue-600 bg-blue-500 text-white'>Get Started</button>
                    </div>
                </div>
                <div className='pt-28 '>
                    <p className='font-semibold text-xl text-center py-4'>Advanced Link-in-bio</p>
                    <h1 className='text-5xl text-[#252628] font-bold text-center'>Make your Bitly Link-in-bio even more powerful</h1>
                    <p className='text-xl py-4 text-[#56575b] text-center'>Access advanced Bitly Link Management features and the ability to analyze all of your links from a single dashboard.
                    </p>
                    <div className='lg:flex justify-center gap-8 pt-10'>
                        <div className=''>

                            <Image

                                src={image4}
                                alt="Picture of the author"

                            />

                            <div>
                                <p className='text-xl py-2 text-[#56575b]'>Create a custom domain for your Bitly Link-in-bio with your own name or brand</p>
                            </div>
                        </div>
                        <div className='py-4'>

                            <Image

                                src={image5}
                                alt="Picture of the author"

                            />

                            <div>
                                <p className='text-xl py-2 text-[#56575b]'>Analyze the performance of your existing Bitly links across all channels, beyond your Bitly Link-in-bio landing page</p>
                            </div>

                        </div>
                        <div>

                            <Image

                                src={image6}
                                alt="Picture of the author"

                            />

                            <div>
                                <p className='text-xl py-2 text-[#56575b]'>Redirect links to different content if something changes or becomes outdated</p>
                            </div>

                        </div>


                    </div>
                    <div className='flex justify-center py-8'>
                        <button className=' rounded-sm text-xl py-4  px-8 hover:bg-blue-600 bg-blue-500 text-white'>Get Started</button>
                    </div>
                </div>









                <div className=''>
                    <h1 className='text-3xl font-bold text-center py-10'>Loved by big and small brands everywhere</h1>
                    <div className='grid sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-center py-4'>
                        <Image

                            src={image10}
                            alt="Picture of the author"
                            width={200}
                            height={200}
                        />
                        <Image

                            src={image11}
                            alt="Picture of the author"
                            width={200}
                            height={200}
                        />
                        <Image

                            src={image12}
                            alt="Picture of the author"
                            width={200}
                            height={200}
                        />
                        <Image

                            src={image13}
                            alt="Picture of the author"
                            width={200}
                            height={200}
                        />
                        <Image

                            src={image14}
                            alt="Picture of the author"

                        />
                    </div>
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

export default LinkInBio;