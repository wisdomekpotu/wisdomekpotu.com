import Image from 'next/image';
import React from 'react';
import Firebase from '../public/asset/firebase.webp';
import Mobile from '../public/asset/mobile.webp';

export default function Featured_Post() {
  return (
    <section className='text-gray-600 body-font'>
      <div className='container mx-auto flex px-20 py-24 md:flex-row flex-col items-center '>
        <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left  md:mb-0 items-center text-center'>
          <h1 className='title-font sm:text-5xl text-4xl font-medium text-white'>
            Featured Articles
          </h1>
        </div>
      </div>

      <div className='container px-5 py-2 mx-auto'>
        <div className='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4'>
          <div className='p-4 md:w-1/3 sm:mb-0 mb-6'>
            <div className='rounded-lg h-64 overflow-hidden'>
              <Image
                alt='content'
                className='object-cover object-center h-full w-full'
                src={Firebase}
              />
            </div>
            <h2 className='text-xl font-medium title-font text-white mt-5'>
              Authentication in React 18 using <br />
              Firebase v9
            </h2>
            <p className='text-base leading-relaxed mt-2 text-gray-400'>
              Implement an authentication flow using Firebase, for any React app
            </p>
            <a
              href='https://blog.openreplay.com/authentication-in-react-18-using-firebase-v9'
              className='text-indigo-500 inline-flex items-center mt-3'
            >
              Learn More
              <svg
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                className='w-4 h-4 ml-2'
                viewBox='0 0 24 24'
              >
                <path d='M5 12h14M12 5l7 7-7 7'></path>
              </svg>
            </a>
          </div>
          <div className='p-4 md:w-1/3 sm:mb-0 mb-6'>
            <div className='rounded-lg h-64 overflow-hidden'>
              <Image
                alt='content'
                className='object-cover object-center h-full w-full'
                src={Mobile}
              />
            </div>
            <h2 className='text-xl font-medium title-font  text-white mt-5'>
              Building a Mobile App using HTML, CSS, and JavaScript
            </h2>
            <p className='text-base leading-relaxed mt-2 text-gray-400'>
              A back-to-basics way of developing a mobile app
            </p>
            <a
              href='https://blog.openreplay.com/building-a-mobile-app-using-html-css-and-javascript'
              className='text-indigo-500 inline-flex items-center mt-3'
            >
              Learn More
              <svg
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                className='w-4 h-4 ml-2'
                viewBox='0 0 24 24'
              >
                <path d='M5 12h14M12 5l7 7-7 7'></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
