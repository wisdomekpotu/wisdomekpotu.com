import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Firebase from '../../public/asset/firebase.webp';
import Mobile from '../../public/asset/mobile.webp';
import MDX from '../../public/asset/MDX.webp';
import Joyride from '../../public/asset/Joyride.webp';
import Algolia from '../../public/asset/Algolia.webp';
import SuperTokens from '../../public/asset/SuperTokens.webp';
import Uselayout from "../../public/asset/Uselayout.webp"
import Palmapi from "../../public/asset/Palmapi.webp"
import Hack from '../../public/asset/Hack.png';
import Network from '../../public/asset/Network.png';
import Native from '../../public/asset/Native.avif'

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
                href='https://blog.logrocket.com/natively-implement-dynamic-imports-react-native/'
                className='block overflow-hidden rounded-2xl'
              >
                <Image
                  className='object-cover w-full h-56'
                  src={Native}
                  alt=''
                />

                <div className='p-4 bg-gray-900'>
                  <p className='text-xs text-gray-500'>https://blog.logrocket.com/</p>

                  <h5 className='text-sm text-white'>
                  Natively implement dynamic imports in React Native
                  </h5>

                  <p className='mt-1 text-xs text-gray-500'>
                  Compare static and dynamic imports in React Native, and explore native vs. third-party solutions for dynamic imports.
                  </p>
                </div>
              </a>
            </div>
            
            <div className='p-4 md:w-1/3'>
              <a
                href='https://www.netreo.com/blog/building-a-network-monitoring-dashboard-a-guide/'
                className='block overflow-hidden rounded-2xl'
              >
                <Image
                  className='object-cover w-full h-56'
                  src={Network}
                  alt=''
                />

                <div className='p-4 bg-gray-900'>
                  <p className='text-xs text-gray-500'>https://www.netreo.com/</p>

                  <h5 className='text-sm text-white'>
                  Building a Network Monitoring Dashboard: A Guide
                  </h5>

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
            <div className='p-4 md:w-1/3'>
              <a
                href='https://blog.openreplay.com/full-text-search-in-react-with-algolia-and-firestore'
                className='block overflow-hidden rounded-2xl'
              >
                <Image
                  className='object-cover w-full h-56'
                  src={Algolia}
                  alt=''
                />

                <div className='p-4 bg-gray-900'>
                  <p className='text-xs text-gray-500'>blog.openreplay.com</p>

                  <h5 className='text-sm text-white'>
                    Full-text Search in React with Algolia and Firestore
                  </h5>

                  <p className='mt-1 text-xs text-gray-500'>
                    How to add full-text search capabilities to your React-based
                    website
                  </p>
                </div>
              </a>
            </div>
            <div className='p-4 md:w-1/3'>
              <a
                href='https://blog.logrocket.com/using-supertokens-authentication-next-js/'
                className='block overflow-hidden rounded-2xl'
              >
                <Image
                  className='object-cover w-full h-56'
                  src={SuperTokens}
                  alt=''
                />

                <div className='p-4 bg-gray-900'>
                  <p className='text-xs text-gray-500'>blog.logrocket.com</p>

                  <h5 className='text-sm text-white'>
                    Using SuperTokens for authentication in Next.js
                  </h5>
                </div>
              </a>
            </div>
          </div>

          <div className='flex flex-wrap -m-4'>
            <div className='p-4 md:w-1/3'>
              <a
                href='https://blog.openreplay.com/hacktoberfest-contributing-as-a-react-developer/'
                className='block overflow-hidden rounded-2xl'
              >
                <Image
                  className='object-cover w-full h-56'
                  src={Hack}
                  alt=''
                />

                <div className='p-4 bg-gray-900'>
                  <p className='text-xs text-gray-500'>blog.openreplay.com</p>

                  <h5 className='text-sm text-white'>
                  Hacktoberfest 2022: Contributing As A React Developer
                  </h5>

                
                </div>
              </a>
            </div>
            <div className='p-4 md:w-1/3'>
              <a
                href='https://refine.dev/blog/uselayouteffect-vs-useeffect/'
                className='block overflow-hidden rounded-2xl'
              >
                <Image
                  className='object-cover w-full h-56'
                  src={Uselayout}
                  alt=''
                />
                <div className='p-4 bg-gray-900'>
                  <p className='text-xs text-gray-500'>refine.dev/blog</p>
                  <h5 className='text-sm text-white'>
                  A Guide to Using the useLayoutEffect Hook in React
                  </h5>
                </div>
              </a>
            </div>
            <div className='p-4 md:w-1/3'>
              <a
                href='https://blog.logrocket.com/understanding-new-firebase-ai-extensions/'
                className='block overflow-hidden rounded-2xl'
              >
                <Image
                  className='object-cover w-full h-56'
                  src={Palmapi}
                  alt=''
                />
                <div className='p-4 bg-gray-900'>
                  <p className='text-xs text-gray-500'>blog.logrocket.com</p>
                  <h5 className='text-sm text-white'>
                  Understanding the new Firebase AI extensions
                  </h5>
                </div>
              </a>
            </div>
          </div>

          <div className='flex flex-wrap -m-4'>
         
          <div className='p-4 md:w-1/3'>
              <a
                href='https://blog.openreplay.com/building-a-mobile-app-using-html-css-and-js/'
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
        </div>
      </section>
    </div>
  );
}


 