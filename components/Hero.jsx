import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import hero_blue from '../public/asset/hero_blue.png';

export default function Hero() {
  return (
    <>
      <Head></Head>
      <section className='text-gray-600 body-font border-b border-gray-400'>
        <div className='container mx-auto flex px-20 py-20 md:flex-row flex-col items-center'>
          <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center text-2xl'>
            <span className='text-xl  text-white '>Hello there👋,</span>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>
              I’m{' '}
              <span
                className='text-emerald-400 sm:text-5xl'
                style={{ fontFamily: 'Rubik Moonrocks' }}
              >
                {' '}
                Wisdom Ekpotu,
              </span>{' '}
              <br />
              Software Engineer
            </h1>

            <p className='mb-8 leading-relaxed text-white'>
              I specialize in building exceptional digital experiences.
              Currently, I’m focused on building accessible, human-centered
              products at Upstatement.
            </p>
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
          <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
            <Image
              className='object-cover object-center rounded'
              alt='hero'
              // position='absolute'
              src={hero_blue}
            />
          </div>
        </div>
      </section>
    </>
  );
}
