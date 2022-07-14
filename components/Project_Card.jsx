import React from 'react';
import Image from 'next/image';
import DevHouseImg from '../public/asset/Dev-House.png';
import Link from 'next/link';
export default function Project_Card() {
  return (
    <>
      {' '}
      <section className='text-gray-600 body-font'>
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
          <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0'>
            <Image
              className='object-cover object-center rounded-3xl'
              alt='hero'
              src={DevHouseImg}
            />
          </div>
          <div className='lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center'>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-emerald-400'>
              Dev House
            </h1>
            <p className='mb-8 leading-relaxed'>
              I specialize in building exceptional digital experiences.
              Currently, I’m focused on building accessible, human-centered
              products at Upstatement.
            </p>
            <div className='flex w-full md:justify-start justify-center items-end'>
              <div className='relative mr-4 lg:w-full xl:w-1/2 w-2/4'>
                <div className='flex justify-center'>
                  <Link href='https://www.linkedin.com/in/wisdom-ekpotu/'>
                    <span className='text-emerald-400 cursor-pointer'>
                      LinkedIn ↗️
                    </span>
                  </Link>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Link href='https://twitter.com/Wisdom_Ekpotu'>
                    <span className='text-emerald-400 cursor-pointer'>
                      Twitter ↗️
                    </span>
                  </Link>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Link href='https://github.com/wisdomekpotu'>
                    <span className='text-emerald-400 cursor-pointer'>
                      Github ↗️
                    </span>
                  </Link>
                </div>
              </div>
              <button className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
                Button
              </button>
            </div>
            <p className='text-sm mt-2 text-gray-500 mb-8 w-full'>
              Neutra shabby chic ramps, viral fixie.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
