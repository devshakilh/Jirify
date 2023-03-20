import Image from 'next/image';
import bannerTop from '../../../../assets/qr-code/qr-codes_mobile.png'
import image2 from '../../../../assets/qr-code/maintain-consistency.svg'
import image1 from '../../../../assets/qr-code/increase-conversions.svg'
import image3 from '../../../../assets/qr-code/chart-inspect-1.svg'
import image4 from '../../../../assets/qr-code/bitly_logo.svg'
import image6 from '../../../../assets/qr-code/customize-color-qr.svg'
import image5 from '../../../../assets/qr-code/generate-qr-code.svg'
import image7 from '../../../../assets/qr-code/printed-material.svg'
import image8 from '../../../../assets/qr-code/analize-campaigns-1.svg'
import image9 from '../../../../assets/qr-code/QR-Code-Generator-Transparent.svg'
import image10 from '../../../../assets/qr-code/novasol.svg'
import image11 from '../../../../assets/qr-code/new-york-times.svg'
import image12 from '../../../../assets/qr-code/marriott.svg'
import image13 from '../../../../assets/qr-code/electronic-arts.svg'
import image14 from '../../../../assets/qr-code/big-fish.svg'

const QrCodes = () => {
    return (
        <div>
            <div className='py-20 lg:pl-24 px-8 lg:flex'>
                <div className='lg:w-2/4'>
                    <p className='font-bold py-4 text-x'>QR Codes</p>
                    <h1 className='text-6xl font-bold'>Engage customers, one scan at a time </h1>
                    <p className='text-2xl text-[#56575b] py-4'>No matter how simple or advanced your QR Code needs, Bitly and our newest family member, QR Code Generator, have you covered.</p>
                    <div className='pt-6'>
                        <button className='text-xl text-white px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-md'>Explore QR Code Solutions</button>
                    </div>
                </div>
                <div className='lg:w-2/4 '>
                    <Image className='' src={bannerTop} alt='' />
                </div>
            </div>
            <div className='px-8 lg:px-24'>
                <h1 className='px-4 text-4xl font-bold py-6'>Power your marketing and business strategy with QR Codes</h1>
                <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-6'>
                    <div>
                        <Image

                            src={image1}
                            alt="Picture of the author"
                            width={60}
                            height={60}
                        />
                        <h2 className='text-xl font-bold py-2'>Track & optimize campaigns</h2>
                        <p>Get scan metrics and insights to help you understand your audience and make informed decisions about which channels perform best.</p>
                    </div>
                    <div>
                        <Image

                            src={image2}
                            alt="Picture of the author"
                            width={60}
                            height={60}
                        />
                        <h2 className='text-xl font-bold py-2'>Track & optimize campaigns</h2>
                        <p>Get scan metrics and insights to help you understand your audience and make informed decisions about which channels perform best.</p>
                    </div>
                    <div>
                        <Image

                            src={image3}
                            alt="Picture of the author"
                            width={60}
                            height={60}
                        />
                        <h2 className='text-xl font-bold py-2'>Track & optimize campaigns</h2>
                        <p>Get scan metrics and insights to help you understand your audience and make informed decisions about which channels perform best.</p>
                    </div>
                </div>
            </div>
            <div className='px-8 lg:px-24'>
                <h1 className='font-bold text-4xl py-36 text-center'>QR Code solutions to fit any need</h1>

                <div className='lg:flex gap-4'>
                    <div className='card shadow-2xl py-6 px-8'>
                        <div className='flex justify-center'>
                            <Image

                                src={image4}
                                alt="Picture of the author"
                                width={100}
                                height={100}
                            />
                        </div>
                        <p className='px-8 py-6'>Create, customize, manage and track QR Codes and links without leaving the Bitly Connections Platform.</p>
                        <button className='text-xl font-bold w-full text-white py-2 hover:bg-blue-600 bg-blue-500'>Get Started</button>
                        <p className='text-xl font-semibold pt-4'>Popular Features:</p>
                        <div className='flex gap-4 pt-6 items-center'>
                            <Image

                                src={image5}
                                alt="Picture of the author"
                                width={50}
                                height={50}
                            />
                            <p>Generate a QR Code for any Bitly link that scans directly to a web page</p>
                        </div>
                        <div className='flex gap-4 pt-6 items-center'>
                            <Image

                                src={image6}
                                alt="Picture of the author"
                                width={50}
                                height={50}
                            />
                            <p>Generate a QR Code for any Bitly link that scans directly to a web page</p>
                        </div>
                        <div className='flex gap-4 pt-6 items-center'>
                            <Image

                                src={image7}
                                alt="Picture of the author"
                                width={50}
                                height={50}
                            />
                            <p>Generate a QR Code for any Bitly link that scans directly to a web page</p>
                        </div>
                        <div className='flex gap-4 pt-6 items-center'>
                            <Image

                                src={image8}
                                alt="Picture of the author"
                                width={50}
                                height={50}
                            />
                            <p>Generate a QR Code for any Bitly link that scans directly to a web page</p>
                        </div>
                    </div>
                    <div className='card shadow-2xl px-8 py-6'>
                        <div className='flex justify-center'>
                            <Image

                                src={image9}
                                alt="Picture of the author"
                                width={300}
                                height={300}
                            />
                        </div>
                        <p className='px-8 py-6'>Create, customize, manage and track QR Codes and links without leaving the Bitly Connections Platform.</p>
                        <button className='text-xl font-bold w-full text-white py-2 hover:bg-blue-600 bg-blue-500'>Get Started</button>
                        <p className='text-xl font-semibold pt-4'>Popular Features:</p>
                        <div className='flex gap-4 pt-6 items-center'>
                            <Image

                                src={image5}
                                alt="Picture of the author"
                                width={50}
                                height={50}
                            />
                            <p>Generate a QR Code for any Bitly link that scans directly to a web page</p>
                        </div>
                        <div className='flex gap-4 pt-6 items-center'>
                            <Image

                                src={image6}
                                alt="Picture of the author"
                                width={50}
                                height={50}
                            />
                            <p>Generate a QR Code for any Bitly link that scans directly to a web page</p>
                        </div>
                        <div className='flex gap-4 pt-6 items-center'>
                            <Image

                                src={image7}
                                alt="Picture of the author"
                                width={50}
                                height={50}
                            />
                            <p>Generate a QR Code for any Bitly link that scans directly to a web page</p>
                        </div>
                        <div className='flex gap-4 pt-6 items-center'>
                            <Image

                                src={image8}
                                alt="Picture of the author"
                                width={50}
                                height={50}
                            />
                            <p>Generate a QR Code for any Bitly link that scans directly to a web page</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='py-28 lg:px-24 px:-8'>
                <h1 className='text-4xl font-bold text-center'>What Bitly customers are saying</h1>
                <h1 className='py-12 text-6xl text-center font-bold'>sLider</h1>
            </div>
            <div className='lg:px-24 px-8'>
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
            <div className='bg-[#0b1736] text-white pb-20 pt-8'>
                <h1 className='text-4xl font-bold text-center pt-10 pb-6'>Get closer to your audience and customers today</h1>
                <div className='flex justify-center'>
                    <button className='text-xl rounded-sm bg-blue-500 py-3 px-5 hover:bg-blue-600 '>Start for Free</button>
                </div>
            </div>
        </div>
    );
};

export default QrCodes;