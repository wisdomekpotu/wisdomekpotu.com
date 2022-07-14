import Image from 'next/image';
import React from 'react';
import NextLogo from '../public/asset/Next.png';
import TypescriptLogo from '../public/asset/TypeScript.png';

export default function Tools() {
  return (
    <section className='text-gray-600 body-font border-b border-gray-400'>
      <div className='container mx-auto flex px-20 py-24 md:flex-row flex-col items-center '>
        <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
          <h1 className='title-font sm:text-5xl text-4xl mb-4 font-medium text-white'>
            Tools & Softwares
          </h1>
          <p className='mb-8 leading-relaxed text-white'>
            Over the years, I had the opportunity to work with various <br />
            software, tools and frameworks. Here are some of them:
          </p>

          <ul className='flex text-emerald-300'>
            <li>
              <Image src={NextLogo} alt='react_logo' />
            </li>
            <li>
              <Image src={TypescriptLogo} alt='typescipt logo' />
            </li>
            <li>Redux ToolKit</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>

            <li>Material UI</li>
            <li>Firebase</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
