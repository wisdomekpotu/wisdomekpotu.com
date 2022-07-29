import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Firebase from '../../public/asset/firebase.webp';
import Mobile from '../../public/asset/mobile.webp';
import MDX from '../../public/asset/MDX.webp';

export default function Card({
  title,
  description,
  slug,
  image,
  category,
  dateTime,
  readingTime,
}) {
  return (
    <div>
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap -m-4'>
            <div className='p-4 md:w-1/3'>
              <a
                href='https://blog.openreplay.com/authentication-in-react-18-using-firebase-v9'
                className='block overflow-hidden rounded-2xl'
              >
                <Image
                  className='object-cover w-full h-56'
                  src={Firebase}
                  alt=''
                />

                <div className='p-4 bg-gray-900'>
                  <p className='text-xs text-gray-500'>blog.openreplay.com</p>

                  <h5 className='text-sm text-white'>
                    Authentication in React 18 using Firebase v9
                  </h5>

                  <p className='mt-1 text-xs text-gray-500'>
                    Implement an authentication flow using Firebase, for any
                    React app
                  </p>
                </div>
              </a>
            </div>
            <div className='p-4 md:w-1/3'>
              <a
                href='https://blog.openreplay.com/building-a-mobile-app-using-html-css-and-javascript'
                className='block overflow-hidden rounded-2xl'
              >
                <Image
                  className='object-cover w-full h-56'
                  src={Mobile}
                  alt=''
                />

                <div className='p-4 bg-gray-900'>
                  <p className='text-xs text-gray-500'>blog.openreplay.com</p>

                  <h5 className='text-sm text-white'>
                    Building a Mobile App using HTML, CSS, and JavaScript
                  </h5>

                  <p className='mt-1 text-xs text-gray-500'>
                    A back-to-basics way of developing a mobile app
                  </p>
                </div>
              </a>
            </div>
            <div className='p-4 md:w-1/3'>
              <a
                href='https://blog.openreplay.com/build-a-mdx-powered-blog-with-contentlayer-and-next'
                className='block overflow-hidden rounded-2xl'
              >
                <Image className='object-cover w-full h-56' src={MDX} alt='' />

                <div className='p-4 bg-gray-900'>
                  <p className='text-xs text-gray-500'>blog.openreplay.com</p>

                  <h5 className='text-sm text-white'>
                    Build a MDX-powered blog with Contentlayer and Next
                  </h5>

                  <p className='mt-1 text-xs text-gray-500'>
                    A simple way of creating a static Markdown-based blog site
                  </p>
                </div>
              </a>
            </div>
            {/* <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                <Image
                  className='lg:h-48 md:h-36 w-full object-cover object-center'
                  src={image}
                  width={720}
                  height={400}
                  alt='blog'
                />
                <div className='p-6'>
                  <h2 className='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>
                    {category}
                  </h2>
                  <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
                    {title}
                  </h1>
                  <p className='leading-relaxed mb-3'>{description}</p>
                  <div className='flex items-center flex-wrap '>
                    <Link
                      href={`/blog/${slug}`}
                      className='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0'
                    >
                      Read more
                    </Link>
                    <svg
                      className='w-4 h-4 ml-2'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth='2'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <path d='M5 12h14'></path>
                      <path d='M12 5l7 7-7 7'></path>
                    </svg>

                    <span className='text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200'>
                      {readingTime}
                    </span>
                    <span className='text-gray-400 inline-flex items-center leading-none text-sm'>
                      <svg
                        className='w-4 h-4 mr-1'
                        stroke='currentColor'
                        strokeWidth='2'
                        fill='none'
                        strokeLinecap='round'
                        strokeinejoin='round'
                        viewBox='0 0 24 24'
                      >
                        <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                      </svg>
                      {dateTime}
                    </span>
                  </div>
                </div>
              </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
