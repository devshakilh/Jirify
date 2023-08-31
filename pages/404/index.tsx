import React from 'react';
import ErrorImage from '../../assets/404-error-page-templates.jpg'
import Image from 'next/image';
import Link from 'next/link';


const ErrorPage = () => {
    return (
        <div className='items-center'>


            {/* <h1 className='text-3xl font-semibold justify-center items-center'>This page not found</h1> */}
            <Image src={ErrorImage} alt='Not found page' />
            <div className='w4  -mt-[202px]   ml-[510px]'>
                <Link className='text-blue-900  relative items-center' href='/' > Home lkadf lakfa ljflkae</Link>
            </div>
        </div>
    );
};

export default ErrorPage;