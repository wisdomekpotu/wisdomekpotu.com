import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Firebase from '../../public/asset/firebase.webp';
import Mobile from '../../public/asset/mobile.webp';
import MDX from '../../public/asset/MDX.webp';
import Joyride from '../../public/asset/Joyride.webp';

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
          </div>
          <div className='flex flex-wrap -m-4'>
            <div className='p-4 md:w-1/3'>
              <a
                href='https://blog.openreplay.com/user-onboarding-tours-made-simple-with-react-joyride'
                className='block overflow-hidden rounded-2xl'
              >
                <Image
                  className='object-cover w-full h-56'
                  src={Joyride}
                  alt=''
                />

                <div className='p-4 bg-gray-900'>
                  <p className='text-xs text-gray-500'>blog.openreplay.com</p>

                  <h5 className='text-sm text-white'>
                    User Onboarding Tours made simple with React-Joyride
                  </h5>

                  <p className='mt-1 text-xs text-gray-500'>
                    A fast, easy way to produce onboarding tours for new users
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
